import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Clock, MapPin, Terminal, Phone } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onDownloadResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onDownloadResume }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-dark-950 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 border border-white/15 flex items-center justify-center text-accent-cyan">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Bhavya Pant</span>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-md">
              Senior Software Engineer building high-throughput Kafka pipelines, Java microservices, AI integrations, and cloud infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan" /> India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-accent-indigo" /> {time || '14:52:00'} IST
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300 font-mono">
              <li><a href="#scroll-story" className="hover:text-accent-cyan transition-colors">Journey</a></li>
              <li><a href="#projects-section" className="hover:text-accent-cyan transition-colors">Case Studies</a></li>
              <li><a href="#experience-section" className="hover:text-accent-cyan transition-colors">Experience</a></li>
              <li><a href="#skills-section" className="hover:text-accent-cyan transition-colors">Tech Stack</a></li>
            </ul>
          </div>

          {/* Socials & Resume */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect</h4>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="https://github.com/BhavyaPant-bly"
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavya-pant09"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="tel:+916397793245"
                title="Call Bhavya Pant (+91 6397793245)"
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <button
                onClick={onOpenContact}
                title="Send Message"
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="pt-2">
              <button
                onClick={onDownloadResume}
                className="text-xs font-mono text-accent-cyan hover:underline inline-flex items-center gap-1"
              >
                Download Resume (PDF) →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Bhavya Pant. Designed & Engineered with precision.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
