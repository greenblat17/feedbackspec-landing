"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import {
  Zap,
  Target,
  MessageSquare,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Brain,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Rocket,
  Heart,
  Code2,
  Terminal,
  GitBranch,
  Timer,
  Gauge,
  Activity,
  ChevronRight,
  Play,
  Pause,
  RotateCw,
  X,
  TrendingDown,
  FileCode,
  Cpu,
  Database,
  Layers,
  Copy,
  Award,
  LineChart,
  UserCheck,
  Package,
  Crosshair,
  Trophy,
} from "lucide-react";
import {
  designSystem,
  getSpring,
  animationVariants,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(end * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

// Import components
import { InteractiveTransformation } from "./InteractiveTransformation";
import { WallOfLove } from "./WallOfLove";
import { CareerTimeline } from "./CareerTimeline";
import { ComparisonTable } from "./ComparisonTable";

// Main Component
export default function FeedbackSpecBenefitsEnhanced() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-primary/3 to-blue-500/3 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Chaos into
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Crystal-Clear Specifications
            </span>
          </h2>

          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform from overwhelmed to unstoppable. Master feedback
            collection, AI development, and revenue-focused building with
            FeedbackSpec's complete platform.
          </p>
        </motion.div>

        {/* Three Core Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Benefit 1: Feature Shipping Velocity Master */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-blue-100">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">
                  Benefit #1: Become a Feature Shipping Velocity Master
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      From 20 hours to 20 minutes:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      AI organizes and prioritizes all feedback automatically
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      From 1-2 features to 8+ features monthly:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Clear roadmap of exactly what to build
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">From guessing to knowing:</p>
                    <p className="text-sm text-muted-foreground">
                      Data-driven decisions based on revenue impact, not volume
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">From reactive to proactive:</p>
                    <p className="text-sm text-muted-foreground">
                      Build features that convert feedback into paying customers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      From competitor follower to market leader:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ship what users want before competitors even know they
                      want it
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Benefit 2: Master AI-Powered Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-purple-100">
                  <Code2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">
                  Benefit #2: Master AI-Powered Development Like a Pro
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileCode className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      Perfect AI specifications every time:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      No more generic prompts that produce mediocre code
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      Cursor/Claude Code optimization:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Pre-written prompts that generate production-ready
                      features
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      Technical architecture included:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Frontend, backend, database, and performance requirements
                      spelled out
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Copy className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Copy-paste development:</p>
                    <p className="text-sm text-muted-foreground">
                      From user complaint to shipped feature in the same day
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Quality code guaranteed:</p>
                    <p className="text-sm text-muted-foreground">
                      Detailed acceptance criteria ensure your AI tools generate
                      exactly what you need
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Benefit 3: Build What Drives Revenue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-green-100">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">
                  Benefit #3: Build Exactly What Drives Revenue Growth
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      Revenue-focused prioritization:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      AI identifies which features will actually increase MRR
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      User satisfaction explosion:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ship features users are already asking for
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Churn reduction automatic:</p>
                    <p className="text-sm text-muted-foreground">
                      Solve real user problems instead of imaginary ones
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Crosshair className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      Product-market fit acceleration:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Clear signal of what users will pay for
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      Competitive advantage sustained:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Always building one step ahead of market demands
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Visual separator */}
        <div className="flex justify-center mb-20 lg:mb-24">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Career Timeline */}
        <div className="mb-20 lg:mb-24">
          <CareerTimeline />
        </div>

        {/* Visual separator */}
        <div className="flex justify-center mb-20 lg:mb-24">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Interactive Transformation */}
        <div className="mb-20 lg:mb-24">
          <InteractiveTransformation />
        </div>

        {/* Visual separator */}
        <div className="flex justify-center mb-20 lg:mb-24">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20 lg:mb-24">
          <ComparisonTable />
        </div>

        {/* Visual separator */}
        <div className="flex justify-center mb-20 lg:mb-24">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Wall of Love - Testimonials */}
        <div className="mb-20 lg:mb-24">
          <WallOfLove />
        </div>
      </div>
    </section>
  );
}
