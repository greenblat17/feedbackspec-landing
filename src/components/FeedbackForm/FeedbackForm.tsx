"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Twitter, 
  Mail, 
  MessageSquare, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Shield,
  Zap,
  Loader2
} from "lucide-react";
import { designSystem, getSpring, animationVariants } from "@/lib/design-system";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeedbackFormProps {
  onComplete?: (data: any) => void;
}

const FORM_STEPS = [
  { id: "source", title: "Choose Your Sources", subtitle: "Where is your feedback?" },
  { id: "auth", title: "Connect Securely", subtitle: "We'll never post on your behalf" },
  { id: "preview", title: "Preview & Categorize", subtitle: "AI-powered organization" },
  { id: "config", title: "Configure AI", subtitle: "Customize your spec output" },
  { id: "success", title: "You're All Set!", subtitle: "First spec in 30 seconds" },
];

const FEEDBACK_SOURCES = [
  { 
    id: "twitter", 
    name: "Twitter/X", 
    icon: Twitter, 
    color: designSystem.colors.primary,
    description: "Mentions, DMs, replies",
    users: "2.1k users",
  },
  { 
    id: "email", 
    name: "Email", 
    icon: Mail, 
    color: designSystem.colors.primaryLight,
    description: "Support emails, feedback",
    users: "1.8k users",
  },
  { 
    id: "discord", 
    name: "Discord", 
    icon: MessageSquare, 
    color: designSystem.colors.primaryDark,
    description: "Community feedback",
    users: "1.5k users",
  },
];

