"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Rocket,
  Sparkles,
  Shield,
  Users,
  Zap,
  Trophy,
  Star,
  Code2,
  Terminal,
  GitBranch,
  Activity,
  TrendingUp,
  Lock,
  Award,
  Play,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Live activity feed data
const ACTIVITY_FEED = [
  {
    name: "Alex Chen",
    action: "just hit $10k MRR",
    time: "2 min ago",
    mrr: "$10k",
  },
  {
    name: "Sarah Rodriguez",
    action: "shipped 3 user-requested features",
    time: "5 min ago",
    mrr: "$8.5k",
  },
  {
    name: "Marcus Thompson",
    action: "reduced churn by 32%",
    time: "12 min ago",
    mrr: "$15k",
  },
  {
    name: "David Park",
    action: "launched v2.0 based on feedback",
    time: "18 min ago",
    mrr: "$22k",
  },
  {
    name: "Lisa Chen",
    action: "found product-market fit",
    time: "23 min ago",
    mrr: "$31k",
  },
  {
    name: "Mike Davis",
    action: "grew 47% this month",
    time: "28 min ago",
    mrr: "$18k",
  },
];

// Floating spec component
function FloatingSpec({ delay = 0 }: { delay?: number }) {
  const [mounted, setMounted] = React.useState(false);
  const [specIndex] = React.useState(() => delay % 3);
  const [initialX] = React.useState(() => (delay * 67) % 200 - 100);
  const [animateX] = React.useState(() => (delay * 43) % 100 - 50);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const specs = [
    "// FEATURE: Advanced Search\n// Priority: HIGH\n// Revenue Impact: +$2.4k MRR",
    "/* User Dashboard Redesign\n * 156 users requested\n * Est. 32% churn reduction */",
    "// Mobile App MVP\n// 89% of users want this\n// $5k MRR opportunity",
  ];

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, x: initialX }}
      animate={{
        opacity: [0, 0.7, 0],
        y: [-100, -300, -500],
        x: animateX,
      }}
      transition={{
        duration: 15,
        delay,
        ease: "easeOut",
        repeat: Infinity,
      }}
      className="absolute pointer-events-none"
    >
      <pre className="text-xs text-primary/30 font-mono whitespace-pre">
        {specs[specIndex]}
      </pre>
    </motion.div>
  );
}

// Live activity ticker
function ActivityTicker() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ACTIVITY_FEED.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center gap-2 text-sm"
        >
          <Activity className="w-4 h-4 text-green-500" />
          <span className="font-semibold">
            {ACTIVITY_FEED[currentIndex].name}
          </span>
          <span className="text-muted-foreground">
            {ACTIVITY_FEED[currentIndex].action}
          </span>
          <Badge variant="secondary" className="text-xs">
            {ACTIVITY_FEED[currentIndex].mrr} MRR
          </Badge>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Interactive launch button
function LaunchButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
    props.onClick?.(e);
  };

  return (
    <div className="relative">
      {/* Launch particles */}
      <AnimatePresence>
        {isClicked && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 1,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: 0,
                  scale: (i % 3) + 1,
                  x: ((i * 37) % 200) - 100,
                  y: -((i * 23) % 200) - 50,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: i * 0.02,
                  ease: "easeOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Launch pad effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl rounded-full" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 w-2 h-8 bg-primary/50 rounded-full -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-2 h-8 bg-primary/50 rounded-full -translate-x-1/2" />
              <div className="absolute left-0 top-1/2 w-8 h-2 bg-primary/50 rounded-full -translate-y-1/2" />
              <div className="absolute right-0 top-1/2 w-8 h-2 bg-primary/50 rounded-full -translate-y-1/2" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        {...props}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative z-10 transition-all duration-300",
          isHovered && "scale-105",
          isClicked && "scale-95"
        )}
      >
        <motion.div
          animate={isClicked ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {children}
          <motion.div
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isClicked ? (
              <Rocket className="w-5 h-5" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </motion.div>
        </motion.div>
      </Button>

      {/* Countdown */}
      <AnimatePresence>
        {isHovered && !isClicked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap"
          >
            <span className="font-mono">LAUNCH IN T-3...2...1...</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Trust indicators
function TrustIndicators() {
  const indicators = [
    { icon: Shield, text: "SOC 2 Compliant" },
    { icon: Lock, text: "Bank-level Security" },
    { icon: Award, text: "Product Hunt #1" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {indicators.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <item.icon className="w-4 h-4" />
          <span>{item.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

// Main CTA Component
export function FeedbackSpecCTA() {
  const [spotsLeft, setSpotsLeft] = React.useState(47);
  const [specsGenerated, setSpecsGenerated] = React.useState(1247);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Dynamic background movement
  const backgroundX = useTransform(mouseX, [0, 1000], [-50, 50]);
  const backgroundY = useTransform(mouseY, [0, 1000], [-50, 50]);
  const smoothBackgroundX = useSpring(backgroundX, {
    stiffness: 50,
    damping: 20,
  });
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 50,
    damping: 20,
  });

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Simulate live updates
  React.useEffect(() => {
    const counter = { value: 0 };
    const interval = setInterval(() => {
      counter.value += 1;
      setSpecsGenerated((prev) => prev + ((counter.value % 3) + 1));
      if (counter.value % 3 === 0) {
        setSpotsLeft((prev) => Math.max(prev - 1, 0));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-32 bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: smoothBackgroundX,
          y: smoothBackgroundY,
        }}
      >
        {/* Floating specs */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <FloatingSpec key={i} delay={i * 3} />
          ))}
        </div>

        {/* Grid with gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Radial gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-blue-400/5 to-blue-600/5 rounded-full blur-3xl" />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
          >
            <span className="block">Stop Building in the Dark.</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Start Shipping What Users Pay For.
            </span>
          </motion.h2>

          {/* The Choice is Simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8">The Choice is Simple:</h3>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* Keep Struggling */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200"
              >
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-900">
                  Keep Struggling:
                </h4>
                <ul className="space-y-3 text-left">
                  {[
                    "Drown in scattered feedback",
                    "Spend hours writing specs manually",
                    "Build features nobody wants",
                    "Watch competitors ship faster",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Or Transform Today */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200"
              >
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-900">
                  Or Transform Today:
                </h4>
                <ul className="space-y-3 text-left">
                  {[
                    "Centralize all feedback automatically",
                    "Generate AI-ready specs in minutes",
                    "Ship exactly what drives revenue",
                    "Dominate your market with speed",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <LaunchButton
              size="lg"
              className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
            >
              Start Free Trial
            </LaunchButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
