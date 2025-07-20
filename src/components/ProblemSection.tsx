"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Clock,
  MessageSquare,
  Zap,
  TrendingDown,
  AlertTriangle,
  Users,
  ArrowRight,
  Twitter,
  Mail,
  MessageCircle,
} from "lucide-react";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface PainPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
  stats: string;
  platforms: string[];
}

interface TextShimmerProps {
  children: string;
  className?: string;
  duration?: number;
}

const TextShimmer: React.FC<TextShimmerProps> = ({
  children,
  className,
  duration = 2,
}) => {
  return (
    <motion.span
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-20px),var(--base-gradient-color),#0000_calc(50%+20px))] [background-repeat:no-repeat,padding-box]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff]",
        className
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={{
        backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
      }}
    >
      {children}
    </motion.span>
  );
};

const painPoints: PainPoint[] = [
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    title: "Time Drain",
    description:
      "Manually checking 5+ platforms daily for customer feedback wastes precious development time",
    impact: "3-4 hours lost daily",
    stats: "67% of time spent on admin tasks",
    platforms: ["Twitter", "Discord", "Email", "Slack", "GitHub"],
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
    title: "Scattered Feedback",
    description:
      "Critical user insights buried across different platforms, making it impossible to see the full picture",
    impact: "Missing 40% of feedback",
    stats: "Average 23 different channels",
    platforms: ["Reddit", "Product Hunt", "Support tickets", "Social media"],
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-yellow-500" />,
    title: "Slow Response Times",
    description:
      "Delayed responses to user issues hurt customer satisfaction and product reputation",
    impact: "48hr average response time",
    stats: "Customer satisfaction drops 35%",
    platforms: ["Support forums", "Chat widgets", "Social mentions"],
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-purple-500" />,
    title: "Missed Opportunities",
    description:
      "Important feature requests and bug reports slip through the cracks without centralized tracking",
    impact: "Lost product insights",
    stats: "30% of feedback never acted upon",
    platforms: ["Feature request forms", "User interviews", "Beta feedback"],
  },
];

const ProblemSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Problem
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <TextShimmer className="text-foreground" duration={3}>
              Feedback Chaos
            </TextShimmer>{" "}
            <br />
            <span className="text-muted-foreground">is Killing Your</span>{" "}
            <span className="text-primary">Productivity</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Indie hackers are drowning in scattered feedback across multiple
            platforms, wasting hours daily and missing critical insights that
            could make or break their products.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card
                className={cn(
                  "h-full transition-all duration-300 hover:shadow-xl border-2",
                  hoveredCard === index
                    ? "border-primary/50 shadow-lg"
                    : "border-border"
                )}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-muted/50">
                      {point.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <span className="font-semibold text-destructive">
                        Impact:
                      </span>
                      <span className="font-bold text-destructive">
                        {point.impact}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <span className="font-medium text-muted-foreground">
                        Reality:
                      </span>
                      <span className="font-semibold text-foreground">
                        {point.stats}
                      </span>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm font-medium text-muted-foreground mb-3">
                        Common platforms affected:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {point.platforms.map((platform, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Icons Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Feedback scattered across endless platforms
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-60">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Twitter className="w-6 h-6" />
              <span className="text-sm font-medium">Twitter</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-6 h-6" />
              <span className="text-sm font-medium">Email</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm font-medium">Discord</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-6 h-6" />
              <span className="text-sm font-medium">Forums</span>
            </div>
            <div className="text-muted-foreground font-medium">
              + 15 more...
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 p-8 rounded-2xl border border-destructive/20"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Zap className="w-8 h-8 text-destructive" />
              <h4 className="text-xl font-bold text-destructive">
                The Real Cost
              </h4>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              The average indie hacker spends{" "}
              <strong className="text-destructive">20+ hours per week</strong>{" "}
              just managing feedback instead of building features users actually
              want.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span>Sound familiar?</span>
              <ArrowRight className="w-4 h-4" />
              <span className="font-semibold text-primary">
                There's a better way
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
