"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { SimpleHeader } from "../components/SimpleHeader";
import { FeedbackSpecHeroEnhanced } from "../components/FeedbackSpecHeroEnhanced";
import { FeedbackSpecCTA } from "../components/FeedbackSpecCTA";
import Footer from "../components/Footer";
import { FeedbackFormModal } from "../components/FeedbackFormModal";
import { BackToTop } from "../components/BackToTop";

// Performance monitoring (only in dev)
const PerformanceMonitor = dynamic(
  () => import("../components/PerformanceMonitor").then(mod => ({ default: mod.PerformanceMonitor })),
  { ssr: false }
);
import {
  LazyProblemSection,
  LazyBenefitsSection,
  LazyCareerTimeline,
  LazyInteractiveTransformation,
  LazyComparisonTable,
  LazyWallOfLove,
  LazyPricingSection,
  LazyWorkflowSection,
} from "../components/LazySection";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Simple Sticky Header */}
      <SimpleHeader />
      
      <div className="min-h-screen bg-background relative">
        {process.env.NODE_ENV === "development" && <PerformanceMonitor />}
        <style jsx global>{`
          /* Performance optimizations */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* GPU acceleration for animations */
          [data-animate] {
            will-change: transform, opacity;
          }

          /* Reduce layout thrashing */
          img,
          video {
            will-change: auto;
          }

          /* Optimize scrolling */
          html {
            scroll-behavior: smooth;
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>

      {/* Hero Section */}
      <section id="hero" className="bg-background pt-20">
        <FeedbackSpecHeroEnhanced
          title="Turn Scattered Feedback Into Cursor-Ready Specs in Minutes"
          subtitle="The AI-Powered Feedback Engine for Founders Who Ship Daily"
          description="FeedbackSpec automatically centralizes your scattered feedback AND transforms it into production-ready specifications for Cursor, Claude Code, and Cline."
          primaryCtaText="Try free for 14 days"
          secondaryCtaText="No card required • Instant setup"
          onPrimaryCtaClick={() => setIsFormOpen(true)}
        />
      </section>

      {/* Problem Section */}
      <section id="problem" className="bg-muted/10">
        <LazyProblemSection />
      </section>

      {/* Benefits Section */}
      <section id="features" className="bg-background">
        <LazyBenefitsSection />
      </section>

      {/* Career Timeline */}
      <section id="career-timeline" className="bg-muted/10">
        <LazyCareerTimeline />
      </section>

      {/* Interactive Transformation */}
      <section id="transformation" className="bg-muted/10">
        <LazyInteractiveTransformation />
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="bg-background">
        <LazyComparisonTable />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-muted/10">
        <LazyWallOfLove />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-muted/10">
        <LazyWorkflowSection title="From Scattered Feedback to AI-Ready Specs" />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-muted/10">
        <LazyPricingSection onStartTrial={() => setIsFormOpen(true)} />
      </section>

      {/* CTA Section */}
      <section className="bg-background">
        <FeedbackSpecCTA />
      </section>

      {/* Footer */}
      <Footer
        companyName="FeedbackSpec"
        description="Turn scattered feedback into Cursor and Claude Code specs in minutes, not hours. The automated platform for indie hackers and solo founders."
      />

      {/* Feedback Form Modal */}
      <FeedbackFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onComplete={(data) => {
          console.log("Form completed:", data);
          // Handle form completion (e.g., redirect to dashboard)
        }}
      />

      {/* Back to Top Button */}
      <BackToTop />
      </div>
    </>
  );
}
