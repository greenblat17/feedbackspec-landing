"use client";

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
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
} from "lucide-react";
import {
  designSystem,
  getSpring,
  animationVariants,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Interactive benefit cards with real metrics
const BENEFITS = [
  {
    id: "speed",
    icon: <Rocket className="w-6 h-6" />,
    title: "Ship Features in Hours, Not Weeks",
    tagline:
      "The only platform that generates Cursor-optimized specs from raw feedback",
    description:
      "Turn any user request into production-ready code specifications in under 10 minutes. Our AI understands your tech stack and generates prompts that make Cursor and Claude Code work like magic.",
    metrics: {
      before: "2 week feature cycles",
      after: "Same-day shipping",
      improvement: "3x faster",
    },
    features: [
      "8 minutes: Average time from feedback to Cursor-ready spec",
      "3x faster: Feature shipping velocity",
      "94% accuracy: Specs work on first Cursor run",
    ],
    color: "primary",
    gradient: "from-primary/20 to-primary/10",
    testimonial: {
      quote:
        "I went from 2-week feature cycles to same-day shipping. FeedbackSpec + Cursor is absolutely unfair advantage. Last week I shipped 4 features that users requested on Twitter that morning. My MRR jumped 23% in one month.",
      author: "David Park",
      role: "DevAnalytics ($28k MRR)",
    },
  },
  {
    id: "revenue",
    icon: <DollarSign className="w-6 h-6" />,
    title: "Build Features That Actually Pay You",
    tagline: "MRR-weighted prioritization shows exactly what to build next",
    description:
      "Stop guessing. Our AI analyzes which customers request which features, weights by their MRR contribution, and tells you exactly which features will grow your revenue fastest.",
    metrics: {
      before: "Building cool features",
      after: "Building revenue features",
      improvement: "47% faster MRR growth",
    },
    features: [
      "47% faster: MRR growth for our users",
      "$2,100: Average monthly revenue increase",
      "89% adoption: Rate for AI-recommended features",
    ],
    color: "primary",
    gradient: "from-green-500/15 to-green-500/5",
    testimonial: {
      quote:
        "Before FeedbackSpec, I was building features that sounded cool but didn't move revenue. Now I only build what paying customers actually want. Added $8k MRR in 3 months just by following the AI prioritization.",
      author: "Lisa Wang",
      role: "SaaSify ($15k → $23k MRR)",
    },
  },
  {
    id: "insights",
    icon: <Target className="w-6 h-6" />,
    title: "Never Miss Million-Dollar Ideas Again",
    tagline: "AI pattern recognition across every feedback channel",
    description:
      "Our AI reads every mention, support ticket, and feature request to surface patterns you'd never catch manually. It's like having a product manager who never sleeps and reads everything.",
    metrics: {
      before: "Missed critical patterns",
      after: "Zero missed feedback",
      improvement: "94% pattern accuracy",
    },
    features: [
      "15+ sources: Monitored 24/7",
      "Zero: Missed critical feedback",
      "94% pattern: Accuracy for trend spotting",
    ],
    color: "primary",
    gradient: "from-purple-500/15 to-purple-500/5",
    testimonial: {
      quote:
        "FeedbackSpec caught a pattern across Discord and support emails that led to our biggest feature launch. 47 users mentioned wanting 'team collaboration' in different ways. The AI connected the dots, I built it, and it became our main upsell driver.",
      author: "Marcus Chen",
      role: "DevTools Pro ($41k MRR)",
    },
  },
];

// Animated metric counter
function MetricCounter({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={getSpring("bouncy")}
      className="text-2xl font-bold"
    >
      {value}
      {suffix}
    </motion.div>
  );
}

// Interactive feature list item - controlled animations only for active card
function FeatureItem({
  feature,
  delay,
  isCardActive,
}: {
  feature: string;
  delay: number;
  isCardActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Only animate when card is active
  if (!isCardActive) {
    return (
      <li className="flex items-start gap-2 text-sm text-muted-foreground opacity-60">
        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
        <span>{feature}</span>
      </li>
    );
  }

  return (
    <motion.li
      className="flex items-start gap-2 text-sm text-foreground cursor-pointer"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: "easeOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animation: "none" }} // Override any CSS animations
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
      </motion.div>
      <span>{feature}</span>
    </motion.li>
  );
}

export default function FeedbackSpecBenefitsEnhanced() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 1]);

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-muted/5 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-6 max-w-7xl"
        style={{ scale }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-display-lg font-bold mb-6 tracking-display px-4 sm:px-0">
            From Feedback Chaos to
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              AI-Powered Shipping Machine
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed px-4 sm:px-0">
            The only platform that turns scattered user feedback into
            Cursor-optimized specs in under 10 minutes. Stop guessing what to
            build - let AI show you exactly which features will grow your MRR.
          </p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base lg:text-lg px-4 sm:px-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">2,847</span>
                <span className="text-muted-foreground">Happy Founders</span>
              </div>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">8 min</span>
                <span className="text-muted-foreground">Avg Spec Time</span>
              </div>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">$4.2M</span>
                <span className="text-muted-foreground">MRR Generated</span>
              </div>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">98%</span>
                <span className="text-muted-foreground">Love Rate</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive benefit cards */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16 px-4 sm:px-0">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              onMouseEnter={() => setActiveCard(benefit.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card
                className={cn(
                  "h-full overflow-hidden cursor-pointer border-2",
                  `bg-gradient-to-br ${benefit.gradient}`,
                  activeCard === benefit.id ? "border-primary" : "border-border"
                )}
                style={{
                  transition: "all 0.2s ease-out",
                  transform:
                    activeCard === benefit.id
                      ? "translateY(-2px)"
                      : "translateY(0)",
                  boxShadow:
                    activeCard === benefit.id
                      ? "0 8px 25px -8px rgba(59, 130, 246, 0.2)"
                      : "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-2 sm:p-3 rounded-xl bg-primary/20 text-primary"
                      style={{
                        transition: "transform 0.15s ease-out",
                        transform:
                          activeCard === benefit.id
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    >
                      {benefit.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {benefit.metrics.improvement}
                    </Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {benefit.tagline}
                  </p>
                </CardHeader>

                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    {benefit.description}
                  </p>

                  {/* Before/After comparison */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                    <div className="p-2 sm:p-3 bg-muted rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Before
                      </p>
                      <p className="text-xs sm:text-sm font-bold">
                        {benefit.metrics.before}
                      </p>
                    </div>
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                      <p className="text-xs font-medium text-primary mb-1">
                        After
                      </p>
                      <p className="text-xs sm:text-sm font-bold">
                        {benefit.metrics.after}
                      </p>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 mb-4">
                    {benefit.features.map((feature, fidx) => (
                      <FeatureItem
                        key={fidx}
                        feature={feature}
                        delay={fidx * 0.1}
                        isCardActive={activeCard === benefit.id}
                      />
                    ))}
                  </ul>

                  {/* Testimonial */}
                  <AnimatePresence>
                    {activeCard === benefit.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t"
                      >
                        <blockquote className="text-xs sm:text-sm italic mb-2">
                          "{benefit.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                            {benefit.testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-xs font-semibold">
                              {benefit.testimonial.author}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {benefit.testimonial.role}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-0"
        >
          <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              What Our Users Actually Achieve
            </h3>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 sm:p-4 bg-background/80 rounded-lg"
              >
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-2" />
                <MetricCounter value="8" suffix=" minutes" />
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Avg spec generation time
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 sm:p-4 bg-background/80 rounded-lg"
              >
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-2" />
                <MetricCounter value="$2,100" suffix="/mo" />
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Average revenue increase
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 sm:p-4 bg-background/80 rounded-lg"
              >
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-2" />
                <MetricCounter value="3x" suffix=" faster" />
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Feature shipping velocity
                </p>
              </motion.div>
            </div>

            <motion.button
              onClick={() => setShowComparison(!showComparison)}
              className="w-full p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-semibold">See detailed comparison</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <AnimatePresence>
              {showComparison && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-background/50 rounded-lg"
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Metric</th>
                        <th className="text-center py-2 text-destructive">
                          Without
                        </th>
                        <th className="text-center py-2 text-green-600">
                          With FeedbackSpec
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Spec generation time</td>
                        <td className="text-center">2+ weeks</td>
                        <td className="text-center font-semibold">8 minutes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Feature shipping velocity</td>
                        <td className="text-center">1x baseline</td>
                        <td className="text-center font-semibold">3x faster</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Monthly revenue increase</td>
                        <td className="text-center">$0</td>
                        <td className="text-center font-semibold">$2,100</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          AI-recommended feature adoption
                        </td>
                        <td className="text-center">N/A</td>
                        <td className="text-center font-semibold">89%</td>
                      </tr>
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Join{" "}
            <span className="font-bold text-foreground">
              2,847 indie hackers
            </span>{" "}
            who ship faster with AI-powered feedback management
          </p>
          <Badge variant="secondary" className="text-sm">
            <Shield className="w-4 h-4 mr-2" />
            14-day free trial • No credit card required
          </Badge>
        </motion.div>
      </motion.div>
    </section>
  );
}
