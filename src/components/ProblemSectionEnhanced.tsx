"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "./ui/card";
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
  Github,
  Slack,
  Chrome,
  DollarSign,
  X,
  Brain,
  Target,
} from "lucide-react";
import {
  designSystem,
  getSpring,
  animationVariants,
  performanceConfig,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={getSpring("smooth")}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

// Floating platform icons
const PLATFORM_ICONS = [
  { Icon: Twitter, color: "#1DA1F2", position: { top: "10%", left: "5%" } },
  { Icon: Github, color: "#333", position: { top: "20%", right: "8%" } },
  { Icon: Slack, color: "#4A154B", position: { bottom: "30%", left: "10%" } },
  {
    Icon: MessageCircle,
    color: "#5865F2",
    position: { bottom: "20%", right: "5%" },
  },
  { Icon: Mail, color: "#EA4335", position: { top: "50%", left: "3%" } },
  { Icon: Chrome, color: "#4285F4", position: { top: "40%", right: "12%" } },
];

export default function ProblemSectionEnhanced() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 1]);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-background to-muted/10">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      </motion.div>

      {/* Static platform icons for performance */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {PLATFORM_ICONS.slice(0, 3).map((platform, idx) => (
          <div key={idx} className="absolute" style={platform.position}>
            <platform.Icon
              className="w-8 h-8"
              style={{ color: platform.color, opacity: 0.3 }}
            />
          </div>
        ))}
      </div>

      <div className="container relative mx-auto px-6 max-w-7xl">
        {/* Header with emotional hook */}
        <motion.div
          variants={animationVariants.viewportSlide}
          initial="hidden"
          whileInView="visible"
          viewport={performanceConfig.viewport}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-display-lg font-bold mb-6 leading-tight tracking-display">
            <span className="text-foreground">While You Sleep,</span>
            <br />
            <motion.span
              className="text-primary"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Your Users Are Leaving
            </motion.span>
          </h2>

          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Every day, indie hackers lose{" "}
            <AnimatedCounter value={47} suffix="%" /> of potential customers
            because critical feedback is buried in{" "}
            <AnimatedCounter value={23} suffix="+" /> different platforms.
          </p>
        </motion.div>

        {/* The Real Cost - Interactive Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Calculate Your Hidden Costs
            </h3>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 sm:p-4 bg-background/50 rounded-lg"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter value={20} suffix=" hrs/week" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Managing feedback
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 sm:p-4 bg-background/50 rounded-lg"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  $<AnimatedCounter value={4800} suffix="/mo" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Opportunity cost
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 sm:p-4 bg-background/50 rounded-lg"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter value={67} suffix="%" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Features users don't want
                </p>
              </motion.div>
            </div>

            <motion.div
              className="text-center p-3 sm:p-4 bg-primary/10 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-base sm:text-lg font-semibold mb-2">
                That's <span className="text-primary">$57,600/year</span> in
                lost revenue
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Time you could spend shipping features that actually matter
              </p>
            </motion.div>
          </Card>
        </motion.div>

        {/* Pain Points - Interactive Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: "The Time Vampire",
              story:
                "Sarah checks 12 platforms daily. A game-changing feature request on Reddit goes unnoticed for 3 weeks. Competitor launches it first.",
              impact: "Lost 200 customers",
              color: "text-primary",
              gradient: "from-primary/10 to-primary/5",
            },
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: "The Feedback Maze",
              story:
                "Alex has feedback in Twitter DMs, Discord, emails, and GitHub. Can't see patterns. Builds wrong features for 6 months.",
              impact: "$50k development wasted",
              color: "text-primary",
              gradient: "from-primary/15 to-primary/5",
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "The Guessing Game",
              story:
                "Mike prioritizes based on loudest users, not highest value. Enterprise customers leave quietly. Realizes too late.",
              impact: "80% MRR gone",
              color: "text-primary",
              gradient: "from-primary/20 to-primary/5",
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: "The Context Switch",
              story:
                "Emma jumps between 8 tools to gather feedback. Loses flow state. Takes 3x longer to ship anything.",
              impact: "Burnout in 6 months",
              color: "text-primary",
              gradient: "from-primary/25 to-primary/5",
            },
          ].map((pain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onHoverStart={() => setActiveCard(idx)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <Card
                className={cn(
                  "h-full overflow-hidden transition-all duration-300 cursor-pointer",
                  activeCard === idx
                    ? "shadow-2xl scale-[1.02]"
                    : "hover:shadow-lg",
                  `bg-gradient-to-br ${pain.gradient}`
                )}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <motion.div
                      className={cn(
                        "p-2 sm:p-3 rounded-xl bg-background/50",
                        pain.color
                      )}
                      animate={
                        activeCard === idx ? { rotate: [0, -10, 10, 0] } : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {React.cloneElement(pain.icon, {
                        className: "w-6 h-6 sm:w-8 sm:h-8",
                      })}
                    </motion.div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{pain.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pain.story}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="mt-4 p-2 sm:p-3 bg-background/50 rounded-lg flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: activeCard === idx ? 1 : 0.8, x: 0 }}
                  >
                    <span className="text-xs sm:text-sm font-medium">Real Impact:</span>
                    <span className={cn("font-bold text-xs sm:text-sm", pain.color)}>
                      {pain.impact}
                    </span>
                  </motion.div>
                </div>

                {activeCard === idx && (
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <p className="text-xs text-muted-foreground italic">
                      Based on real stories from indie hackers. Don't let this
                      be you.
                    </p>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* The Breaking Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-2 border-dashed border-primary/20">
            <div className="max-w-3xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <X className="w-16 h-16 text-primary mx-auto" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">The Breaking Point</h3>

              <p className="text-lg text-muted-foreground mb-6">
                <AnimatedCounter value={73} suffix="%" /> of indie hackers quit
                within 18 months because they're building the wrong things for
                the wrong people.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge
                  variant="default"
                  className="text-sm bg-primary text-primary-foreground"
                >
                  <Clock className="w-4 h-4 mr-1" />
                  20+ hours/week wasted
                </Badge>
                <Badge
                  variant="default"
                  className="text-sm bg-primary text-primary-foreground"
                >
                  <TrendingDown className="w-4 h-4 mr-1" />
                  40% features unused
                </Badge>
                <Badge
                  variant="default"
                  className="text-sm bg-primary text-primary-foreground"
                >
                  <Users className="w-4 h-4 mr-1" />
                  60% customers churning
                </Badge>
              </div>

              <motion.div
                className="inline-flex items-center gap-2 text-lg font-semibold"
                whileHover={{ x: 10 }}
              >
                <span>But there's a better way</span>
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
