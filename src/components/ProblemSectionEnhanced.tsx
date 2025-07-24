"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Clock,
  MessageSquare,
  Zap,
  TrendingDown,
  AlertTriangle,
  Users,
  ArrowRight,
  Twitter,
  Mail,
  MessageCircle,
  Github,
  Slack,
  Chrome,
  DollarSign,
  X,
  Brain,
  Target,
  Heart,
  AlertCircle,
  Sparkles,
  Timer,
  Code2,
  FileText,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Quote,
  Gauge,
} from "lucide-react";
import {
  designSystem,
  getSpring,
  animationVariants,
  performanceConfig,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Feedback Graveyard Component
function FeedbackGraveyard() {
  const messages = [
    { text: "Dark mode please!", platform: "Twitter", age: "2 weeks ago" },
    { text: "Export is broken", platform: "Email", age: "1 month ago" },
    { text: "Need API access", platform: "Discord", age: "3 weeks ago" },
    { text: "Mobile app?", platform: "Slack", age: "2 months ago" },
    { text: "Bulk actions needed", platform: "GitHub", age: "6 weeks ago" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 transform rotate-3">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-sm"
            >
              <div className="text-xs text-gray-500 mb-1">
                {msg.platform} • {msg.age}
              </div>
              <p className="text-sm text-gray-600 line-through">{msg.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Opportunities Missed Counter
function OpportunitiesMissedCounter() {
  const [missed, setMissed] = useState(127);

  // Disabled auto-increment for performance
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMissed((prev) => prev + 1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-2"
    >
      <div className="text-5xl font-bold font-mono tabular-nums text-accent-orange">
        {missed}
      </div>
      <p className="text-sm text-muted-foreground">valuable features ignored</p>
    </motion.div>
  );
}

// Feedback Flow Visualization
function FeedbackFlow() {
  const platforms = [
    { icon: Twitter, name: "Twitter", color: "text-blue-500" },
    { icon: Mail, name: "Email", color: "text-gray-500" },
    { icon: Github, name: "GitHub", color: "text-gray-900" },
    { icon: Slack, name: "Slack", color: "text-purple-500" },
    { icon: MessageSquare, name: "Discord", color: "text-indigo-500" },
  ];

  return (
    <div className="relative h-40 mb-8">
      {/* Source platforms */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between">
        {platforms.map((platform, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-2"
          >
            <platform.icon className={cn("w-5 h-5", platform.color)} />
            <span className="text-xs text-muted-foreground">
              {platform.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Flow lines */}
      <svg
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      >
        {platforms.map((_, idx) => (
          <motion.path
            key={idx}
            d={`M 80 ${20 + idx * 25} Q 200 ${60} 320 ${60}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-300"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Lost feedback indicator */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <X className="w-10 h-10 text-red-500" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full bg-red-200"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <p className="text-xs text-center mt-2 text-muted-foreground">
          Lost Forever
        </p>
      </motion.div>
    </div>
  );
}

// Development Cycle Visualization
function DevelopmentCycle() {
  const steps = [
    { icon: MessageSquare, label: "Feedback" },
    { icon: Brain, label: "Analyze" },
    { icon: FileText, label: "Spec" },
    { icon: Code2, label: "Code" },
  ];

  return (
    <div className="relative h-48 mb-6 flex items-center justify-center">
      <div className="relative w-72 h-48">
        {steps.map((step, idx) => {
          // Position items in a wider ellipse to prevent overlap
          const angle = (idx * 2 * Math.PI) / steps.length - Math.PI / 2; // Start from top
          const x = 45 + 35 * Math.cos(angle);
          const y = 40 + 45 * Math.sin(angle);

          return (
            <motion.div
              key={idx}
              className="absolute flex flex-col items-center"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="bg-purple-100 p-2 rounded-full mb-1">
                <step.icon className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-xs text-center text-muted-foreground">
                {step.label}
              </p>
            </motion.div>
          );
        })}

        {/* Center timer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
            <Timer className="w-7 h-7 text-purple-600" />
          </div>
          <p className="text-xs text-center mt-2 text-muted-foreground whitespace-nowrap">
            3-4 hrs/feature
          </p>
        </div>
      </div>
    </div>
  );
}

// Wrong Priorities Visualization
function WrongPriorities() {
  return (
    <div className="relative h-40 mb-6 flex items-center justify-center">
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center">
            <span className="text-2xl font-bold text-yellow-800">73%</span>
          </div>
          <p className="text-xs text-center mt-2 text-muted-foreground">
            Loud voices
          </p>
        </motion.div>

        <Target className="w-8 h-8 text-gray-400" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center">
            <span className="text-sm font-bold text-green-800">27%</span>
          </div>
          <p className="text-xs text-center mt-2 text-muted-foreground">
            Real needs
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Founder testimonials
const FOUNDER_TESTIMONIALS = [
  {
    quote:
      "I was spending 20 hours a week just organizing feedback. Now it's automated.",
    author: "Sarah Chen",
    role: "Founder, DevTools Inc",
    mrr: "$45k MRR",
  },
  {
    quote:
      "Lost 3 major customers because I missed their feature requests in my email.",
    author: "Mike Rodriguez",
    role: "Solo SaaS Founder",
    mrr: "$12k MRR",
  },
  {
    quote:
      "My competitor shipped my roadmap while I was still organizing Trello cards.",
    author: "Alex Thompson",
    role: "B2B SaaS Founder",
    mrr: "$28k MRR",
  },
];

// Main component
export default function ProblemSectionEnhanced() {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      aria-label="The problems faced by founders"
    >
      {/* Animated background with void effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(59,130,246,0.05)_100%)]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 70%)",
            filter: "blur(40px)",
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Feedback Graveyard Background */}
      <FeedbackGraveyard />

      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Hero section with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-2"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(251, 146, 60, 0.3)",
                    "0 0 40px rgba(251, 146, 60, 0.5)",
                    "0 0 20px rgba(251, 146, 60, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </motion.div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-foreground">The Founders's</span>
            <br />
            <span className="text-primary">Development Hell</span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            You started building because you love creating solutions. But now
            you're stuck in an endless cycle of{" "}
            <span className="font-bold text-foreground">feedback chaos</span>{" "}
            that's{" "}
            <span className="font-bold text-foreground">
              killing your momentum
            </span>
            .
          </p>

          {/* Opportunities missed counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="inline-block p-6 bg-gradient-to-br from-orange-50 to-red-50 border-accent-orange/30">
              <OpportunitiesMissedCounter />
              <p className="text-xs text-muted-foreground mt-2">
                while you're organizing feedback
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* The Triple Problem - Three Cards Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Problem 1: Feedback Chaos */}
            <motion.article
              aria-label="Problem 1: Feedback Chaos"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <Card className="relative h-full p-4 sm:p-5 lg:p-6 overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 border-2 border-red-200 transition-shadow duration-300 hover:shadow-xl">
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-br from-red-100 to-orange-100">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-accent-orange" />
                    </div>
                    Problem #1: Feedback Chaos
                  </h3>

                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Platform Scattered Hell</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          20+ sources: Twitter, Discord, emails
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Zero Organization</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          No tagging, no search, no history
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Time Vampire</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          15+ hours weekly just organizing
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Analysis Paralysis</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Too much noise, no clear signal
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Lost Revenue</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Missing high-value feature requests
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Visual: Feedback Flow */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <FeedbackFlow />
                  </div>
                </div>
              </Card>
            </motion.article>

            {/* Problem 2: Slow Development Cycle */}
            <motion.article
              aria-label="Problem 2: Slow Development Cycle"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <Card className="relative h-full p-4 sm:p-5 lg:p-6 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 border-2 border-purple-200 transition-shadow duration-300 hover:shadow-xl">
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-br from-purple-100 to-blue-100">
                      <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    Problem #2: Slow Development Cycle
                  </h3>

                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">
                          Manual Specification Writing
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Hours turning feedback into specs
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Generic AI Prompts</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Missing critical context & details
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Context Switching Hell</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          From feedback to code to debug
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Reinventing the Wheel</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          No spec templates or patterns
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Competitor Advantage</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          They ship while you plan
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Visual: Development Cycle */}
                  <div className="mt-12 pt-6 border-t border-gray-100">
                    <DevelopmentCycle />
                  </div>
                </div>
              </Card>
            </motion.article>

            {/* Problem 3: Building the Wrong Things */}
            <motion.article
              aria-label="Problem 3: Building the Wrong Things"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <Card className="relative h-full p-4 sm:p-5 lg:p-6 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-green-50 border-2 border-yellow-200 transition-shadow duration-300 hover:shadow-xl">
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-br from-yellow-100 to-green-100">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    Problem #3: Building the Wrong Things
                  </h3>

                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Loudest Voice Bias</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Building for complainers, not payers
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">No Revenue Connection</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Can't link features to revenue
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">User Disappointment</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Features nobody actually uses
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Churn Spiral</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Losing customers to competitors
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">Founder Burnout</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Working hard on wrong things
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Visual: Wrong Priorities */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <WrongPriorities />
                  </div>
                </div>
              </Card>
            </motion.article>
          </div>
        </motion.div>

        {/* Founder Testimonials */}

        {/* The Breaking Point - Dramatic Finale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="relative p-12 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 border-2 border-blue-300">
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-blue-50/50"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <div className="p-6 rounded-full bg-gradient-to-br from-orange-100 to-red-100">
                    <Gauge className="w-16 h-16 text-accent-orange" />
                  </div>
                  <motion.div
                    className="absolute -inset-2"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-full h-full rounded-full bg-accent-orange/20 blur-xl" />
                  </motion.div>
                </div>
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                The Real Cost of{" "}
                <span className="text-primary">Feedback Chaos</span>
              </h3>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-4xl font-bold text-accent-orange">
                    73%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Features never used
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-4xl font-bold text-accent-orange">
                    3x
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Slower than competitors
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-4xl font-bold text-accent-orange">
                    $47k
                  </div>
                  <p className="text-sm text-muted-foreground">Lost annually</p>
                </motion.div>
              </div>

              <motion.p
                className="text-xl mb-8 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Every day you wait, competitors ship features your users asked
                for first.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-2xl font-bold text-foreground">
                  What if you could...
                </p>
                <div className="space-y-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight className="w-5 h-5 text-accent-orange" />
                    Know exactly which features will{" "}
                    <span className="font-semibold text-foreground">
                      drive revenue
                    </span>
                    ?
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight className="w-5 h-5 text-accent-orange" />
                    Turn feedback into{" "}
                    <span className="font-semibold text-foreground">
                      AI-ready specs
                    </span>{" "}
                    in minutes?
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight className="w-5 h-5 text-accent-orange" />
                    Ship{" "}
                    <span className="font-semibold text-foreground">
                      3x faster
                    </span>{" "}
                    than your competitors?
                  </motion.p>
                </div>

                <motion.div
                  className="pt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
