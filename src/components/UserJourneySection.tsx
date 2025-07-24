"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  AlertCircle,
  Lightbulb,
  Rocket,
  TrendingUp,
  Clock,
  MessageSquareX,
  Sparkles,
  CheckCircle,
  Heart,
  Frown,
  Meh,
  Smile,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneyStage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  metrics: {
    before: string;
    after: string;
    improvement: string;
    value?: number; // For counting animation
  }[];
  emotion: {
    state: string;
    color: string;
    icon: React.ElementType;
    bgGradient: string;
  };
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  painPoints?: string[];
  achievements?: string[];
}

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated && value) {
      setHasAnimated(true);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [value, hasAnimated]);

  return <>{displayValue}{suffix}</>;
}

const journeyStages: JourneyStage[] = [
  {
    id: "chaos",
    title: "The Chaos",
    subtitle: "Before FeedbackSpec",
    duration: "Every single day",
    metrics: [
      {
        before: "20+ hours/week",
        after: "Organizing feedback",
        improvement: "Time wasted",
        value: 20,
      },
      {
        before: "67% features",
        after: "Never used by users",
        improvement: "Development waste",
        value: 67,
      },
      {
        before: "10+ channels",
        after: "Scattered feedback",
        improvement: "Information silos",
        value: 10,
      },
    ],
    emotion: {
      state: "Overwhelmed",
      color: "red",
      icon: Frown,
      bgGradient: "from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20",
    },
    quote: {
      text: "I'm drowning in feedback from Discord, emails, Twitter, Slack... I have no idea what to build next.",
      author: "Past You",
      role: "Struggling Founder",
      company: "Building in the dark",
    },
    painPoints: [
      "Missing critical user feedback",
      "Building features nobody wants",
      "Competitors shipping faster",
      "Losing customers to churn",
    ],
  },
  {
    id: "discovery",
    title: "The Discovery",
    subtitle: "Finding FeedbackSpec",
    duration: "Day 1",
    metrics: [
      {
        before: "5 minutes",
        after: "Complete setup",
        improvement: "Instant start",
        value: 5,
      },
      {
        before: "All feedback",
        after: "Auto-centralized",
        improvement: "Single source",
      },
      {
        before: "First AI spec",
        after: "In 8 minutes",
        improvement: "Mind = Blown",
        value: 8,
      },
    ],
    emotion: {
      state: "Hopeful",
      color: "yellow",
      icon: Lightbulb,
      bgGradient: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20",
    },
    quote: {
      text: "Wait, AI can actually understand my users' feedback and write implementation specs? This changes everything!",
      author: "You, Day 1",
      role: "Curious Founder",
      company: "Ready for change",
    },
    achievements: [
      "All feedback in one place",
      "First AI spec generated",
      "Clear development roadmap",
      "Excitement returning",
    ],
  },
  {
    id: "implementation",
    title: "The Implementation",
    subtitle: "First Week with FeedbackSpec",
    duration: "Days 2-7",
    metrics: [
      {
        before: "3 features",
        after: "Shipped already",
        improvement: "300% faster",
        value: 300,
      },
      {
        before: "92% accuracy",
        after: "User satisfaction",
        improvement: "Features they love",
        value: 92,
      },
      {
        before: "2 hours",
        after: "vs 2 weeks before",
        improvement: "Time to ship",
        value: 2,
      },
    ],
    emotion: {
      state: "Empowered",
      color: "blue",
      icon: Rocket,
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    },
    quote: {
      text: "I just built in 2 hours what used to take 2 weeks. Cursor + FeedbackSpec specs = superpowers!",
      author: "You, Week 1",
      role: "Shipping Machine",
      company: "Features users want",
    },
    achievements: [
      "Shipping daily",
      "Users noticing improvements",
      "Development velocity 3x",
      "Actually enjoying building",
    ],
  },
  {
    id: "transformation",
    title: "The Transformation",
    subtitle: "After 30 Days",
    duration: "Day 30+",
    metrics: [
      {
        before: "+47% MRR",
        after: "Revenue growth",
        improvement: "Users paying more",
        value: 47,
      },
      {
        before: "32% less churn",
        after: "Users staying",
        improvement: "Product-market fit",
        value: 32,
      },
      {
        before: "90% adoption",
        after: "Features used",
        improvement: "Building right things",
        value: 90,
      },
    ],
    emotion: {
      state: "Confident",
      color: "green",
      icon: Star,
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    },
    quote: {
      text: "I'm finally building what users actually pay for. My competitors are asking how I ship so fast!",
      author: "Future You",
      role: "Successful Founder",
      company: "Growing rapidly",
    },
    achievements: [
      "Product-market fit achieved",
      "Revenue growing monthly",
      "Users love your product",
      "Competitors can't keep up",
    ],
  },
];

