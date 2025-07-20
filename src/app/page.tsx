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
      <FeedbackSpecHeroEnhanced
        title="Turn scattered feedback into Cursor-ready specs in 8 minutes flat"
        subtitle="The AI-Powered Feedback Engine for Founders Who Ship Daily"
        description="Stop wasting 10+ hours weekly on manual feedback management. FeedbackSpec's AI automatically transforms user feedback into production-ready specifications for Cursor, Claude Code, and GitHub Copilot."
        primaryCtaText="Try free for 14 days"
        secondaryCtaText="No card required • Instant setup"
        onPrimaryCtaClick={() => setIsFormOpen(true)}
      />

      {/* Problem Section */}
      <ProblemSectionEnhanced />

      {/* Benefits Section */}
      <FeedbackSpecBenefitsEnhanced />

      {/* How It Works Section */}
      <FeedbackWorkflowEnhanced title="From Scattered Feedback to AI-Ready Specs" />

      {/* Pricing Section */}
      <FeedbackSpecPricingEnhanced onStartTrial={() => setIsFormOpen(true)} />

      {/* CTA Section */}
      <FeedbackSpecCTA
        title="Stop wasting time on manual feedback management"
        description="Your users are giving you the roadmap to $100k+ MRR every day. Join 200+ indie hackers who've automated their feedback workflow and shipped 3x more features using FeedbackSpec + AI coding assistants."
        primaryAction={{
          text: "Get FeedbackSpec Free",
          href: "#signup",
        }}
        secondaryAction={{
          text: "See How It Works",
          href: "#demo",
        }}
        features={[
          "14-day free trial",
          "No card required",
          "Setup takes 5 minutes",
        ]}
      />

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
