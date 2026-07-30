import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileText, Send, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onDownloadResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Journey', href: '#scroll-story' },
    { label: 'Projects', href: '#projects-section' },
    { label: 'Experience', href: '#experience-section' },
    { label: 'Tech Stack', href: '#skills-section' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-5 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Mark */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 border border-white/15 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform backdrop-blur-md">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-tight text-white group-hover:text-accent-cyan transition-colors">
              Bhavya Pant
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Software Engineer
            </span>
          </div>
        </motion.a>

        {/* Floating Glass Pill Navigation Bar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`hidden md:flex items-center gap-1 px-4 py-2 rounded-full pointer-events-auto transition-all duration-500 ${
            scrolled
              ? 'bg-dark-900/80 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/50'
              : 'bg-white/[0.03] border border-white/10 backdrop-blur-md'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.nav>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-3 pointer-events-auto"
        >
          <button
            onClick={onDownloadResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all hover:scale-105"
          >
            <FileText className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-950 font-bold text-xs font-mono transition-all hover:scale-105 shadow-md shadow-accent-cyan/20"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>
        </motion.div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden pointer-events-auto p-2.5 rounded-xl bg-dark-900/90 border border-white/15 text-slate-200"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden pointer-events-auto mt-4 p-6 rounded-3xl bg-dark-900/95 border border-white/15 backdrop-blur-2xl space-y-4"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-sm font-mono text-slate-300 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onDownloadResume(); }}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-accent-cyan" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-950 font-bold text-xs font-mono flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Connect With Me</span>
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
