import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Cpu, Bot, Cloud, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface StoryChapter {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  codeSnippet?: string;
  accentColor: string;
}

const chapters: StoryChapter[] = [
  {
    id: 'software-engineer',
    number: '01',
    category: 'Engineering Core',
    title: 'Software Engineer',
    description: 'Building production software with Java, Spring Boot and Python. Specialized in robust domain architectures, OOP principles, and resilient backend microservices.',
    icon: Code2,
    highlights: [
      'Java & Spring Boot Microservices',
      'Python & Django Enterprise Backend',
      'Clean Code & SOLID Architecture',
      'REST & gRPC API Design'
    ],
    codeSnippet: `@Service
public class TelemetryStreamProcessor {
  @KafkaListener(topics = "iot-sensor-telemetry")
  public void processDeviceSignal(DevicePayload payload) {
    // 1,400+ concurrent device stream handler
  }
}`,
    accentColor: 'from-amber-500/20 to-orange-500/5 text-amber-400 border-amber-500/30',
  },
  {
    id: 'distributed-systems',
    number: '02',
    category: 'Distributed Scale',
    title: 'Kafka & Distributed Systems',
    description: 'Engineered high-throughput real-time telemetry pipelines serving thousands of remote hardware endpoints with low latency.',
    icon: Cpu,
    highlights: [
      'Real-time telemetry streaming pipelines',
      'Kafka Connect & Broker cluster management',
      'High performance Redis caching layers',
      'Distributed event processing'
    ],
    metrics: [
      { label: 'Connected Devices', value: '1,400+' },
      { label: 'API Requests / Day', value: '200K+' },
      { label: 'Pipeline Uptime', value: '99.99%' },
    ],
    accentColor: 'from-cyan-500/20 to-blue-500/5 text-cyan-400 border-cyan-500/30',
  },
  {
    id: 'ai-engineering',
    number: '03',
    category: 'Intelligent Automation',
    title: 'AI Engineering',
    description: 'Bridging enterprise messaging platforms with state-of-the-art LLMs to automate complex customer workflows and natural language interactions.',
    icon: Bot,
    highlights: [
      'WhatsApp Business API Integration',
      'OpenAI GPT-4 Function Calling & Embeddings',
      'Automated Conversational Workflows',
      'AI-powered document & payload analysis'
    ],
    metrics: [
      { label: 'Response Latency', value: '< 800ms' },
      { label: 'Automated Resolution', value: '88%' },
    ],
    accentColor: 'from-purple-500/20 to-indigo-500/5 text-purple-400 border-purple-500/30',
  },
  {
    id: 'cloud-infrastructure',
    number: '04',
    category: 'DevOps & Orchestration',
    title: 'Cloud Infrastructure',
    description: 'Automating deployment pipelines, containerizing polyglot services, and managing Kubernetes clusters on Amazon Web Services.',
    icon: Cloud,
    highlights: [
      'Docker Containerization & Multi-stage builds',
      'AWS EC2, S3, RDS, & IAM Security',
      'Kubernetes Deployment & Auto-scaling',
      'Automated CI/CD GitHub Actions'
    ],
    metrics: [
      { label: 'Deployment Time', value: '< 3 mins' },
      { label: 'Zero-Downtime Releases', value: '100%' },
    ],
    accentColor: 'from-blue-500/20 to-sky-500/5 text-blue-400 border-blue-500/30',
  },
  {
    id: 'scale-mission',
    number: '05',
    category: 'Engineering Philosophy',
    title: 'I build software that scales.',
    description: 'Every system is architected for reliability, modular expansion, and effortless maintainability under high concurrent load.',
    icon: Zap,
    highlights: [
      'Resilient fault-tolerant architectures',
      'Performance benchmarking & profiling',
      'Distributed telemetry & observability',
      'Production-grade reliability'
    ],
    accentColor: 'from-emerald-500/20 to-teal-500/5 text-emerald-400 border-emerald-500/30',
  },
];

export const ScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section 
      ref={containerRef} 
      id="scroll-story" 
      className="relative py-24 px-6 sm:px-12 md:px-20 bg-dark-900 border-t border-white/5"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent-indigo/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent-cyan">
            <span>CAREER & ARCHITECTURAL JOURNEY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            How I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">Scalable Systems</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A scrollytelling walkthrough of core engineering domains, high-throughput pipelines, AI integrations, and cloud orchestration.
          </p>
        </div>

        {/* Chapters Stack */}
        <div className="space-y-16">
          {chapters.map((chapter, idx) => {
            const Icon = chapter.icon;
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative rounded-3xl p-8 sm:p-12 glass-card hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Accent Backdrop Gradient */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${chapter.accentColor} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Number, Title & Text */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-mono font-extrabold text-white/30">
                        {chapter.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        {chapter.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-white/5 border ${chapter.accentColor}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        {chapter.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                      {chapter.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {chapter.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Code Snippet or Metrics Visual */}
                  <div className="lg:col-span-5">
                    {chapter.metrics ? (
                      <div className="grid grid-cols-1 gap-4">
                        {chapter.metrics.map((m, mIdx) => (
                          <div 
                            key={mIdx} 
                            className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 backdrop-blur-md flex items-center justify-between group-hover:border-accent-cyan/30 transition-colors"
                          >
                            <span className="text-sm font-medium text-slate-400">{m.label}</span>
                            <span className="text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-white">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : chapter.codeSnippet ? (
                      <div className="p-5 rounded-2xl bg-dark-950/90 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto shadow-2xl">
                        <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-white/10 text-slate-500">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                          <span className="ml-2 text-[10px] text-slate-400">TelemetryProcessor.java</span>
                        </div>
                        <pre className="text-accent-cyan/90 leading-relaxed">
                          {chapter.codeSnippet}
                        </pre>
                      </div>
                    ) : (
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-blue/10 via-accent-cyan/5 to-transparent border border-white/10 text-center space-y-4">
                        <Zap className="w-12 h-12 text-accent-cyan mx-auto animate-bounce" />
                        <h4 className="text-xl font-bold text-white">Built for High Concurrency</h4>
                        <p className="text-xs text-slate-400 font-mono">
                          Zero bottlenecks. Distributed caching. Fault-tolerant failovers.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
