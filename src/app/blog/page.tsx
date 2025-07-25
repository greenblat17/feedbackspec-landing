"use client";

import React from "react";
import FeedbackSpecHeader from "@/components/FeedbackSpecHeader";
import { ResourcesSection } from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <FeedbackSpecHeader />

      {/* Main Content */}
      <main className="pt-20">
        <ResourcesSection />
      </main>

      {/* Footer */}
      <Footer
        companyName="FeedbackSpec"
        description="Turn scattered feedback into Cursor and Claude Code specs in minutes, not hours. The automated platform for indie hackers and solo founders."
      />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}