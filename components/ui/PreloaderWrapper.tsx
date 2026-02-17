'use client';

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    // Check if user has already seen the preloader in this session
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');

    if (hasSeenPreloader) {
      setShowPreloader(false);
    } else {
      // Hide preloader after animation completes
      const timer = setTimeout(() => {
        setShowPreloader(false);
        sessionStorage.setItem('hasSeenPreloader', 'true');
      }, 18500); // Stage 4 at 17.5s + 1s exit animation = 18.5s

      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent hydration mismatch by not rendering anything until client-side
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <>
      {showPreloader && <Preloader />}
      {children}
    </>
  );
}
