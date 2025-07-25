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


// Main Component
export default function FeedbackSpecBenefitsEnhanced() {
  return (
    <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-x-hidden">
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
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Transform Chaos into
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Crystal-Clear Specifications
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Transform from overwhelmed to unstoppable. Master feedback
            collection, AI development, and revenue-focused building with
            FeedbackSpec's complete platform.
          </p>
        </motion.div>

        {/* Three Core Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Benefit 1: Feature Shipping Velocity Master */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <Card className="h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-2 border-blue-500/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <Rocket className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-500" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Benefit #1: Become a Feature Shipping Velocity Master
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      From 20 hours to 20 minutes:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      AI organizes and prioritizes all feedback automatically
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      From 1-2 features to 8+ features monthly:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Clear roadmap of exactly what to build
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">From guessing to knowing:</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Data-driven decisions based on revenue impact, not volume
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">From reactive to proactive:</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Build features that convert feedback into paying customers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      From competitor follower to market leader:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
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
            <Card className="h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-2 border-purple-500/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Code2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-500" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Benefit #2: Master AI-Powered Development Like a Pro
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileCode className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Perfect AI specifications every time:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      No more generic prompts that produce mediocre code
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Cursor/Claude Code optimization:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Pre-written prompts that generate production-ready
                      features
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Technical architecture included:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Frontend, backend, database, and performance requirements
                      spelled out
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Copy className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Copy-paste development:</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      From user complaint to shipped feature in the same day
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Quality code guaranteed:</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
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
            <Card className="h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-green-500/5 to-blue-500/5 border-2 border-green-500/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-green-500/10">
                  <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-500" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Benefit #3: Build Exactly What Drives Revenue Growth
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Revenue-focused prioritization:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      AI identifies which features will actually increase MRR
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      User satisfaction explosion:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Ship features users are already asking for
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Churn reduction automatic:</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Solve real user problems instead of imaginary ones
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Crosshair className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Product-market fit acceleration:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Clear signal of what users will pay for
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Competitive advantage sustained:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Always building one step ahead of market demands
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
