import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Radio, Server, Database, Cloud, Gauge } from 'lucide-react';

export const SolarDiagram: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-dark-950 p-4 sm:p-6 border border-white/10 overflow-hidden relative">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-cyan-400">
          <Activity className="w-3.5 h-3.5 animate-pulse shrink-0" />
          <span>PYRAMID SOLAR: 1,400+ IOT TELEMETRY PIPELINE</span>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          200K+ REQ/DAY STREAM
        </span>
      </div>

      {/* Pipeline Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
        {/* Step 1: Solar Inverter Nodes */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-cyan-500/20 space-y-3 relative group"
        >
          <div className="flex items-center justify-between">
            <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              1,400+ Devices
            </span>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Solar Smart Inverters</div>
            <div className="text-[11px] text-slate-400 font-mono mt-1">MQTT / TCP Telemetry</div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5">
            Voltage, Current, Temp
          </div>
        </motion.div>

        {/* Step 2: Spring Boot Microservices */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-amber-500/20 space-y-3 relative group"
        >
          <div className="flex items-center justify-between">
            <Server className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
              Ingestion Service
            </span>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Spring Boot Cluster</div>
            <div className="text-[11px] text-slate-400 font-mono mt-1">Payload Validation</div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5">
            Zero Data Loss Guarantee
          </div>
        </motion.div>

        {/* Step 3: Kafka & Redis Cache */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-purple-500/20 space-y-3 relative group"
        >
          <div className="flex items-center justify-between">
            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
              Kafka + Redis
            </span>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Event Bus & Caching</div>
            <div className="text-[11px] text-slate-400 font-mono mt-1">High Speed In-Memory</div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5">
            Sub-millisecond Reads
          </div>
        </motion.div>

        {/* Step 4: AWS Dashboard & Analytics */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-blue-500/20 space-y-3 relative group"
        >
          <div className="flex items-center justify-between">
            <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
              AWS EC2 Cloud
            </span>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Monitoring Platform</div>
            <div className="text-[11px] text-slate-400 font-mono mt-1">Real-time Analytics</div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5">
            Auto-alerting Engine
          </div>
        </motion.div>
      </div>

      {/* Dynamic Pulse Bar */}
      <div className="mt-4 sm:mt-6 p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="text-slate-300 text-[11px] sm:text-xs">Active Packet Rate:</span>
          <span className="text-emerald-400 font-bold text-[11px] sm:text-xs">2,310 msgs / sec</span>
        </div>
        <div className="text-slate-400 text-[10px] sm:text-[11px]">99.99% Availability</div>
      </div>
    </div>
  );
};
