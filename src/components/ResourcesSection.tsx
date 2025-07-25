"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Clock, 
  TrendingUp, 
  Users,
  ArrowRight,
  Play,
  Calendar,
  User,
  BarChart3,
  Zap,
  Star,
  MessageSquare,
  Code2,
  Lightbulb,
  Target,
  Rocket
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { EnhancedCard } from "./ui/EnhancedCard";
import { cn } from "@/lib/utils";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How We Increased MRR by 156% Using AI-Driven Development",
    excerpt: "Learn the exact process we used to transform scattered feedback into a systematic growth engine that tripled our shipping speed.",
    author: "Sarah Chen",
    date: "Dec 15, 2023",
    readTime: "8 min read",
    category: "Growth",
    categoryColor: "text-green-500 bg-green-500/10 border-green-500/20",
    image: "/blog/mrr-growth.jpg",
    tags: ["MRR", "AI Development", "Case Study"],
  },
  {
    id: 2,
    title: "From 15 Hours to 15 Minutes: Automating Feedback Management",
    excerpt: "A step-by-step guide to setting up your feedback automation pipeline and reclaiming your development time.",
    author: "Marcus Rodriguez",
    date: "Dec 10, 2023",
    readTime: "6 min read",
    category: "Productivity",
    categoryColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    image: "/blog/automation.jpg",
    tags: ["Automation", "Workflow", "Time Management"],
  },
  {
    id: 3,
    title: "The Indie Hacker's Guide to AI-Assisted Development",
    excerpt: "Everything you need to know about using Cursor, Claude, and Cline to ship features at lightning speed.",
    author: "Alex Thompson",
    date: "Dec 5, 2023",
    readTime: "12 min read",
    category: "Development",
    categoryColor: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    image: "/blog/ai-dev.jpg",
    tags: ["AI Tools", "Cursor", "Development"],
  },
  {
    id: 4,
    title: "Building Features Users Actually Want: A Data-Driven Approach",
    excerpt: "Stop building based on assumptions. Learn how to use feedback data to achieve 80%+ feature adoption rates.",
    author: "Emily Watson",
    date: "Nov 28, 2023",
    readTime: "10 min read",
    category: "Product",
    categoryColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    image: "/blog/user-features.jpg",
    tags: ["Product Strategy", "User Research", "Data"],
  },
];

// Tutorials data
const tutorials = [
  {
    id: 1,
    title: "Quick Start: Connect Your First Feedback Source",
    description: "Get up and running in 5 minutes with our step-by-step video guide.",
    duration: "5:23",
    level: "Beginner",
    icon: Zap,
    thumbnail: "/tutorials/quickstart.jpg",
  },
  {
    id: 2,
    title: "Advanced: Custom AI Specification Templates",
    description: "Create custom templates for different types of features and workflows.",
    duration: "12:45",
    level: "Advanced",
    icon: Code2,
    thumbnail: "/tutorials/templates.jpg",
  },
  {
    id: 3,
    title: "Integration Deep Dive: Discord & Twitter Setup",
    description: "Master the art of capturing feedback from social platforms.",
    duration: "8:17",
    level: "Intermediate",
    icon: MessageSquare,
    thumbnail: "/tutorials/integrations.jpg",
  },
  {
    id: 4,
    title: "Workflow Optimization: From Feedback to Production",
    description: "Optimize your entire development workflow for maximum efficiency.",
    duration: "15:30",
    level: "Intermediate",
    icon: Target,
    thumbnail: "/tutorials/workflow.jpg",
  },
];

