"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Users,
  TrendingUp,
  MessageSquare,
  Twitter,
  Mail,
  ArrowRight,
  Zap,
  CheckCircle2,
  Star,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  designSystem,
  getSpring,
  animationVariants,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Floating feedback cards data
const FLOATING_CARDS = [
  {
    id: 1,
    text: "Dark mode please!",
    source: "Twitter",
    icon: Twitter,
    category: "Feature",
    position: { top: "25%", left: "8%" },
    delay: 0,
  },
  {
    id: 2,
    text: "Export to CSV broken",
    source: "Email",
    icon: Mail,
    category: "Bug",
    position: { top: "30%", right: "12%" },
    delay: 0.5,
  },
  {
    id: 3,
    text: "Need Stripe integration",
    source: "Discord",
    icon: MessageSquare,
    category: "Integration",
    position: { bottom: "30%", left: "10%" },
    delay: 1,
  },
  {
    id: 4,
    text: "Amazing product!",
    source: "Twitter",
    icon: Twitter,
    category: "Praise",
    position: { bottom: "35%", right: "8%" },
    delay: 1.5,
  },
];

// Mock app interface data
const MOCK_FEEDBACK_ITEMS = [
  {
    id: 1,
    platform: "Twitter",
    icon: Twitter,
    message: "Please add dark mode to the dashboard!",
    priority: "High",
    sentiment: "positive",
    category: "Feature Request",
    votes: 47,
  },
  {
    id: 2,
    platform: "GitHub",
    icon: Github,
    message: "Export functionality is broken in Safari",
    priority: "Critical",
    sentiment: "negative",
    category: "Bug Report",
    votes: 23,
  },
  {
    id: 3,
    platform: "Discord",
    icon: MessageSquare,
    message: "Love the new API endpoints! Super clean.",
    priority: "Low",
    sentiment: "positive",
    category: "Praise",
    votes: 12,
  },
  {
    id: 4,
    platform: "Email",
    icon: Mail,
    message: "Need Stripe Connect integration for marketplace",
    priority: "Medium",
    sentiment: "neutral",
    category: "Integration",
    votes: 31,
  },
];

