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
  X,
  TrendingDown,
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
        See The Magic in Action
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
                Product Specification Generated
              </h4>
              <pre className="bg-black text-green-400 p-4 rounded-md text-xs overflow-x-auto">
                <code>{`FEATURE SPECIFICATION: Advanced Search System

Priority: HIGH (47% of users affected)
Revenue Impact: +$2,400 MRR

User Stories:
- As a user, I want to find products quickly
- Search should be forgiving of typos
- Results should load instantly

Technical Requirements:
- Implement full-text search
- Add autocomplete functionality
- Optimize for <200ms response time

Acceptance Criteria:
✓ Search works with partial matches
✓ Handles typos gracefully
✓ Shows relevant results first
✓ Mobile-responsive design

Estimated effort: 21 hours
ROI: 3.2x in first month`}</code>
              </pre>
              <div className="mt-4 flex items-center justify-between">
                <Badge variant="secondary" className="text-sm">
                  <Timer className="w-4 h-4 mr-1" />
                  Generated in 8 seconds
                </Badge>
                <Button size="sm" className="gap-2">
                  Export to Jira <ArrowRight className="w-4 h-4" />
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
    { label: "Features Shipped", value: useAnimatedCounter(156, 3000), icon: Rocket, color: "text-blue-600" },
    { label: "Time Saved", value: useAnimatedCounter(892, 3000), suffix: " hrs", icon: Clock, color: "text-green-600" },
    { label: "Revenue Growth", value: useAnimatedCounter(47, 3000), suffix: "%", icon: TrendingUp, color: "text-purple-600" },
    { label: "Active Users", value: useAnimatedCounter(523, 3000), icon: Heart, color: "text-pink-600" },
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
            {metric.value}{metric.suffix || ''}
          </div>
          <p className="text-sm text-muted-foreground">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Transformation Timeline Component
function TransformationTimeline() {
  const timelineStages = [
    {
      period: "Before FeedbackSpec",
      items: [
        { icon: Clock, text: "15+ hours weekly organizing feedback", color: "text-red-600" },
        { icon: Timer, text: "3+ hours writing each specification manually", color: "text-red-600" },
        { icon: X, text: "Building features users don't want", color: "text-red-600" },
        { icon: TrendingDown, text: "Competitors shipping faster", color: "text-red-600" },
      ],
      bgColor: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
    },
    {
      period: "After FeedbackSpec",
      items: [
        { icon: Zap, text: "5 minutes to process all feedback", color: "text-green-600" },
        { icon: Rocket, text: "8 minutes to generate AI-ready specs", color: "text-green-600" },
        { icon: Target, text: "Building exactly what drives revenue", color: "text-green-600" },
        { icon: TrendingUp, text: "3x faster feature shipping", color: "text-green-600" },
      ],
      bgColor: "from-green-50 to-blue-50",
      borderColor: "border-green-200",
    },
  ];
  
  return (
    <div className="relative py-16">
      <h3 className="text-3xl font-bold text-center mb-12">
        Your Transformation Timeline
      </h3>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {timelineStages.map((stage, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Card className={cn(
              "h-full p-8 bg-gradient-to-br",
              stage.bgColor,
              stage.borderColor,
              "border-2"
            )}>
              <h4 className="text-2xl font-bold mb-6">{stage.period}</h4>
              <div className="space-y-4">
                {stage.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * itemIdx }}
                    className="flex items-start gap-3"
                  >
                    <div className={cn(
                      "p-2 rounded-lg",
                      idx === 0 ? "bg-red-100" : "bg-green-100"
                    )}>
                      <item.icon className={cn("w-5 h-5", item.color)} />
                    </div>
                    <p className="text-base leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Arrow Animation */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary"
        >
          <ChevronRight className="w-12 h-12" />
        </motion.div>
      </div>
    </div>
  );
}

// Interactive ROI Calculator
function ROICalculator() {
  const [feedbackSources, setFeedbackSources] = useState(10);
  const [feedbackHours, setFeedbackHours] = useState(15);
  const [featuresShipped, setFeaturesShipped] = useState(3);
  const [currentMRR, setCurrentMRR] = useState(5000);
  const [showResults, setShowResults] = useState(false);
  
  // Calculate with FeedbackSpec
  const timeSavedMonthly = 47; // hours
  const additionalFeatures = 8; // features
  const projectedMRRGrowth = 4200; // dollars
  const toolInvestment = 49; // dollars/month
  const roi = Math.round((projectedMRRGrowth - toolInvestment) / toolInvestment * 100);
  
  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Interactive ROI Calculator
      </h3>
      
      <div className="space-y-8">
        {/* Your Current Situation */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Your Current Situation:</h4>
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center justify-between">
                <span>Monthly feedback sources</span>
                <span className="text-lg font-bold">{feedbackSources}</span>
              </label>
              <Slider
                value={[feedbackSources]}
                onValueChange={([value]) => setFeedbackSources(value)}
                min={3}
                max={20}
                step={1}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center justify-between">
                <span>Hours spent on feedback weekly</span>
                <span className="text-lg font-bold">{feedbackHours} hrs</span>
              </label>
              <Slider
                value={[feedbackHours]}
                onValueChange={([value]) => setFeedbackHours(value)}
                min={5}
                max={25}
                step={1}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center justify-between">
                <span>Features shipped monthly</span>
                <span className="text-lg font-bold">{featuresShipped}</span>
              </label>
              <Slider
                value={[featuresShipped]}
                onValueChange={([value]) => setFeaturesShipped(value)}
                min={1}
                max={10}
                step={1}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center justify-between">
                <span>Current MRR</span>
                <span className="text-lg font-bold">${currentMRR.toLocaleString()}</span>
              </label>
              <Slider
                value={[currentMRR]}
                onValueChange={([value]) => setCurrentMRR(value)}
                min={1000}
                max={50000}
                step={1000}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Calculate Button */}
        <motion.div className="text-center">
          <Button
            size="lg"
            onClick={() => setShowResults(true)}
            className="gap-2"
          >
            <BarChart3 className="w-5 h-5" />
            Calculate My ROI
          </Button>
        </motion.div>
        
        {/* Results */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-6 pt-6 border-t"
            >
              <h4 className="text-lg font-semibold">With FeedbackSpec:</h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200"
                >
                  <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">
                    {timeSavedMonthly} hrs
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Time saved monthly
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200"
                >
                  <Rocket className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">
                    +{additionalFeatures}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Additional features
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200"
                >
                  <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">
                    +${projectedMRRGrowth.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Projected MRR growth
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200"
                >
                  <DollarSign className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">
                    ${toolInvestment}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Tool investment
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200"
              >
                <p className="text-lg mb-2">
                  Your ROI in the first month:
                </p>
                <p className="text-5xl font-bold text-primary">
                  {roi.toLocaleString()}%
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  That's ${projectedMRRGrowth - toolInvestment} in net gain
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
            The Feedback-to-Revenue Engine
          </Badge>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Chaos into
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Crystal-Clear Specifications
            </span>
          </h2>

          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop drowning in feedback. Start shipping features that grow your revenue. 
            FeedbackSpec uses AI to turn chaos into clear, prioritized product specifications.
          </p>
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
              Join <span className="font-bold text-foreground">500+ founders</span> who escaped feedback chaos
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