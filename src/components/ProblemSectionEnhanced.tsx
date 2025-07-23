"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setMissed((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="relative h-32 mb-8">
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

// Interactive timeline component
function FounderJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const stages = [
    {
      title: "Month 1: The Dream",
      mood: "😊",
      time: "$1k MRR",
      feedback: "12 great ideas",
      status: "Excited to build everything!",
    },
    {
      title: "Month 3: The Chaos",
      mood: "😰",
      time: "$3k MRR",
      feedback: "287 unread messages",
      status: "Which feature was important?",
    },
    {
      title: "Month 6: The Burnout",
      mood: "😵",
      time: "$5k MRR",
      feedback: "Lost in Notion/Trello/Slack",
      status: "Building features nobody uses",
    },
    {
      title: "Month 9: The Breaking Point",
      mood: "💀",
      time: "$4k MRR",
      feedback: "Competitors shipping faster",
      status: "Churn increasing, motivation gone",
    },
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newStage = Math.min(
        Math.floor(latest * stages.length),
        stages.length - 1
      );
      setActiveStage(Math.max(0, newStage));
    });
    return () => unsubscribe();
  }, [scrollYProgress, stages.length]);

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">
            {stages[activeStage]?.mood || "😊"}
          </div>
          <h3 className="text-2xl font-bold mb-2">
            {stages[activeStage]?.title || "Month 1: The Dream"}
          </h3>
          <div className="space-y-2 text-muted-foreground">
            <p>
              Time:{" "}
              <span
                className={cn(
                  "font-bold",
                  activeStage > 1 ? "text-muted-foreground" : "text-primary"
                )}
              >
                {stages[activeStage]?.time || "9:00 AM"}
              </span>
            </p>
            <p>{stages[activeStage]?.feedback || "12 great ideas"}</p>
            <p className="text-lg italic">
              "{stages[activeStage]?.status || "Excited to build everything!"}"
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
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
    <section
      className="relative min-h-screen py-24 overflow-hidden bg-white"
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

      <div className="container relative mx-auto px-6 max-w-7xl">
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
              <div className="p-4 rounded-full bg-gradient-to-br from-red-100 to-purple-100">
                <AlertTriangle className="w-16 h-16 text-accent-orange" />
              </div>
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

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">The Founder's</span>
            <br />
            <span className="text-primary">
              Double Nightmare
            </span>
          </h2>

          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            You have two problems killing your growth:
            <span className="font-bold text-foreground">
              scattered feedback chaos
            </span>{" "}
            AND{" "}
            <span className="font-bold text-foreground">
              slow feature development
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

        {/* Interactive Founder Journey */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20"
        >
          <h3 className="text-2xl font-bold text-center mb-2">
            The Founder's Journey
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Scroll to see how feedback chaos destroys momentum
          </p>
          <FounderJourney />
        </motion.div>

        {/* The Double Problem - Split Screen Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem 1: Feedback Hell */}
            <motion.article
              aria-label="Problem 1: Feedback Hell"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <Card className="relative h-full p-8 overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 border-2 border-red-200 transition-shadow duration-300 hover:shadow-xl">

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <div className="p-3 rounded-full bg-gradient-to-br from-red-100 to-orange-100">
                      <AlertTriangle className="w-8 h-8 text-accent-orange" />
                    </div>
                    Problem #1: Feedback Hell
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
                        <p className="font-semibold text-lg">20+ sources</p>
                        <p className="text-muted-foreground">
                          Twitter, email, Discord, GitHub, Slack...
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
                        <p className="font-semibold text-lg">
                          Zero organization
                        </p>
                        <p className="text-muted-foreground">
                          Lost in threads and notifications
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
                        <p className="font-semibold text-lg">
                          No prioritization
                        </p>
                        <p className="text-muted-foreground">
                          Building features nobody wants
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
                        <p className="font-semibold text-lg">Time vampire</p>
                        <p className="text-muted-foreground">
                          15+ hours weekly just organizing
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Feedback Flow Visualization */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">
                      Where Your Feedback Goes:
                    </h4>
                    <FeedbackFlow />
                  </div>

                  {/* Floating platform icons */}
                  <div className="absolute top-4 right-4 opacity-20">
                    {[Twitter, Mail, Github, Slack].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute"
                        animate={{
                          x: Math.sin(idx * 1.5) * 30,
                          y: Math.cos(idx * 1.5) * 30,
                        }}
                        transition={{
                          duration: 5 + idx,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Icon className="w-6 h-6 text-red-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.article>

            {/* Problem 2: Slow Development */}
            <motion.article
              aria-label="Problem 2: Slow Development"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <Card className="relative h-full p-8 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 border-2 border-purple-200 transition-shadow duration-300 hover:shadow-xl">

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-blue-100">
                      <Timer className="w-8 h-8 text-primary" />
                    </div>
                    Problem #2: Slow Development
                  </h3>

                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">Manual specs</p>
                        <p className="text-muted-foreground">
                          3+ hours writing specifications
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">Generic prompts</p>
                        <p className="text-muted-foreground">
                          AI tools need perfect input
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">
                          Context switching
                        </p>
                        <p className="text-muted-foreground">
                          From feedback to code requirements
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">
                          Missed opportunities
                        </p>
                        <p className="text-muted-foreground">
                          Competitors shipping faster
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Developer Flow Visualization */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">
                      How You Spend Your Time:
                    </h4>
                    <div className="relative h-32">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="opacity-20"
                        >
                          <Code2 className="w-24 h-24 text-purple-400" />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">
                              80%
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Writing specs manually
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.article>
          </div>

          {/* The Connection - Killer Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <Card className="p-8 bg-gradient-to-r from-orange-50 via-white to-orange-50/30 border-2 border-accent-orange transition-shadow duration-300 hover:shadow-xl">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block mb-4"
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-accent-orange/20 to-accent-coral/20">
                    <Lightbulb className="w-12 h-12 text-accent-orange" />
                  </div>
                </motion.div>

                <h4 className="text-2xl font-bold mb-4">The Killer Insight</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  These problems are connected.
                  <span className="font-semibold text-foreground">
                    {" "}
                    Bad feedback organization
                  </span>{" "}
                  =
                  <span className="font-semibold text-foreground">
                    {" "}
                    bad development priorities
                  </span>{" "}
                  =
                  <span className="font-semibold text-foreground">
                    {" "}
                    wasted AI coding potential
                  </span>
                  .
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Founder Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Real Founders, Real Pain
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {FOUNDER_TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-white to-gray-50 border-gray-200 transition-shadow duration-300 hover:shadow-xl">
                  <Quote className="w-8 h-8 text-accent-orange/30 mb-4" />
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.mrr}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                The Real Cost of <span className="text-primary">Feedback Chaos</span>
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
    </section>
  );
}
