"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Zap, Target, MessageSquare } from "lucide-react";
import { cn } from "../lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay: number;
}

function BenefitCard({
  icon,
  title,
  description,
  features,
  gradient,
  delay,
}: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <Card className="relative h-full overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <div
          className={cn(
            "absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10",
            gradient
          )}
        />

        <CardHeader className="relative z-10 pb-4">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>

        <CardContent className="relative z-10 pt-0">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function FeedbackSpecBenefits() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Rapid Feature Development",
      description:
        "Accelerate your development cycle with streamlined feedback integration",
      features: [
        "Real-time feedback processing",
        "Automated feature request tracking",
        "Direct integration with development tools",
        "Priority-based development queue",
      ],
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Smart Prioritization",
      description:
        "AI-powered insights to focus on what matters most to your users",
      features: [
        "Intelligent impact scoring",
        "User segment analysis",
        "Business value assessment",
        "Automated priority recommendations",
      ],
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Comprehensive Feedback Collection",
      description: "Capture every voice across all touchpoints in your product",
      features: [
        "Multi-channel feedback capture",
        "In-app feedback widgets",
        "Email and survey integration",
        "Social media monitoring",
      ],
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
      delay: 0.4,
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
              Transform Your Product Development with{" "}
              <span className="text-3xl font-bold md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                FeedbackSpec
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock the power of user feedback to build products that truly
              resonate with your audience. Our platform bridges the gap between
              user insights and feature delivery.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
            <Zap className="h-4 w-4" />
            <span>Join 1000+ teams already using FeedbackSpec</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeedbackSpecBenefits;
