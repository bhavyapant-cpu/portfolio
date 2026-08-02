import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Server, Cpu, Database, Cloud } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeText = `BHAVYA PANT
Java | Distributed Systems | Kafka | Kubernetes | Docker | Linux | AWS
Phone: +91 6397793245 | Email: pantbhavya805@gmail.com
LinkedIn: https://www.linkedin.com/in/bhavya-pant09 | GitHub: https://github.com/BhavyaPant-bly

SUMMARY
Software Engineer with 2+ years building backend systems for distributed IoT infrastructure. Built and maintained production microservices processing 200K+ API requests/day across 1400+ IoT devices (solar inverters and EV chargers), including telemetry ingestion pipelines and live-site issue resolution. Experienced with AWS cloud infrastructure (EC2, S3, Lambda) and containerized deployment (Docker, GitHub Actions CI/CD), with hands-on use of AI-assisted development tools (GitHub Copilot).

TECHNICAL SKILLS
• Cloud & DevOps: AWS (EC2, S3, Lambda), Docker, Kubernetes, Linux, GitHub Actions, CI/CD, Nginx
• AI-Assisted Engineering: GitHub Copilot for backend and API development
• Languages: Java (8, 21), C++ (C++11), Python (3.9), JavaScript, SQL (MySQL 8)
• Core CS: Data Structures & Algorithms, Operating Systems, Computer Networks, OOP, Multithreading, Distributed Systems, System Design
• Backend: Spring Boot, Spring Security, Hibernate, JPA, REST APIs, Microservices, Maven
• Database & Messaging: MySQL, MongoDB, Redis, Kafka
• Testing: JUnit, Selenium, Robot Framework, Cucumber
• Developer Tools: Git, GitHub, Swagger/OpenAPI, Postman
• Frontend: React, Angular, TypeScript, HTML5/CSS3

EXPERIENCE
1. Electrowaves Electronics — Software Developer (Jan 2025 – Present | Panchkula, Haryana)
   • Built production microservices using Java, Spring Boot, Hibernate, and MySQL, delivering secure REST APIs with Spring Security, JWT, and OAuth 2.0.
   • Built telemetry ingestion pipelines using Kafka and Redis, streaming data from 1400+ IoT devices (900+ solar inverters, 500+ EV chargers) at 200K+ API requests/day with sub-second latency, optimizing storage and query performance for real-time analytics.
   • Resolved production issues spanning API failures, telemetry sync, timezone inconsistencies, and JVM/GC tuning to improve platform uptime.
   • Used GitHub Copilot to accelerate backend development, reducing implementation time on repetitive CRUD/API work by roughly 30%.
   • Containerized services using Docker and Kubernetes, configured Nginx, and automated CI/CD via GitHub Actions on Linux.

2. CodeInsight Technologies — Software Engineering Intern → Software Developer (Jan 2024 – Jan 2025 | Mohali, Punjab)
   • Promoted from Software Engineering Intern to Software Developer within 6 months based on technical performance and delivery impact.
   • Developed backend services using Java, Spring Boot, Hibernate, and SQL alongside responsive Angular applications, delivering 40+ production features while optimizing SQL queries and schemas.
   • Built automated regression suites using Robot Framework, contributing to CI/CD and Agile workflows.

PROJECTS
• Pyramid Solar & EV Charge Platform | Java, Spring Boot, Kafka, Redis, MySQL, Docker, Kubernetes, AWS
  – Built telemetry pipelines using Kafka and Redis for real-time processing across 1400+ IoT devices, deployed on AWS EC2.
  – Improved fault tolerance and data consistency to meet IoT uptime requirements, resolving issues in production.
• Railway Safety Navigation System (FOGPASS) | Java, Spring Boot, React Native, MySQL, AWS (S3)
  – Built a cross-platform railway navigation system using graph algorithms and Hidden Markov Model (HMM) map matching for positioning accuracy under unreliable GPS.
• Amcom | Java, Spring Boot, Kafka, Django, OpenAI API, AWS
  – Built a WhatsApp Business message processing pipeline using Kafka for event streaming between a Java backend and a Django consumer service, with OpenAI's API handling intent classification and reply generation.

EDUCATION
Masters in Computer Application (CGPA - 8.0) | July 2021 - May 2024
DCSA, Panjab University — Chandigarh, India
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Bhavya_Pant_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-dark-900 border border-white/15 rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6 mb-4 sm:mb-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Bhavya Pant</h2>
                <p className="text-[11px] sm:text-xs font-mono text-slate-400">Software Engineer — Resume Overview</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Quick Metrics & Achievements */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-slate-400">IoT Infrastructure</div>
              <div className="text-base sm:text-lg font-bold font-mono text-accent-cyan">1,400+ Devices</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-slate-400">Throughput</div>
              <div className="text-base sm:text-lg font-bold font-mono text-accent-indigo">200K+ Req/Day</div>
            </div>
          </div>

          {/* Summary Checklist */}
          <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">
            <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">Key Engineering Stack</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>Java & Spring Boot Microservices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>Kafka Event Telemetry Streams</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>OpenAI & WhatsApp Multi-Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>Docker & Kubernetes AWS Deployment</span>
              </div>
            </div>
          </div>

          {/* Download Action Button */}
          <button
            onClick={handleDownload}
            className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-indigo text-dark-950 font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2.5 hover:scale-[1.01] transition-transform shadow-lg shadow-accent-cyan/20"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Download Engineering Resume</span>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
