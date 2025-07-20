"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Database,
  Zap,
  FileText,
  Brain,
  Code,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  Settings,
  PlayCircle,
  PauseCircle,
  RotateCcw,
  Clock,
  Users,
  TrendingUp,
  Sparkles,
  MessageSquare,
  Target,
  Rocket,
  Eye,
  Twitter,
  Mail,
  Github,
  Star,
  Monitor,
} from "lucide-react";
import {
  designSystem,
  getSpring,
  performanceConfig,
  animationVariants,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Enhanced workflow steps with real-world examples
const WORKFLOW_STEPS = [
  {
    id: "1",
    step: "Connect",
    title: "Unified Feedback Collection",
    subtitle: "All sources, one dashboard",
    description:
      "Connect Twitter, Discord, email, and 20+ platforms in minutes. No more platform switching.",
    icon: <Database className="w-6 h-6" />,
    details: [
      "OAuth integration with major platforms",
      "Real-time sync across all channels",
      "Automated duplicate detection",
      "Smart categorization on import",
    ],
    example: {
      before: "Checking 8 platforms daily",
      after: "Everything in one place",
      time: "3 hrs saved/day",
    },
    color: "primary",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    id: "2",
    step: "Analyze",
    title: "AI-Powered Intelligence",
    subtitle: "Patterns humans miss",
    description:
      "Advanced NLP identifies themes, sentiment, and priority automatically across thousands of feedback items.",
    icon: <Brain className="w-6 h-6" />,
    details: [
      "Sentiment analysis and emotion detection",
      "Topic clustering and theme extraction",
      "Customer segment correlation",
      "Impact prediction modeling",
    ],
    example: {
      before: "Manual categorization",
      after: "Instant AI insights",
      time: "5 hrs saved/week",
    },
    color: "primary",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    id: "3",
    step: "Prioritize",
    title: "Smart Priority Scoring",
    subtitle: "Focus on what matters",
    description:
      "MRR-based prioritization shows which features will actually grow your business, not just make users happy.",
    icon: <Target className="w-6 h-6" />,
    details: [
      "Revenue impact calculation",
      "Customer value weighting",
      "Effort estimation integration",
      "Competitive advantage scoring",
    ],
    example: {
      before: "Guessing priorities",
      after: "Data-driven decisions",
      time: "47% faster growth",
    },
    color: "primary",
    gradient: "from-primary/25 to-primary/5",
  },
  {
    id: "4",
    step: "Generate",
    title: "AI Specification Creation",
    subtitle: "Ready-to-code specs",
    description:
      "Transform insights into detailed technical specifications optimized for Cursor, Claude, and modern AI coding tools.",
    icon: <FileText className="w-6 h-6" />,
    details: [
      "Technical requirements generation",
      "API design suggestions",
      "User story creation",
      "Acceptance criteria definition",
    ],
    example: {
      before: "Writing specs manually",
      after: "AI-generated perfection",
      time: "10x faster specs",
    },
    color: "primary",
    gradient: "from-primary/30 to-primary/5",
  },
  {
    id: "5",
    step: "Ship",
    title: "Development Integration",
    subtitle: "Seamless workflow",
    description:
      "Export directly to your dev tools. GitHub, Linear, Notion, or custom integrations - we've got you covered.",
    icon: <GitBranch className="w-6 h-6" />,
    details: [
      "One-click export to dev tools",
      "Automated ticket creation",
      "Progress tracking integration",
      "Team notification setup",
    ],
    example: {
      before: "Manual tool switching",
      after: "Automated workflow",
      time: "Zero context switching",
    },
    color: "primary",
    gradient: "from-primary/35 to-primary/5",
  },
  {
    id: "6",
    step: "Optimize",
    title: "Continuous Improvement",
    subtitle: "Learn and adapt",
    description:
      "Track feature success, gather new feedback, and continuously improve your product-market fit.",
    icon: <TrendingUp className="w-6 h-6" />,
    details: [
      "Feature performance tracking",
      "User adoption monitoring",
      "Feedback loop optimization",
      "Success metric correlation",
    ],
    example: {
      before: "Build and hope",
      after: "Data-driven iteration",
      time: "3x higher success rate",
    },
    color: "primary",
    gradient: "from-primary/40 to-primary/5",
  },
];

// Live demo data
const DEMO_FEEDBACK = [
  {
    platform: "Twitter",
    message: "Dark mode please!",
    sentiment: "positive",
    priority: "high",
  },
  {
    platform: "Discord",
    message: "Export is broken",
    sentiment: "negative",
    priority: "critical",
  },
  {
    platform: "Email",
    message: "Love the new dashboard",
    sentiment: "positive",
    priority: "low",
  },
  {
    platform: "GitHub",
    message: "API rate limits too low",
    sentiment: "neutral",
    priority: "medium",
  },
];

// Step Screenshots Components
function StepScreenshot({ step }: { step: number }) {
  const stepData = WORKFLOW_STEPS[step];
  
  return (
    <div className="relative bg-card border rounded-lg shadow-lg overflow-hidden mb-6">
      {/* Browser Header */}
      <div className="bg-muted px-3 py-2 border-b flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <div className="bg-background/50 rounded px-2 py-1 text-xs text-muted-foreground max-w-xs mx-auto">
            app.feedbackspec.com/{stepData.step.toLowerCase()}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="p-4 min-h-[200px]">
        {step === 0 && <ConnectScreenshot />}
        {step === 1 && <AnalyzeScreenshot />}
        {step === 2 && <PrioritizeScreenshot />}
        {step === 3 && <GenerateScreenshot />}
        {step === 4 && <ShipScreenshot />}
        {step === 5 && <OptimizeScreenshot />}
      </div>
    </div>
  );
}

// Connect Step Screenshot
function ConnectScreenshot() {
  return (
    <div>
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <Database className="w-4 h-4 text-primary" />
        Connect Your Platforms
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "Twitter", icon: Twitter, status: "Connected", color: "text-green-600" },
          { name: "GitHub", icon: Github, status: "Connected", color: "text-green-600" },
          { name: "Discord", icon: MessageSquare, status: "Connecting...", color: "text-yellow-600" },
          { name: "Email", icon: Mail, status: "Available", color: "text-muted-foreground" },
        ].map((platform) => (
          <div key={platform.name} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-2">
              <platform.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{platform.name}</span>
            </div>
            <span className={`text-xs ${platform.color}`}>{platform.status}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-primary/10 rounded-lg">
        <p className="text-xs text-primary">✨ 47 new feedback items synced in the last hour</p>
      </div>
    </div>
  );
}

// Analyze Step Screenshot
function AnalyzeScreenshot() {
  return (
    <div>
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <Brain className="w-4 h-4 text-primary" />
        AI Analysis Results
      </h4>
      <div className="space-y-3">
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Dark Mode Requests</span>
            <Badge variant="secondary" className="text-xs">Theme: UI/UX</Badge>
          </div>
          <div className="text-xs text-muted-foreground mb-2">Sentiment: 89% Positive</div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: "89%" }}></div>
          </div>
        </div>
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Export Issues</span>
            <Badge variant="destructive" className="text-xs">Bug: Critical</Badge>
          </div>
          <div className="text-xs text-muted-foreground mb-2">Sentiment: 23% Negative</div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: "23%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Prioritize Step Screenshot
function PrioritizeScreenshot() {
  return (
    <div>
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <Target className="w-4 h-4 text-primary" />
        Priority Matrix
      </h4>
      <div className="space-y-2">
        {[
          { feature: "Dark Mode Implementation", score: 94, impact: "$2.3k MRR", effort: "Medium" },
          { feature: "Export Bug Fix", score: 87, impact: "$1.8k MRR", effort: "Low" },
          { feature: "API Rate Limits", score: 72, impact: "$1.2k MRR", effort: "High" },
          { feature: "Dashboard Polish", score: 45, impact: "$0.5k MRR", effort: "Low" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex-1">
              <div className="text-sm font-medium">{item.feature}</div>
              <div className="text-xs text-muted-foreground">Impact: {item.impact} • Effort: {item.effort}</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">{item.score}</div>
              <div className="text-xs text-muted-foreground">Priority Score</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Generate Step Screenshot
function GenerateScreenshot() {
  return (
    <div>
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-4 h-4 text-primary" />
        Generated Specification
      </h4>
      <div className="border rounded-lg p-4 bg-muted/30">
        <div className="text-xs font-mono space-y-2">
          <div className="text-primary font-bold"># Dark Mode Implementation</div>
          <div className="text-muted-foreground">## User Story</div>
          <div>As a user, I want to toggle between light and dark themes...</div>
          <div className="text-muted-foreground">## Technical Requirements</div>
          <div>- CSS custom properties for theme colors</div>
          <div>- LocalStorage persistence</div>
          <div>- System preference detection</div>
          <div className="text-muted-foreground">## Acceptance Criteria</div>
          <div>✅ Toggle persists across browser sessions</div>
          <div>✅ Respects system preference on first visit</div>
          <div>✅ Smooth transition animations</div>
        </div>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-xs text-muted-foreground">Generated in 2.3 seconds</span>
        <Badge variant="default" className="text-xs">Ready for Cursor</Badge>
      </div>
    </div>
  );
}

// Ship Step Screenshot
function ShipScreenshot() {
  return (
    <div>
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <GitBranch className="w-4 h-4 text-primary" />
        Export to Dev Tools
      </h4>
      <div className="space-y-3">
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub Issue #247</span>
            </div>
            <Badge variant="default" className="text-xs">Created</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Dark mode implementation with detailed spec</p>
        </div>
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              <span className="text-sm font-medium">Linear Task</span>
            </div>
            <Badge variant="default" className="text-xs">Synced</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Assigned to frontend team with priority: High</p>
        </div>
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Notion Doc</span>
            </div>
            <Badge variant="default" className="text-xs">Updated</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Technical specification added to project docs</p>
        </div>
      </div>
    </div>
  );
}

// Optimize Step Screenshot
function OptimizeScreenshot() {
  return (
    <div>
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-primary" />
        Feature Performance
      </h4>
      <div className="space-y-3">
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Dark Mode</span>
            <Badge variant="default" className="text-xs">Shipped 2 weeks ago</Badge>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <div className="text-muted-foreground">Adoption</div>
              <div className="font-bold text-green-600">73%</div>
            </div>
            <div>
              <div className="text-muted-foreground">Satisfaction</div>
              <div className="font-bold text-green-600">4.8/5</div>
            </div>
            <div>
              <div className="text-muted-foreground">Feedback</div>
              <div className="font-bold text-primary">+127</div>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-3">
          <div className="text-sm font-medium mb-2">User Feedback Trends</div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>😍 "Love the dark mode!"</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>89</span>
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <span>🎨 "Perfect for night coding"</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>76</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeedbackWorkflowEnhanced({
  title = "How FeedbackSpec Works",
  className,
}: {
  title?: string;
  className?: string;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  // Disabled scroll-based animations for performance
  // const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1]);

  // Disabled auto-progress for performance
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 5); // Much faster increment
      } else {
        setCurrentStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
        setProgress(0);
      }
    }, 200); // Much longer interval

    return () => clearInterval(timer);
  }, [progress, isPlaying]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setProgress(0);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 1000);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section
      className={cn(
        "py-24 bg-gradient-to-b from-muted/5 to-background overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-display-lg font-bold mb-6 tracking-display">
            From Chaos to
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Shipping Machine
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Watch how FeedbackSpec transforms scattered feedback into
            production-ready features in 6 automated steps.
          </p>

          {/* Playback controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
            <motion.button
              onClick={togglePlayback}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <PauseCircle className="w-4 h-4" />
              ) : (
                <PlayCircle className="w-4 h-4" />
              )}
              {isPlaying ? "Pause Demo" : "Play Demo"}
            </motion.button>

            <motion.button
              onClick={resetDemo}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm sm:text-base w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </motion.button>

            <motion.button
              onClick={() => setShowDemo(!showDemo)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm sm:text-base w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
              {showDemo ? "Hide" : "Show"} Live Data
            </motion.button>
          </div>
        </motion.div>

        {/* Progress visualization */}
        <div className="max-w-5xl mx-auto mb-12 px-4 sm:px-0">
          {/* Step indicators */}
          <div className="hidden sm:flex justify-between items-center mb-8">
            {/* Desktop step indicators */}
            {WORKFLOW_STEPS.map((step, idx) => (
              <React.Fragment key={step.id}>
                <motion.button
                  onClick={() => handleStepClick(idx)}
                  className="flex flex-col items-center group cursor-pointer"
                  variants={animationVariants.hoverLift}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Step icon */}
                  <motion.div
                    className={cn(
                      "relative w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 mb-2",
                      idx <= currentStep
                        ? "bg-primary border-primary text-primary-foreground shadow-lg"
                        : "bg-muted border-muted-foreground/30 text-muted-foreground",
                      idx === currentStep && "ring-4 ring-primary/20 scale-110"
                    )}
                    animate={
                      idx === currentStep
                        ? {
                            scale: 1.05,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.2,
                      ease: designSystem.motion.ease.out,
                    }}
                  >
                    {idx < currentStep ? (
                      <CheckCircle2 className="w-8 h-8" />
                    ) : (
                      React.cloneElement(step.icon, { className: "w-8 h-8" })
                    )}

                    {/* Active step pulse */}
                    {idx === currentStep && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-primary"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}

                    {/* Progress ring for current step */}
                    {idx === currentStep && (
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="28"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray={`${2 * Math.PI * 28}`}
                          strokeDashoffset={`${
                            2 * Math.PI * 28 * (1 - progress / 100)
                          }`}
                          className="text-primary-foreground/30"
                        />
                      </svg>
                    )}
                  </motion.div>

                  {/* Step info */}
                  <div className="text-center">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        idx === currentStep
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {step.step}
                    </p>
                    <p className="text-xs text-muted-foreground max-w-20">
                      {step.title.split(" ")[0]}
                    </p>
                  </div>
                </motion.button>

                {/* Connector line */}
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <motion.div
                    className={cn(
                      "flex-1 h-1 mx-4 rounded-full transition-all duration-500",
                      idx < currentStep ? "bg-primary" : "bg-muted"
                    )}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: idx < currentStep ? 1 : 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile step indicators - simplified horizontal scroll */}
          <div className="sm:hidden mb-8">
            <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
              {WORKFLOW_STEPS.map((step, idx) => (
                <motion.button
                  key={step.id}
                  onClick={() => handleStepClick(idx)}
                  className="flex flex-col items-center min-w-[80px] group cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Step icon */}
                  <motion.div
                    className={cn(
                      "relative w-12 h-12 rounded-full flex items-center justify-center border-3 transition-all duration-300 mb-2",
                      idx <= currentStep
                        ? "bg-primary border-primary text-primary-foreground shadow-lg"
                        : "bg-muted border-muted-foreground/30 text-muted-foreground",
                      idx === currentStep && "ring-3 ring-primary/20"
                    )}
                  >
                    {idx < currentStep ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      React.cloneElement(step.icon, { className: "w-6 h-6" })
                    )}
                  </motion.div>

                  {/* Step info */}
                  <div className="text-center">
                    <p
                      className={cn(
                        "text-xs font-medium",
                        idx === currentStep
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {step.step}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {step.title.split(" ")[0]}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Overall progress bar */}
          <div className="w-full bg-muted rounded-full h-3 mb-8">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  (currentStep / (WORKFLOW_STEPS.length - 1)) * 100 +
                  progress / (WORKFLOW_STEPS.length - 1)
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Current step details */}
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-primary/20">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                    <motion.div
                      className="p-3 sm:p-4 rounded-2xl bg-primary/20 text-primary"
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {React.cloneElement(WORKFLOW_STEPS[currentStep].icon, {
                        className: "w-6 h-6 sm:w-8 sm:h-8",
                      })}
                    </motion.div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {WORKFLOW_STEPS[currentStep].title}
                      </h3>
                      <p className="text-base sm:text-lg text-primary font-medium">
                        {WORKFLOW_STEPS[currentStep].subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                    {WORKFLOW_STEPS[currentStep].description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Screenshot Preview */}
                    <div className="order-2 lg:order-1">
                      <h4 className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <Monitor className="w-4 h-4 text-primary" />
                        Live Preview
                      </h4>
                      <StepScreenshot step={currentStep} />
                    </div>

                    {/* Features and Impact */}
                    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                          <Zap className="w-4 h-4 text-primary" />
                          Key Features
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                          {WORKFLOW_STEPS[currentStep].details.map(
                            (detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                              >
                                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm">{detail}</span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Before/After comparison */}
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          Impact
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            <div className="p-3 sm:p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                              <p className="text-xs font-medium text-destructive mb-2">
                                Before
                              </p>
                              <p className="text-xs sm:text-sm font-bold">
                                {WORKFLOW_STEPS[currentStep].example.before}
                              </p>
                            </div>
                            <div className="p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                              <p className="text-xs font-medium text-green-600 mb-2">
                                After
                              </p>
                              <p className="text-xs sm:text-sm font-bold">
                                {WORKFLOW_STEPS[currentStep].example.after}
                              </p>
                            </div>
                          </div>
                          <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
                            <p className="text-xs font-medium text-primary mb-1">
                              Result
                            </p>
                            <p className="text-base sm:text-lg font-bold">
                              {WORKFLOW_STEPS[currentStep].example.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live demo data */}
                  <AnimatePresence>
                    {showDemo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-8 pt-8 border-t"
                      >
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-blue-500" />
                          Live Demo Data
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {DEMO_FEEDBACK.map((feedback, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="p-3 bg-background/50 rounded-lg border"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {feedback.platform}
                                </Badge>
                                <Badge
                                  variant={
                                    feedback.priority === "critical"
                                      ? "destructive"
                                      : "secondary"
                                  }
                                  className="text-xs"
                                >
                                  {feedback.priority}
                                </Badge>
                              </div>
                              <p className="text-sm">{feedback.message}</p>
                              <div
                                className={cn(
                                  "text-xs mt-2",
                                  feedback.sentiment === "positive" &&
                                    "text-green-500",
                                  feedback.sentiment === "negative" &&
                                    "text-red-500",
                                  feedback.sentiment === "neutral" &&
                                    "text-yellow-500"
                                )}
                              >
                                {feedback.sentiment} sentiment
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, value: "2 min", label: "Setup time" },
              { icon: Users, value: "2,847", label: "Happy users" },
              { icon: Rocket, value: "3x", label: "Faster shipping" },
              { icon: TrendingUp, value: "47%", label: "MRR increase" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