// App Screenshot Component
function AppScreenshot() {
  const [activeItem, setActiveItem] = useState(0);
  const [showSpec, setShowSpec] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % MOCK_FEEDBACK_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="relative mx-auto max-w-4xl mb-6 px-4 sm:px-0"
    >
      {/* Browser Frame */}
      <div className="bg-card border rounded-xl shadow-2xl overflow-hidden">
        {/* Browser Header */}
        <div className="bg-muted px-4 py-3 border-b flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground max-w-xs mx-auto">
              app.feedbackspec.com/dashboard
            </div>
          </div>
        </div>

        {/* App Interface */}
        <div className="bg-background/50 min-h-[250px] sm:min-h-[300px] p-3 sm:p-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                Feedback Dashboard
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {MOCK_FEEDBACK_ITEMS.length} items • 3 sources connected
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowSpec(!showSpec)}
              className="text-xs sm:text-sm w-full sm:w-auto"
            >
              <Zap className="w-4 h-4 mr-2" />
              {showSpec ? "Hide Spec" : "Generate Spec"}
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Feedback List */}
            <div className="lg:col-span-2 space-y-2">
              {MOCK_FEEDBACK_ITEMS.slice(0, 3).map((item, idx) => (
                <motion.div
                  key={item.id}
                  className={cn(
                    "border rounded-lg p-2 sm:p-3 transition-all cursor-pointer",
                    activeItem === idx
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border bg-card/50 hover:border-primary/50"
                  )}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setActiveItem(idx)}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-md bg-muted">
                      <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground">
                          {item.platform}
                        </span>
                        <Badge
                          variant={
                            item.priority === "Critical"
                              ? "destructive"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {item.priority}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm">{item.message}</p>
                      <div className="flex items-center gap-2 sm:gap-4 mt-1 sm:mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {item.votes}
                        </span>
                        <span
                          className={cn(
                            "capitalize",
                            item.sentiment === "positive" && "text-green-600",
                            item.sentiment === "negative" && "text-red-600",
                            item.sentiment === "neutral" && "text-yellow-600"
                          )}
                        >
                          {item.sentiment}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar - Hidden on mobile to save space */}
            <div className="hidden lg:block space-y-4">
              {/* Sources */}
              <div className="border rounded-lg p-4 bg-card/50">
                <h4 className="font-medium mb-3 text-sm">Connected Sources</h4>
                <div className="space-y-2">
                  {[
                    { name: "Twitter", icon: Twitter, count: 23 },
                    { name: "GitHub", icon: Github, count: 15 },
                    { name: "Discord", icon: MessageSquare, count: 8 },
                    { name: "Email", icon: Mail, count: 12 },
                  ].map((source) => (
                    <div
                      key={source.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <source.icon className="w-3 h-3" />
                        {source.name}
                      </div>
                      <span className="text-muted-foreground">
                        {source.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="border rounded-lg p-4 bg-card/50">
                <h4 className="font-medium mb-3 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  AI Insights
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Dark mode requests</span>
                    <span className="text-primary font-medium">↑ 340%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bug reports</span>
                    <span className="text-red-500 font-medium">↑ 12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Feature satisfaction</span>
                    <span className="text-green-500 font-medium">92%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile AI Insights - Show condensed version on mobile */}
            <div className="lg:hidden mt-4 border rounded-lg p-3 bg-card/50">
              <h4 className="font-medium mb-2 text-xs flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-primary" />
                AI Insights
              </h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="text-primary font-medium">↑ 340%</div>
                  <div className="text-muted-foreground">Dark mode</div>
                </div>
                <div className="text-center">
                  <div className="text-red-500 font-medium">↑ 12%</div>
                  <div className="text-muted-foreground">Bug reports</div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 font-medium">92%</div>
                  <div className="text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Generated Spec Preview */}
          <AnimatePresence>
            {showSpec && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 border-t pt-6"
              >
                <div className="border rounded-lg p-4 bg-primary/5">
                  <h4 className="font-medium mb-3 text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Generated Specification
                  </h4>
                  <div className="text-xs font-mono bg-background/50 rounded p-3 space-y-1">
                    <div className="text-primary">
                      # Dark Mode Implementation
                    </div>
                    <div className="text-muted-foreground">## User Story</div>
                    <div>As a user, I want to toggle dark mode...</div>
                    <div className="text-muted-foreground">
                      ## Acceptance Criteria
                    </div>
                    <div>- [ ] Toggle in settings panel</div>
                    <div>- [ ] Persists across sessions</div>
                    <div>- [ ] System preference detection</div>
                    <div className="text-green-600 mt-2">
                      ✓ Ready for Cursor/Claude
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Screenshot overlay effects */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}

// Gmail icon component
const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path
      fill="#EA4335"
      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.466-3.03 3.887-1.59L12 9.545l8.113-5.68C21.534 2.427 24 3.434 24 5.457z"
    />
    <path
      fill="#FBBC05"
      d="M0 5.457c0-2.023 2.466-3.03 3.887-1.59L12 9.545V16.64L0 11.73V5.457z"
    />
    <path
      fill="#34A853"
      d="M24 5.457c0-2.023-2.466-3.03-3.887-1.59L12 9.545V16.64L24 11.73V5.457z"
    />
  </svg>
);

// Twitter/X icon component
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Reddit icon component
const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path
      fill="#FF4500"
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
    />
  </svg>
);

// Integration logos data with real icons
const INTEGRATION_LOGOS = [
  { name: "Gmail", icon: GmailIcon },
  { name: "Twitter", icon: TwitterIcon },
  { name: "Reddit", icon: RedditIcon },
];

// Tool icons
const CursorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
    <path fill="currentColor" d="M5.5 2L20 6.5L12 9L9 17L5.5 2Z"/>
    <path fill="currentColor" d="M12 9L20 6.5L14 14L12 9Z" opacity="0.6"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ClineIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor"/>
    <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CodexIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
    <path fill="currentColor" d="M8 6L2 12L8 18L9.5 16.5L5 12L9.5 7.5L8 6ZM16 6L14.5 7.5L19 12L14.5 16.5L16 18L22 12L16 6Z"/>
  </svg>
);

// Rotating text component for AI tools
function RotatingText() {
  const words = [
    { text: "Cursor", color: "from-blue-500 to-blue-600", icon: CursorIcon },
    { text: "Claude", color: "from-orange-500 to-orange-600", icon: ClaudeIcon },
    { text: "Cline", color: "from-purple-500 to-purple-600", icon: ClineIcon },
    { text: "Codex", color: "from-green-500 to-green-600", icon: CodexIcon },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = words[currentIndex].icon;

  return (
    <span className="relative inline-flex items-center gap-2 sm:gap-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={`icon-${currentIndex}`}
          initial={{
            opacity: 0,
            rotateY: -90,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            rotateY: 90,
            scale: 0.6,
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className={`bg-gradient-to-r ${words[currentIndex].color} text-transparent bg-clip-text`}
        >
          <CurrentIcon />
        </motion.div>
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{
            opacity: 0,
            rotateX: -90,
            scale: 0.8,
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            rotateX: 90,
            scale: 0.8,
            filter: "blur(4px)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className={`inline-block bg-gradient-to-r ${words[currentIndex].color} bg-clip-text text-transparent font-extrabold relative`}
          style={{ transformOrigin: "center center" }}
        >
          {words[currentIndex].text}

          {/* Glowing background effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 bg-gradient-to-r ${words[currentIndex].color} rounded-lg blur-lg -z-10`}
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function FeedbackSpecHeroEnhanced({
  title,
  subtitle,
  description,
  primaryCtaText,
  secondaryCtaText,
  onPrimaryCtaClick,
}: {
  title: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  onPrimaryCtaClick?: () => void;
}) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 lg:pt-46">
      {/* Optimized Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-primary/12" />
      
      {/* Static Code Elements - No Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[15%] left-[10%] font-mono text-lg text-primary/30 select-none">{"{"}</div>
        <div className="absolute top-[25%] right-[15%] font-mono text-lg text-primary/30 select-none">{"}"}</div>
        <div className="absolute top-[35%] left-[5%] font-mono text-lg text-primary/30 select-none">&lt;/&gt;</div>
        <div className="absolute bottom-[30%] left-[12%] font-mono text-lg text-primary/30 select-none">=&gt;</div>
        <div className="absolute bottom-[20%] right-[20%] font-mono text-lg text-primary/30 select-none">()</div>
      </div>

      {/* Simple Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:20px_20px]" />

      {/* Main Content */}
      <div className="relative z-10 container px-4 mx-auto text-center">
        {/* Top Badge - using our content */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            AI Automatic Collection • Generate Spec for AI Agent tools
          </Badge>
        </motion.div>

        {/* Main Headline - Enhanced with world-class design principles */}
        <motion.div
          className="relative mb-6 max-w-5xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Static ambient glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/20 to-primary/15 blur-2xl opacity-25" />
          
          <h1 className="relative font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-center">
            {/* Layered text effect for depth */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 bg-clip-text text-transparent blur-sm scale-105">
              {title.includes("Cursor-Ready") ? (
                <>
                  {title.split("Cursor-Ready")[0]}
                  <span className="inline-flex items-baseline gap-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">⚡</span>
                    Cursor
                  </span>
                  -Ready
                  {title.split("Cursor-Ready")[1]}
                </>
              ) : (
                title
              )}
            </span>
            
            {/* Main text with enhanced gradients */}
            <span className="relative">
              {title.includes("Cursor-Ready") ? (
                <>
                  <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
                    {title.split("Cursor-Ready")[0]}
                  </span>
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold inline-flex items-baseline gap-2">
                    <CursorIcon />
                    Cursor-Ready
                  </span>
                  <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
                    {title.split("Cursor-Ready")[1]}
                  </span>
                </>
              ) : (
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
                  {title}
                </span>
              )}
            </span>

            {/* Animated underline accent */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "60%", opacity: 0.6 }}
              transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            />

            {/* Static particles - no animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full"
                  style={{
                    top: `${25 + (i * 15)}%`,
                    left: `${15 + (i * 20)}%`,
                  }}
                />
              ))}
            </div>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-heading text-base sm:text-lg md:text-xl text-muted-foreground mb-5 tracking-heading px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>

        {/* Integration Logos - similar to FeedbackScout */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 mb-8 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {INTEGRATION_LOGOS.map((integration, index) => (
            <div
              key={integration.name}
              className="flex items-center gap-2 px-4 py-2 bg-card/50 border rounded-full text-sm text-muted-foreground hover:bg-card/80 transition-colors"
            >
              <integration.icon />
              <span>{integration.name}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button - our style and text */}
        <motion.div
          className="flex justify-center mb-12 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            className="px-6 sm:px-8 py-3 group w-full sm:w-auto min-h-[48px]"
            onClick={onPrimaryCtaClick}
          >
            <span className="text-sm sm:text-base">
              Start Free 14-Day Trial
            </span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* App Screenshot Demo */}
        <AppScreenshot />

        {/* Success Metrics */}
        <motion.div
          className="mt-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            {/* Metric 1 */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                indie hackers shipping faster
              </div>
            </div>

            {/* Metric 2 */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-2">
                8 min
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                average: feedback → AI spec
              </div>
            </div>

            {/* Metric 3 */}
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-2">
                156%
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                average MRR growth
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
