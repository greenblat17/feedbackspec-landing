"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== "undefined" && "performance" in window) {
      try {
        // First Contentful Paint
        const paintEntries = performance.getEntriesByType("paint");
        const fcp = paintEntries.find(
          (entry) => entry.name === "first-contentful-paint"
        );
        if (fcp) {
          console.log(`FCP: ${fcp.startTime.toFixed(2)}ms`);
        }

        // Largest Contentful Paint
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);
        });
        observer.observe({ entryTypes: ["largest-contentful-paint"] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const firstInputEntry = entry as PerformanceEntry & {
              processingStart: number;
            };
            console.log(
              `FID: ${
                firstInputEntry.processingStart - firstInputEntry.startTime
              }ms`
            );
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as PerformanceEntry & {
              hadRecentInput: boolean;
              value: number;
            };
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
              console.log(`CLS: ${clsValue.toFixed(3)}`);
            }
          }
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });

        // Cleanup
        return () => {
          observer.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (e) {
        console.error("Performance monitoring error:", e);
      }
    }
  }, []);

  return null;
}

// Utility to measure component render time
export function measureRenderTime(componentName: string) {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    performance.mark(`${componentName}-start`);

    return () => {
      performance.mark(`${componentName}-end`);
      performance.measure(
        componentName,
        `${componentName}-start`,
        `${componentName}-end`
      );

      const measure = performance.getEntriesByName(componentName)[0];
      console.log(
        `${componentName} render time: ${measure.duration.toFixed(2)}ms`
      );
    };
  }

  return () => {};
}
