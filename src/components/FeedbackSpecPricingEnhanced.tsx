"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Check,
  X,
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  Crown,
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import {
  designSystem,
  getSpring,
  animationVariants,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  limits: {
    sources: string;
    feedback: string;
    users: string;
    support: string;
  };
  popular?: boolean;
  enterprise?: boolean;
  color: string;
  gradient: string;
  savings?: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Solo Founder",
    tagline: "Perfect for indie hackers",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description:
      "Everything you need to start collecting and organizing feedback",
    features: [
      "3 feedback sources (Twitter, Email, Discord)",
      "100 feedback items/month",
      "AI categorization & sentiment analysis",
      "Basic priority scoring",
      "Cursor/Claude spec generation",
      "Email support",
      "14-day free trial",
    ],
    limits: {
      sources: "3 platforms",
      feedback: "100 items/mo",
      users: "1 user",
      support: "Email",
    },
    color: "primary",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    id: "pro",
    name: "Growing Team",
    tagline: "For scaling startups",
    monthlyPrice: 149,
    yearlyPrice: 119,
    description:
      "Advanced features for teams ready to scale their feedback process",
    features: [
      "Unlimited feedback sources",
      "Unlimited feedback processing",
      "Advanced MRR-based prioritization",
      "Custom specification templates",
      "Team collaboration tools",
      "API access & webhooks",
      "Analytics & insights dashboard",
      "Priority support",
      "14-day free trial",
    ],
    limits: {
      sources: "Unlimited",
      feedback: "Unlimited",
      users: "Up to 5 users",
      support: "Priority",
    },
    popular: true,
    color: "primary",
    gradient: "from-primary/15 to-primary/5",
    savings: "Most popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large organizations",
    monthlyPrice: 499,
    yearlyPrice: 399,
    description:
      "Full-featured solution with enterprise-grade security and support",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Custom integrations",
      "Advanced security (SSO, SAML)",
      "White-label options",
      "Dedicated customer success manager",
      "Custom training & onboarding",
      "SLA guarantee (99.9% uptime)",
      "Custom contract terms",
    ],
    limits: {
      sources: "Unlimited",
      feedback: "Unlimited",
      users: "Unlimited",
      support: "Dedicated CSM",
    },
    enterprise: true,
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
];

