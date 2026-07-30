import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Linkedin, Send, Copy, Check, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'pantbhavya2001@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
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
          className="relative w-full max-w-xl bg-dark-900 border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-cyan">
                <Sparkles className="w-3.5 h-3.5" /> GET IN TOUCH
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Let's Build Systems Together
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Copy Email Box */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400">Direct Email</div>
                <div className="text-sm font-mono font-medium text-white">{email}</div>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Transmitted</h3>
              <p className="text-xs font-mono text-slate-400">
                Thank you for reaching out. Bhavya will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Message / Inquiry</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project, role, or technical requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-indigo text-dark-950 font-bold text-sm font-mono flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform shadow-lg shadow-accent-cyan/20"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}

          {/* Social Links Bar */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Connect on Socials:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/pantbhavya"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/bhavyapant"
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
