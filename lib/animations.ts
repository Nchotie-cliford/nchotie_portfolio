import { Variants } from "framer-motion";

// Basic animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 }
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const slideDown: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// Container animations for stagger children
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const staggerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Banking/Fintech specific animations
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.6)",
      "0 0 20px rgba(59, 130, 246, 0.3)",
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 5, repeat: Infinity, ease: "linear" },
  },
};

export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 },
};

export const hoverLift = {
  whileHover: { y: -5, transition: { duration: 0.2 } },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.3 },
  },
};

// Word reveal animation
export const wordReveal: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Stagger delays
export const staggerDelay = {
  veryFast: 0.05,
  fast: 0.1,
  normal: 0.15,
  slow: 0.2,
  verySlow: 0.3,
};

// Duration presets
export const duration = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};

// Easing presets
export const easing = {
  easeOut: [0, 0.55, 0.45, 1],
  easeIn: [0.55, 0, 1, 0.45],
  easeInOut: [0.76, 0, 0.24, 1],
  spring: { type: "spring", stiffness: 100, damping: 15 },
};