// ROI Calculator component
function ROICalculator() {
  const [teamSize, setTeamSize] = useState(3);
  const [timeSpent, setTimeSpent] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(100);

  const monthlyCost = teamSize * timeSpent * 4.33 * hourlyRate; // 4.33 weeks per month
  const yearlyCost = monthlyCost * 12;
  const feedbackSpecCost = 149 * 12; // Pro plan yearly
  const savings = yearlyCost - feedbackSpecCost;
  const roi = ((savings / feedbackSpecCost) * 100).toFixed(0);

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Calculator className="w-5 h-5 text-primary" />
        ROI Calculator
      </h3>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Team Size</label>
          <input
            type="range"
            min="1"
            max="20"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-muted-foreground">
            {teamSize} people
          </span>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Hours spent on feedback/week
          </label>
          <input
            type="range"
            min="5"
            max="40"
            value={timeSpent}
            onChange={(e) => setTimeSpent(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-muted-foreground">
            {timeSpent} hours/week
          </span>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Average hourly rate
          </label>
          <input
            type="range"
            min="50"
            max="200"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-muted-foreground">
            ${hourlyRate}/hour
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-destructive/10 rounded-lg">
          <p className="text-sm font-medium text-destructive">Current Cost</p>
          <p className="text-xl font-bold">
            ${monthlyCost.toLocaleString()}/mo
          </p>
        </div>
        <div className="text-center p-3 bg-primary/10 rounded-lg">
          <p className="text-sm font-medium text-primary">With FeedbackSpec</p>
          <p className="text-xl font-bold">$149/mo</p>
        </div>
      </div>

      <motion.div
        className="text-center p-4 bg-primary/10 rounded-lg"
        whileHover={{ scale: 1.02 }}
      >
        <p className="text-sm font-medium text-primary mb-1">Annual Savings</p>
        <p className="text-2xl font-bold text-primary">
          ${savings.toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground">ROI: {roi}%</p>
      </motion.div>
    </Card>
  );
}

export default function FeedbackSpecPricingEnhanced({
  onStartTrial,
}: {
  onStartTrial?: () => void;
}) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showROI, setShowROI] = useState(false);

  const getPrice = (plan: PricingPlan) => {
    return billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: PricingPlan) => {
    if (billingCycle === "yearly") {
      const monthlyCost = plan.monthlyPrice * 12;
      const yearlyCost = plan.yearlyPrice * 12;
      const savings = (
        ((monthlyCost - yearlyCost) / monthlyCost) *
        100
      ).toFixed(0);
      return `Save ${savings}%`;
    }
    return null;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-display-lg font-bold mb-6 tracking-display">
            Choose Your
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Start with a 14-day free trial. No credit card required. Cancel
            anytime. Join 2,847+ indie hackers already shipping faster.
          </p>

          {/* Billing cycle toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg mb-8">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-4 py-2 rounded-md transition-all",
                billingCycle === "monthly"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "px-4 py-2 rounded-md transition-all relative",
                billingCycle === "yearly"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 px-4 sm:px-0">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onHoverStart={() => setSelectedPlan(plan.id)}
              onHoverEnd={() => setSelectedPlan(null)}
              className="relative overflow-visible"
            >
              <Card
                className={cn(
                  "h-full relative overflow-visible border-2",
                  plan.popular && "ring-2 ring-primary",
                  plan.enterprise && "ring-2 ring-primary",
                  `bg-gradient-to-br ${plan.gradient}`,
                  selectedPlan === plan.id ? "border-primary" : "border-border"
                )}
                style={{
                  transition: "all 0.2s ease-out",
                  transform:
                    selectedPlan === plan.id
                      ? "translateY(-3px)"
                      : "translateY(0)",
                  boxShadow:
                    selectedPlan === plan.id
                      ? "0 8px 25px -8px rgba(59, 130, 246, 0.2)"
                      : "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardHeader className="text-center pb-4 sm:pb-6 relative">
                  {/* Popular badge */}
                  {plan.popular && (
                    <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-2 sm:px-3 py-1 shadow-lg font-semibold text-xs z-50">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}

                  {/* Enterprise badge */}
                  {plan.enterprise && (
                    <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-2 sm:px-3 py-1 shadow-lg font-semibold text-xs z-50">
                      <Crown className="w-3 h-3 mr-1" />
                      Enterprise
                    </Badge>
                  )}
                  <CardTitle className="text-xl sm:text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-4">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-bold">
                        ${getPrice(plan)}
                      </span>
                      <span className="text-muted-foreground text-sm sm:text-base">
                        /{billingCycle === "yearly" ? "mo" : "mo"}
                      </span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Billed annually ($
                        {(plan.yearlyPrice * 12).toLocaleString()}/year)
                      </p>
                    )}
                    {getSavings(plan) && (
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {getSavings(plan)}
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Key limits */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 p-3 sm:p-4 bg-background/50 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Sources</p>
                      <p className="font-semibold text-xs sm:text-sm">
                        {plan.limits.sources}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Feedback</p>
                      <p className="font-semibold text-xs sm:text-sm">
                        {plan.limits.feedback}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Team</p>
                      <p className="font-semibold text-xs sm:text-sm">
                        {plan.limits.users}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Support</p>
                      <p className="font-semibold text-xs sm:text-sm">
                        {plan.limits.support}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {plan.features.map((feature, fidx) => (
                      <motion.li
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: selectedPlan === plan.id ? fidx * 0.05 : 0,
                        }}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                      >
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={cn(
                      "w-full magnetic-hover min-h-[44px]",
                      plan.popular && "bg-primary hover:bg-primary/90",
                      plan.enterprise && "bg-primary hover:bg-primary/90"
                    )}
                    size="lg"
                    onClick={onStartTrial}
                  >
                    <span className="text-sm sm:text-base">Start Free Trial</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-3">
                    14-day free trial • No credit card required
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ/Features comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-0"
        >
          <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
              All Plans Include
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  desc: "SOC 2 Type II compliant",
                },
                {
                  icon: Clock,
                  title: "99.9% Uptime",
                  desc: "Guaranteed availability",
                },
                {
                  icon: Users,
                  title: "24/7 Support",
                  desc: "Always here to help",
                },
                {
                  icon: Star,
                  title: "Regular Updates",
                  desc: "New features monthly",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 2,847+ indie hackers and growing startups
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Shield className="w-3 h-3 mr-1 text-primary" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1 text-primary" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <DollarSign className="w-3 h-3 mr-1 text-primary" />
              No setup fees
            </div>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1 text-primary" />
              No user limits on Pro+
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
