"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import {
  Check,
  Sparkles,
  ArrowRight,
  Zap,
  Rocket,
  Building2,
  Calculator,
  TrendingUp,
  Users,
  MessageSquare,
  Shield,
  Crown,
  Star,
  ChevronRight,
  X,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: {
    text: string;
    highlight?: boolean;
  }[];
  cta: string;
  popular?: boolean;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for indie hackers getting started",
    monthlyPrice: 49,
    yearlyPrice: 39,
    icon: Zap,
    color: "blue",
    bgGradient:
      "from-blue-50 to-white dark:from-blue-950/20 dark:to-background",
    cta: "Start building faster",
    features: [
      { text: "3 feedback sources" },
      { text: "100 feedback items/month" },
      { text: "AI-powered specs" },
      { text: "Cursor/Claude optimized" },
      { text: "Email support" },
      { text: "14-day free trial", highlight: true },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For founders ready to scale",
    monthlyPrice: 149,
    yearlyPrice: 119,
    icon: Rocket,
    color: "blue",
    bgGradient:
      "from-blue/5 to-background dark:from-blue/10 dark:to-background",
    cta: "Scale your product",
    popular: true,
    features: [
      { text: "Unlimited feedback sources", highlight: true },
      { text: "Unlimited processing", highlight: true },
      { text: "MRR-based prioritization" },
      { text: "Team collaboration (5 seats)" },
      { text: "API access" },
      { text: "Priority support" },
      { text: "Custom templates" },
      { text: "Analytics dashboard" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For teams that need it all",
    monthlyPrice: 499,
    yearlyPrice: 399,
    icon: Building2,
    color: "green",
    bgGradient:
      "from-green-50 to-white dark:from-green-950/20 dark:to-background",
    cta: "Contact sales",
    features: [
      { text: "Everything in Pro" },
      { text: "Unlimited team seats", highlight: true },
      { text: "SSO & SAML" },
      { text: "Custom integrations" },
      { text: "Dedicated CSM" },
      { text: "99.9% SLA" },
      { text: "White-label options" },
      { text: "Priority roadmap input" },
    ],
  },
];

// Feature comparison data
const featureComparison = [
  {
    category: "Feedback Collection",
    features: [
      {
        name: "Feedback sources",
        starter: "3",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Monthly feedback items",
        starter: "100",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      { name: "AI categorization", starter: true, pro: true, enterprise: true },
      { name: "Custom sources", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "AI Specifications",
    features: [
      {
        name: "Cursor-ready specs",
        starter: true,
        pro: true,
        enterprise: true,
      },
      { name: "Custom templates", starter: false, pro: true, enterprise: true },
      {
        name: "MRR prioritization",
        starter: false,
        pro: true,
        enterprise: true,
      },
      { name: "Bulk generation", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Team & Support",
    features: [
      { name: "Team seats", starter: "1", pro: "5", enterprise: "Unlimited" },
      {
        name: "Support level",
        starter: "Email",
        pro: "Priority",
        enterprise: "Dedicated CSM",
      },
      {
        name: "Onboarding",
        starter: "Self-serve",
        pro: "Guided",
        enterprise: "White-glove",
      },
      { name: "SLA", starter: false, pro: false, enterprise: "99.9%" },
    ],
  },
];

export default function FeedbackSpecPricingEnhanced({
  onStartTrial,
}: {
  onStartTrial?: () => void;
}) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "yearly"
  );
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Start shipping faster today
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 200+ founders who transformed their development process
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="inline-flex items-center p-1.5 bg-muted/50 rounded-full border border-border/50">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200",
                billingPeriod === "monthly"
                  ? "bg-background shadow-sm"
                  : "hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative",
                billingPeriod === "yearly"
                  ? "bg-background shadow-sm"
                  : "hover:text-foreground"
              )}
            >
              Yearly
              <Badge className="absolute -top-3 -right-3 px-2 py-0.5 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
          {pricingTiers.map((tier, index) => {
            const price =
              billingPeriod === "yearly" ? tier.yearlyPrice : tier.monthlyPrice;
            const isHovered = hoveredTier === tier.id;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredTier(tier.id)}
                onHoverEnd={() => setHoveredTier(null)}
                className={cn("relative", tier.popular && "z-10")}
              >
                {/* Subtle background for Pro tier */}
                {tier.popular && (
                  <div className="absolute -inset-3 bg-blue-50 dark:bg-blue-950/20 rounded-2xl -z-10" />
                )}

                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={cn(
                    "relative h-full transition-all duration-300",
                    tier.popular
                      ? "bg-blue-50/50 dark:bg-blue-950/10 shadow-lg border-blue-200 dark:border-blue-900"
                      : "bg-white dark:bg-gray-950",
                    isHovered && "transform -translate-y-2 shadow-xl"
                  )}
                >
                  <div className="p-4 sm:p-6 lg:p-8">
                    {/* Icon and name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          tier.color === "primary" && "bg-primary/10",
                          tier.color === "blue" &&
                            "bg-blue-100 dark:bg-blue-900/50",
                          tier.color === "purple" &&
                            "bg-purple-100 dark:bg-purple-900/50",
                          tier.color === "green" &&
                            "bg-green-100 dark:bg-green-900/50"
                        )}
                      >
                        <tier.icon
                          className={cn(
                            "w-5 h-5",
                            tier.color === "primary" && "text-primary",
                            tier.color === "blue" &&
                              "text-blue-600 dark:text-blue-400",
                            tier.color === "purple" &&
                              "text-purple-600 dark:text-purple-400",
                            tier.color === "green" &&
                              "text-green-600 dark:text-green-400"
                          )}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">{tier.name}</h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                      {tier.description}
                    </p>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6 lg:mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">${price}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      {billingPeriod === "yearly" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          billed annually (${price * 12}/year)
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={cn(
                        "w-full group",
                        tier.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "variant-outline"
                      )}
                      size="lg"
                      onClick={onStartTrial}
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                      14-day free trial • No credit card
                    </p>

                    {/* Features */}
                    <div className="mt-8 pt-8 border-t">
                      <ul className="space-y-3">
                        {tier.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0.9, x: 0 }}
                            transition={{ delay: isHovered ? idx * 0.05 : 0 }}
                            className="flex items-start gap-3"
                          >
                            <Check
                              className={cn(
                                "w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0",
                                feature.highlight
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              )}
                            />
                            <span
                              className={cn(
                                "text-xs sm:text-sm",
                                feature.highlight && "font-medium"
                              )}
                            >
                              {feature.text}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* ROI Calculator Section */}

        {/* Feature Comparison Table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Complete Feature Comparison
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Feature</th>
                        <th className="text-center p-4">Starter</th>
                        <th className="text-center p-4">
                          <div className="flex items-center justify-center gap-2">
                            <Crown className="w-4 h-4 text-primary" />
                            Pro
                          </div>
                        </th>
                        <th className="text-center p-4">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featureComparison.map((category, categoryIdx) => (
                        <React.Fragment key={categoryIdx}>
                          <tr className="bg-muted/50">
                            <td colSpan={4} className="p-4 font-semibold">
                              {category.category}
                            </td>
                          </tr>
                          {category.features.map((feature, featureIdx) => (
                            <tr key={featureIdx} className="border-b">
                              <td className="p-4">{feature.name}</td>
                              <td className="text-center p-4">
                                {typeof feature.starter === "boolean" ? (
                                  feature.starter ? (
                                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                  )
                                ) : (
                                  <span className="font-medium">
                                    {feature.starter}
                                  </span>
                                )}
                              </td>
                              <td className="text-center p-4">
                                {typeof feature.pro === "boolean" ? (
                                  feature.pro ? (
                                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                  )
                                ) : (
                                  <span className="font-medium">
                                    {feature.pro}
                                  </span>
                                )}
                              </td>
                              <td className="text-center p-4">
                                {typeof feature.enterprise === "boolean" ? (
                                  feature.enterprise ? (
                                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                  )
                                ) : (
                                  <span className="font-medium">
                                    {feature.enterprise}
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
