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
  Timer,
  Code2,
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
      time: "$1k MRR",
      feedback: "12 great ideas",
      status: "Excited to build everything!"
    },
    { 
      title: "Month 3: The Chaos", 
      mood: "😰", 
      time: "$3k MRR",
      feedback: "287 unread messages",
      status: "Which feature was important?"
    },
    { 
      title: "Month 6: The Burnout", 
      mood: "😵", 
      time: "$5k MRR",
      feedback: "Lost in Notion/Trello/Slack",
      status: "Building features nobody uses"
    },
    { 
      title: "Month 9: The Breaking Point", 
      mood: "💀", 
      time: "$4k MRR",
      feedback: "Competitors shipping faster",
      status: "Churn increasing, motivation gone"
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
            <p>Time: <span className={cn(
              "font-bold",
              activeStage > 1 ? "text-muted-foreground" : "text-primary"
            )}>{stages[activeStage]?.time || "9:00 AM"}</span></p>
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
    { message: "Search is terrible, can't find anything", platform: "Customer Email" },
    { message: "Need bulk export functionality ASAP", platform: "Slack DM" },
    { message: "Dashboard loads too slowly", platform: "Support Ticket" },
    { message: "Can't integrate with our CRM", platform: "Sales Call" },
    { message: "Missing real-time collaboration", platform: "User Interview" },
    { message: "Mobile app keeps crashing", platform: "App Review" },
    { message: "Need better error messages", platform: "GitHub Issue" },
    { message: "Want keyboard shortcuts everywhere", platform: "Discord" },
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
            <span className="text-foreground">The Indie Hacker's</span>
            <br />
            <GlitchText className="bg-gradient-to-r from-blue-600 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Double Nightmare
            </GlitchText>
          </h2>
          
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            You have two problems killing your growth: 
            <span className="font-bold text-foreground">scattered feedback chaos</span> AND <span className="font-bold text-foreground">slow feature development</span>.
          </p>
          
          {/* Live revenue loss counter */}
          <Card className="inline-block p-6 bg-gradient-to-br from-blue-50 to-gray-50 border-blue-200">
            <p className="text-sm text-muted-foreground mb-2">Revenue Impact:</p>
            <RevenueLossCounter />
            <p className="text-xs text-muted-foreground mt-2">Indie hackers lose $47k annually to feedback chaos and slow development</p>
          </Card>
        </motion.div>

        {/* The Double Problem - Split Screen Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem 1: Feedback Hell */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="relative h-full p-8 overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 border-2 border-red-200">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-multiply" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <div className="p-3 rounded-full bg-red-100">
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    Problem #1: Feedback Hell
                  </h3>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">20+ sources</p>
                        <p className="text-muted-foreground">Twitter, email, Discord, GitHub, Slack...</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">Zero organization</p>
                        <p className="text-muted-foreground">Lost in threads and notifications</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">No prioritization</p>
                        <p className="text-muted-foreground">Building features nobody wants</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">Time vampire</p>
                        <p className="text-muted-foreground">15+ hours weekly just organizing</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Floating platform icons */}
                  <div className="absolute top-4 right-4 opacity-20">
                    {[Twitter, Mail, Github, Slack].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute"
                        animate={{
                          x: Math.sin(idx * 1.5) * 30,
                          y: Math.cos(idx * 1.5) * 30,
                        }}
                        transition={{
                          duration: 5 + idx,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Icon className="w-6 h-6 text-red-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Problem 2: Slow Development */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="relative h-full p-8 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 border-2 border-purple-200">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-multiply" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <div className="p-3 rounded-full bg-purple-100">
                      <Timer className="w-8 h-8 text-purple-600" />
                    </div>
                    Problem #2: Slow Development
                  </h3>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">Manual specs</p>
                        <p className="text-muted-foreground">3+ hours writing specifications</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">Generic prompts</p>
                        <p className="text-muted-foreground">AI tools need perfect input</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">Context switching</p>
                        <p className="text-muted-foreground">From feedback to code requirements</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg">Missed opportunities</p>
                        <p className="text-muted-foreground">Competitors shipping faster</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Code animation */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Code2 className="w-16 h-16 text-purple-400" />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          
          {/* The Connection - Killer Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 via-white to-purple-50 border-2 border-primary">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block mb-4"
                >
                  <div className="p-4 rounded-full bg-primary/10">
                    <Zap className="w-12 h-12 text-primary" />
                  </div>
                </motion.div>
                
                <h4 className="text-2xl font-bold mb-4">The Killer Insight</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  These problems are connected. 
                  <span className="font-semibold text-foreground"> Bad feedback organization</span> = 
                  <span className="font-semibold text-foreground"> bad development priorities</span> = 
                  <span className="font-semibold text-foreground"> wasted AI coding potential</span>.
                </p>
              </div>
            </Card>
          </motion.div>
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
                The Cost of <span className="text-primary">Feedback Chaos</span>
              </h3>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary">47%</div>
                  <p className="text-sm text-muted-foreground">Ideas lost forever</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">20 hrs</div>
                  <p className="text-sm text-muted-foreground">Weekly time waste</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">$57k</div>
                  <p className="text-sm text-muted-foreground">Annual opportunity cost</p>
                </div>
              </div>
              
              <motion.p
                className="text-xl mb-8 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                You're not building a product anymore. You're drowning in feedback. 
                <br />
                <span className="text-primary">And your best ideas? They're dying in your inbox.</span>
              </motion.p>
              
              <motion.div
                className="inline-flex items-center gap-3 text-lg"
                whileHover={{ x: 10 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="font-semibold">There's a better way</span>
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