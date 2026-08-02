import React, { useRef, useEffect, useState } from 'react';
import { useFrameSequence } from '../../hooks/useFrameSequence';

interface HeroCanvasProps {
  scrollProgress: number; // 0 to 1
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { images, isLoaded, progressPercentage, totalFrames } = useFrameSequence();

  // Mouse position for volumetric light tilt
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Mouse movement listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Frame Interpolation & Rendering Loop
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const targetFrame = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(scrollProgress * (totalFrames - 1)))
    );

    const renderLoop = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Smooth LERP interpolation towards targetFrame
      currentFrameRef.current += (targetFrame - currentFrameRef.current) * 0.2;
      const frameToDraw = Math.min(
        totalFrames - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      const img = images[frameToDraw];
      if (img) {
        const dpr = window.devicePixelRatio || 1;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
          canvas.width = width * dpr;
          canvas.height = height * dpr;
        }

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);

        // Aspect ratio cover fit
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = width / height;
        let renderW = width;
        let renderH = height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          renderH = width / imgRatio;
          offsetY = (height - renderH) / 2;
        } else {
          renderW = height * imgRatio;
          offsetX = (width - renderW) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
        ctx.restore();
      }

      // Continue loop if not yet reached target frame
      if (Math.abs(currentFrameRef.current - targetFrame) > 0.01) {
        animationFrameRef.current = requestAnimationFrame(renderLoop);
      }
    };

    renderLoop();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollProgress, isLoaded, images, totalFrames]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-dark-950 overflow-hidden">
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-dark-950/90 backdrop-blur-md">
          <div className="relative flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-accent-cyan/20 border-t-accent-cyan animate-spin" />
            <span className="absolute text-xs font-mono text-accent-cyan">{progressPercentage}%</span>
          </div>
          <p className="text-sm font-mono tracking-widest text-slate-400 uppercase">
            Initializing Cinematic Engine...
          </p>
          <div className="w-48 h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-indigo transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Canvas Element */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />

      {/* Volumetric Specular Lighting & Parallax Layers */}
      {/* 1. Volumetric Blue Glow (Left / Center) */}
      <div 
        className="absolute w-[300px] sm:w-[600px] lg:w-[900px] h-[200px] sm:h-[350px] lg:h-[500px] bg-accent-cyan/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none transition-transform duration-500 ease-out"
        style={{
          top: `${20 + mousePos.y * 10}%`,
          left: `${15 + mousePos.x * 10}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* 2. Soft Orange Rim Light (Right / Top Edge) */}
      <div 
        className="absolute w-[220px] sm:w-[400px] lg:w-[600px] h-[150px] sm:h-[280px] lg:h-[400px] bg-amber-500/15 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none transition-transform duration-500 ease-out"
        style={{
          top: `${10 - mousePos.y * 5}%`,
          right: `${5 - mousePos.x * 5}%`,
        }}
      />

      {/* 3. Subtle Film Grain & Grid Mesh Overlay */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />

      {/* 4. Cinematic Dark Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark-900 via-transparent to-dark-950/70" />
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-dark-950/30 to-dark-950/90" />

      {/* 5. Floating Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-accent-cyan/40 animate-float" />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-accent-indigo/30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 rounded-full bg-amber-400/40 animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};
