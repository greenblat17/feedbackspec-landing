"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Clock,
  X,
  Zap,
  Rocket,
  Target,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Check,
  GripVertical,
  Timer,
  Brain,
  FileText,
  Code2,
  MessageSquare,
  Users,
  BarChart3,
  DollarSign,
} from "lucide-react";

const transformationData = {
  title: {
    before: "The Struggling Founder",
    after: "The Transformed Founder",
  },
  subtitle: {
    before: "Drowning in chaos, shipping blindly",
    after: "Laser-focused, shipping with confidence",
  },
  metrics: [
    {
      label: "Time to Process Feedback",
      before: "20 hours/week",
      after: "20 minutes/week",
      icon: Clock,
      color: "blue",
    },
    {
      label: "Features Shipped",
      before: "1-2 per month",
      after: "8+ per month",
      icon: Rocket,
      color: "green",
    },
    {
      label: "Feature Adoption Rate",
      before: "5-15%",
      after: "80%+",
      icon: Target,
      color: "purple",
    },
    {
      label: "Revenue Growth",
      before: "Stagnant",
      after: "+47% MRR",
      icon: TrendingUp,
      color: "orange",
    },
  ],
  features: {
    before: [
      "Scattered feedback across 20+ channels",
      "Writing specs manually for hours",
      "Building features nobody uses",
      "Losing deals to faster competitors",
      "Constant context switching",
      "No idea what to build next",
    ],
    after: [
      "All feedback centralized automatically",
      "AI generates specs in seconds",
      "Every feature has 80%+ adoption",
      "Shipping 3x faster than competitors",
      "Laser focus on high-impact work",
      "Clear roadmap based on revenue data",
    ],
  },
};

export function InteractiveTransformation() {
  return (
    <div className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Journey From Chaos to Clarity
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Drag the slider to see how FeedbackSpec transforms your development
            process
          </p>
        </motion.div>

        {/* Use CleanDragSlider */}
        <div className="max-w-6xl mx-auto">
          <CleanDragSlider />
        </div>
      </div>
    </div>
  );
}

