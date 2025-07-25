"use client";

import React from "react";
import { Skeleton } from "../ui/skeleton";

// Hero Section Skeleton
export const HeroSkeleton = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-4xl mx-auto w-full">
        <Skeleton className="h-10 w-48 mx-auto" />
        <Skeleton className="h-16 w-full max-w-3xl mx-auto" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
        <Skeleton className="h-12 w-40 mx-auto" />
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
};

// Card Skeleton
export const CardSkeleton = () => {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
};

// Pricing Card Skeleton
export const PricingCardSkeleton = () => {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-10 w-32" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  );
};

// Testimonial Skeleton
export const TestimonialSkeleton = () => {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-4" />
        ))}
      </div>
      <Skeleton className="h-20 w-full" />
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  );
};

// Timeline Skeleton
export const TimelineSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <Skeleton className="h-10 w-96 mx-auto" />
        <Skeleton className="h-6 w-64 mx-auto" />
      </div>
      <div className="relative">
        <Skeleton className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" />
        <div className="space-y-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="w-1/2 p-4">
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Comparison Table Skeleton
export const ComparisonTableSkeleton = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4">
              <Skeleton className="h-4 w-20" />
            </th>
            {[...Array(4)].map((_, i) => (
              <th key={i} className="p-4">
                <Skeleton className="h-4 w-24 mx-auto" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="p-4">
                <Skeleton className="h-4 w-32" />
              </td>
              {[...Array(4)].map((_, colIndex) => (
                <td key={colIndex} className="p-4 text-center">
                  <Skeleton className="h-4 w-4 mx-auto rounded-full" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};