export function FeedbackForm({ onComplete }: FeedbackFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [formData, setFormData] = useState({
    sources: [],
    template: "comprehensive",
    priority: "mrr-based",
  });

  // Progress calculation
  const progress = ((currentStep + 1) / FORM_STEPS.length) * 100;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentStep < FORM_STEPS.length - 1) {
        handleNext();
      } else if (e.key === "ArrowLeft" && currentStep > 0) {
        handleBack();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < FORM_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      // Save progress to localStorage
      localStorage.setItem("feedbackFormProgress", JSON.stringify({
        step: currentStep + 1,
        data: formData,
      }));
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleSource = (sourceId: string) => {
    setSelectedSources(prev => 
      prev.includes(sourceId) 
        ? prev.filter(id => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  const handleAuth = async (source: string) => {
    setIsAuthenticating(true);
    // Simulate OAuth flow
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAuthenticating(false);
    handleNext();
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={animationVariants.fadeIn}
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {FORM_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              className={cn(
                "flex items-center",
                index <= currentStep ? "text-primary" : "text-muted-foreground"
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                  index < currentStep 
                    ? "bg-primary text-primary-foreground" 
                    : index === currentStep
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted"
                )}
              >
                {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              {index < FORM_STEPS.length - 1 && (
                <div 
                  className={cn(
                    "w-full h-1 mx-2 transition-all duration-500",
                    index < currentStep ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Progress bar */}
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/80"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={getSpring("smooth")}
          />
        </div>
      </div>

      {/* Step Header */}
      <motion.div 
        className="text-center mb-8"
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={getSpring("smooth")}
      >
        <h2 className="text-3xl font-bold mb-2">{FORM_STEPS[currentStep].title}</h2>
        <p className="text-muted-foreground">{FORM_STEPS[currentStep].subtitle}</p>
      </motion.div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        {/* Step 1: Source Selection */}
        {currentStep === 0 && (
          <motion.div
            key="source-selection"
            variants={animationVariants.slideUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-4"
          >
            {FEEDBACK_SOURCES.map((source, index) => (
              <motion.div
                key={source.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={cn(
                    "p-6 cursor-pointer transition-all duration-300 border-2",
                    selectedSources.includes(source.id) 
                      ? "border-primary shadow-lg scale-[1.02]" 
                      : "border-border hover:border-primary/50 hover:shadow-md"
                  )}
                  onClick={() => toggleSource(source.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${source.color}20` }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <source.icon 
                          className="w-6 h-6" 
                          style={{ color: source.color }}
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg">{source.name}</h3>
                        <p className="text-sm text-muted-foreground">{source.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="text-xs">
                        {source.users}
                      </Badge>
                      <motion.div
                        animate={{ 
                          scale: selectedSources.includes(source.id) ? 1 : 0,
                          rotate: selectedSources.includes(source.id) ? 0 : -180,
                        }}
                        transition={getSpring("bouncy")}
                        className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <motion.div
              className="flex justify-between mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="outline" size="lg" disabled>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                size="lg" 
                onClick={handleNext}
                disabled={selectedSources.length === 0}
                className="min-w-[150px]"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Step 2: Authentication */}
        {currentStep === 1 && (
          <motion.div
            key="authentication"
            variants={animationVariants.slideUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Shield className="w-8 h-8 text-green-600" />
              </motion.div>
            </div>

            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Secure Authentication</h3>
              <p className="text-muted-foreground mb-6">
                Connect your accounts securely. We use OAuth 2.0 and never store your passwords.
              </p>
              
              <div className="space-y-3">
                {selectedSources.map((sourceId) => {
                  const source = FEEDBACK_SOURCES.find(s => s.id === sourceId);
                  if (!source) return null;
                  
                  return (
                    <Button
                      key={sourceId}
                      size="lg"
                      className="w-full"
                      variant="outline"
                      onClick={() => handleAuth(sourceId)}
                      disabled={isAuthenticating}
                    >
                      {isAuthenticating ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <source.icon className="mr-2 h-4 w-4" />
                      )}
                      Connect {source.name}
                    </Button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-1 text-green-600" />
                  256-bit encryption
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-1 text-green-600" />
                  GDPR compliant
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-1 text-green-600" />
                  SOC 2 certified
                </div>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" size="lg" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button size="lg" onClick={handleNext} className="min-w-[150px]">
                Skip for now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Preview */}
        {currentStep === 2 && (
          <motion.div
            key="preview"
            variants={animationVariants.slideUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-6"
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Live Feedback Preview</h3>
                <Badge variant="secondary">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Categorized
                </Badge>
              </div>

              {/* Mock feedback items */}
              <div className="space-y-3">
                <motion.div
                  className="p-4 bg-muted rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">Dark mode would be amazing!</p>
                      <p className="text-sm text-muted-foreground mt-1">@alexdev • Twitter</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700">Feature Request</Badge>
                  </div>
                </motion.div>

                <motion.div
                  className="p-4 bg-muted rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">The export function is broken</p>
                      <p className="text-sm text-muted-foreground mt-1">support@email.com</p>
                    </div>
                    <Badge className="bg-red-100 text-red-700">Bug Report</Badge>
                  </div>
                </motion.div>

                <motion.div
                  className="p-4 bg-muted rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">Can we get Stripe integration?</p>
                      <p className="text-sm text-muted-foreground mt-1">#feedback • Discord</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Integration</Badge>
                  </div>
                </motion.div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total feedback items</span>
                  <span className="font-semibold">127 items found</span>
                </div>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" size="lg" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button size="lg" onClick={handleNext} className="min-w-[150px]">
                Configure AI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 4: AI Configuration */}
        {currentStep === 3 && (
          <motion.div
            key="config"
            variants={animationVariants.slideUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-6"
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">AI Specification Template</h3>
              
              <div className="space-y-3">
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <input 
                    type="radio" 
                    name="template" 
                    value="comprehensive"
                    defaultChecked
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium">Comprehensive Specs</p>
                    <p className="text-sm text-muted-foreground">
                      Detailed requirements, edge cases, and implementation notes
                    </p>
                  </div>
                  <Badge variant="secondary">Recommended</Badge>
                </label>

                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <input 
                    type="radio" 
                    name="template" 
                    value="quick"
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium">Quick Implementation</p>
                    <p className="text-sm text-muted-foreground">
                      Concise specs focused on core functionality
                    </p>
                  </div>
                </label>

                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <input 
                    type="radio" 
                    name="template" 
                    value="technical"
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium">Technical Deep Dive</p>
                    <p className="text-sm text-muted-foreground">
                      Architecture decisions, API design, and data models
                    </p>
                  </div>
                </label>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Prioritization Method</h3>
              
              <div className="space-y-3">
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <input 
                    type="radio" 
                    name="priority" 
                    value="mrr-based"
                    defaultChecked
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium">MRR Impact</p>
                    <p className="text-sm text-muted-foreground">
                      Prioritize based on potential revenue impact
                    </p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Zap className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">+32% MRR avg</span>
                  </div>
                </label>

                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <input 
                    type="radio" 
                    name="priority" 
                    value="user-count"
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium">User Demand</p>
                    <p className="text-sm text-muted-foreground">
                      Most requested features first
                    </p>
                  </div>
                </label>

                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <input 
                    type="radio" 
                    name="priority" 
                    value="effort"
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium">Quick Wins</p>
                    <p className="text-sm text-muted-foreground">
                      Low effort, high impact features
                    </p>
                  </div>
                </label>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" size="lg" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button size="lg" onClick={handleNext} className="min-w-[150px]">
                Generate Specs
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 5: Success */}
        {currentStep === 4 && (
          <motion.div
            key="success"
            variants={animationVariants.scaleIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-center py-12"
          >
            <motion.div
              className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Check className="w-12 h-12 text-green-600" />
            </motion.div>

            <h2 className="text-3xl font-bold mb-4">Welcome to FeedbackSpec!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your first AI-ready spec will be generated in the next 30 seconds
            </p>

            <div className="flex justify-center space-x-4 mb-8">
              <Button size="lg" className="min-w-[200px]">
                View Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-1">127</div>
                <p className="text-sm text-muted-foreground">Feedback items</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <p className="text-sm text-muted-foreground">Feature requests</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-primary mb-1">$4.2k</div>
                <p className="text-sm text-muted-foreground">Potential MRR</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}