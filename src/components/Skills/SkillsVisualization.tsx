import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Layout, Cloud, ShieldCheck, MessageSquare, Cpu, Sparkles } from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'Backend' | 'Frontend' | 'Cloud' | 'DevOps' | 'Messaging' | 'AI';
  experience: string;
  application: string;
  highlightBadge?: string;
}

const skillsData: SkillItem[] = [
  // Backend
  { name: 'Java', category: 'Backend', experience: 'Production Lead', application: 'Spring Boot Microservices & Enterprise OOP', highlightBadge: 'Core Expertise' },
  { name: 'Spring Boot', category: 'Backend', experience: 'Production Lead', application: 'REST APIs, Data Connectors, Security & Telemetry Ingest', highlightBadge: 'Production Core' },
  { name: 'Python', category: 'Backend', experience: 'Advanced', application: 'Django APIs, AI Automation & Scripting' },
  { name: 'Django', category: 'Backend', experience: 'Advanced', application: 'REST Framework, ORM & Backend Services' },
  { name: 'SQL & Relational DBs', category: 'Backend', experience: 'Advanced', application: 'PostgreSQL, MySQL, Query Optimization & Indexing' },
  { name: 'Redis', category: 'Backend', experience: 'Advanced', application: 'In-Memory Cache, Session Storage & Rate Limiting' },

  // Messaging & Telemetry
  { name: 'Apache Kafka', category: 'Messaging', experience: 'Production Lead', application: '1,400+ IoT Telemetry Pipeline & Event Streaming', highlightBadge: '1,400+ IoT Devices' },
  { name: 'Kafka Connect', category: 'Messaging', experience: 'Advanced', application: 'Source/Sink Connectors & Stream Processing' },
  { name: 'Real-time Telemetry', category: 'Messaging', experience: 'Production Lead', application: '200K+ Daily Request Stream & State Management', highlightBadge: '200K+ Req/Day' },

  // AI & Automation
  { name: 'OpenAI API', category: 'AI', experience: 'Advanced', application: 'Function Calling, GPT-4 Integrations & Embeddings', highlightBadge: 'WhatsApp Multi-Agent' },
  { name: 'WhatsApp Business API', category: 'AI', experience: 'Advanced', application: 'Automated Conversational Workflows' },
  { name: 'AI Workflows', category: 'AI', experience: 'Advanced', application: 'NLP Ingestion & Context Memory Retention' },

  // Cloud & DevOps
  { name: 'AWS (EC2, S3, RDS)', category: 'Cloud', experience: 'Advanced', application: 'Scalable Cloud Hosting & Infrastructure' },
  { name: 'Docker', category: 'DevOps', experience: 'Advanced', application: 'Multi-stage Containerization & Microservice Packaging' },
  { name: 'Kubernetes', category: 'DevOps', experience: 'Advanced', application: 'Cluster Deployment, Services & Auto-scaling' },
  { name: 'Linux Administration', category: 'DevOps', experience: 'Advanced', application: 'Bash Shell Scripting & Server Tuning' },
  { name: 'CI/CD Pipelines', category: 'DevOps', experience: 'Advanced', application: 'GitHub Actions Automated Testing & Build Deployment' },

  // Frontend
  { name: 'React', category: 'Frontend', experience: 'Advanced', application: 'Component Architecture & State Management' },
  { name: 'TypeScript', category: 'Frontend', experience: 'Advanced', application: 'Type-Safe System Integration' },
  { name: 'Angular', category: 'Frontend', experience: 'Production', application: 'Enterprise SPA Dashboards' },
  { name: 'Tailwind CSS', category: 'Frontend', experience: 'Advanced', application: 'Glassmorphic Modern UI Systems' },
];

const categories = ['All', 'Backend', 'Messaging', 'AI', 'Cloud', 'DevOps', 'Frontend'] as const;

export const SkillsVisualization: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills-section" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-dark-950 relative border-t border-white/5 overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 right-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-accent-cyan/5 rounded-full blur-[100px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-accent-cyan">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-indigo">Tech Stack</span>
            </h2>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-sm">
            Categorized overview of backend frameworks, message brokers, AI engines, and cloud tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-nowrap sm:flex-wrap gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 w-full sm:w-fit overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-mono transition-all duration-300 shrink-0 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-950 font-bold shadow-lg shadow-accent-cyan/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group p-4 sm:p-6 rounded-2xl glass-card hover:border-accent-cyan/30 transition-all duration-300 space-y-3 sm:space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                      {skill.category}
                    </span>
                    {skill.highlightBadge && (
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-[10px] font-mono shrink-0">
                        {skill.highlightBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed font-light">
                    {skill.application}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                  <span>Proficiency:</span>
                  <span className="text-accent-cyan font-semibold">{skill.experience}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
