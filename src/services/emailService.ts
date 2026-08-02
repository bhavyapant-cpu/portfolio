export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

// Replace this token with your actual Web3Forms / Email service access token when ready
export const DUMMY_EMAIL_TOKEN = 'DUMMY_EMAIL_TOKEN_REPLACE_ME';

/**
 * Dispatches contact form messages to pantbhavya805@gmail.com.
 * Uses Web3Forms API by default when a real token is provided.
 */
export const sendContactEmail = async (
  payload: ContactMessagePayload
): Promise<{ success: boolean; message: string }> => {
  const token = import.meta.env.VITE_EMAIL_TOKEN || DUMMY_EMAIL_TOKEN;

  // Gracefully simulate sending when dummy token is present
  if (token === DUMMY_EMAIL_TOKEN) {
    console.info('[EmailService] Dispatching message (using dummy token):', {
      token,
      targetRecipient: 'pantbhavya805@gmail.com',
      payload,
    });
    // Simulate short network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Message transmitted successfully (Dummy token mode).',
    };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: token,
        subject: `New Portfolio Inquiry from ${payload.name}`,
        from_name: payload.name,
        replyto: payload.email,
        message: payload.message,
        to_email: 'pantbhavya805@gmail.com',
      }),
    });

    const data = await response.json();
    if (data.success) {
      return { success: true, message: 'Message delivered to Bhavya Pant.' };
    }
    return { success: false, message: data.message || 'Transmission failed.' };
  } catch (error) {
    console.error('[EmailService] Dispatch error:', error);
    return { success: false, message: 'Network error sending message.' };
  }
};