export function UserJourneySection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Parallax transforms - create them once, not conditionally
  const parallaxX = useTransform(mouseX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(mouseY, [-1, 1], [-5, 5]);
  const bgParallaxX = useTransform(mouseX, [-1, 1], [-30, 30]);
  const bgParallaxY = useTransform(mouseY, [-1, 1], [-30, 30]);
  
  // Scroll-based progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);
  const smoothProgress = useSpring(progressWidth, { stiffness: 100, damping: 30 });

  // Auto-advance stages based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stage = Math.min(Math.floor(latest * 5), 3);
      setActiveStage(stage);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Handle mouse move for parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipeUp = distance > 50;
    const isSwipeDown = distance < -50;

    if (isSwipeUp && activeStage < journeyStages.length - 1) {
      setActiveStage(activeStage + 1);
    }
    if (isSwipeDown && activeStage > 0) {
      setActiveStage(activeStage - 1);
    }
  };

  // Visual hierarchy scaling based on stage position
  const getStageScale = (index: number) => {
    if (index === activeStage) return 1.05;
    if (index < activeStage) return 0.95;
    return 1;
  };

  const getStageOpacity = (index: number) => {
    if (index === activeStage) return 1;
    if (Math.abs(index - activeStage) === 1) return 0.85;
    return 0.7;
  };

  return (
    <section 
      ref={containerRef} 
      className="relative py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Enhanced background decoration with parallax */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{
          x: bgParallaxX,
          y: bgParallaxY,
        }}
      >
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-red-100/50 via-yellow-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-green-100/50 via-blue-100/50 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Floating particles */}
      <AnimatePresence>
        {hoveredStage !== null && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none"
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: `${50 + (i * 10)}%`,
                  y: `${20 + (i * 15)}%`
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [`${20 + (i * 15)}%`, `${10 + (i * 15)}%`]
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              >
                <Sparkles className="w-4 h-4 text-primary/20" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Every Founder's Journey to Product-Market Fit
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how 200+ founders transformed their development process in 30 days
          </p>
        </motion.div>

        {/* Mobile Stage Indicators */}
        <div className="flex justify-center gap-2 mb-8 md:hidden">
          {journeyStages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeStage 
                  ? "w-8 bg-primary" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 via-yellow-500 via-blue-500 to-green-500"
              style={{ height: smoothProgress }}
            />
          </div>

          {/* Journey Stages */}
          <div className="space-y-12 md:space-y-24">
            {journeyStages.map((stage, index) => {
              const isActive = index <= activeStage;
              const EmotionIcon = stage.emotion.icon;

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  animate={{
                    scale: getStageScale(index),
                    opacity: getStageOpacity(index),
                  }}
                  className={cn(
                    "relative transition-all duration-500",
                    index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
                  )}
                  onMouseEnter={() => setHoveredStage(index)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Timeline Node with pulse animation */}
                  <motion.div
                    className={cn(
                      "absolute left-0 md:left-1/2 top-8 w-8 h-8 rounded-full border-4 bg-white -translate-x-1/2 hidden md:flex items-center justify-center",
                      isActive
                        ? "border-primary scale-110 bg-primary"
                        : "border-gray-300 bg-gray-200"
                    )}
                    animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Stage Content */}
                  <Card
                    className={cn(
                      "p-6 md:p-8 transition-all duration-500 relative overflow-hidden",
                      stage.emotion.bgGradient,
                      isActive ? "shadow-xl" : "shadow-md",
                      hoveredStage === index && "shadow-2xl transform -translate-y-1"
                    )}
                  >
                    {/* Gradient border effect on hover */}
                    {hoveredStage === index && (
                      <motion.div
                        className="absolute inset-0 opacity-50"
                        initial={{ background: "transparent" }}
                        animate={{
                          background: [
                            "linear-gradient(0deg, transparent, rgba(59, 130, 246, 0.1))",
                            "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1))",
                            "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.1))",
                            "linear-gradient(270deg, transparent, rgba(59, 130, 246, 0.1))",
                            "linear-gradient(360deg, transparent, rgba(59, 130, 246, 0.1))",
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}

                    {/* Stage Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {stage.duration}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-1">{stage.title}</h3>
                        <p className="text-muted-foreground">{stage.subtitle}</p>
                      </div>
                      <motion.div 
                        className={cn(
                          "w-16 h-16 rounded-full flex items-center justify-center",
                          stage.emotion.color === "red" && "bg-red-100 text-red-600",
                          stage.emotion.color === "yellow" && "bg-yellow-100 text-yellow-600",
                          stage.emotion.color === "blue" && "bg-blue-100 text-blue-600",
                          stage.emotion.color === "green" && "bg-green-100 text-green-600"
                        )}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <EmotionIcon className="w-8 h-8" />
                        <span className="sr-only">{stage.emotion.state}</span>
                      </motion.div>
                    </div>

                    {/* Animated Metrics */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {stage.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isActive ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="text-center p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg cursor-pointer backdrop-blur-sm"
                        >
                          <p className="text-2xl font-bold text-primary">
                            {metric.value ? (
                              <>
                                {metric.before.includes('+') && '+'}
                                <AnimatedCounter value={metric.value} suffix={metric.before.includes('%') ? '%' : ''} />
                                {metric.before.match(/[A-Za-z]+/)?.[0] || ''}
                              </>
                            ) : (
                              metric.before
                            )}
                          </p>
                          <p className="text-sm font-medium">{metric.after}</p>
                          <p className="text-xs text-muted-foreground">
                            {metric.improvement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote with parallax */}
                    <motion.blockquote 
                      ref={(el) => {
                        if (el) quoteRefs.current[index] = el;
                      }}
                      className="mb-6 p-4 bg-white/30 dark:bg-gray-900/30 rounded-lg border-l-4 border-primary/50 backdrop-blur-sm"
                      style={{
                        x: hoveredStage === index ? parallaxX : 0,
                        y: hoveredStage === index ? parallaxY : 0,
                      }}
                    >
                      <p className="text-lg italic mb-2">"{stage.quote.text}"</p>
                      <footer className="text-sm">
                        <strong>{stage.quote.author}</strong>
                        <span className="text-muted-foreground">
                          {" "}
                          - {stage.quote.role}, {stage.quote.company}
                        </span>
                      </footer>
                    </motion.blockquote>

                    {/* Pain Points or Achievements with stagger animation */}
                    {stage.painPoints && (
                      <div className="space-y-2">
                        <p className="font-semibold text-red-700 mb-2">Pain Points:</p>
                        {stage.painPoints.map((point, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isActive ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="text-sm">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {stage.achievements && (
                      <div className="space-y-2">
                        <p className="font-semibold text-green-700 mb-2">Achievements:</p>
                        {stage.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isActive ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation hints for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center items-center gap-4 mt-12 md:hidden"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Swipe to navigate
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}