// Before Content Component
function BeforeContent() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div>
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-1">
            The Struggling Founder
          </h3>
          <p className="text-sm opacity-90">
            Drowning in chaos, shipping blindly
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6 max-w-lg mx-auto w-full">
          {transformationData.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20"
            >
              <metric.icon className="w-5 h-5 mx-auto mb-1 text-white/80" />
              <p className="text-[10px] font-medium mb-1 opacity-80">
                {metric.label}
              </p>
              <p className="text-base font-bold">{metric.before}</p>
            </motion.div>
          ))}
        </div>

        {/* Problems */}
        <div className="max-w-lg mx-auto w-full">
          <h4 className="text-base font-semibold mb-3 flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Your Daily Reality
          </h4>
          <ul className="space-y-2">
            {transformationData.features.before.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-start gap-2 text-xs"
              >
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90 leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// After Content Component
function AfterContent() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div>
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-1">
            The Transformed Founder
          </h3>
          <p className="text-sm opacity-90">
            Laser-focused, shipping with confidence
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6 max-w-lg mx-auto w-full">
          {transformationData.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20"
            >
              <metric.icon className="w-5 h-5 mx-auto mb-1 text-white/80" />
              <p className="text-[10px] font-medium mb-1 opacity-80">
                {metric.label}
              </p>
              <p className="text-base font-bold">{metric.after}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-lg mx-auto w-full">
          <h4 className="text-base font-semibold mb-3 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Your New Reality
          </h4>
          <ul className="space-y-2">
            {transformationData.features.after.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-start gap-2 text-xs"
              >
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90 leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Data for CleanDragSlider
const beforeItems = [
  {
    id: 1,
    icon: <Clock className="w-5 h-5" />,
    title: "20 hours/week on feedback",
    description:
      "Drowning in scattered messages across Discord, Twitter, emails. No central system.",
    metric: "Time sink",
  },
  {
    id: 2,
    icon: <FileText className="w-5 h-5" />,
    title: "Manual spec writing",
    description:
      "Hours turning vague feedback into actionable specs. Context switching kills productivity.",
    metric: "1-2 features/month",
  },
  {
    id: 3,
    icon: <Target className="w-5 h-5" />,
    title: "Building blind",
    description:
      "No idea which features will actually get used. Shipping into the void.",
    metric: "5-15% adoption",
  },
  {
    id: 4,
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Stagnant growth",
    description:
      "Competitors ship faster while you organize spreadsheets. Losing market share daily.",
    metric: "Flat MRR",
  },
];

const afterItems = [
  {
    id: 1,
    icon: <Zap className="w-5 h-5" />,
    title: "20 minutes/week on feedback",
    description:
      "All feedback auto-collected and organized. AI prioritizes by revenue impact.",
    metric: "Time freedom",
  },
  {
    id: 2,
    icon: <Rocket className="w-5 h-5" />,
    title: "AI-generated specs",
    description:
      "From user complaint to Cursor-ready spec in seconds. Copy, paste, ship.",
    metric: "8+ features/month",
  },
  {
    id: 3,
    icon: <Users className="w-5 h-5" />,
    title: "Build what users want",
    description:
      "Every feature backed by real user demand. 80%+ adoption guaranteed.",
    metric: "80%+ adoption",
  },
  {
    id: 4,
    icon: <DollarSign className="w-5 h-5" />,
    title: "Revenue explosion",
    description:
      "Ship 3x faster than competitors. Users love you. MRR grows automatically.",
    metric: "+47% MRR",
  },
];

const CleanDragSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percentage);
    },
    [isDragging]
  );

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handleTouchMove = React.useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove]
  );

  const handleStart = React.useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleEnd = React.useCallback(() => setIsDragging(false), []);

  React.useEffect(() => {
    if (isDragging) {
      const handleDocumentEnd = () => setIsDragging(false);
      document.addEventListener("mouseup", handleDocumentEnd);
      document.addEventListener("touchend", handleDocumentEnd);
      return () => {
        document.removeEventListener("mouseup", handleDocumentEnd);
        document.removeEventListener("touchend", handleDocumentEnd);
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden rounded-3xl border border-border bg-card cursor-ew-resize shadow-xl select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Before Section - Highly saturated red gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-red-300 via-red-400 to-red-300 dark:from-red-900/70 dark:via-red-800/60 dark:to-red-900/70"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />

      {/* After Section - Highly saturated green gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-300 via-green-400 to-green-300 dark:from-green-900/70 dark:via-green-800/60 dark:to-green-900/70"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      />

      {/* Before Section */}
      <div
        className="absolute inset-0 p-6"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-red-200 dark:bg-red-900/50 flex items-center justify-center border-2 border-red-300 dark:border-red-700">
            <X className="w-7 h-7 text-red-700 dark:text-red-400" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-foreground">
              The Struggling Founder
            </h4>
            <p className="text-muted-foreground text-sm">
              Drowning in chaos, shipping blindly
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-3">
          {beforeItems.map((item) => (
            <div
              key={item.id}
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 border border-border/60 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-red-200 dark:bg-red-900/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-700 dark:text-red-400">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-foreground text-base mb-1">
                      {item.title}
                    </h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-200 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-700">
                    {item.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* After Section */}
      <div
        className="absolute inset-0 p-6"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-200 dark:bg-green-900/50 flex items-center justify-center border-2 border-green-300 dark:border-green-700">
            <Check className="w-7 h-7 text-green-700 dark:text-green-400" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-foreground">
              The Transformed Founder
            </h4>
            <p className="text-muted-foreground text-sm">
              Laser-focused, shipping with confidence
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-3">
          {afterItems.map((item) => (
            <div
              key={item.id}
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 border border-border/60 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-green-200 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 dark:text-green-400">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-foreground text-base mb-1">
                      {item.title}
                    </h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700">
                    {item.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Central Drag Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 z-30"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="relative -translate-x-1/2">
          <div className="w-12 h-12 bg-card border-2 border-border rounded-full shadow-lg cursor-ew-resize flex items-center justify-center hover:bg-muted transition-all duration-200 hover:scale-105 hover:shadow-xl">
            <GripVertical className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/95 border border-border/60 text-foreground rounded-full text-sm font-medium backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
          <GripVertical className="w-4 h-4 text-muted-foreground" />
          <span>Drag to see the transformation</span>
        </div>
      </div>
    </div>
  );
};
