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
  Play,
  Monitor,
  MousePointer2,
  Star,
  Github,
  Slack
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { designSystem, getSpring, animationVariants } from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Floating feedback cards data
const FLOATING_CARDS = [
  {
    id: 1,
    text: "Dark mode please!",
    source: "Twitter",
    icon: Twitter,
    category: "Feature",
    position: { top: "10%", left: "5%" },
    delay: 0,
  },
  {
    id: 2,
    text: "Export to CSV broken",
    source: "Email",
    icon: Mail,
    category: "Bug",
    position: { top: "15%", right: "10%" },
    delay: 0.5,
  },
  {
    id: 3,
    text: "Need Stripe integration",
    source: "Discord",
    icon: MessageSquare,
    category: "Integration",
    position: { bottom: "20%", left: "8%" },
    delay: 1,
  },
  {
    id: 4,
    text: "Amazing product!",
    source: "Twitter",
    icon: Twitter,
    category: "Praise",
    position: { bottom: "25%", right: "5%" },
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
      setActiveItem(prev => (prev + 1) % MOCK_FEEDBACK_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="relative mx-auto max-w-5xl"
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
        <div className="bg-background/50 min-h-[400px] p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Feedback Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                {MOCK_FEEDBACK_ITEMS.length} items • 3 sources connected
              </p>
            </div>
            <Button size="sm" variant="outline" onClick={() => setShowSpec(!showSpec)}>
              <Zap className="w-4 h-4 mr-2" />
              {showSpec ? "Hide Spec" : "Generate Spec"}
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Feedback List */}
            <div className="lg:col-span-2 space-y-3">
              {MOCK_FEEDBACK_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className={cn(
                    "border rounded-lg p-4 transition-all cursor-pointer",
                    activeItem === idx 
                      ? "border-primary bg-primary/5 shadow-md" 
                      : "border-border bg-card/50 hover:border-primary/50"
                  )}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setActiveItem(idx)}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-muted">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground">
                          {item.platform}
                        </span>
                        <Badge 
                          variant={item.priority === "Critical" ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {item.priority}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-sm">{item.message}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {item.votes}
                        </span>
                        <span className={cn(
                          "capitalize",
                          item.sentiment === "positive" && "text-green-600",
                          item.sentiment === "negative" && "text-red-600",
                          item.sentiment === "neutral" && "text-yellow-600"
                        )}>
                          {item.sentiment}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
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
                    <div key={source.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <source.icon className="w-3 h-3" />
                        {source.name}
                      </div>
                      <span className="text-muted-foreground">{source.count}</span>
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
                    <div className="text-primary"># Dark Mode Implementation</div>
                    <div className="text-muted-foreground">## User Story</div>
                    <div>As a user, I want to toggle dark mode...</div>
                    <div className="text-muted-foreground">## Acceptance Criteria</div>
                    <div>- [ ] Toggle in settings panel</div>
                    <div>- [ ] Persists across sessions</div>
                    <div>- [ ] System preference detection</div>
                    <div className="text-green-600 mt-2">✓ Ready for Cursor/Claude</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Screenshot overlay effects */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      {/* Interactive cursor */}
      <motion.div
        className="absolute w-4 h-4 pointer-events-none z-10"
        animate={{
          x: [200, 250, 300, 250],
          y: [150, 180, 200, 150],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MousePointer2 className="w-4 h-4 text-primary drop-shadow-lg" />
      </motion.div>
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
  const [userCount, setUserCount] = useState(1247);
  const [mounted, setMounted] = useState(false);

  // Handle mounting for SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Simulate live user count
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted]);


  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      {/* Floating Feedback Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_CARDS.map((card) => (
          <motion.div
            key={card.id}
            className="absolute"
            style={card.position}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [0.95, 1.05, 0.95],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              delay: card.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="bg-card/90 backdrop-blur-sm border rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2 mb-1">
                <card.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{card.source}</span>
              </div>
              <p className="text-sm font-medium mb-1">{card.text}</p>
              <Badge variant="secondary" className="text-xs">
                {card.category}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container px-4 mx-auto text-center">
        {/* Live User Count */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Badge variant="secondary" className="px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            <motion.span
              key={userCount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-semibold"
            >
              {userCount.toLocaleString()}
            </motion.span>
            <span className="ml-1">indie hackers shipping faster</span>
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-5xl md:text-6xl lg:text-display-xl font-bold tracking-display mb-6 max-w-5xl mx-auto"
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
          className="font-heading text-xl md:text-2xl text-muted-foreground mb-4 tracking-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* App Screenshot Demo */}
        <AppScreenshot />

        {/* Compact Metrics */}
        <motion.div
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-lg font-bold text-primary">
                <motion.span
                  key={Math.floor(userCount/100)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {Math.floor(userCount/100)}k+
                </motion.span>
              </div>
              <div className="text-xs text-muted-foreground">Items Processed</div>
            </div>
            
            <div>
              <div className="text-lg font-bold text-primary">3.2x</div>
              <div className="text-xs text-muted-foreground">Faster Shipping</div>
            </div>
            
            <div>
              <div className="text-lg font-bold text-primary">30sec</div>
              <div className="text-xs text-muted-foreground">Spec Generation</div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button size="lg" className="min-w-[200px] group" onClick={onPrimaryCtaClick}>
            {primaryCtaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="min-w-[200px]">
            See it in action
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" />
            {secondaryCtaText}
          </div>
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
            3x faster shipping
          </div>
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-1 text-green-600" />
            AI-powered specs
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}