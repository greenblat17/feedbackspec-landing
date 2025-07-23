"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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

// Interactive Spec Machine Component
function SpecMachine() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const sampleFeedback = [
    "The search is terrible, I can never find anything",
    "Need bulk operations for managing multiple items",
    "Dashboard takes forever to load with large datasets",
    "Can't integrate with our existing workflow tools",
  ];
  
  const steps = [
    { label: "Collecting feedback", icon: MessageSquare, duration: 2000 },
    { label: "AI analysis", icon: Brain, duration: 1500 },
    { label: "Generating spec", icon: Code2, duration: 2500 },
    { label: "Cursor-ready!", icon: Terminal, duration: 1000 },
  ];
  
  const handleProcess = () => {
    setIsProcessing(true);
    setShowResult(false);
    setCurrentStep(0);
    
    steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsProcessing(false);
            setShowResult(true);
          }, step.duration);
        }
      }, steps.slice(0, index).reduce((acc, s) => acc + s.duration, 0));
    });
  };
  
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8">
      <h3 className="text-2xl font-bold text-center mb-8">
        Experience FeedbackScout: The AI Code Specification Engine
      </h3>
      
      <div className="relative">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-6 border border-blue-200">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Sample User Feedback
            </h4>
            <div className="space-y-2">
              {sampleFeedback.map((feedback, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-md"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{feedback}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Processing Animation */}
        <AnimatePresence mode="wait">
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center z-10"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-4"
                >
                  {React.createElement(steps[Math.min(currentStep, steps.length - 1)]?.icon || Brain, {
                    className: "w-16 h-16 text-primary"
                  })}
                </motion.div>
                <p className="text-lg font-semibold">
                  {steps[Math.min(currentStep, steps.length - 1)]?.label || "Processing..."}
                </p>
                <div className="mt-4 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Result */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border border-green-200"
            >
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-green-600" />
                AI-Ready Specification Generated
              </h4>
              <pre className="bg-black text-green-400 p-4 rounded-md text-xs overflow-x-auto">
                <code>{`FEATURE SPECIFICATION: Advanced Search System

Technical Architecture:
- Elasticsearch/PostgreSQL full-text search with real-time autocomplete
- React search component with useDebounce hook
- Node.js API with Redis caching layer

Ready AI Prompts for Cursor/Claude:
"Create a React search component with:
 - Real-time autocomplete using useDebounce (300ms)
 - Elasticsearch query builder for fuzzy matching
 - Highlight matched terms in results
 - Handle edge cases: empty state, no results, errors"

Acceptance Criteria:
- Search results load in <200ms
- Autocomplete triggers after 2+ characters
- Fuzzy matching with 80% threshold
- Support for filters and sorting

Complexity: 8 hours with AI assistance
Business Impact: Reduce search abandonment by 40%`}</code>
              </pre>
              <div className="mt-4 flex items-center justify-between">
                <Badge variant="secondary" className="text-sm">
                  <Timer className="w-4 h-4 mr-1" />
                  Generated in 8 seconds
                </Badge>
                <Button size="sm" className="gap-2">
                  Copy to Cursor <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Action Button */}
        <motion.div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={handleProcess}
            disabled={isProcessing}
            className="gap-2"
          >
            {isProcessing ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <RotateCw className="w-5 h-5" />
                </motion.div>
                Processing...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Transform Feedback to Spec
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// Living Metrics Dashboard
function MetricsDashboard() {
  const metrics = [
    { label: "Features Shipped", value: useAnimatedCounter(47, 3000), icon: Rocket, color: "text-blue-600" },
    { label: "Time Saved", value: useAnimatedCounter(312, 3000), suffix: " hrs", icon: Clock, color: "text-green-600" },
    { label: "Revenue Added", value: useAnimatedCounter(24, 3000), prefix: "$", suffix: "k", icon: TrendingUp, color: "text-purple-600" },
    { label: "Happy Users", value: useAnimatedCounter(892, 3000), icon: Heart, color: "text-pink-600" },
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, idx) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={cn("inline-flex p-3 rounded-xl bg-gray-50 mb-2", metric.color)}
          >
            <metric.icon className="w-6 h-6" />
          </motion.div>
          <div className="text-3xl font-bold">
            {metric.prefix}{metric.value}{metric.suffix}
          </div>
          <p className="text-sm text-muted-foreground">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Transformation Timeline Component
function TransformationTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  
  const timelineStages = [
    {
      month: "Before",
      title: "Manual Spec Hell",
      mrr: "3 hrs/spec",
      pain: "$400-600 cost per feature",
      icon: Clock,
      color: "from-gray-500 to-gray-600",
    },
    {
      month: "Day 1",
      title: "FeedbackScout Activated",
      mrr: "8 min/spec",
      gain: "First AI spec generated instantly",
      icon: Rocket,
      color: "from-blue-500 to-blue-600",
    },
    {
      month: "Week 1",
      title: "3x Velocity Achieved",
      mrr: "5 features/week",
      gain: "AI code quality dramatically improved",
      icon: Zap,
      color: "from-blue-600 to-blue-700",
    },
    {
      month: "Month 1",
      title: "Market Domination",
      mrr: "+47% MRR",
      gain: "Shipping exactly what users pay for",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
  ];
  
  return (
    <div ref={timelineRef} className="relative py-16">
      <h3 className="text-3xl font-bold text-center mb-12">
        Your AI Development Transformation
      </h3>
      
      {/* Progress Line */}
      <div className="absolute left-1/2 top-24 bottom-0 w-1 bg-gray-200 -translate-x-1/2" />
      <motion.div
        className="absolute left-1/2 top-24 w-1 bg-primary -translate-x-1/2"
        style={{
          height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        }}
      />
      
      {/* Timeline Stages */}
      <div className="relative space-y-24">
        {timelineStages.map((stage, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={cn(
              "relative grid md:grid-cols-2 gap-8 items-center",
              idx % 2 === 0 ? "md:text-right" : "md:text-left"
            )}
          >
            {/* Content */}
            <div className={cn(
              "space-y-4",
              idx % 2 === 0 ? "md:order-1" : "md:order-2"
            )}>
              <Badge variant="secondary" className="inline-block">
                {stage.month}
              </Badge>
              <h4 className="text-2xl font-bold">{stage.title}</h4>
              <div className={cn(
                "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                stage.color
              )}>
                {stage.mrr}
              </div>
              <p className="text-muted-foreground">
                {stage.pain || stage.gain}
              </p>
            </div>
            
            {/* Icon */}
            <div className={cn(
              "flex justify-center",
              idx % 2 === 0 ? "md:order-2" : "md:order-1"
            )}>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={cn(
                  "relative p-6 rounded-full bg-gradient-to-br text-white",
                  stage.color
                )}
              >
                <stage.icon className="w-12 h-12" />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59,130,246,0)",
                      "0 0 0 20px rgba(59,130,246,0.1)",
                      "0 0 0 40px rgba(59,130,246,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Interactive ROI Calculator
function ROICalculator() {
  const [currentMRR, setCurrentMRR] = useState(10000);
  const [feedbackHours, setFeedbackHours] = useState(20);
  const [showProjection, setShowProjection] = useState(false);
  
  // Calculate projections
  const hoursSaved = feedbackHours * 0.9; // 90% time reduction
  const projectedMRR = currentMRR * 1.47; // 47% average increase
  const monthlyValue = hoursSaved * 100; // $100/hour opportunity cost
  
  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Calculate Your AI Development ROI
      </h3>
      
      <div className="space-y-6">
        {/* Input Fields */}
        <div>
          <label className="text-sm font-medium mb-2 block">
            Your Current MRR
          </label>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">$</span>
            <Slider
              value={[currentMRR]}
              onValueChange={([value]) => setCurrentMRR(value)}
              min={1000}
              max={100000}
              step={1000}
              className="flex-1"
            />
            <span className="text-2xl font-bold w-24 text-right">
              {currentMRR.toLocaleString()}
            </span>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">
            Hours/Week Managing Feedback
          </label>
          <div className="flex items-center gap-4">
            <Slider
              value={[feedbackHours]}
              onValueChange={([value]) => setFeedbackHours(value)}
              min={5}
              max={40}
              step={1}
              className="flex-1"
            />
            <span className="text-2xl font-bold w-24 text-right">
              {feedbackHours} hrs
            </span>
          </div>
        </div>
        
        {/* Calculate Button */}
        <motion.div className="text-center">
          <Button
            size="lg"
            onClick={() => setShowProjection(true)}
            className="gap-2"
          >
            <BarChart3 className="w-5 h-5" />
            Show My Projection
          </Button>
        </motion.div>
        
        {/* Results */}
        <AnimatePresence>
          {showProjection && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 pt-6 border-t"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center p-4 bg-white rounded-lg"
                >
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-blue-600">
                    {Math.round(hoursSaved)} hrs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Saved Monthly
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="text-center p-4 bg-white rounded-lg"
                >
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-green-600">
                    ${Math.round(projectedMRR).toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Projected MRR
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="text-center p-4 bg-white rounded-lg"
                >
                  <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-purple-600">
                    ${Math.round(monthlyValue).toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monthly Value
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center pt-4"
              >
                <p className="text-lg font-semibold">
                  FeedbackScout pays for itself in{" "}
                  <span className="text-primary">2.3 days</span>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}

// Main Component
export default function FeedbackSpecBenefitsEnhanced() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            The AI Code Specification Engine
          </Badge>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform from "Feedback Organizer" to
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              AI Specification Generator
            </span>
          </h2>

          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            While competitors organize feedback, you generate the fuel that powers elite AI development velocity.
            This isn't just a productivity tool - it's your secret weapon for AI-powered market dominance.
          </p>
        </motion.div>

        {/* Living Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Elite AI Developers Already Dominating
          </h3>
          <MetricsDashboard />
        </motion.div>

        {/* Interactive Spec Machine */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border"
        >
          <SpecMachine />
        </motion.div>

        {/* Transformation Timeline */}
        <TransformationTimeline />

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <ROICalculator />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-lg text-muted-foreground mb-6">
            <Users className="w-5 h-5" />
            <span>
              Join <span className="font-bold text-foreground">2,847 founders</span> shipping faster with AI
            </span>
          </div>
          
          <Button size="lg" className="gap-2">
            Start Your Transformation
            <ArrowRight className="w-4 h-4" />
          </Button>
          
          <p className="mt-4 text-sm text-muted-foreground">
            14-day free trial • No credit card required • Setup in 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}