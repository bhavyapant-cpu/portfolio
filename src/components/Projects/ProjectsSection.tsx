import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, ExternalLink, Cpu, Database, Activity, Bot } from 'lucide-react';
import { CaseStudyModal, ProjectData } from './CaseStudyModal';
import { AmcomDiagram } from './Diagrams/AmcomDiagram';
import { SolarDiagram } from './Diagrams/SolarDiagram';

const projectsData: ProjectData[] = [
  {
    id: 'amcom',
    title: 'Amcom AI Enterprise Platform',
    subtitle: 'Conversational WhatsApp Automation & Multi-Agent AI Engine',
    category: 'AI & Distributed Backend',
    tech: ['Java', 'Kafka', 'Django', 'OpenAI API', 'AWS EC2', 'React', 'Docker'],
    metrics: [
      { label: 'Event Processing Latency', value: '< 800ms' },
      { label: 'AI Resolution Rate', value: '88%' },
      { label: 'Message Concurrency', value: '5,000 req/min' },
      { label: 'Cloud Infrastructure', value: 'AWS EC2 + Docker' },
    ],
    overview: 'Amcom is an enterprise-grade AI messaging platform integrating WhatsApp Business with OpenAI function calling and Apache Kafka event streams. It automatically parses user requests, routes payload tasks to asynchronous worker clusters, and generates context-aware natural language responses.',
    challenges: [
      'Managing high-volume async inbound webhooks without blocking web servers.',
      'Ensuring atomic context isolation for concurrent conversational user sessions.',
      'Rate-limiting external OpenAI API calls while preserving responsiveness.'
    ],
    solutions: [
      'Architected an Apache Kafka event bus separating webhook ingestion from AI worker tasks.',
      'Utilized Redis state store for sub-millisecond conversation memory retrieval.',
      'Deployed resilient Spring Boot / Django worker microservices on AWS.'
    ],
    diagramComponent: <AmcomDiagram />,
  },
  {
    id: 'pyramid-solar',
    title: 'Pyramid Solar IoT Platform',
    subtitle: 'High-Throughput Real-Time Solar Telemetry Pipeline',
    category: 'Distributed IoT & Telemetry',
    tech: ['Spring Boot', 'Kafka', 'Redis', 'AWS', 'Telemetry', 'IoT Protocols'],
    metrics: [
      { label: 'Connected Devices', value: '1,400+ IoT Inverters' },
      { label: 'Daily API Requests', value: '200,000+' },
      { label: 'Pipeline Uptime', value: '99.99%' },
      { label: 'Data Ingestion Speed', value: 'Sub-50ms' },
    ],
    overview: 'Pyramid Solar Platform is a scalable IoT telemetry engine monitoring 1,400+ distributed solar hardware installations across India. Collecting over 200,000 API telemetry signals per day, it processes voltage, energy output, and thermal diagnostics in real time.',
    challenges: [
      'Intermittent connectivity across remote solar array hardware endpoints.',
      'High disk I/O load during peak solar generation hours.',
      'Real-time anomaly detection and alert triggering.'
    ],
    solutions: [
      'Implemented Kafka partitioning strategy grouped by region and device clusters.',
      'Built multi-layer Redis caching tier to buffer incoming sensor bursts.',
      'Configured automated Spring Boot fault recovery and zero-loss message offset tracking.'
    ],
    diagramComponent: <SolarDiagram />,
  },
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects-section" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-dark-950 relative border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] bg-accent-blue/5 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-accent-cyan">
              <Layers className="w-3.5 h-3.5" />
              <span>FEATURED SYSTEM ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-indigo">Case Studies</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-sm">
            Detailed breakdown of production backend pipelines, AI integrations, and high-throughput telemetry systems.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl p-5 sm:p-8 lg:p-10 glass-card glass-panel-hover cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Specular Highlight */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-cyan/10 rounded-full blur-2xl group-hover:bg-accent-cyan/25 transition-all" />

              <div className="space-y-4 sm:space-y-6">
                {/* Category & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-accent-cyan">
                    {project.category}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1">
                    Explore Case Study <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 pt-1 sm:pt-2">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="p-3 sm:p-3.5 rounded-xl bg-dark-900/80 border border-white/10 space-y-1">
                      <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold font-mono text-white">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Trigger Bar */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white">
                <span className="text-[11px] sm:text-xs">Click to view interactive diagram</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-cyan group-hover:text-dark-950 transition-colors shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
