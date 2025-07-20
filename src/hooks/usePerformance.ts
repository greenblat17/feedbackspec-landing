"use client";

import { useEffect, useState } from 'react';

export function usePerformance() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Simple performance detection
    const startTime = performance.now();
    
    // Run a small performance test
    setTimeout(() => {
      const endTime = performance.now();
      const elapsed = endTime - startTime;
      
      // If setTimeout took longer than expected, likely low performance
      setIsLowPerformance(elapsed > 20);
    }, 10);

    // Listen for motion preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    isLowPerformance,
    prefersReducedMotion,
    shouldReduceAnimations: isLowPerformance || prefersReducedMotion
  };
}