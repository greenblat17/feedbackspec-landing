"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeedbackSpecLogo, FeedbackSpecSymbol } from "./ui/FeedbackSpecLogo";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sparkles } from "lucide-react";

export default function LogoShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="default"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Brand Identity
          </Badge>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            FeedbackSpec
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Logo System
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A modern logo representing the flow from scattered feedback to
            structured AI specifications
          </p>
        </motion.div>

        {/* Logo Variants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Default Variant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Default Logo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center p-8 bg-background/50 rounded-lg">
                  <FeedbackSpecLogo size="lg" variant="default" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Primary brand logo with colorful feedback sources and
                  structured output visualization
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Monochrome Variant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Monochrome</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center p-8 bg-background/50 rounded-lg">
                  <FeedbackSpecLogo size="lg" variant="monochrome" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Single-color version for use on colored backgrounds or print
                  materials
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Gradient Variant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Gradient Premium</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center p-8 bg-background/50 rounded-lg">
                  <FeedbackSpecLogo size="lg" variant="gradient" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Enhanced version with rich gradients for premium presentations
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Size Variations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card className="border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg">
            <CardHeader>
              <CardTitle>Size Variations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                <div className="text-center space-y-2">
                  <FeedbackSpecLogo size="sm" variant="default" />
                  <p className="text-xs text-muted-foreground">Small (24px)</p>
                </div>
                <div className="text-center space-y-2">
                  <FeedbackSpecLogo size="md" variant="default" />
                  <p className="text-xs text-muted-foreground">Medium (32px)</p>
                </div>
                <div className="text-center space-y-2">
                  <FeedbackSpecLogo size="lg" variant="default" />
                  <p className="text-xs text-muted-foreground">Large (48px)</p>
                </div>
                <div className="text-center space-y-2">
                  <FeedbackSpecLogo size="xl" variant="default" />
                  <p className="text-xs text-muted-foreground">
                    Extra Large (64px)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Symbol Only Versions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg">
            <CardHeader>
              <CardTitle>Symbol Only (Icon Versions)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
                <div className="text-center space-y-2">
                  <FeedbackSpecSymbol size="sm" variant="default" />
                  <p className="text-xs text-muted-foreground">Default</p>
                </div>
                <div className="text-center space-y-2">
                  <FeedbackSpecSymbol size="md" variant="default" />
                  <p className="text-xs text-muted-foreground">Medium</p>
                </div>
                <div className="text-center space-y-2">
                  <FeedbackSpecSymbol size="lg" variant="default" />
                  <p className="text-xs text-muted-foreground">Large</p>
                </div>
                <div className="text-center space-y-2">
                  <FeedbackSpecSymbol size="lg" variant="monochrome" />
                  <p className="text-xs text-muted-foreground">Mono</p>
                </div>
                <div className="text-center space-y-2">
                  <FeedbackSpecSymbol size="lg" variant="gradient" />
                  <p className="text-xs text-muted-foreground">Gradient</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="p-2 bg-primary rounded-lg">
                    <FeedbackSpecSymbol
                      size="lg"
                      variant="monochrome"
                      className="text-white"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">On Color</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Logo Concept Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Logo Concept
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-sm">Multiple Sources</h4>
                  <p className="text-xs text-muted-foreground">
                    Colored circles represent feedback from different platforms
                    (Twitter, Discord, Email, etc.)
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm">AI Processing</h4>
                  <p className="text-xs text-muted-foreground">
                    Central hub represents AI analysis and processing of
                    scattered feedback
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded border-2 border-primary/20 flex items-center justify-center mb-2">
                    <div className="space-y-1">
                      <div className="w-4 h-0.5 bg-primary/60"></div>
                      <div className="w-3 h-0.5 bg-primary/40"></div>
                      <div className="w-3.5 h-0.5 bg-primary/50"></div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm">Structured Output</h4>
                  <p className="text-xs text-muted-foreground">
                    Document shape represents organized, actionable
                    specifications ready for development
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
