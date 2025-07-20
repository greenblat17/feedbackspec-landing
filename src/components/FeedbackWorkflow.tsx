"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Database,
  Zap,
  FileText,
  Brain,
  Code,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  Settings,
} from "lucide-react";
import { cn } from "../lib/utils";

interface WorkflowStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  status: "completed" | "in-progress" | "pending";
}

interface FeedbackWorkflowProps {
  className?: string;
  title?: string;
  autoPlayInterval?: number;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: "1",
    step: "Step 1",
    title: "Connect Feedback Sources",
    description:
      "Integrate multiple feedback channels into a unified collection system",
    icon: <Database className="size-6" />,
    details: [
      "Connect user support tickets and bug reports",
      "Integrate analytics and user behavior data",
      "Link customer interviews and surveys",
      "Import feature requests from various platforms",
    ],
    status: "completed",
  },
  {
    id: "2",
    step: "Step 2",
    title: "Intelligent Data Processing",
    description:
      "AI-powered analysis categorizes and prioritizes all incoming feedback",
    icon: <Brain className="size-6" />,
    details: [
      "Automatically categorize feedback by type and urgency",
      "Extract key themes and patterns from user comments",
      "Identify duplicate issues across different sources",
      "Score feedback based on business impact and user sentiment",
    ],
    status: "in-progress",
  },
  {
    id: "3",
    step: "Step 3",
    title: "Pattern Recognition & Insights",
    description:
      "Advanced algorithms identify trends and extract actionable insights",
    icon: <Zap className="size-6" />,
    details: [
      "Detect recurring issues and feature gaps",
      "Analyze user journey pain points",
      "Identify opportunities for product improvements",
      "Generate priority rankings based on user impact",
    ],
    status: "pending",
  },
  {
    id: "4",
    step: "Step 4",
    title: "Specification Generation",
    description:
      "Transform insights into detailed, developer-ready specifications",
    icon: <FileText className="size-6" />,
    details: [
      "Generate technical requirements and acceptance criteria",
      "Create user stories with clear success metrics",
      "Define API specifications and data models",
      "Include implementation guidelines and best practices",
    ],
    status: "pending",
  },
  {
    id: "5",
    step: "Step 5",
    title: "Development Integration",
    description:
      "Seamlessly integrate specifications into your development workflow",
    icon: <GitBranch className="size-6" />,
    details: [
      "Export to popular project management tools",
      "Generate tickets in Jira, Linear, or GitHub Issues",
      "Create pull request templates with requirements",
      "Sync with development team communication channels",
    ],
    status: "pending",
  },
  {
    id: "6",
    step: "Step 6",
    title: "Continuous Optimization",
    description:
      "Monitor implementation progress and refine specifications based on results",
    icon: <Settings className="size-6" />,
    details: [
      "Track development progress against specifications",
      "Collect feedback on implemented features",
      "Refine AI models based on successful outcomes",
      "Continuously improve specification quality and accuracy",
    ],
    status: "pending",
  },
];

const StepIcon = ({
  step,
  isActive,
  isCompleted,
}: {
  step: WorkflowStep;
  isActive: boolean;
  isCompleted: boolean;
}) => (
  <motion.div
    className={cn(
      "relative mx-auto size-16 rounded-full flex items-center justify-center border-2 transition-all duration-300",
      isActive
        ? "bg-primary border-primary text-primary-foreground scale-110 shadow-lg"
        : isCompleted
        ? "bg-green-500 border-green-500 text-white"
        : "bg-muted border-muted-foreground text-muted-foreground"
    )}
    whileHover={{ scale: isActive ? 1.15 : 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <AnimatePresence mode="wait">
      {isCompleted ? (
        <motion.div
          key="completed"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <CheckCircle2 className="size-8" />
        </motion.div>
      ) : (
        <motion.div
          key="icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          {step.icon}
        </motion.div>
      )}
    </AnimatePresence>

    {isActive && (
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1.3, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    )}
  </motion.div>
);

export function FeedbackWorkflow({
  className,
  title = "How FeedbackSpec Works",
  autoPlayInterval = 4000,
}: FeedbackWorkflowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, autoPlayInterval]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setProgress(0);
  };

  return (
    <div className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform scattered feedback into actionable development
            specifications with our AI-powered workflow
          </p>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 md:space-x-8">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.button
                  onClick={() => handleStepClick(index)}
                  className="flex flex-col items-center space-y-2 cursor-pointer group"
                  whileHover={{ y: -2 }}
                >
                  <StepIcon
                    step={step}
                    isActive={index === currentStep}
                    isCompleted={index < currentStep}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      index === currentStep
                        ? "text-primary"
                        : index < currentStep
                        ? "text-green-600"
                        : "text-muted-foreground"
                    )}
                  >
                    {step.step}
                  </span>
                </motion.button>

                {index < workflowSteps.length - 1 && (
                  <motion.div
                    className={cn(
                      "hidden md:flex items-center transition-colors duration-300",
                      index < currentStep
                        ? "text-green-500"
                        : "text-muted-foreground"
                    )}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ArrowRight className="size-5" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-2xl mx-auto mb-12">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  (currentStep / workflowSteps.length) * 100 +
                  progress / workflowSteps.length
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Current step details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {workflowSteps[currentStep].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {workflowSteps[currentStep].title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {workflowSteps[currentStep].description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {workflowSteps[currentStep].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <motion.button
            onClick={() => handleStepClick(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={cn(
              "px-6 py-2 rounded-lg font-medium transition-all",
              currentStep === 0
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
            whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
          >
            Previous
          </motion.button>

          <motion.button
            onClick={() =>
              handleStepClick(
                Math.min(workflowSteps.length - 1, currentStep + 1)
              )
            }
            disabled={currentStep === workflowSteps.length - 1}
            className={cn(
              "px-6 py-2 rounded-lg font-medium transition-all",
              currentStep === workflowSteps.length - 1
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
            whileHover={
              currentStep < workflowSteps.length - 1 ? { scale: 1.05 } : {}
            }
            whileTap={
              currentStep < workflowSteps.length - 1 ? { scale: 0.95 } : {}
            }
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
}
