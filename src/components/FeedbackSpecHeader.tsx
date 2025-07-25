"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { FeedbackSpecLogo } from "./ui/FeedbackSpecLogo";

interface FeedbackSpecHeaderProps {
  className?: string;
  onStartTrial?: () => void;
}

const FeedbackSpecHeader: React.FC<FeedbackSpecHeaderProps> = ({
  className = "",
  onStartTrial,
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const Tab = ({
    children,
    setPosition,
    href = "#",
    onClick,
  }: {
    children: React.ReactNode;
    setPosition: any;
    href?: string;
    onClick?: () => void;
  }) => {
    const ref = useRef<HTMLLIElement>(null);
    
    const handleClick = (e: React.MouseEvent) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      onClick?.();
    };
    
    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
          });
        }}
        className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-foreground mix-blend-difference transition-colors hover:text-primary font-ui tracking-ui"
      >
        <a href={href} onClick={handleClick}>{children}</a>
      </li>
    );
  };

  const Cursor = ({ position }: { position: any }) => {
    return (
      <motion.li
        animate={position}
        className="absolute z-0 h-10 rounded-full bg-primary"
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    );
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-2 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="block">
              <FeedbackSpecLogo size="lg" variant="default" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul
              className="relative mx-auto flex w-fit rounded-full border border-border bg-background/50 backdrop-blur-sm p-1"
              onMouseLeave={() =>
                setPosition((pv: any) => ({ ...pv, opacity: 0 }))
              }
            >
              <Tab setPosition={setPosition} href="#features">
                Features
              </Tab>
              <Tab setPosition={setPosition} href="#how-it-works">
                How it Works
              </Tab>
              <Tab setPosition={setPosition} href="/blog">
                Blog
              </Tab>
              <Tab setPosition={setPosition} href="#pricing">
                Pricing
              </Tab>
              <Cursor position={position} />
            </ul>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="/login"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Login
              </a>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6"
                size="sm"
                onClick={onStartTrial}
              >
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-sm"
        >
          <div className="py-4 space-y-2">
            <a
              href="#features"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How it Works
            </a>
            <a
              href="/blog"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Blog
            </a>
            <a
              href="#pricing"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pricing
            </a>
            <div className="pt-2 space-y-2">
              <a
                href="/login"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                size="sm"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onStartTrial?.();
                }}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default FeedbackSpecHeader;
