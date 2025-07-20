"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface FeedbackSpecLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "monochrome" | "gradient";
  showText?: boolean;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

const textSizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
  xl: "text-2xl",
};

export function FeedbackSpecLogo({
  className,
  size = "md",
  variant = "default",
  showText = true,
}: FeedbackSpecLogoProps) {
  const logoSize = sizeClasses[size];
  const textSize = textSizeClasses[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logo Symbol */}
      <div className={cn("relative", logoSize)}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {variant === "default" && (
            <>
              {/* Feedback Sources - Multiple circles representing different platforms */}
              <circle
                cx="20"
                cy="25"
                r="8"
                className="fill-blue-500 opacity-80"
              />
              <circle
                cx="35"
                cy="15"
                r="6"
                className="fill-green-500 opacity-80"
              />
              <circle
                cx="50"
                cy="20"
                r="7"
                className="fill-purple-500 opacity-80"
              />
              <circle
                cx="25"
                cy="40"
                r="5"
                className="fill-orange-500 opacity-80"
              />

              {/* Connecting Lines - Data flow */}
              <path
                d="M20 33 Q40 45 60 50"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                className="opacity-60"
              />
              <path
                d="M35 21 Q45 35 60 50"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                className="opacity-60"
              />
              <path
                d="M50 27 Q55 38 60 50"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                className="opacity-60"
              />
              <path
                d="M25 45 Q42 47 60 50"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                className="opacity-60"
              />

              {/* Central Processing Hub */}
              <circle
                cx="65"
                cy="50"
                r="10"
                className="fill-primary stroke-primary/20"
                strokeWidth="3"
              />

              {/* AI/Processing indicator inside hub */}
              <path
                d="M60 46 L65 50 L60 54 M65 46 L70 50 L65 54"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Output - Structured document */}
              <rect
                x="60"
                y="70"
                width="25"
                height="20"
                rx="3"
                className="fill-primary/10 stroke-primary/30"
                strokeWidth="1"
              />

              {/* Document lines */}
              <line
                x1="65"
                y1="75"
                x2="80"
                y2="75"
                className="stroke-primary/40"
                strokeWidth="1"
              />
              <line
                x1="65"
                y1="78"
                x2="75"
                y2="78"
                className="stroke-primary/40"
                strokeWidth="1"
              />
              <line
                x1="65"
                y1="81"
                x2="78"
                y2="81"
                className="stroke-primary/40"
                strokeWidth="1"
              />
              <line
                x1="65"
                y1="84"
                x2="73"
                y2="84"
                className="stroke-primary/40"
                strokeWidth="1"
              />

              {/* Connection from hub to document */}
              <path
                d="M65 60 Q65 65 70 70"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                className="opacity-60"
              />

              {/* Gradients */}
              <defs>
                <linearGradient
                  id="flowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    className="stop-color-primary stop-opacity-80"
                  />
                  <stop
                    offset="100%"
                    className="stop-color-primary stop-opacity-20"
                  />
                </linearGradient>
                <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0%"
                    className="stop-color-primary stop-opacity-100"
                  />
                  <stop
                    offset="100%"
                    className="stop-color-primary stop-opacity-70"
                  />
                </radialGradient>
              </defs>
            </>
          )}

          {variant === "monochrome" && (
            <>
              {/* Simplified monochrome version */}
              <circle
                cx="20"
                cy="25"
                r="8"
                className="fill-current opacity-60"
              />
              <circle
                cx="35"
                cy="15"
                r="6"
                className="fill-current opacity-70"
              />
              <circle
                cx="50"
                cy="20"
                r="7"
                className="fill-current opacity-65"
              />
              <circle
                cx="25"
                cy="40"
                r="5"
                className="fill-current opacity-75"
              />

              <path
                d="M20 33 Q40 45 60 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M35 21 Q45 35 60 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M50 27 Q55 38 60 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M25 45 Q42 47 60 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />

              <circle cx="65" cy="50" r="10" className="fill-current" />
              <path
                d="M60 46 L65 50 L60 54 M65 46 L70 50 L65 54"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />

              <rect
                x="60"
                y="70"
                width="25"
                height="20"
                rx="3"
                className="fill-none stroke-current"
                strokeWidth="2"
              />
              <line
                x1="65"
                y1="75"
                x2="80"
                y2="75"
                className="stroke-current"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="65"
                y1="78"
                x2="75"
                y2="78"
                className="stroke-current"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="65"
                y1="81"
                x2="78"
                y2="81"
                className="stroke-current"
                strokeWidth="1"
                opacity="0.6"
              />

              <path
                d="M65 60 Q65 65 70 70"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
            </>
          )}

          {variant === "gradient" && (
            <>
              {/* Enhanced gradient version */}
              <circle cx="20" cy="25" r="8" fill="url(#grad1)" />
              <circle cx="35" cy="15" r="6" fill="url(#grad2)" />
              <circle cx="50" cy="20" r="7" fill="url(#grad3)" />
              <circle cx="25" cy="40" r="5" fill="url(#grad4)" />

              <path
                d="M20 33 Q40 45 60 50"
                stroke="url(#flowGrad)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M35 21 Q45 35 60 50"
                stroke="url(#flowGrad)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M50 27 Q55 38 60 50"
                stroke="url(#flowGrad)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M25 45 Q42 47 60 50"
                stroke="url(#flowGrad)"
                strokeWidth="3"
                fill="none"
              />

              <circle cx="65" cy="50" r="12" fill="url(#hubGrad)" />
              <path
                d="M60 46 L65 50 L60 54 M65 46 L70 50 L65 54"
                stroke="white"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />

              <rect
                x="58"
                y="68"
                width="29"
                height="24"
                rx="4"
                fill="url(#docGrad)"
              />
              <line
                x1="63"
                y1="74"
                x2="82"
                y2="74"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <line
                x1="63"
                y1="78"
                x2="77"
                y2="78"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <line
                x1="63"
                y1="82"
                x2="80"
                y2="82"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.7"
              />

              <path
                d="M65 62 Q65 65 72 68"
                stroke="url(#flowGrad)"
                strokeWidth="3"
                fill="none"
              />

              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <linearGradient
                  id="flowGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="hubGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#4F46E5" />
                </radialGradient>
                <linearGradient
                  id="docGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </>
          )}
        </svg>
      </div>

      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-bold tracking-tight",
              textSize,
              variant === "monochrome" ? "text-current" : "text-foreground"
            )}
          >
            Feedback<span className="text-primary">Spec</span>
          </span>
          {size === "lg" || size === "xl" ? (
            <span className="text-xs text-muted-foreground font-medium tracking-wide">
              AI-POWERED SPECS
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}

// Individual logo symbol component for use without text
export function FeedbackSpecSymbol({
  className,
  size = "md",
  variant = "default",
}: Omit<FeedbackSpecLogoProps, "showText">) {
  return (
    <FeedbackSpecLogo
      className={className}
      size={size}
      variant={variant}
      showText={false}
    />
  );
}

export default FeedbackSpecLogo;
