"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hover3D?: boolean;
  glowOnHover?: boolean;
  floatOnHover?: boolean;
  gradient?: boolean;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  hover3D = false,
  glowOnHover = false,
  floatOnHover = false,
  gradient = false,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  const rotateX = hover3D ? (mousePosition.y - 0.5) * 20 : 0;
  const rotateY = hover3D ? (mousePosition.x - 0.5) * -20 : 0;

  return (
    <motion.div
      className={cn(
        "relative rounded-xl transition-all duration-300",
        floatOnHover && "hover:-translate-y-2",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Background gradient */}
      {gradient && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}

      {/* Glow effect */}
      {glowOnHover && (
        <motion.div
          className="absolute -inset-px rounded-xl opacity-0"
          style={{
            background: "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary) / 0.5))",
            filter: "blur(20px)",
          }}
          animate={{
            opacity: isHovered ? 0.5 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Card content */}
      <div
        className={cn(
          "relative bg-card border border-border rounded-xl overflow-hidden",
          hover3D && "transform-gpu",
          glowOnHover && "hover:border-primary/50"
        )}
        style={{
          transform: hover3D ? "translateZ(50px)" : undefined,
        }}
      >
        {children}
      </div>

      {/* Shine effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none"
          initial={{ x: "-100%", y: "-100%" }}
          animate={{ x: "100%", y: "100%" }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(105deg, transparent 45%, white 50%, transparent 55%)",
          }}
        />
      )}
    </motion.div>
  );
};

// Tilt Card Component
export const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const tiltX = (y - 0.5) * 15;
    const tiltY = (x - 0.5) * -15;
    
    setTransform(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      className={cn(
        "transition-transform duration-200 ease-out",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      {children}
    </div>
  );
};