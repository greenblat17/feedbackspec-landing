"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
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
  Skull,
  Heart,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import {
  designSystem,
  getSpring,
  animationVariants,
  performanceConfig,
} from "@/lib/design-system";
import { cn } from "@/lib/utils";

// Floating feedback message component
function FeedbackParticle({ 
  message, 
  platform, 
  delay = 0,
  onDeath
}: { 
  message: string; 
  platform: string;
  delay?: number;
  onDeath?: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      x.set(Math.random() * window.innerWidth);
      y.set(Math.random() * window.innerHeight);
      setMounted(true);
    }
  }, [x, y]);
  
  if (!mounted) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0.3, 0],
        scale: [0, 1, 1, 0.8, 0],
        x: x.get() + (Math.random() - 0.5) * 300,
        y: y.get() - 200,
      }}
      transition={{ 
        duration: 8,
        delay,
        times: [0, 0.1, 0.5, 0.8, 1],
        ease: "easeOut"
      }}
      onAnimationComplete={onDeath}
      className="absolute pointer-events-none"
      style={{ left: 0, top: 0 }}
    >
      <div className="relative">
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-xl max-w-[200px]">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-muted-foreground">{platform}</span>
            <Skull className="w-3 h-3 text-gray-600 opacity-0 animate-pulse" />
          </div>
          <p className="text-xs line-clamp-2">{message}</p>
        </div>
        <motion.div
          className="absolute inset-0 bg-gray-900/10 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, delay: delay + 3 }}
        />
      </div>
    </motion.div>
  );
}

// Revenue loss counter
function RevenueLossCounter() {
  const [loss, setLoss] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoss(prev => prev + 2.31); // ~$200/day
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-4xl font-bold font-mono tabular-nums text-primary"
      style={{ 
        color: `rgba(59, 130, 246, ${Math.max(0.3, 1 - (loss / 10000))})`,
        textShadow: `0 0 20px rgba(59, 130, 246, ${Math.max(0.3, 1 - (loss / 10000)) * 0.5})`
      }}
    >
      ${loss.toFixed(2)}
    </motion.div>
  );
}

// Glitch text effect
function GlitchText({ children, className }: { children: string; className?: string }) {
  const [glitch, setGlitch] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <span className={cn("relative inline-block", className)}>
      <span className={glitch ? "opacity-80" : ""}>{children}</span>
      {glitch && (
        <>
          <span className="absolute inset-0 text-primary/50 animate-glitch-1">{children}</span>
          <span className="absolute inset-0 text-blue-400/50 animate-glitch-2">{children}</span>
        </>
      )}
    </span>
  );
}

