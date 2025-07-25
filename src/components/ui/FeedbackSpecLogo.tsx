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
              {/* Modern design optimized for dark mode */}
              
              {/* Background circle for contrast */}
              <circle
                cx="50"
                cy="50"
                r="45"
                className="fill-white/5 dark:fill-white/10"
                filter="url(#bgBlur)"
              />
              
              {/* Input streams - representing feedback sources */}
              <g className="opacity-80 dark:opacity-100">
                {/* Stream 1 */}
                <circle cx="15" cy="30" r="3" className="fill-blue-500 dark:fill-blue-400" filter="url(#glow)" />
                <path
                  d="M18 30 Q35 35 45 45"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  className="opacity-60 dark:opacity-100"
                />
                
                {/* Stream 2 */}
                <circle cx="15" cy="45" r="3" className="fill-green-500 dark:fill-green-400" filter="url(#glow)" />
                <path
                  d="M18 45 Q30 45 45 45"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  className="opacity-60 dark:opacity-100"
                />
                
                {/* Stream 3 */}
                <circle cx="15" cy="60" r="3" className="fill-purple-500 dark:fill-purple-400" filter="url(#glow)" />
                <path
                  d="M18 60 Q35 55 45 45"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  className="opacity-60 dark:opacity-100"
                />
              </g>
              
              {/* Central processor - AI brain */}
              <g filter="url(#centralGlow)">
                {/* Outer ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="18"
                  className="fill-transparent stroke-primary/30 dark:stroke-primary/50"
                  strokeWidth="1"
                  strokeDasharray="4 2"
                />
                
                {/* Inner circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="14"
                  className="fill-primary/90 dark:fill-primary"
                  stroke="url(#innerGradient)"
                  strokeWidth="2"
                />
                
                {/* AI Brain icon */}
                <path
                  d="M45 47 C45 45, 47 43, 50 43 C53 43, 55 45, 55 47 C55 48, 54 49, 54 50 C54 51, 55 52, 55 53 C55 55, 53 57, 50 57 C47 57, 45 55, 45 53 C45 52, 46 51, 46 50 C46 49, 45 48, 45 47 Z M48 47 L52 47 M48 50 L52 50 M48 53 L52 53"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
                />
              </g>
              
              {/* Output arrow */}
              <path
                d="M64 50 L75 50"
                stroke="url(#outputGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
                className="drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]"
              />
              
              {/* Spec document */}
              <g filter="url(#docGlow)">
                <rect
                  x="78"
                  y="40"
                  width="18"
                  height="20"
                  rx="3"
                  className="fill-primary/20 dark:fill-primary/30 stroke-primary/50 dark:stroke-primary/80"
                  strokeWidth="1.5"
                />
                
                {/* Document lines */}
                <line x1="82" y1="45" x2="92" y2="45" className="stroke-primary/60 dark:stroke-primary/80" strokeWidth="1" />
                <line x1="82" y1="48" x2="89" y2="48" className="stroke-primary/50 dark:stroke-primary/70" strokeWidth="1" />
                <line x1="82" y1="51" x2="91" y2="51" className="stroke-primary/50 dark:stroke-primary/70" strokeWidth="1" />
                <line x1="82" y1="54" x2="88" y2="54" className="stroke-primary/40 dark:stroke-primary/60" strokeWidth="1" />
              </g>
              
              {/* Floating particles for dynamism */}
              <g className="opacity-0 dark:opacity-100">
                <circle cx="30" cy="25" r="1" className="fill-blue-400/50" filter="url(#particleGlow)">
                  <animate attributeName="cy" values="25;20;25" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="70" r="1" className="fill-purple-400/50" filter="url(#particleGlow)">
                  <animate attributeName="cy" values="70;65;70" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="85" cy="30" r="1" className="fill-green-400/50" filter="url(#particleGlow)">
                  <animate attributeName="cy" values="30;25;30" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Gradients and filters */}
              <defs>
                {/* Glow effects */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                <filter id="centralGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                <filter id="docGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                <filter id="particleGlow" x="-200%" y="-200%" width="400%" height="400%">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                <filter id="bgBlur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                </filter>
                
                {/* Gradients */}
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                </linearGradient>
                
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                </linearGradient>
                
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                </linearGradient>
                
                <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                
                <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
                
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" className="fill-primary dark:fill-primary/90" />
                </marker>
              </defs>
            </>
          )}

          {variant === "monochrome" && (
            <>
              {/* Simplified monochrome version */}
              <circle cx="15" cy="30" r="3" className="fill-current opacity-60" />
              <circle cx="15" cy="45" r="3" className="fill-current opacity-70" />
              <circle cx="15" cy="60" r="3" className="fill-current opacity-60" />
              
              <path d="M18 30 Q35 35 45 45" stroke="currentColor" strokeWidth="2" opacity="0.4" />
              <path d="M18 45 Q30 45 45 45" stroke="currentColor" strokeWidth="2" opacity="0.4" />
              <path d="M18 60 Q35 55 45 45" stroke="currentColor" strokeWidth="2" opacity="0.4" />
              
              <circle cx="50" cy="50" r="14" className="fill-current" />
              <path
                d="M45 47 C45 45, 47 43, 50 43 C53 43, 55 45, 55 47 C55 48, 54 49, 54 50 C54 51, 55 52, 55 53 C55 55, 53 57, 50 57 C47 57, 45 55, 45 53 C45 52, 46 51, 46 50 C46 49, 45 48, 45 47 Z M48 47 L52 47 M48 50 L52 50 M48 53 L52 53"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              
              <path d="M64 50 L75 50" stroke="currentColor" strokeWidth="3" />
              <polygon points="73 47, 78 50, 73 53" className="fill-current" />
              
              <rect x="78" y="40" width="18" height="20" rx="3" className="fill-none stroke-current" strokeWidth="1.5" />
              <line x1="82" y1="45" x2="92" y2="45" className="stroke-current" strokeWidth="1" opacity="0.6" />
              <line x1="82" y1="48" x2="89" y2="48" className="stroke-current" strokeWidth="1" opacity="0.5" />
              <line x1="82" y1="51" x2="91" y2="51" className="stroke-current" strokeWidth="1" opacity="0.5" />
            </>
          )}

          {variant === "gradient" && (
            <>
              {/* Enhanced gradient version */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#6366F1" />
                </radialGradient>
              </defs>
              
              <circle cx="15" cy="30" r="4" fill="url(#grad1)" />
              <circle cx="15" cy="45" r="4" fill="url(#grad2)" />
              <circle cx="15" cy="60" r="4" fill="url(#grad3)" />
              
              <path d="M19 30 Q35 35 45 45" stroke="url(#grad1)" strokeWidth="3" opacity="0.8" />
              <path d="M19 45 Q30 45 45 45" stroke="url(#grad2)" strokeWidth="3" opacity="0.8" />
              <path d="M19 60 Q35 55 45 45" stroke="url(#grad3)" strokeWidth="3" opacity="0.8" />
              
              <circle cx="50" cy="50" r="16" fill="url(#centerGrad)" />
              <path
                d="M45 47 C45 45, 47 43, 50 43 C53 43, 55 45, 55 47 C55 48, 54 49, 54 50 C54 51, 55 52, 55 53 C55 55, 53 57, 50 57 C47 57, 45 55, 45 53 C45 52, 46 51, 46 50 C46 49, 45 48, 45 47 Z M48 47 L52 47 M48 50 L52 50 M48 53 L52 53"
                stroke="white"
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
              />
              
              <path d="M66 50 L75 50" stroke="url(#centerGrad)" strokeWidth="4" />
              <polygon points="73 46, 80 50, 73 54" fill="url(#centerGrad)" />
              
              <rect x="78" y="38" width="20" height="24" rx="4" fill="url(#centerGrad)" opacity="0.3" />
              <rect x="78" y="38" width="20" height="24" rx="4" fill="none" stroke="url(#centerGrad)" strokeWidth="2" />
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
              variant === "monochrome" ? "text-current" : "text-foreground dark:text-white"
            )}
          >
            <span className="dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Feedback</span>
            <span className="text-primary dark:text-blue-400 dark:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]">
              Spec
            </span>
          </span>
          {size === "lg" || size === "xl" ? (
            <span className="text-xs text-muted-foreground dark:text-blue-300/60 font-medium tracking-wide">
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