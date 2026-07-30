import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Cpu, Layers, Terminal, Sparkles, CheckCircle } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenges: string[];
  solutions: string[];
  diagramComponent: React.ReactNode;
  githubUrl?: string;
  liveUrl?: string;
}

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'highlights' | 'tech'>('architecture');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
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
          className="relative w-full max-w-5xl bg-dark-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10 bg-white/[0.02]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">CASE STUDY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border-b border-white/10 bg-dark-950/60">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                <div className="text-lg font-mono font-bold text-accent-cyan">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 bg-dark-900">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2.5 text-xs font-mono rounded-t-xl transition-colors border-b-2 ${
                activeTab === 'architecture'
                  ? 'border-accent-cyan text-accent-cyan bg-white/5 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              System Architecture & Flow
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`px-4 py-2.5 text-xs font-mono rounded-t-xl transition-colors border-b-2 ${
                activeTab === 'highlights'
                  ? 'border-accent-cyan text-accent-cyan bg-white/5 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Engineering Highlights
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2.5 text-xs font-mono rounded-t-xl transition-colors border-b-2 ${
                activeTab === 'tech'
                  ? 'border-accent-cyan text-accent-cyan bg-white/5 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Tech Stack Specifications
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <p className="text-slate-300 text-base leading-relaxed font-light">
                  {project.overview}
                </p>
                {/* Live Animated Diagram */}
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Interactive Architectural Flow
                  </h4>
                  {project.diagramComponent}
                </div>
              </div>
            )}

            {activeTab === 'highlights' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Core Technical Challenges
                  </h4>
                  <ul className="space-y-2.5">
                    {project.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Implemented Solutions
                  </h4>
                  <ul className="space-y-2.5">
                    {project.solutions.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technologies & Libraries Used
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 bg-dark-950 flex items-center justify-between">
            <div className="text-xs font-mono text-slate-400">
              Architected by Bhavya Pant
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
