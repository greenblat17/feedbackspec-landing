"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
import { designSystem, getSpring, animationVariants } from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Interactive benefit cards with real metrics
const BENEFITS = [
  {
    id: "speed",
    icon: <Rocket className="w-6 h-6" />,
    title: "Ship 3x Faster",
    tagline: "From feedback to feature in hours, not weeks",
    description: "AI-powered spec generation turns user feedback into ready-to-code requirements instantly",
    metrics: {
      before: "2 weeks per feature",
      after: "2 days per feature",
      improvement: "85% faster",
    },
    features: [
      "Instant spec generation",
      "Cursor & Claude-ready formats",
      "Technical requirements included",
      "Edge cases identified",
    ],
    color: "primary",
    gradient: "from-primary/20 to-primary/10",
    testimonial: {
      quote: "What used to take me days of planning now happens in minutes",
      author: "David Park",
      role: "CTO @ TechStart",
    },
  },
  {
    id: "revenue",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Grow MRR 47% Faster",
    tagline: "Build features that actually drive revenue",
    description: "MRR-based prioritization ensures you're always working on what matters most to paying customers",
    metrics: {
      before: "$2k MRR growth/mo",
      after: "$5k MRR growth/mo",
      improvement: "150% increase",
    },
    features: [
      "Revenue impact scoring",
      "Customer segment analysis",
      "Churn reduction insights",
      "Upsell opportunity detection",
    ],
    color: "primary",
    gradient: "from-primary/15 to-primary/5",
    testimonial: {
      quote: "Finally building features that customers actually pay for",
      author: "Lisa Wang",
      role: "Founder @ SaaSify",
    },
  },
  {
    id: "clarity",
    icon: <Brain className="w-6 h-6" />,
    title: "Crystal Clear Priorities",
    tagline: "Never guess what to build next",
    description: "AI analyzes patterns across all feedback to surface what really matters to your users",
    metrics: {
      before: "60% unused features",
      after: "92% adoption rate",
      improvement: "32% better",
    },
    features: [
      "Pattern recognition",
      "Sentiment analysis",
      "Impact forecasting",
      "Competitive insights",
    ],
    color: "primary", 
    gradient: "from-primary/25 to-primary/5",
    testimonial: {
      quote: "It's like having a product manager who reads every piece of feedback",
      author: "Marcus Chen",
      role: "CEO @ DevTools Pro",
    },
  },
];

// Animated metric counter
function MetricCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={getSpring("bouncy")}
      className="text-2xl font-bold"
    >
      {value}{suffix}
    </motion.div>
  );
}

// Interactive feature list item
function FeatureItem({ feature, delay }: { feature: string; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
      style={{
        transition: "color 0.15s ease-out",
        opacity: 0,
        animation: `fadeInUp 0.3s ease-out ${delay}s forwards`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          transition: "transform 0.15s ease-out",
          transform: isHovered ? "scale(1.1)" : "scale(1)"
        }}
      >
        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
      </div>
      <span>{feature}</span>
    </li>
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
          <Badge variant="default" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            The Solution
          </Badge>

          <h2 className="font-display text-4xl md:text-5xl lg:text-display-lg font-bold mb-6 tracking-display">
            Turn Chaos Into
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Competitive Advantage
            </span>
          </h2>

          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            FeedbackSpec transforms scattered user feedback into AI-ready specifications, 
            helping indie hackers ship the right features 3x faster.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Users, value: "2,847", label: "Happy Founders" },
              { icon: Clock, value: "72hr → 2hr", label: "Spec Time" },
              { icon: DollarSign, value: "$2.3M", label: "MRR Generated" },
              { icon: Heart, value: "98%", label: "Love It" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <stat.icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive benefit cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="group slide-up"
              style={{
                opacity: 0,
                animationDelay: `${idx * 0.1}s`
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
                  transform: activeCard === benefit.id ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: activeCard === benefit.id 
                    ? "0 8px 25px -8px rgba(59, 130, 246, 0.2)" 
                    : "0 2px 4px -1px rgba(0, 0, 0, 0.1)"
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-3 rounded-xl bg-primary/20 text-primary"
                      style={{
                        transition: "transform 0.15s ease-out",
                        transform: activeCard === benefit.id ? "scale(1.05)" : "scale(1)"
                      }}
                    >
                      {benefit.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {benefit.metrics.improvement}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {benefit.tagline}
                  </p>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {benefit.description}
                  </p>

                  {/* Before/After comparison */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Before</p>
                      <p className="text-sm font-bold">{benefit.metrics.before}</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <p className="text-xs font-medium text-primary mb-1">After</p>
                      <p className="text-sm font-bold">{benefit.metrics.after}</p>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 mb-4">
                    {benefit.features.map((feature, fidx) => (
                      <FeatureItem 
                        key={fidx} 
                        feature={feature} 
                        delay={activeCard === benefit.id ? fidx * 0.1 : 0}
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
                        <blockquote className="text-sm italic mb-2">
                          "{benefit.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                            {benefit.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-xs font-semibold">{benefit.testimonial.author}</p>
                            <p className="text-xs text-muted-foreground">{benefit.testimonial.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary" />
              Your Potential ROI with FeedbackSpec
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-background/80 rounded-lg"
              >
                <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <MetricCounter value="$4,800" suffix="/mo" />
                <p className="text-sm text-muted-foreground mt-1">Time saved</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-background/80 rounded-lg"
              >
                <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <MetricCounter value="47%" suffix=" faster" />
                <p className="text-sm text-muted-foreground mt-1">MRR growth</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-background/80 rounded-lg"
              >
                <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <MetricCounter value="3x" suffix=" more" />
                <p className="text-sm text-muted-foreground mt-1">Features shipped</p>
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
                        <th className="text-center py-2 text-destructive">Without</th>
                        <th className="text-center py-2 text-green-600">With FeedbackSpec</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Time on feedback/week</td>
                        <td className="text-center">20 hours</td>
                        <td className="text-center font-semibold">2 hours</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Features shipped/month</td>
                        <td className="text-center">2-3</td>
                        <td className="text-center font-semibold">8-10</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Customer satisfaction</td>
                        <td className="text-center">68%</td>
                        <td className="text-center font-semibold">94%</td>
                      </tr>
                      <tr>
                        <td className="py-2">MRR growth rate</td>
                        <td className="text-center">12%</td>
                        <td className="text-center font-semibold">35%</td>
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
            Join <span className="font-bold text-foreground">2,847 indie hackers</span> who ship faster with AI-powered feedback management
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