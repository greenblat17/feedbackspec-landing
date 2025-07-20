"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Type, Palette, Sparkles } from "lucide-react";

export function FontShowcase() {
  const fontExamples = [
    {
      id: "display",
      name: "Clash Display",
      className: "font-display",
      description: "Hero titles and major headings",
      example: "Revolutionary Design",
      usage: "Hero sections, major announcements",
      fallbacks: "Bricolage Grotesque, Space Grotesk",
    },
    {
      id: "heading",
      name: "Geist",
      className: "font-heading",
      description: "Section titles and headings",
      example: "Transform Your Workflow",
      usage: "Section headers, subheadings",
      fallbacks: "Cabinet Grotesk, General Sans",
    },
    {
      id: "body",
      name: "Satoshi",
      className: "font-body",
      description: "Body text and paragraphs",
      example: "This is how your content will look with beautiful, readable typography that enhances the user experience.",
      usage: "Paragraphs, descriptions, content",
      fallbacks: "Switzer, Roobert",
    },
    {
      id: "ui",
      name: "General Sans",
      className: "font-ui",
      description: "Interface elements and navigation",
      example: "Navigation • Buttons • Labels",
      usage: "UI elements, navigation, forms",
      fallbacks: "Supreme, Geist",
    },
    {
      id: "mono",
      name: "JetBrains Mono",
      className: "font-mono",
      description: "Code blocks and technical content",
      example: "const spec = generateFromFeedback(data);",
      usage: "Code examples, technical specs",
      fallbacks: "Berkeley Mono, Commit Mono",
    },
    {
      id: "accent",
      name: "Space Grotesk",
      className: "font-accent",
      description: "Special elements and branding",
      example: "FeedbackSpec",
      usage: "Logo, special callouts, branding",
      fallbacks: "Bricolage Grotesque",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="default" className="mb-4 px-4 py-2">
            <Type className="w-4 h-4 mr-2" />
            Typography System
          </Badge>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-display">
            Premium Font
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We use carefully selected, uncommon fonts to create a distinctive and memorable visual identity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {fontExamples.map((font, idx) => (
            <motion.div
              key={font.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-lg font-semibold">{font.name}</h3>
                    <Badge variant="outline" className="text-xs font-ui">
                      {font.id}
                    </Badge>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{font.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Font example */}
                  <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                    <p 
                      className={`${font.className} ${
                        font.id === "display" ? "text-2xl md:text-3xl font-bold tracking-display" :
                        font.id === "heading" ? "text-xl font-semibold tracking-heading" :
                        font.id === "body" ? "text-base leading-relaxed" :
                        font.id === "ui" ? "text-sm font-medium tracking-ui" :
                        font.id === "mono" ? "text-sm tracking-mono" :
                        "text-lg font-medium"
                      }`}
                    >
                      {font.example}
                    </p>
                  </div>

                  {/* Usage info */}
                  <div className="space-y-2">
                    <div>
                      <span className="font-ui text-xs font-medium text-muted-foreground">Usage:</span>
                      <p className="font-body text-sm">{font.usage}</p>
                    </div>
                    <div>
                      <span className="font-ui text-xs font-medium text-muted-foreground">Fallbacks:</span>
                      <p className="font-mono text-xs text-muted-foreground">{font.fallbacks}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Typography principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <h3 className="font-heading text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <Palette className="w-6 h-6 text-primary" />
              Typography Principles
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-heading font-semibold mb-2">Distinctive</h4>
                <p className="font-body text-sm text-muted-foreground">
                  Uncommon fonts that stand out from typical SaaS websites
                </p>
              </div>
              <div className="text-center">
                <Type className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-heading font-semibold mb-2">Hierarchical</h4>
                <p className="font-body text-sm text-muted-foreground">
                  Clear visual hierarchy with purpose-driven font selection
                </p>
              </div>
              <div className="text-center">
                <Palette className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-heading font-semibold mb-2">Cohesive</h4>
                <p className="font-body text-sm text-muted-foreground">
                  Carefully curated fonts that work harmoniously together
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}