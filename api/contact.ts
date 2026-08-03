import type { IncomingMessage, ServerResponse } from 'http';
import nodemailer from 'nodemailer';

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

export default async function handler(
  req: IncomingMessage & { body?: ContactRequestBody; method?: string },
  res: ServerResponse & { statusCode: number; setHeader: (name: string, value: string) => void; end: (chunk?: any) => void }
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  // Parse request body
  let body: ContactRequestBody = {};
  if (req.body) {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } else {
    const buffers: Buffer[] = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();
    if (data) {
      try {
        body = JSON.parse(data);
      } catch {
        body = {};
      }
    }
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Missing required fields: name, email, message' }));
    return;
  }

  // Gmail App Passkey from environment variable or fallback
  const passkey = process.env.VITE_EMAIL_TOKEN || process.env.GMAIL_PASSKEY || process.env.EMAIL_TOKEN || 'YOUR_GMAIL_APP_PASSKEY';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pantbhavya805@gmail.com',
      pass: passkey,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <pantbhavya805@gmail.com>`,
      to: 'pantbhavya805@gmail.com',
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      text: `Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e4e4e7; border-radius: 12px;">
          <h2 style="color: #0284c7; margin-top: 0;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</div>
        </div>
      `,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, message: 'Email sent successfully via Gmail SMTP' }));
  } catch (error: any) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: false, error: error.message || 'Failed to send email via Gmail SMTP' }));
  }
}
