"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
  Timer,
  Terminal,
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
    step: "Step 1",
    title: "Automatic Feedback Collection",
    subtitle: "Connect everything",
    description:
      "Connect Twitter, email, Discord, GitHub, Slack. Smart categorization: Feature requests, bugs, praise. Sentiment analysis: Understand user emotions. Priority scoring: MRR-impact based ranking.",
    icon: <Database className="w-6 h-6" />,
    details: [
      "Connect everything: Twitter, email, Discord, GitHub, Slack",
      "Smart categorization: Feature requests, bugs, praise",
      "Sentiment analysis: Understand user emotions",
      "Priority scoring: MRR-impact based ranking",
    ],
    example: {
      before: "Scattered feedback",
      after: "Centralized insights",
      time: "15 hrs saved/week",
    },
    color: "primary",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    id: "2",
    step: "Step 2",
    title: "AI Feedback Processing",
    subtitle: "Analyze and prioritize",
    description:
      "AI analyzes all feedback, identifies patterns, groups similar requests, and prioritizes by revenue impact. Transforms raw feedback into actionable insights.",
    icon: <Brain className="w-6 h-6" />,
    details: [
      "Pattern recognition across all feedback",
      "Automatic grouping of similar requests",
      "Revenue impact analysis",
      "User sentiment understanding",
    ],
    example: {
      before: "287 unread messages",
      after: "5 key priorities",
      time: "Instant insights",
    },
    color: "primary",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    id: "3",
    step: "Step 3",
    title: "Generate AI Specifications",
    subtitle: "Ready for development",
    description:
      "Transform processed feedback into complete specifications with technical architecture, Cursor prompts, acceptance criteria, and development estimates.",
    icon: <FileText className="w-6 h-6" />,
    details: [
      "Complete technical specifications",
      "Ready-to-use Cursor/Claude prompts",
      "Acceptance criteria defined",
      "One-click export to dev tools",
    ],
    example: {
      before: "3+ hours writing specs",
      after: "8 minutes to complete spec",
      time: "95% faster",
    },
    color: "primary",
    gradient: "from-primary/25 to-primary/5",
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
        {step === 1 && <AIFeedbackProcessingScreenshot />}
        {step === 2 && <GenerateSpecificationsScreenshot />}
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
          {
            name: "Twitter",
            icon: Twitter,
            status: "Connected",
            color: "text-green-600",
          },
          {
            name: "GitHub",
            icon: Github,
            status: "Connected",
            color: "text-green-600",
          },
          {
            name: "Discord",
            icon: MessageSquare,
            status: "Connecting...",
            color: "text-yellow-600",
          },
          {
            name: "Email",
            icon: Mail,
            status: "Available",
            color: "text-muted-foreground",
          },
        ].map((platform) => (
          <div
            key={platform.name}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            <div className="flex items-center gap-2">
              <platform.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{platform.name}</span>
            </div>
            <span className={`text-xs ${platform.color}`}>
              {platform.status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-primary/10 rounded-lg">
        <p className="text-xs text-primary">
          ✨ 47 new feedback items synced in the last hour
        </p>
      </div>
    </div>
  );
}

// AI Feedback Processing Screenshot (Step 2)
function AIFeedbackProcessingScreenshot() {
  return (
    <div>
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <Brain className="w-4 h-4 text-primary" />
        AI Feedback Processing
      </h4>
      <div className="space-y-3">
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Search Issues</span>
            <Badge variant="destructive" className="text-xs">
              67% users affected
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground mb-2">
            47 similar complaints grouped
          </div>
          <div className="space-y-1">
            <div className="text-xs italic">
              "Search is terrible, takes forever"
            </div>
            <div className="text-xs italic">
              "Can't find anything even when I know it exists"
            </div>
            <div className="text-xs italic">
              "No fuzzy matching - one typo and nothing shows"
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Revenue Impact:
            </span>
            <span className="text-xs font-bold text-green-600">+$3.2k MRR</span>
          </div>
        </div>

        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Export Feature Requests</span>
            <Badge variant="secondary" className="text-xs">
              31% users affected
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground mb-2">
            23 requests grouped
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Revenue Impact:
            </span>
            <span className="text-xs font-bold text-blue-600">+$1.8k MRR</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">
            287 feedback items → 5 priorities
          </span>
          <Badge variant="default" className="text-xs">
            Processed
          </Badge>
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
          {
            feature: "Dark Mode Implementation",
            score: 94,
            impact: "$2.3k MRR",
            effort: "Medium",
          },
          {
            feature: "Export Bug Fix",
            score: 87,
            impact: "$1.8k MRR",
            effort: "Low",
          },
          {
            feature: "API Rate Limits",
            score: 72,
            impact: "$1.2k MRR",
            effort: "High",
          },
          {
            feature: "Dashboard Polish",
            score: 45,
            impact: "$0.5k MRR",
            effort: "Low",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            <div className="flex-1">
              <div className="text-sm font-medium">{item.feature}</div>
              <div className="text-xs text-muted-foreground">
                Impact: {item.impact} • Effort: {item.effort}
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">{item.score}</div>
              <div className="text-xs text-muted-foreground">
                Priority Score
              </div>
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
          <div className="text-primary font-bold">
            # Dark Mode Implementation
          </div>
          <div className="text-muted-foreground">## User Story</div>
          <div>
            As a user, I want to toggle between light and dark themes...
          </div>
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
        <span className="text-xs text-muted-foreground">
          Generated in 2.3 seconds
        </span>
        <Badge variant="default" className="text-xs">
          Ready for Cursor
        </Badge>
      </div>
    </div>
  );
}

// Generate AI Specifications Screenshot (Step 3)
function GenerateSpecificationsScreenshot() {
  return (
    <div>
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-4 h-4 text-primary" />
        Generate AI Specifications
      </h4>
      <div className="space-y-3">
        {/* Input section */}
        <div className="border rounded-lg p-2 bg-blue-50/50">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="w-3 h-3 text-blue-600" />
            <span className="text-xs font-medium">Selected Priority</span>
          </div>
          <div className="text-xs">
            "Search is terrible, takes forever" (67% users affected)
          </div>
        </div>

        {/* AI Generation Progress */}
        <div className="border rounded-lg p-3 bg-gradient-to-r from-primary/5 to-blue-500/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium">
              Generating Specification...
            </span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>

          {/* Generated spec preview */}
          <div className="bg-black/90 rounded p-3 text-green-400 font-mono text-xs space-y-2">
            <div className="font-bold text-yellow-400">
              CURSOR-READY PROMPT:
            </div>
            <div className="opacity-90 text-xs leading-relaxed">
              <div className="mt-2">
                "Build a complete search system for our product catalog. Create
                a React component with real-time search that updates as users
                type (debounce 300ms). Implement fuzzy matching to handle typos
                - if user types 'iphon' show 'iPhone'. Backend: Set up
                Elasticsearch with these mappings: product name (boost 3x),
                description, tags (boost 2x). Add Redis caching for the 100 most
                common searches. Frontend: Show autocomplete dropdown with
                product images, names, and prices. Include keyboard navigation
                (arrow keys + enter). Show loading spinner during search.
                Display 'No results found' with suggestions when empty. Track
                all searches in analytics. Performance requirement: Results must
                load in under 200ms. Use our existing API at /api/search. Style
                with Tailwind matching our design system. Handle errors
                gracefully with user-friendly messages."
              </div>
              <div className="mt-3 text-blue-400">
                <div>✓ Paste directly into Cursor</div>
                <div>✓ Complete implementation in one prompt</div>
                <div>✓ 67% of users will benefit immediately</div>
              </div>
            </div>
          </div>
        </div>

        {/* Export options */}
        <div className="grid grid-cols-3 gap-2">
          <button className="border rounded-lg p-2 hover:bg-muted/50 transition-colors">
            <Code className="w-4 h-4 mx-auto mb-1" />
            <div className="text-xs">Cursor</div>
          </button>
          <button className="border rounded-lg p-2 hover:bg-muted/50 transition-colors">
            <Terminal className="w-4 h-4 mx-auto mb-1" />
            <div className="text-xs">Claude</div>
          </button>
          <button className="border rounded-lg p-2 hover:bg-muted/50 transition-colors">
            <Github className="w-4 h-4 mx-auto mb-1" />
            <div className="text-xs">GitHub</div>
          </button>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">
            Generated in 8 minutes
          </span>
          <Badge className="text-xs bg-green-500">Ready to ship</Badge>
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
            <Badge variant="default" className="text-xs">
              Shipped 2 weeks ago
            </Badge>
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Start animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setIsPlaying(true);
            setCurrentStep(0);
            setProgress(0);
          }
        });
      },
      { threshold: 0.3 } // Start when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Auto-progress animation
  useEffect(() => {
    if (!isPlaying || !hasStarted) return;

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 20); // Larger increment for slower interval
      } else {
        if (currentStep < WORKFLOW_STEPS.length - 1) {
          setCurrentStep((prev) => prev + 1);
          setProgress(0);
        } else {
          // At the last step, wait 2 seconds then restart
          setTimeout(() => {
            setCurrentStep(0);
            setProgress(0);
          }, 2000);
        }
      }
    }, 1000); // Much slower interval for better performance

    return () => clearInterval(timer);
  }, [progress, isPlaying, currentStep, hasStarted]);

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
    setHasStarted(true);
  };

  return (
    <section
      ref={sectionRef}
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
            The Only Tool That
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Solves Both Problems
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Centralize scattered feedback AND transform it into AI-ready
            development specifications.
          </p>
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
                      <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping" />
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
                width: `${Math.min(
                  ((currentStep + progress / 100) / WORKFLOW_STEPS.length) *
                    100,
                  100
                )}%`,
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
                    <div className="p-3 sm:p-4 rounded-2xl bg-primary/20 text-primary">
                      {React.cloneElement(WORKFLOW_STEPS[currentStep].icon, {
                        className: "w-6 h-6 sm:w-8 sm:h-8",
                      })}
                    </div>
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
                  {/* Screenshot Preview - Centered */}
                  <div className="max-w-3xl mx-auto">
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <Monitor className="w-4 h-4 text-primary" />
                      Live Preview
                    </h4>
                    <StepScreenshot step={currentStep} />
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
      </div>
    </section>
  );
}
