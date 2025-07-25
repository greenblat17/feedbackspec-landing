"use client";

import React from "react";
import { Button } from "./ui/button";
import { FeedbackSpecLogo } from "./ui/FeedbackSpecLogo";

export function SimpleHeader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999999,
      backgroundColor: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '1rem 0'
    }}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <FeedbackSpecLogo size="lg" variant="default" />
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary">How it Works</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => window.location.href = '/blog'}>
            Blog
          </Button>
          <Button size="sm" onClick={() => window.location.href = '/login'}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}