// Case studies data
const caseStudies = [
  {
    id: 1,
    company: "DevTools Pro",
    logo: "DT",
    title: "How DevTools Pro Achieved Product-Market Fit in 90 Days",
    description: "From struggling with feature prioritization to shipping exactly what users wanted.",
    metrics: [
      { label: "MRR Growth", value: "+156%", icon: TrendingUp },
      { label: "Feature Adoption", value: "87%", icon: Target },
      { label: "Dev Time Saved", value: "15hr/week", icon: Clock },
    ],
    quote: "FeedbackSpec helped us go from drowning in Discord messages to shipping 3x faster.",
    author: "Sarah Chen, Founder",
  },
  {
    id: 2,
    company: "SaaS Analytics",
    logo: "SA",
    title: "Scaling from $5k to $25k MRR with AI-Driven Development",
    description: "How a solo founder leveraged automated feedback to scale rapidly.",
    metrics: [
      { label: "MRR Growth", value: "5x", icon: BarChart3 },
      { label: "Features Shipped", value: "24/month", icon: Rocket },
      { label: "User Satisfaction", value: "94%", icon: Star },
    ],
    quote: "Before FeedbackSpec, I spent 15+ hours weekly just organizing feedback. Now it takes 5 minutes.",
    author: "Marcus Rodriguez, Solo Founder",
  },
  {
    id: 3,
    company: "CloudSync",
    logo: "CS",
    title: "Remote Team Productivity Boost: 2x Shipping Speed",
    description: "How a distributed team streamlined their feedback-to-feature pipeline.",
    metrics: [
      { label: "Shipping Speed", value: "2x", icon: Zap },
      { label: "Team Efficiency", value: "+65%", icon: Users },
      { label: "Bug Reports", value: "-43%", icon: FileText },
    ],
    quote: "The AI specifications are so detailed that my developer can implement features in half the time.",
    author: "Alex Thompson, CTO",
  },
];

// Tab data
const tabs = [
  { id: "all", label: "All Resources", icon: BookOpen },
  { id: "blog", label: "Blog Posts", icon: FileText },
  { id: "tutorials", label: "Tutorials", icon: Video },
  { id: "case-studies", label: "Case Studies", icon: BarChart3 },
];

export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <Lightbulb className="w-3 h-3 mr-1" />
            Learn & Grow
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Resources to Help You Ship Faster
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from successful founders, master AI-assisted development, and discover strategies 
            that actually work for indie hackers and small teams.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-muted text-muted-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {(activeTab === "all" || activeTab === "blog") && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Latest Blog Posts
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <EnhancedCard
                      hover3D={true}
                      glowOnHover={true}
                      className="h-full"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={post.categoryColor} variant="secondary">
                            {post.category}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-semibold mb-3 line-clamp-2">
                          {post.title}
                        </h4>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                            <span>•</span>
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          
                          <motion.a
                            href="#"
                            className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                            whileHover={{ x: 5 }}
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </EnhancedCard>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {(activeTab === "all" || activeTab === "tutorials") && (
            <motion.div
              key="tutorials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Video className="w-6 h-6 text-primary" />
                Video Tutorials
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tutorials.map((tutorial, index) => (
                  <motion.div
                    key={tutorial.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <EnhancedCard
                      floatOnHover={true}
                      className="h-full cursor-pointer group"
                    >
                      <div className="relative aspect-video bg-muted overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors"
                          >
                            <Play className="w-6 h-6 text-primary-foreground ml-1" />
                          </motion.div>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="bg-background/90">
                            {tutorial.duration}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <tutorial.icon className="w-4 h-4 text-primary" />
                          <Badge variant="outline" className="text-xs">
                            {tutorial.level}
                          </Badge>
                        </div>
                        
                        <h4 className="font-semibold mb-2 line-clamp-2">
                          {tutorial.title}
                        </h4>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {tutorial.description}
                        </p>
                      </div>
                    </EnhancedCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {(activeTab === "all" || activeTab === "case-studies") && (
            <motion.div
              key="case-studies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Success Stories
              </h3>
              <div className="grid lg:grid-cols-3 gap-6">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <EnhancedCard
                      gradient={true}
                      hover3D={true}
                      className="h-full"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary">
                            {study.logo}
                          </div>
                          <div>
                            <h4 className="font-semibold">{study.company}</h4>
                            <p className="text-xs text-muted-foreground">Case Study</p>
                          </div>
                        </div>
                        
                        <h5 className="text-lg font-semibold mb-3">
                          {study.title}
                        </h5>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          {study.description}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center p-2 bg-muted/50 rounded-lg">
                              <metric.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                              <div className="text-lg font-bold text-primary">
                                {metric.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground mb-2 flex-grow">
                          "{study.quote}"
                        </blockquote>
                        
                        <p className="text-xs text-muted-foreground">
                          — {study.author}
                        </p>
                        
                        <Button variant="outline" className="w-full mt-4" size="sm">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </EnhancedCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-3">Want to Share Your Success Story?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We love hearing how FeedbackSpec helps founders ship faster. 
            Share your story and inspire other indie hackers.
          </p>
          <Button size="lg">
            Submit Your Story
            <MessageSquare className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}