"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Zap,
  Sparkles,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import { cn } from "../lib/utils";

// Button component
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground hover:shadow-xl hover:shadow-primary/30 hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Enhanced Badge component
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline:
          "text-foreground border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30",
        glow: "border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 text-primary backdrop-blur-sm hover:border-primary/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

// Enhanced Input component
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-input bg-background/50 backdrop-blur-sm px-4 py-3 text-sm text-foreground shadow-sm transition-all duration-300 placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// Glow component
const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("absolute inset-0 -z-10", className)} {...props}>
    <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl" />
    <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-2xl" />
    <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl" />
  </div>
));
Glow.displayName = "Glow";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
};

// Main CTA Component
interface CTAProps {
  badge?: {
    text: string;
  };
  title: string;
  description?: string;
  features?: string[];
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  emailCapture?: boolean;
  className?: string;
}

export function FeedbackSpecCTA({
  badge = { text: "No Credit Card Required" },
  title = "Stop wasting time on manual feedback management",
  description = "Your users are giving you the roadmap to $100k+ MRR every day. Join 200+ indie hackers who've automated their feedback workflow and shipped 3x more features using FeedbackSpec + AI coding assistants.",
  features = ["14-day free trial", "Setup takes 5 minutes", "No card required"],
  primaryAction = {
    text: "Get FeedbackSpec Free",
    href: "#signup",
  },
  secondaryAction = {
    text: "See How It Works",
    href: "#demo",
  },
  emailCapture = false,
  className,
}: CTAProps) {
  const [email, setEmail] = React.useState("");
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-background via-background to-muted/10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Glow Background */}
      <Glow />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Enhanced Title */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-heading">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div variants={itemVariants}>
            <p className="mb-10 text-xl text-muted-foreground sm:text-xl leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Enhanced Features */}
          <motion.div variants={itemVariants}>
            <div className="mb-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-background/30 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2 hover:border-primary/30 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Email Capture or Buttons */}
          {emailCapture ? (
            <motion.div variants={itemVariants}>
              <div className="mx-auto mb-10 max-w-lg">
                <div className="relative overflow-hidden rounded-2xl bg-background/40 backdrop-blur-md border border-border/50 p-2 shadow-2xl">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0"
                    />
                    <Button size="lg" variant="glow" className="px-8 shrink-0">
                      {primaryAction.text}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div variants={itemVariants}>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-10">
                <Button
                  size="lg"
                  variant="glow"
                  className="px-10 py-4 text-lg"
                  asChild
                >
                  <a href={primaryAction.href}>
                    {primaryAction.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                {secondaryAction && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 py-4 text-lg bg-background/50 backdrop-blur-sm"
                    asChild
                  >
                    <a href={secondaryAction.href}>{secondaryAction.text}</a>
                  </Button>
                )}
              </div>
            </motion.div>
          )}

          {/* Enhanced Trust Indicators */}
          <motion.div variants={itemVariants}>
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {[
                    {
                      icon: Shield,
                      title: "SOC 2 Compliant",
                      desc: "Enterprise security",
                    },
                    {
                      icon: Clock,
                      title: "99.9% Uptime",
                      desc: "Always available",
                    },
                    {
                      icon: Users,
                      title: "2,847+ Users",
                      desc: "Trusted by indie hackers",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-primary/80 transition-colors" />
                      <h4 className="font-semibold text-foreground mb-1 font-heading">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(var(--primary), 0.1), transparent)",
                  }}
                  animate={{
                    x: isHovered ? ["-100%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: isHovered ? Infinity : 0,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
