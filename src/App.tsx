import { useState, useRef } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { HeroCanvas } from './components/HeroCanvas/HeroCanvas';
import { HeroOverlay } from './components/HeroOverlay/HeroOverlay';
import { ScrollStory } from './components/ScrollStory/ScrollStory';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { Timeline } from './components/Timeline/Timeline';
import { SkillsVisualization } from './components/Skills/SkillsVisualization';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroScrollProgress = useScrollProgress(heroSectionRef);
  
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleDownloadResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <div className="relative bg-dark-900 text-slate-100 min-h-screen">
      {/* Floating Navigation */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Hero Section Container with Scroll Scrub Canvas (550vh for smooth Apple-style storytelling) */}
      <div ref={heroSectionRef} className="relative h-[550vh] bg-dark-950">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Canvas Frame Renderer */}
          <HeroCanvas scrollProgress={heroScrollProgress} />

          {/* Canvas Overlays & Choreographed Typography */}
          <HeroOverlay
            scrollProgress={heroScrollProgress}
            onOpenContact={() => setIsContactOpen(true)}
            onDownloadResume={handleDownloadResume}
          />
        </div>
      </div>

      {/* Main Narrative Sections */}
      <main className="relative z-20">
        {/* Scrollytelling Journey */}
        <ScrollStory />

        {/* Case Studies & Architectural Diagrams */}
        <ProjectsSection />

        {/* Experience Timeline */}
        <Timeline />

        {/* Categorized Tech Stack */}
        <SkillsVisualization />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
