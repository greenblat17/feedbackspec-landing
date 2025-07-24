"use client";

import React, { useState } from "react";
import FeedbackSpecHeader from "../components/FeedbackSpecHeader";
import { FeedbackSpecHeroEnhanced } from "../components/FeedbackSpecHeroEnhanced";
import ProblemSectionEnhanced from "../components/ProblemSectionEnhanced";
import FeedbackSpecBenefitsEnhanced from "../components/FeedbackSpecBenefitsEnhanced";
import { FeedbackWorkflowEnhanced } from "../components/FeedbackWorkflowEnhanced";
import FeedbackSpecPricingEnhanced from "../components/FeedbackSpecPricingEnhanced";
import { FeedbackSpecCTA } from "../components/FeedbackSpecCTA";
import Footer from "../components/Footer";
import { FeedbackFormModal } from "../components/FeedbackFormModal";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
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
      {/* Header */}
      <FeedbackSpecHeader onStartTrial={() => setIsFormOpen(true)} />

      {/* Hero Section */}
      <section className="bg-background">
        <FeedbackSpecHeroEnhanced
          title="Turn Scattered Feedback Into Cursor-Ready Specs in Minutes"
          subtitle="The AI-Powered Feedback Engine for Founders Who Ship Daily"
          description="FeedbackSpec automatically centralizes your scattered feedback AND transforms it into production-ready specifications for Cursor, Claude Code, and GitHub Copilot. The only tool that solves both problems founders face."
          primaryCtaText="Try free for 14 days"
          secondaryCtaText="No card required • Instant setup"
          onPrimaryCtaClick={() => setIsFormOpen(true)}
        />
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50/50 dark:bg-gray-950/50">
        <ProblemSectionEnhanced />
      </section>

      {/* Benefits Section */}
      <section className="bg-background">
        <FeedbackSpecBenefitsEnhanced />
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50/50 dark:bg-gray-950/50">
        <FeedbackWorkflowEnhanced title="From Scattered Feedback to AI-Ready Specs" />
      </section>

      {/* Pricing Section */}
      <section className="bg-background">
        <FeedbackSpecPricingEnhanced onStartTrial={() => setIsFormOpen(true)} />
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50/50 dark:bg-gray-950/50">
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
    </div>
  );
}
