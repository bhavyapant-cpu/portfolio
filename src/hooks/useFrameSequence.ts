import { useState, useEffect, useRef } from 'react';

const TOTAL_FRAMES = 75;
const SEQUENCE_PATH = '/sequence/ezgif-frame-';

export function useFrameSequence() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `${SEQUENCE_PATH}${frameNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const progressPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return {
    images: imagesRef.current.length > 0 ? imagesRef.current : images,
    loadedCount,
    totalFrames: TOTAL_FRAMES,
    isLoaded,
    progressPercentage,
  };
}
