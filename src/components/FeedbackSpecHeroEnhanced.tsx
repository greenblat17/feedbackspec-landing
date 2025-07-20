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
              <h3 className="text-base sm:text-lg font-semibold">Feedback Dashboard</h3>
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
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 lg:pt-46">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      {/* Floating Feedback Cards - All 4 with better positioning */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_CARDS.map((card) => (
          <motion.div
            key={card.id}
            className="absolute hidden lg:block"
            style={card.position}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: [0.7, 0.9, 0.7],
              scale: [0.95, 1.05, 0.95],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              delay: card.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="bg-card/90 backdrop-blur-sm border rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-1">
                <card.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-medium">
                  {card.source}
                </span>
              </div>
              <p className="text-sm font-medium mb-2 text-foreground">
                {card.text}
              </p>
              <Badge variant="secondary" className="text-xs">
                {card.category}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container px-4 mx-auto text-center">
        {/* Title */}
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-display mb-4 max-w-4xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-heading text-base sm:text-lg md:text-xl text-muted-foreground mb-3 tracking-heading px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* App Screenshot Demo */}
        <AppScreenshot />

        {/* CTA */}
        <motion.div
          className="flex justify-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="px-6 sm:px-8 py-3 group w-full sm:w-auto min-h-[48px]"
            onClick={onPrimaryCtaClick}
          >
            <span className="text-sm sm:text-base">Start Free 14-Day Trial</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
