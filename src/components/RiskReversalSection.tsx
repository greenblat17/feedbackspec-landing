"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, RefreshCw, XCircle, Download, Shield } from "lucide-react";

const guarantees = [
  {
    icon: Calendar,
    title: "14-day free trial",
    description: "Full access, no credit card"
  },
  {
    icon: RefreshCw,
    title: "30-day money-back guarantee",
    description: "Not saving time? Full refund"
  },
  {
    icon: XCircle,
    title: "Cancel anytime",
    description: "No contracts, no questions"
  },
  {
    icon: Download,
    title: "Your data is yours",
    description: "Export everything, delete anytime"
  }
];

export function RiskReversalSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Risk Reversal
            </h2>
            <p className="text-xl text-muted-foreground">
              Zero risk. All upside.
            </p>
          </motion.div>

          {/* Guarantees Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <guarantee.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {guarantee.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                Trusted by 200+ indie hackers worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}