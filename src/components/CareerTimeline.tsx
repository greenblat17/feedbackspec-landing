"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import {
  Sparkles,
  Calendar,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  Trophy,
} from "lucide-react";

const timelineData = [
  {
    time: "Day 1",
    title: "Stop drowning in scattered feedback",
    description:
      "All feedback from 20+ sources centralized and organized automatically. Finally see the full picture of what users actually want.",
    icon: Calendar,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    iconBgColor: "bg-blue-500/20",
    glowColor: "shadow-blue-500/20",
  },
  {
    time: "Day 7",
    title: "Ship your first AI-generated feature",
    description:
      "From user complaint to production-ready code in 8 hours using Cursor. Users can't believe how fast you responded to their request.",
    icon: CalendarDays,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    iconBgColor: "bg-purple-500/20",
    glowColor: "shadow-purple-500/20",
  },
  {
    time: "Day 14",
    title: "Build exactly what users pay for",
    description:
      "Clear priority ranking shows which features drive revenue. Stop building based on loudest complaints, start building based on business impact.",
    icon: CalendarRange,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    iconBgColor: "bg-green-500/20",
    glowColor: "shadow-green-500/20",
  },
  {
    time: "Day 21",
    title: "Become a feature shipping machine",
    description:
      "4 user-requested features delivered. Your development velocity becomes your competitive advantage.",
    icon: CalendarCheck,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    iconBgColor: "bg-orange-500/20",
    glowColor: "shadow-orange-500/20",
  },
  {
    time: "Day 30",
    title: 'Users start saying "this founder really gets it"',
    description:
      "Perfect product-market fit signals. Churn drops, satisfaction explodes, revenue grows 47% because you're building exactly what converts.",
    icon: Trophy,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    iconBgColor: "bg-primary/20",
    glowColor: "shadow-primary/20",
  },
];

export function CareerTimeline() {
  return (
    <div className="relative overflow-visible z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
          The Month That Changes Everything
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your journey from feedback chaos to product-market fit
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Desktop Timeline */}
        <div className="hidden md:block relative z-10">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-primary/20 transform -translate-y-1/2" />

          {/* Timeline Progress */}
          <motion.div
            className="absolute left-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-primary transform -translate-y-1/2 z-0"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Timeline Items */}
          <div className="relative grid grid-cols-5 gap-4 pt-32 pb-32 z-20">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? "-top-24" : "top-24"}`}
              >
                {/* Connection Line */}
                <div
                  className={`absolute left-1/2 w-0.5 h-16 bg-border/50 transform -translate-x-1/2 ${
                    index % 2 === 0 ? "top-full" : "bottom-full"
                  }`}
                />

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  className={`absolute left-1/2 transform -translate-x-1/2 ${
                    index % 2 === 0 ? "top-full mt-16" : "bottom-full mb-16"
                  }`}
                >
                  <div
                    className={`w-4 h-4 ${item.bgColor} border-2 ${item.borderColor} shadow-lg ${item.glowColor} rounded-full`}
                  />
                </motion.div>

                {/* Content Card */}
                <Card
                  className={`p-4 ${item.bgColor} ${item.borderColor} border hover:shadow-xl hover:${item.glowColor} transition-all duration-300 relative z-30 backdrop-blur-sm`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${item.iconBgColor} mb-3`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>

                  <Badge variant="outline" className="mb-2 text-xs border-border/50">
                    {item.time}
                  </Badge>

                  <h3 className="text-base font-semibold mb-2 leading-tight text-foreground">{item.title}</h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`p-6 ${item.bgColor} ${item.borderColor} border backdrop-blur-sm hover:shadow-xl hover:${item.glowColor} transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${item.iconBgColor} flex-shrink-0`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>

                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 border-border/50">
                      {item.time}
                    </Badge>

                    <h3 className="font-semibold mb-1 text-foreground">{item.title}</h3>

                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Connection line */}
              {index < timelineData.length - 1 && (
                <div className="w-0.5 h-6 bg-border/50 mx-auto" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
