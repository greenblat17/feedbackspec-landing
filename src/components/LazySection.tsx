"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { 
  CardSkeleton, 
  PricingCardSkeleton, 
  TestimonialSkeleton,
  TimelineSkeleton,
  ComparisonTableSkeleton 
} from "./skeletons/SectionSkeletons";

// Lazy loaded components with loading states
export const LazyProblemSection = dynamic(
  () => import("./ProblemSectionEnhanced"),
  {
    loading: () => (
      <div className="py-16 px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    ),
  }
);

export const LazyBenefitsSection = dynamic(
  () => import("./FeedbackSpecBenefitsEnhanced"),
  {
    loading: () => (
      <div className="py-16 px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    ),
  }
);

export const LazyCareerTimeline = dynamic(
  () => import("./CareerTimeline").then(mod => ({ default: mod.CareerTimeline })),
  {
    loading: () => (
      <div className="py-16 px-4">
        <TimelineSkeleton />
      </div>
    ),
  }
);

export const LazyInteractiveTransformation = dynamic(
  () => import("./InteractiveTransformation").then(mod => ({ default: mod.InteractiveTransformation })),
  {
    loading: () => (
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <CardSkeleton />
        </div>
      </div>
    ),
  }
);

export const LazyComparisonTable = dynamic(
  () => import("./ComparisonTable").then(mod => ({ default: mod.ComparisonTable })),
  {
    loading: () => (
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ComparisonTableSkeleton />
        </div>
      </div>
    ),
  }
);

export const LazyWallOfLove = dynamic(
  () => import("./WallOfLove").then(mod => ({ default: mod.WallOfLove })),
  {
    loading: () => (
      <div className="py-16 px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <TestimonialSkeleton />
          <TestimonialSkeleton />
          <TestimonialSkeleton />
        </div>
      </div>
    ),
  }
);

export const LazyPricingSection = dynamic(
  () => import("./FeedbackSpecPricingEnhanced"),
  {
    loading: () => (
      <div className="py-16 px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <PricingCardSkeleton />
          <PricingCardSkeleton />
          <PricingCardSkeleton />
        </div>
      </div>
    ),
  }
);

export const LazyWorkflowSection = dynamic(
  () => import("./FeedbackWorkflowEnhanced").then(mod => ({ default: mod.FeedbackWorkflowEnhanced })),
  {
    loading: () => (
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    ),
  }
);