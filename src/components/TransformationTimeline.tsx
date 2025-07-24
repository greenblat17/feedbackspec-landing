"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Clock,
  Timer,
  X,
  TrendingDown,
  Zap,
  Rocket,
  Target,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Transformation Timeline Component
export function TransformationTimeline() {
  const timelineStages = [
    {
      period: "The Struggling Founder",
      subtitle: "Drowning in chaos, shipping blindly",
      items: [
        { icon: Clock, text: "Spending weekends organizing scattered feedback instead of building", color: "text-red-600" },
        { icon: Timer, text: "Writing specs manually while competitors ship features daily", color: "text-red-600" },
        { icon: X, text: "Building features that get 5% adoption because they missed the mark", color: "text-red-600" },
        { icon: TrendingDown, text: "Watching competitors win deals with worse products but faster shipping", color: "text-red-600" },
      ],
      bgColor: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
      emotion: "😰"
    },
    {
      period: "The Transformed Founder", 
      subtitle: "Laser-focused, shipping with confidence",
      items: [
        { icon: Zap, text: "5 minutes to understand exactly what users want across all channels", color: "text-green-600" },
        { icon: Rocket, text: "AI generates production-ready specs that developers love", color: "text-green-600" },
        { icon: Target, text: "Every feature ships with 80%+ adoption because it solves real problems", color: "text-green-600" },
        { icon: TrendingUp, text: "Shipping 3x faster while competitors scramble to catch up", color: "text-green-600" },
      ],
      bgColor: "from-green-50 to-blue-50", 
      borderColor: "border-green-200",
      emotion: "🚀"
    },
  ];
  
  return (
    <div className="relative py-16">
      <h3 className="text-3xl font-bold text-center mb-12">
        Your Transformation Timeline
      </h3>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {timelineStages.map((stage, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Card className={cn(
              "h-full p-8 bg-gradient-to-br",
              stage.bgColor,
              stage.borderColor,
              "border-2"
            )}>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{stage.emotion}</div>
                <h4 className="text-2xl font-bold mb-2">{stage.period}</h4>
                <p className="text-muted-foreground italic">{stage.subtitle}</p>
              </div>
              <div className="space-y-4">
                {stage.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * itemIdx }}
                    className="flex items-start gap-3"
                  >
                    <div className={cn(
                      "p-2 rounded-lg",
                      idx === 0 ? "bg-red-100" : "bg-green-100"
                    )}>
                      <item.icon className={cn("w-5 h-5", item.color)} />
                    </div>
                    <p className="text-base leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Arrow Animation */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary"
        >
          <ChevronRight className="w-12 h-12" />
        </motion.div>
      </div>
    </div>
  );
}