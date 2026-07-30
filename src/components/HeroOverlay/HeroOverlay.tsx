import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, FileText, Send, Server, Network, Cpu, Cloud, Database } from 'lucide-react';

interface HeroOverlayProps {
  scrollProgress: number; // 0 to 1
  onOpenContact: () => void;
  onDownloadResume: () => void;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({
  scrollProgress,
  onOpenContact,
  onDownloadResume,
}) => {
  // Determine current subtitle stage based on scrollProgress
  // Stage 0: 0% - 20% (Initial Page Load View)
  // Stage 1: 20% - 40% (Scalable Backend Systems & Java / Kafka)
  // Stage 2: 40% - 60% (Production Scale Metrics: 1400+ IoT / 200K+ Req)
  // Stage 3: 60% - 80% (AI & Cloud Infrastructure)
  // Stage 4: 80% - 100% (Climax & Final Action CTA)

  const getStage = (p: number) => {
    if (p < 0.20) return 0;
    if (p < 0.40) return 1;
    if (p < 0.60) return 2;
    if (p < 0.80) return 3;
    return 4;
  };

  const stage = getStage(scrollProgress);

  // Counter calculation for Stage 2 (40-60%)
  const stage2Progress = Math.max(0, Math.min(1, (scrollProgress - 0.40) / 0.20));
  const deviceCounter = Math.floor(stage2Progress * 1400);
  const reqCounter = Math.floor(stage2Progress * 200);

  const scrollToProjects = () => {
    const el = document.getElementById('scroll-story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Apple-style subtitle transition variants
  const subtitleVariants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(8px)',
      transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] },
    },
  };

  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-between px-6 sm:px-12 md:px-20 pt-28 pb-12 pointer-events-none">
      {/* Top Bar Status */}
      <div className="flex items-center justify-between w-full pointer-events-auto">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/80 border border-white/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
          </span>
          <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
            Available for Senior Backend & Engineering Roles
          </span>
        </div>
      </div>

      {/* Main Hero Content Area - Left Aligned to balance with 55-60% portrait */}
      <div className="max-w-2xl w-full my-auto pointer-events-auto space-y-6">
        {/* PERMANENT ANCHORED TITLE: ALWAYS VISIBLE */}
        <div className="space-y-1">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.05]">
            Hi,<br />
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-accent-cyan">Bhavya Pant.</span>
          </h1>
        </div>

        {/* DYNAMIC EVOLVING SUBTITLE */}
        <div className="min-h-[220px] flex flex-col justify-start">
          <AnimatePresence mode="wait">
            {/* Stage 0: Initial Load (0% - 20%) */}
            {stage === 0 && (
              <motion.div
                key="subtitle-0"
                variants={subtitleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                <div className="space-y-2">
                  <p className="text-xl sm:text-2xl text-accent-cyan font-mono font-semibold">
                    Software Engineer
                  </p>
                  <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
                    Building scalable backend systems, AI-powered products & distributed infrastructure.
                  </p>
                </div>

                {/* 3 CTA Buttons visible immediately on load */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={scrollToProjects}
                    className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-indigo text-slate-950 font-bold text-xs font-mono shadow-lg shadow-accent-cyan/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>View Projects</span>
                    <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                  </button>

                  <button
                    onClick={onDownloadResume}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 text-xs font-mono backdrop-blur-md transition-all hover:scale-[1.02]"
                  >
                    <FileText className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Download Resume</span>
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 text-xs font-mono backdrop-blur-md transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-3.5 h-3.5 text-accent-indigo" />
                    <span>Let's Connect</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Stage 1: Scalable Backend Systems (20% - 40%) */}
            {stage === 1 && (
              <motion.div
                key="subtitle-1"
                variants={subtitleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                <p className="text-xl sm:text-3xl text-slate-200 font-bold tracking-tight">
                  Building scalable backend systems.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {['Java', 'Spring Boot', 'Kafka'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-accent-cyan font-mono text-sm font-semibold backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Stage 2: Production Scale Metrics (40% - 60%) */}
            {stage === 2 && (
              <motion.div
                key="subtitle-2"
                variants={subtitleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                <p className="text-xl sm:text-2xl text-slate-300 font-medium">
                  Production Systems
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                  <div className="p-4 rounded-xl bg-dark-900/90 border border-white/10 space-y-1">
                    <div className="text-3xl font-mono font-bold text-accent-cyan">
                      {deviceCounter.toLocaleString()}+
                    </div>
                    <div className="text-xs font-mono text-slate-400">Connected IoT Devices</div>
                  </div>
                  <div className="p-4 rounded-xl bg-dark-900/90 border border-white/10 space-y-1">
                    <div className="text-3xl font-mono font-bold text-accent-indigo">
                      {reqCounter}K+
                    </div>
                    <div className="text-xs font-mono text-slate-400">API Requests / Day</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Stage 3: AI & Distributed Systems (60% - 80%) */}
            {stage === 3 && (
              <motion.div
                key="subtitle-3"
                variants={subtitleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                <p className="text-xl sm:text-3xl text-slate-200 font-bold tracking-tight">
                  Building AI & Distributed Systems.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {['Kafka', 'Docker', 'AWS', 'Kubernetes'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-purple-300 font-mono text-sm font-semibold backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Stage 4: Final Climax (80% - 100%) */}
            {stage === 4 && (
              <motion.div
                key="subtitle-4"
                variants={subtitleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                <p className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-indigo tracking-tight">
                  Let's build something extraordinary.
                </p>

                {/* 3 CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={scrollToProjects}
                    className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-indigo text-slate-950 font-bold text-xs font-mono shadow-lg shadow-accent-cyan/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>View Projects</span>
                    <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                  </button>

                  <button
                    onClick={onDownloadResume}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 text-xs font-mono backdrop-blur-md transition-all hover:scale-[1.02]"
                  >
                    <FileText className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Download Resume</span>
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 text-xs font-mono backdrop-blur-md transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-3.5 h-3.5 text-accent-indigo" />
                    <span>Let's Connect</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Scroll Prompt Bar */}
      <div className="flex items-center justify-between w-full text-xs font-mono text-slate-500 pt-6 border-t border-white/5 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
          <span>SCROLL TO EXPLORE ARCHITECTURE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>Java</span>
          <span>•</span>
          <span>Spring Boot</span>
          <span>•</span>
          <span>Kafka</span>
          <span>•</span>
          <span>AWS</span>
        </div>
      </div>
    </div>
  );
};
