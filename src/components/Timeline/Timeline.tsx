import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Server, Terminal, Network, Shield } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  techStack: string[];
  metricsBadge?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Electrowaves Electronics',
    role: 'Software Developer',
    period: '2023 — Present',
    location: 'India',
    type: 'Full-Time',
    metricsBadge: '1,400+ IoT Devices Telemetry Pipeline',
    highlights: [
      'Architected end-to-end Kafka telemetry streaming pipeline for 1,400+ connected IoT hardware devices processing 200K+ API requests/day.',
      'Developed modular Spring Boot microservices for real-time sensor data ingest, state synchronization, and anomaly detection.',
      'Containerized all backend workloads using Docker and orchestrated zero-downtime deployments via Kubernetes.',
      'Managed cloud infrastructure on AWS EC2, ensuring high availability, sub-50ms data ingestion, and 99.99% operational uptime.'
    ],
    techStack: ['Kafka', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS', 'Java', 'Redis'],
  },
  {
    company: 'CodeInsight Technologies',
    role: 'Software Developer',
    period: '2022 — 2023',
    location: 'India',
    type: 'Full-Time',
    highlights: [
      'Engineered RESTful web services in Spring Boot powering core business domain workflows and enterprise data stores.',
      'Designed responsive UI web interfaces using Angular integrated with secure backend APIs.',
      'Optimized SQL database schemas, index strategies, and complex relational queries for fast retrieval.',
      'Implemented automated end-to-end regression test suites utilizing Robot Framework to guarantee production build quality.'
    ],
    techStack: ['Spring Boot', 'Angular', 'SQL', 'Robot Framework', 'Java', 'REST APIs'],
  },
];

export const Timeline: React.FC = () => {
  return (
    <section id="experience-section" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-dark-900 relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent-indigo/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-accent-cyan">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-indigo">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl">
            Building production systems, Kafka pipelines, microservices, and cloud-native backends in enterprise settings.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-white/10 pl-4 sm:pl-10 space-y-8 sm:space-y-12 ml-2 sm:ml-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[23px] sm:-left-[47px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-dark-900 border-2 border-accent-cyan flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-cyan" />
              </div>

              {/* Experience Card */}
              <div className="p-4 sm:p-8 rounded-3xl glass-card hover:border-white/20 transition-all duration-300 space-y-4 sm:space-y-6">
                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-4 sm:pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {exp.company}
                      </h3>
                      {exp.metricsBadge && (
                        <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-[10px] sm:text-xs font-mono">
                          {exp.metricsBadge}
                        </span>
                      )}
                    </div>
                    <div className="text-base sm:text-lg font-medium text-slate-300 mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-accent-indigo" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 sm:space-y-3">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 sm:gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