// Interactive timeline component
function FounderJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const stages = [
    { 
      title: "Month 1: The Dream", 
      mood: "😊", 
      mrr: "$5,000",
      feedback: "12 great ideas",
      status: "Excited to build everything!"
    },
    { 
      title: "Month 6: The Overwhelm", 
      mood: "😰", 
      mrr: "$8,000",
      feedback: "127 unorganized requests",
      status: "Can't keep track anymore..."
    },
    { 
      title: "Month 12: The Mistakes", 
      mood: "😔", 
      mrr: "$7,000",
      feedback: "Built wrong features",
      status: "Users are leaving..."
    },
    { 
      title: "Month 18: The Burnout", 
      mood: "💀", 
      mrr: "$3,000",
      feedback: "Given up on feedback",
      status: "Just surviving..."
    },
  ];
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newStage = Math.min(Math.floor(latest * stages.length), stages.length - 1);
      setActiveStage(Math.max(0, newStage));
    });
    return () => unsubscribe();
  }, [scrollYProgress, stages.length]);
  
  return (
    <div ref={containerRef} className="relative h-[400px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">{stages[activeStage]?.mood || "😊"}</div>
          <h3 className="text-2xl font-bold mb-2">{stages[activeStage]?.title || "Month 1: The Dream"}</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>MRR: <span className={cn(
              "font-bold",
              activeStage > 1 ? "text-muted-foreground" : "text-primary"
            )}>{stages[activeStage]?.mrr || "$5,000"}</span></p>
            <p>{stages[activeStage]?.feedback || "12 great ideas"}</p>
            <p className="text-lg italic">"{stages[activeStage]?.status || "Excited to build everything!"}"</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Main component
export default function ProblemSectionEnhanced() {
  const [feedbackMessages, setFeedbackMessages] = useState<Array<{id: number; message: string; platform: string}>>([]);
  const messageId = useRef(0);
  
  // Sample feedback messages
  const sampleFeedback = [
    { message: "Can you add dark mode?", platform: "Twitter" },
    { message: "Export feature would be amazing!", platform: "Discord" },
    { message: "Bug: Login not working on mobile", platform: "Email" },
    { message: "Need API access please", platform: "Reddit" },
    { message: "Pricing is too high for startups", platform: "ProductHunt" },
    { message: "Integration with Slack?", platform: "GitHub" },
    { message: "Performance issues on large datasets", platform: "Intercom" },
    { message: "Love the product but need SSO", platform: "Email" },
  ];
  
  // Generate floating feedback messages
  useEffect(() => {
    const interval = setInterval(() => {
      const randomFeedback = sampleFeedback[Math.floor(Math.random() * sampleFeedback.length)];
      setFeedbackMessages(prev => [...prev, {
        id: messageId.current++,
        ...randomFeedback
      }]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleParticleDeath = (id: number) => {
    setFeedbackMessages(prev => prev.filter(msg => msg.id !== id));
  };

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-white">
      {/* Animated background with void effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(59,130,246,0.05)_100%)]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating feedback particles */}
      <div className="absolute inset-0 pointer-events-none">
        {feedbackMessages.map((msg) => (
          <FeedbackParticle
            key={msg.id}
            message={msg.message}
            platform={msg.platform}
            delay={0}
            onDeath={() => handleParticleDeath(msg.id)}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-6 max-w-7xl">
        {/* Hero section with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Skull className="w-20 h-20 mx-auto text-gray-700" />
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Skull className="w-20 h-20 mx-auto text-gray-500 blur-md" />
              </motion.div>
            </div>
          </motion.div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Your Feedback is</span>
            <br />
            <GlitchText className="bg-gradient-to-r from-blue-600 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Lost in the Abyss
            </GlitchText>
          </h2>
          
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Right now, while you read this, <span className="font-bold text-foreground">$10,000+ worth of user insights</span> are 
            vanishing across 20+ platforms. Watch them disappear above.
          </p>
          
          {/* Live revenue loss counter */}
          <Card className="inline-block p-6 bg-gradient-to-br from-blue-50 to-gray-50 border-blue-200">
            <p className="text-sm text-muted-foreground mb-2">Value Vanishing Into the Void:</p>
            <RevenueLossCounter />
            <p className="text-xs text-muted-foreground mt-2">Based on avg. indie hacker opportunity cost</p>
          </Card>
        </motion.div>

        {/* The Feedback Graveyard - Visual Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="relative p-8 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 border-2 border-blue-200">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-multiply" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <AlertCircle className="w-6 h-6 text-primary" />
                The Feedback Graveyard
                <AlertCircle className="w-6 h-6 text-primary" />
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Platform chaos visualization */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="relative h-48 rounded-lg bg-gradient-to-br from-blue-100 to-gray-100 p-4 overflow-hidden">
                    <h4 className="font-bold mb-2">Platform Chaos</h4>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[Twitter, Slack, Mail, Github, MessageCircle].map((Icon, idx) => (
                        <motion.div
                          key={idx}
                          className="absolute"
                          animate={{
                            x: Math.sin(idx * 1.2) * 50,
                            y: Math.cos(idx * 1.2) * 50,
                            rotate: 360,
                          }}
                          transition={{
                            duration: 10 + idx,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Icon className="w-8 h-8 text-muted-foreground/50" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground absolute bottom-4">
                      20+ sources = 0 clarity
                    </p>
                  </div>
                </motion.div>

                {/* Time vampire visualization */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="relative h-48 rounded-lg bg-gradient-to-br from-blue-100 to-gray-100 p-4 overflow-hidden">
                    <h4 className="font-bold mb-2">Time Vampire</h4>
                    <div className="flex flex-col items-center justify-center h-full">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      >
                        <Clock className="w-16 h-16 text-primary/50" />
                      </motion.div>
                      <p className="text-2xl font-bold mt-2">20 hrs/week</p>
                      <p className="text-sm text-muted-foreground">Lost forever</p>
                    </div>
                  </div>
                </motion.div>

                {/* Money drain visualization */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="relative h-48 rounded-lg bg-gradient-to-br from-blue-100 to-gray-100 p-4 overflow-hidden">
                    <h4 className="font-bold mb-2">Revenue Drain</h4>
                    <div className="flex flex-col items-center justify-center h-full">
                      <motion.div
                        className="relative"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <DollarSign className="w-16 h-16 text-primary/50" />
                        <motion.div
                          className="absolute inset-0"
                          animate={{ opacity: [1, 0], y: [0, 20] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <DollarSign className="w-16 h-16 text-primary/30" />
                        </motion.div>
                      </motion.div>
                      <p className="text-2xl font-bold mt-2">$57.6k/year</p>
                      <p className="text-sm text-muted-foreground">In missed opportunities</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Interactive Founder Journey */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            The Inevitable Journey to Burnout
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Scroll to watch how every indie hacker's dream turns into a nightmare 
            when feedback management spirals out of control
          </p>
          <FounderJourney />
        </motion.div>

        {/* The Breaking Point - Dramatic Finale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="relative p-12 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 border-2 border-blue-300">
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-blue-50/50"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <Heart className="w-24 h-24 mx-auto text-primary" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <X className="w-12 h-12 text-background" />
                  </motion.div>
                </div>
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Your Startup's <span className="text-primary">Life Support</span> is Failing
              </h3>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary">73%</div>
                  <p className="text-sm text-muted-foreground">Quit within 18 months</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">67%</div>
                  <p className="text-sm text-muted-foreground">Build unwanted features</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">91%</div>
                  <p className="text-sm text-muted-foreground">Miss critical feedback</p>
                </div>
              </div>
              
              <motion.p
                className="text-xl mb-8 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                The cure exists. But every second you wait, 
                <br />
                <span className="text-primary">another opportunity flatlines.</span>
              </motion.p>
              
              <motion.div
                className="inline-flex items-center gap-3 text-lg"
                whileHover={{ x: 10 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="font-semibold">Escape the void</span>
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
      
      {/* Add custom styles for glitch effect */}
      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(0 100% 0 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(0 0 100% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(100% 0 0 0); transform: translate(-2px, -2px); }
          80% { clip-path: inset(0 0 0 100%); transform: translate(2px, 2px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(100% 0 0 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(0 0 0 100%); transform: translate(-2px, 2px); }
          60% { clip-path: inset(0 100% 0 0); transform: translate(2px, 2px); }
          80% { clip-path: inset(0 0 100% 0); transform: translate(-2px, -2px); }
        }
        
        .animate-glitch-1 {
          animation: glitch-1 0.3s linear;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 0.3s linear reverse;
        }
      `}</style>
    </section>
  );
}