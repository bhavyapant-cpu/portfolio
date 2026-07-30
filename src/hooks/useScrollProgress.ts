import { useState, useEffect, RefObject } from 'react';

export function useScrollProgress(ref?: RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref?.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;
            const scrollDistance = elementHeight - windowHeight;
            
            if (scrollDistance <= 0) {
              setProgress(0);
            } else {
              const currentScroll = -rect.top;
              const normalized = Math.max(0, Math.min(1, currentScroll / scrollDistance));
              setProgress(normalized);
            }
          } else {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const normalized = totalScroll > 0 ? Math.max(0, Math.min(1, currentScroll / totalScroll)) : 0;
            setProgress(normalized);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return progress;
}
