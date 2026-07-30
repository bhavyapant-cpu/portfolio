import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Server, Cpu, Database, Cloud, Zap } from 'lucide-react';

export const AmcomDiagram: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-dark-950 p-6 border border-white/10 overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan">
          <Zap className="w-3.5 h-3.5" />
          <span>AMCOM: MULTI-AGENT AI ARCHITECTURE</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          LIVE DATA PIPELINE
        </span>
      </div>

      {/* SVG Container with Nodes & Flow Lines */}
      <div className="relative min-h-[300px] flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="amcom-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Animated Connecting Lines */}
          <path d="M 80 150 L 220 150" stroke="url(#amcom-line-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
          <path d="M 320 150 L 460 150" stroke="url(#amcom-line-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
          <path d="M 560 150 L 700 150" stroke="url(#amcom-line-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
        </svg>

        {/* Node Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full relative z-10">
          {/* Node 1: WhatsApp Client */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 text-center space-y-2 backdrop-blur-md shadow-lg"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-white">WhatsApp Business</div>
            <div className="text-[10px] font-mono text-slate-400">User Inbound Webhook</div>
          </motion.div>

          {/* Node 2: Django & Spring Gateway */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-xl bg-white/5 border border-cyan-500/30 text-center space-y-2 backdrop-blur-md shadow-lg"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Server className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-white">Django REST API</div>
            <div className="text-[10px] font-mono text-slate-400">Auth & Event Dispatch</div>
          </motion.div>

          {/* Node 3: Kafka Message Broker */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-xl bg-white/5 border border-purple-500/30 text-center space-y-2 backdrop-blur-md shadow-lg"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-white">Apache Kafka</div>
            <div className="text-[10px] font-mono text-slate-400">Stream Processing</div>
          </motion.div>

          {/* Node 4: OpenAI Engine */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-xl bg-white/5 border border-amber-500/30 text-center space-y-2 backdrop-blur-md shadow-lg"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-white">OpenAI GPT-4</div>
            <div className="text-[10px] font-mono text-slate-400">Conversational AI</div>
          </motion.div>
        </div>
      </div>

      {/* Legend & Stats */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
        <div>Protocol: HTTPS / WebSockets / Kafka Consumer</div>
        <div className="text-accent-cyan">Avg End-to-End Latency: &lt; 800ms</div>
      </div>
    </div>
  );
};
