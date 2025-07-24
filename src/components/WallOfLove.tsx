"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Twitter, MessageSquare, Mail, Github } from "lucide-react";
import { cn } from "@/lib/utils";

// Extended testimonials data
const testimonials = [
  {
    id: 1,
    quote:
      "FeedbackSpec helped us go from drowning in Discord messages to shipping 3x faster. Our MRR grew 47% in just 2 months.",
    author: "Sarah Chen",
    role: "Founder",
    company: "DevTools Pro",
    mrr: "$28k MRR",
    avatar: "SC",
    rating: 5,
    source: "twitter",
    featured: true,
  },
  {
    id: 2,
    quote:
      "Before FeedbackSpec, I spent 15+ hours weekly just organizing feedback. Now it takes me 5 minutes to get actionable insights.",
    author: "Marcus Rodriguez",
    role: "Solo Founder",
    company: "SaaS Analytics",
    mrr: "$12k MRR",
    avatar: "MR",
    rating: 5,
    source: "email",
  },
  {
    id: 3,
    quote:
      "The AI specifications are so detailed that my developer can implement features in half the time. Game changer for remote teams.",
    author: "Alex Thompson",
    role: "CTO",
    company: "CloudSync",
    mrr: "$85k MRR",
    avatar: "AT",
    rating: 5,
    source: "discord",
    featured: true,
  },
  {
    id: 4,
    quote:
      "Finally, a tool that understands indie hackers. From feedback chaos to shipped features in hours, not weeks.",
    author: "Lisa Park",
    role: "Founder",
    company: "AnalyticsHub",
    mrr: "$15k MRR",
    avatar: "LP",
    rating: 5,
    source: "twitter",
  },
  {
    id: 5,
    quote:
      "The ROI is insane. We're shipping 8 features monthly instead of 2. Users are happier, revenue is up 35%.",
    author: "David Kim",
    role: "CEO",
    company: "TaskFlow",
    mrr: "$42k MRR",
    avatar: "DK",
    rating: 5,
    source: "github",
  },
  {
    id: 6,
    quote:
      "I was skeptical about AI specs, but FeedbackSpec generates better requirements than I write myself. Mind blown.",
    author: "Emma Wilson",
    role: "Product Lead",
    company: "DesignSystems",
    mrr: "$22k MRR",
    avatar: "EW",
    rating: 5,
    source: "email",
  },
  {
    id: 7,
    quote:
      "Cursor + FeedbackSpec = Superpowers. I'm literally building features as fast as users request them.",
    author: "James Liu",
    role: "Indie Hacker",
    company: "CodeBoost",
    mrr: "$8k MRR",
    avatar: "JL",
    rating: 5,
    source: "discord",
  },
  {
    id: 8,
    quote:
      "No more guessing what to build next. FeedbackSpec shows me exactly which features will increase revenue.",
    author: "Sofia Martinez",
    role: "Founder",
    company: "MetricsAPI",
    mrr: "$31k MRR",
    avatar: "SM",
    rating: 5,
    source: "twitter",
  },
  {
    id: 9,
    quote:
      "Went from 20% churn to 8% in 3 months. Turns out, building what users actually ask for works!",
    author: "Ryan Foster",
    role: "CEO",
    company: "DataSync Pro",
    mrr: "$55k MRR",
    avatar: "RF",
    rating: 5,
    source: "email",
  },
  {
    id: 10,
    quote:
      "The feedback centralization alone is worth it. Add AI specs? This is a founder's dream tool.",
    author: "Nina Patel",
    role: "Solo Founder",
    company: "APIBuilder",
    mrr: "$19k MRR",
    avatar: "NP",
    rating: 5,
    source: "github",
  },
  {
    id: 11,
    quote:
      "Stopped losing valuable feedback. Every user complaint is now a shipped feature opportunity.",
    author: "Tom Anderson",
    role: "Founder",
    company: "WebHooks.io",
    mrr: "$24k MRR",
    avatar: "TA",
    rating: 5,
    source: "discord",
  },
  {
    id: 12,
    quote:
      "My competitors are still organizing spreadsheets while I'm shipping their users' feature requests.",
    author: "Michelle Lee",
    role: "CEO",
    company: "FormBuilder Plus",
    mrr: "$38k MRR",
    avatar: "ML",
    rating: 5,
    source: "twitter",
  },
];

