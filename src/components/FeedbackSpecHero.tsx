import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { ArrowRight, Zap, Users, Target } from "lucide-react";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(210_100%_50%/.5)_10%,_hsl(213_100%_60%/0)_60%)] sm:h-[512px]",
        variant === "center" && "-translate-y-1/2"
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(213_100%_60%/.3)_10%,_hsl(210_100%_50%/0)_60%)] sm:h-[256px]",
        variant === "center" && "-translate-y-1/2"
      )}
    />
  </div>
));
Glow.displayName = "Glow";

const mockupVariants = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-border/5 border-t-border/15",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-md",
      },
    },
    defaultVariants: {
      type: "responsive",
    },
  }
);

interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupVariants> {}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, type, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(mockupVariants({ type, className }))}
      {...props}
    />
  )
);
Mockup.displayName = "Mockup";

interface FeedbackSpecHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

const GRADIENT_COLORS = ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"];

export function FeedbackSpecHero({
  title = "Convert Scattered Feedback into AI-Ready Specs",
  subtitle = "For Indie Hackers Who Ship Fast",
  description = "Stop losing valuable user insights in Slack threads, emails, and random notes. FeedbackSpec automatically transforms your scattered feedback into structured, AI-ready product specifications that help you build what users actually want.",
  primaryCtaText = "Start Free Trial",
  primaryCtaHref = "/signup",
  secondaryCtaText = "See How It Works",
  secondaryCtaHref = "/demo",
  className,
}: FeedbackSpecHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const color = useMotionValue(GRADIENT_COLORS[0]);

  useEffect(() => {
    setIsVisible(true);
    animate(color, GRADIENT_COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundGradient = useMotionTemplate`radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 50%)`;
  const borderGradient = useMotionTemplate`1px solid ${color}40`;
  const boxShadow = useMotionTemplate`0 0 20px ${color}20`;

  return (
    <motion.section
      style={{ backgroundImage: backgroundGradient }}
      className={cn(
        "relative bg-background text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden min-h-screen flex items-center",
        className
      )}
    >
      <div className="relative mx-auto max-w-7xl w-full">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground mb-6"
            >
              <Zap className="w-4 h-4 text-blue-500" />
              AI-Powered Feedback Analysis
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-600 font-semibold text-lg mb-4"
            >
              {subtitle}
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
                "leading-[1.1] mb-6",
                "bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground",
                "bg-clip-text text-transparent"
              )}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                style={{ border: borderGradient, boxShadow }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg px-8 py-3 text-lg font-semibold"
                >
                  <a href={primaryCtaHref} className="flex items-center gap-2">
                    {primaryCtaText}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg font-semibold"
              >
                <a href={secondaryCtaHref}>{secondaryCtaText}</a>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-12 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>500+ indie hackers</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>10x faster specs</span>
              </div>
            </motion.div>
          </div>

          {/* Mockup Section */}
          <div className="flex-1 w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.95,
              }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative"
            >
              <Mockup className="w-full bg-card border-border/20 shadow-2xl">
                <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 flex flex-col">
                  {/* Mock Interface Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-foreground">
                        FeedbackSpec
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mock Content */}
                  <div className="flex-1 space-y-4">
                    <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 border border-border/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">
                          Feedback Processed
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Users want a dark mode toggle in the settings..."
                      </p>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 border border-border/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">
                          AI-Generated Spec
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Feature: Dark Mode Toggle - Priority: High - Effort: 2
                        days..."
                      </p>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 border border-border/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium">
                          Ready for Development
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Technical requirements and user stories generated..."
                      </p>
                    </div>
                  </div>
                </div>
              </Mockup>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow variant="above" className="opacity-30" />
      </div>
    </motion.section>
  );
}
