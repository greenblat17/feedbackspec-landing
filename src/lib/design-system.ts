// FeedbackSpec Design System
// Revolutionary design tokens for the most delightful SaaS experience

export const designSystem = {
  // Unified Color Palette - Based on Primary Blue
  colors: {
    // Primary brand color (your existing primary)
    primary: 'hsl(221, 83%, 53%)',
    
    // Monochromatic variations of primary
    primaryLight: 'hsl(221, 83%, 65%)',
    primaryDark: 'hsl(221, 83%, 35%)',
    primarySubtle: 'hsl(221, 30%, 95%)',
    
    // Neutral grays (derived from primary hue)
    neutral: {
      50: 'hsl(221, 15%, 98%)',
      100: 'hsl(221, 15%, 95%)', 
      200: 'hsl(221, 15%, 90%)',
      300: 'hsl(221, 15%, 80%)',
      400: 'hsl(221, 15%, 60%)',
      500: 'hsl(221, 15%, 40%)',
      600: 'hsl(221, 15%, 30%)',
      700: 'hsl(221, 15%, 20%)',
      800: 'hsl(221, 15%, 15%)',
      900: 'hsl(221, 15%, 10%)',
    },
    
    // Gradient definitions (all based on primary)
    gradients: {
      primary: 'linear-gradient(135deg, hsl(221, 83%, 53%) 0%, hsl(221, 83%, 65%) 100%)',
      subtle: 'linear-gradient(135deg, hsl(221, 30%, 98%) 0%, hsl(221, 30%, 95%) 100%)',
      dark: 'linear-gradient(135deg, hsl(221, 15%, 15%) 0%, hsl(221, 15%, 10%) 100%)',
      accent: 'linear-gradient(135deg, hsl(221, 83%, 53%) 0%, hsl(221, 60%, 60%) 100%)',
    },
    
    // Semantic states (tinted with primary hue)
    states: {
      success: 'hsl(221, 50%, 45%)',    // Primary-tinted success
      warning: 'hsl(221, 60%, 60%)',    // Primary-tinted warning
      error: 'hsl(221, 70%, 55%)',      // Primary-tinted error (slightly red-shifted)
      info: 'hsl(221, 83%, 53%)',       // Same as primary
    },
  },
  
  // Motion Tokens - Optimized for 60fps performance
  motion: {
    // Performance-optimized springs (lighter and faster)
    springs: {
      bouncy: { 
        type: "tween" as const, 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
      smooth: { 
        type: "tween" as const, 
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
      gentle: { 
        type: "tween" as const, 
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1] as const,
      },
      snappy: { 
        type: "tween" as const, 
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1] as const,
      },
      // Lightweight alternatives
      silk: { 
        type: "tween" as const, 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
      butter: { 
        type: "tween" as const, 
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
    
    // Silky smooth easing curves
    ease: {
      natural: [0.25, 0.46, 0.45, 0.94] as const,
      in: [0.4, 0, 0.2, 1] as const,
      out: [0, 0, 0.2, 1] as const,
      inOut: [0.4, 0, 0.2, 1] as const,
      // New ultra-smooth curves
      silk: [0.25, 0.1, 0.25, 1] as const,
      butter: [0.23, 1, 0.32, 1] as const,
      velvet: [0.19, 1, 0.22, 1] as const,
      glass: [0.16, 1, 0.3, 1] as const,
    },
    
    // Faster durations for performance
    duration: {
      instant: 0.05,
      fast: 0.15,
      normal: 0.2,
      slow: 0.25,
      slower: 0.3,
      // Lightweight smooth durations
      silk: 0.2,
      butter: 0.15,
      velvet: 0.2,
    },
  },
  
  // Interaction Tokens
  interactions: {
    hover: {
      scale: 1.02,
      brightness: 1.05,
      shadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
    },
    tap: {
      scale: 0.98,
      brightness: 0.95,
    },
    focus: {
      ring: '0 0 0 3px rgba(59, 130, 246, 0.5)',
      ringDark: '0 0 0 3px rgba(147, 197, 253, 0.5)',
    },
  },
  
  // Typography Scale
  typography: {
    // Font families - Premium uncommon fonts
    fonts: {
      // Display font for hero titles and major headings
      display: '"Clash Display", "Bricolage Grotesque", "Space Grotesk", system-ui, sans-serif',
      
      // Primary heading font for section titles
      heading: '"Geist", "Cabinet Grotesk", "General Sans", system-ui, sans-serif',
      
      // Body text font for paragraphs and content
      body: '"Satoshi", "Switzer", "Roobert", system-ui, sans-serif',
      
      // UI elements and interface text
      ui: '"General Sans", "Supreme", "Geist", system-ui, sans-serif',
      
      // Code and technical content
      mono: '"JetBrains Mono", "Berkeley Mono", "Commit Mono", "Source Code Pro", monospace',
      
      // Accent font for special elements
      accent: '"Space Grotesk", "Bricolage Grotesque", system-ui, sans-serif',
    },
    
    // Type scale
    scale: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    
    // Line heights
    lineHeight: {
      tight: 1.1,
      snug: 1.3,
      normal: 1.5,
      relaxed: 1.7,
      loose: 2,
    },
    
    // Letter spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Spacing Scale
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
  },
  
  // Border Radius
  radius: {
    none: '0',
    sm: '0.25rem',
    base: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    // Elevation shadows
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    
    // Colored shadows
    trust: '0 10px 30px -10px hsl(211, 100%, 50%, 0.3)',
    warmth: '0 10px 30px -10px hsl(25, 100%, 67%, 0.3)',
    premium: '0 10px 30px -10px hsl(262, 83%, 58%, 0.3)',
    
    // Inner shadows
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  // Z-index Scale
  zIndex: {
    auto: 'auto',
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    dropdown: 100,
    modal: 200,
    popover: 300,
    tooltip: 400,
    notification: 500,
  },
  
  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Helper functions for common patterns
export const getGradient = (name: keyof typeof designSystem.colors.gradients) => 
  designSystem.colors.gradients[name];

export const getSpring = (type: keyof typeof designSystem.motion.springs) => 
  designSystem.motion.springs[type];

export const getShadow = (size: keyof typeof designSystem.shadows) => 
  designSystem.shadows[size];

// Ultra-smooth animation variants
export const animationVariants = {
  // Silky fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: designSystem.motion.duration.butter,
        ease: designSystem.motion.ease.silk
      }
    },
  },
  
  // Butter-smooth scale animations
  scaleIn: {
    hidden: { scale: 0.96, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: getSpring('butter'),
    },
  },
  
  // Velvet slide animations
  slideUp: {
    hidden: { y: 12, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: getSpring('silk'),
    },
  },
  
  // Glass-smooth stagger
  staggerChildren: {
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
        ease: designSystem.motion.ease.glass,
      },
    },
  },
  
  // Viewport-aware silk animations
  viewportSlide: {
    hidden: { y: 16, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: designSystem.motion.duration.velvet,
        ease: designSystem.motion.ease.velvet,
      }
    },
  },
  
  // New: Ultra-smooth hover states
  hoverLift: {
    hover: {
      y: -2,
      scale: 1.02,
      transition: getSpring('butter'),
    },
    tap: {
      scale: 0.98,
      transition: getSpring('snappy'),
    }
  },
  
  // New: Magnetic button effect
  magneticButton: {
    hover: {
      scale: 1.05,
      transition: {
        duration: designSystem.motion.duration.butter,
        ease: designSystem.motion.ease.butter,
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: designSystem.motion.duration.instant,
        ease: designSystem.motion.ease.glass,
      }
    }
  },
};

// Utility function for responsive values
export const responsive = <T,>(
  mobile: T,
  tablet?: T,
  desktop?: T
): { base: T; md?: T; lg?: T } => ({
  base: mobile,
  ...(tablet && { md: tablet }),
  ...(desktop && { lg: desktop }),
});

// Performance optimization utilities
export const performanceConfig = {
  // Reduced motion preferences
  prefersReducedMotion: {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } }
    }
  },
  
  // Intersection observer settings for better performance
  viewport: {
    once: true,
    margin: "0px 0px -100px 0px", // Trigger animations earlier
    amount: 0.1, // Require only 10% visibility
  },
  
  // Optimized animation settings
  layoutAnimation: {
    transition: {
      layout: { duration: 0.2, ease: "easeOut" }
    }
  }
};

// Helper for conditional animations based on device performance
export const getOptimizedVariant = (
  variant: keyof typeof animationVariants,
  isLowPerformance = false
) => {
  if (isLowPerformance) {
    return animationVariants.fadeIn; // Fallback to simple fade
  }
  return animationVariants[variant];
};