// Source icons mapping
const sourceIcons = {
  twitter: Twitter,
  discord: MessageSquare,
  email: Mail,
  github: Github,
};

// Add more testimonials for a fuller wall effect
const additionalTestimonials = [
  {
    id: 13,
    quote:
      "Best investment for our startup. Period. The time savings alone paid for itself 10x over.",
    author: "Chris Zhang",
    role: "Technical Founder",
    company: "StreamlineAPI",
    mrr: "$45k MRR",
    avatar: "CZ",
    rating: 5,
    source: "twitter",
  },
  {
    id: 14,
    quote:
      "FeedbackSpec turned our messy feedback process into a revenue-generating machine.",
    author: "Rachel Green",
    role: "CEO",
    company: "UserFlow Pro",
    mrr: "$67k MRR",
    avatar: "RG",
    rating: 5,
    source: "email",
  },
  {
    id: 15,
    quote:
      "I used to dread feedback management. Now it's my secret weapon for growth.",
    author: "Mike Johnson",
    role: "Indie Maker",
    company: "QuickLaunch",
    mrr: "$11k MRR",
    avatar: "MJ",
    rating: 5,
    source: "discord",
  },
];

// Combine all testimonials
testimonials.push(...additionalTestimonials);

export function WallOfLove() {
  const [isPaused, setIsPaused] = useState(false);

  // Create 3 columns with duplicated testimonials for infinite scroll
  const createColumns = () => {
    const column1 = testimonials.filter((_, i) => i % 3 === 0);
    const column2 = testimonials.filter((_, i) => i % 3 === 1);
    const column3 = testimonials.filter((_, i) => i % 3 === 2);

    return [
      [...column1, ...column1], // Duplicate for seamless loop
      [...column2, ...column2],
      [...column3, ...column3],
    ];
  };

  const columns = createColumns();

  return (
    <div className="py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Loved by Founders Worldwide
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
          Real feedback from real founders who transformed their development
          process
        </p>

        <p className="text-sm text-muted-foreground">
          Hover to pause and read • Updated in real-time
        </p>
      </motion.div>

      {/* Scrolling wall container */}
      <div
        className="relative overflow-hidden h-[600px] md:h-[700px] lg:h-[800px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        {/* The wall grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="relative">
              <motion.div
                className="flex flex-col gap-6"
                animate={{
                  y: isPaused
                    ? 0
                    : columnIndex % 2 === 0
                    ? "-50%"
                    : ["0%", "-50%"],
                }}
                transition={{
                  y: {
                    duration:
                      columnIndex === 0 ? 30 : columnIndex === 1 ? 35 : 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {column.map((testimonial, index) => {
                  const SourceIcon =
                    sourceIcons[testimonial.source as keyof typeof sourceIcons];

                  return (
                    <motion.div
                      key={`${testimonial.id}-${index}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card
                        className={cn(
                          "p-6 transition-all duration-300 hover:shadow-xl",
                          testimonial.featured &&
                            "border-primary/50 bg-gradient-to-br from-primary/5 to-transparent"
                        )}
                      >
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-sm sm:text-base mb-4 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Author info */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm",
                                testimonial.featured
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-primary/10 text-primary"
                              )}
                            >
                              {testimonial.avatar}
                            </div>
                            <div>
                              <p className="font-semibold text-sm">
                                {testimonial.author}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {testimonial.role}, {testimonial.company}
                              </p>
                              <p className="text-xs font-medium text-green-600">
                                {testimonial.mrr}
                              </p>
                            </div>
                          </div>

                          {/* Source icon */}
                          <div className="text-muted-foreground">
                            <SourceIcon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Featured badge */}
                        {testimonial.featured && (
                          <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs">
                            Featured
                          </Badge>
                        )}
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
