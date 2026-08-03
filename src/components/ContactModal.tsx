import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Github, Linkedin, Send, Copy, Check, Sparkles, Loader2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'pantbhavya805@gmail.com';
  const phone = '+91 6397793245';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const result = await response.json();
        if (response.ok && result.success !== false) {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
            onClose();
          }, 2500);
        } else {
          setErrorMessage(result.error || result.message || 'Failed to transmit message. Please try again.');
        }
      } else {
        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
            onClose();
          }, 2500);
        } else {
          setErrorMessage('Failed to send message. Please verify configuration.');
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Network error occurred while sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-dark-900 border border-white/15 rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6 mb-4 sm:mb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono text-accent-cyan">
                <Sparkles className="w-3.5 h-3.5" /> GET IN TOUCH
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Let's Build Systems Together
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Quick Contact & Call Options */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-4 sm:mb-6">
            {/* Quick Copy Email Box */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between gap-2.5">
              <div className="flex items-center gap-2.5 overflow-hidden min-w-0">
                <div className="p-2 rounded-xl bg-accent-cyan/10 text-accent-cyan shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-slate-400">Direct Email</div>
                  <div className="text-xs font-mono font-medium text-white truncate break-all">{email}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="w-full py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
              >
                {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{emailCopied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Quick Call Box */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between gap-2.5">
              <div className="flex items-center gap-2.5 overflow-hidden min-w-0">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-slate-400">Direct Phone / Call</div>
                  <div className="text-xs font-mono font-medium text-white truncate">{phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href={`tel:${phone}`}
                  className="flex-1 py-1.5 px-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-center gap-1 transition-colors text-center"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call</span>
                </a>
                <button
                  type="button"
                  onClick={copyPhone}
                  className="py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-mono flex items-center justify-center gap-1 transition-colors"
                >
                  {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="py-8 sm:py-12 text-center space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <Check className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Message Transmitted</h3>
              <p className="text-xs font-mono text-slate-400">
                Thank you for reaching out. Bhavya will respond shortly at your provided email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2 font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1">Message / Inquiry</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your project, role, or technical requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-indigo text-dark-950 font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform shadow-lg shadow-accent-cyan/20 disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Links Bar */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10 flex flex-col xs:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span>Connect on Socials:</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/BhavyaPant-bly"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavya-pant09"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
