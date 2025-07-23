"use client";

import * as React from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
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
} from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Live activity feed data
const ACTIVITY_FEED = [
  { name: "Sarah Chen", action: "shipped 3 features", time: "2 min ago", mrr: "$12k" },
  { name: "Alex Kumar", action: "generated 5 specs", time: "5 min ago", mrr: "$8k" },
  { name: "Mike Johnson", action: "increased MRR by $2.1k", time: "12 min ago", mrr: "$24k" },
  { name: "Lisa Wang", action: "shipped dark mode", time: "18 min ago", mrr: "$15k" },
  { name: "David Park", action: "automated feedback flow", time: "23 min ago", mrr: "$31k" },
  { name: "Emma Davis", action: "launched 2 features", time: "28 min ago", mrr: "$19k" },
];

// Floating spec component
function FloatingSpec({ delay = 0 }: { delay?: number }) {
  const specs = [
    "// Feature: User Dashboard\n// Priority: HIGH\n// MRR Impact: +$2.3k",
    "/* API Integration\n * Requested by 15 users\n * Est. time: 2 days */",
    "// Export to CSV\n// Quick win feature\n// 30 min implementation",
  ];
  
  const randomSpec = specs[Math.floor(Math.random() * specs.length)];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, x: Math.random() * 200 - 100 }}
      animate={{
        opacity: [0, 0.7, 0],
        y: [-100, -300, -500],
        x: Math.random() * 100 - 50,
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
        {randomSpec}
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
          <span className="font-semibold">{ACTIVITY_FEED[currentIndex].name}</span>
          <span className="text-muted-foreground">{ACTIVITY_FEED[currentIndex].action}</span>
          <Badge variant="secondary" className="text-xs">
            {ACTIVITY_FEED[currentIndex].mrr} MRR
          </Badge>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Interactive launch button
function LaunchButton({ children, ...props }: React.ComponentProps<typeof Button>) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
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
                  y: 0
                }}
                animate={{ 
                  opacity: 0,
                  scale: Math.random() * 2 + 1,
                  x: (Math.random() - 0.5) * 200,
                  y: Math.random() * -200 - 50,
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: i * 0.02,
                  ease: "easeOut"
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
            {isClicked ? <Rocket className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
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
  const smoothBackgroundX = useSpring(backgroundX, { stiffness: 50, damping: 20 });
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 50, damping: 20 });
  
  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  
  // Simulate live updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSpecsGenerated(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setSpotsLeft(prev => Math.max(prev - 1, 0));
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
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Live activity ticker */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <ActivityTicker />
          </motion.div>
          
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <Badge 
              variant="secondary"
              className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20"
            >
              <Clock className="w-4 h-4 mr-2" />
              Only {spotsLeft} spots left this week
            </Badge>
          </motion.div>
          
          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block">Ready to Join</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              The Shipping Revolution?
            </span>
          </motion.h2>
          
          {/* Sub-headline with live stats */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Join <span className="font-bold text-foreground">{specsGenerated.toLocaleString()}</span> specs generated this week.
            Your competitors are already shipping 3x faster.
          </motion.p>
          
          {/* Success metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: Rocket, value: "8 min", label: "to first spec" },
              { icon: TrendingUp, value: "47%", label: "avg MRR increase" },
              { icon: Users, value: "2,847", label: "founders shipping" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <LaunchButton size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              Start Free Trial
            </LaunchButton>
            
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg bg-white/50 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch 2-Min Demo
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <TrustIndicators />
          </motion.div>
          
          {/* Final urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            <p className="mb-2">
              🔥 <span className="font-semibold">Limited time:</span> Next 50 signups get lifetime priority support
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              14-day free trial • No credit card • 5-minute setup
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}