"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { FeedbackSpecLogo } from "./ui/FeedbackSpecLogo";
import {
  Check,
  X,
  Clock,
  DollarSign,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    feature: "Feedback Collection",
    traditional: { status: "partial", text: "Basic organization" },
    projectMgmt: { status: "no", text: "Not designed for feedback" },
    manual: { status: "no", text: "Scattered everywhere" },
    feedbackSpec: {
      status: "yes",
      text: "Auto-centralized from 20+ sources",
      highlight: true,
    },
  },
  {
    feature: "AI Specification Generation",
    traditional: { status: "no", text: "No specs generated" },
    projectMgmt: { status: "no", text: "No technical output" },
    manual: { status: "no", text: "3+ hours manual work" },
    feedbackSpec: {
      status: "yes",
      text: "8-minute AI-generated specs",
      highlight: true,
    },
  },
  {
    feature: "Cursor/Claude Integration",
    traditional: { status: "no", text: "No coding integration" },
    projectMgmt: { status: "no", text: "No AI tool support" },
    manual: { status: "no", text: "Generic prompts" },
    feedbackSpec: {
      status: "yes",
      text: "Optimized prompts included",
      highlight: true,
    },
  },
  {
    feature: "Revenue Impact Analysis",
    traditional: { status: "no", text: "Basic voting only" },
    projectMgmt: { status: "no", text: "No business context" },
    manual: { status: "no", text: "Pure guesswork" },
    feedbackSpec: {
      status: "yes",
      text: "MRR-impact prioritization",
      highlight: true,
    },
  },
  {
    feature: "Development Time",
    traditional: { status: "no", text: "No development help" },
    projectMgmt: { status: "no", text: "Still need to write specs" },
    manual: { status: "no", text: "Weeks per feature" },
    feedbackSpec: {
      status: "yes",
      text: "Hours with AI assistance",
      highlight: true,
    },
  },
  {
    feature: "Technical Architecture",
    traditional: { status: "no", text: "No technical details" },
    projectMgmt: { status: "no", text: "High-level tasks only" },
    manual: { status: "no", text: "Start from scratch" },
    feedbackSpec: {
      status: "yes",
      text: "Frontend/backend/DB included",
      highlight: true,
    },
  },
  {
    feature: "Setup Time",
    traditional: { status: "time", text: "Days of configuration" },
    projectMgmt: { status: "time", text: "Weeks to organize" },
    manual: { status: "time", text: "Always ongoing chaos" },
    feedbackSpec: {
      status: "fast",
      text: "5 minutes to full automation",
      highlight: true,
    },
  },
  {
    feature: "Target User",
    traditional: { status: "neutral", text: "Support teams" },
    projectMgmt: { status: "neutral", text: "Project managers" },
    manual: { status: "neutral", text: "Overwhelmed founders" },
    feedbackSpec: {
      status: "target",
      text: "Founders using vibe-coding",
      highlight: true,
    },
  },
  {
    feature: "Monthly Cost",
    traditional: { status: "price", text: "$29-99 (just organization)" },
    projectMgmt: { status: "price", text: "$49-199 (no specs)" },
    manual: { status: "price", text: "$0 (but costs $4k+ in time)" },
    feedbackSpec: {
      status: "best-price",
      text: "$49 (feedback + AI specs)",
      highlight: true,
    },
  },
];

function StatusIcon({ status }: { status: string }) {
  switch (status) {
    case "yes":
      return <Check className="w-5 h-5 text-green-500" />;
    case "no":
      return <X className="w-5 h-5 text-red-500" />;
    case "partial":
      return <Check className="w-5 h-5 text-yellow-500" />;
    case "time":
      return <Clock className="w-5 h-5 text-muted-foreground" />;
    case "fast":
      return <Zap className="w-5 h-5 text-green-500" />;
    case "price":
      return <DollarSign className="w-5 h-5 text-muted-foreground" />;
    case "best-price":
      return <DollarSign className="w-5 h-5 text-green-500" />;
    case "target":
      return <Target className="w-5 h-5 text-primary" />;
    default:
      return <span className="w-5 h-5" />;
  }
}

export function ComparisonTable() {
  return (
    <div className="relative py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Why FeedbackSpec Beats Everything Else
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            The only tool that solves both feedback chaos AND slow development
          </p>
        </motion.div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
        <motion.table
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full bg-card rounded-lg sm:rounded-xl border border-border overflow-hidden"
        >
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left p-2 sm:p-3 text-xs sm:text-sm font-semibold">Feature</th>
              <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-semibold text-muted-foreground">
                Traditional Tools
              </th>
              <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-semibold text-muted-foreground">
                Project Mgmt
              </th>
              <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-semibold text-muted-foreground">
                Manual
              </th>
              <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-semibold bg-primary/5">
                <div className="flex items-center justify-center">
                  <FeedbackSpecLogo size="md" showText={true} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "border-b border-border",
                  index % 2 === 0 ? "bg-card" : "bg-muted/30"
                )}
              >
                <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium">{row.feature}</td>
                <td className="p-2 sm:p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <StatusIcon status={row.traditional.status} />
                    <span className="text-xs text-muted-foreground">
                      {row.traditional.text}
                    </span>
                  </div>
                </td>
                <td className="p-2 sm:p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <StatusIcon status={row.projectMgmt.status} />
                    <span className="text-xs text-muted-foreground">
                      {row.projectMgmt.text}
                    </span>
                  </div>
                </td>
                <td className="p-2 sm:p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <StatusIcon status={row.manual.status} />
                    <span className="text-xs text-muted-foreground">
                      {row.manual.text}
                    </span>
                  </div>
                </td>
                <td className="p-2 sm:p-3 text-center bg-primary/5">
                  <div className="flex items-center justify-center gap-1.5">
                    <StatusIcon status={row.feedbackSpec.status} />
                    <span
                      className={cn(
                        "text-xs font-medium",
                        row.feedbackSpec.highlight
                          ? "text-primary"
                          : "text-gray-700"
                      )}
                    >
                      {row.feedbackSpec.text}
                    </span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-lg border border-border p-3"
            >
              <h3 className="font-semibold mb-2 text-sm">{row.feature}</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <StatusIcon status={row.traditional.status} />
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500">
                    Traditional Tools
                  </p>
                  <p className="text-xs">{row.traditional.text}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <StatusIcon status={row.projectMgmt.status} />
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500">
                    Project Mgmt
                  </p>
                  <p className="text-xs">{row.projectMgmt.text}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <StatusIcon status={row.manual.status} />
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500">
                    Manual
                  </p>
                  <p className="text-xs">{row.manual.text}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-primary/5 rounded-lg">
                <StatusIcon status={row.feedbackSpec.status} />
                <div className="flex-1">
                  <div className="mb-1">
                    <FeedbackSpecLogo size="md" showText={true} />
                  </div>
                  <p className="text-xs font-medium text-primary">
                    {row.feedbackSpec.text}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  );
}
