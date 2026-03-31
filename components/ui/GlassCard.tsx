"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  variant?: "default" | "primary" | "accent" | "success";
  className?: string;
  hoverable?: boolean;
}

export default function GlassCard({
  children,
  variant = "default",
  className = "",
  hoverable = true,
}: GlassCardProps) {
  const variantStyles = {
    default: "bg-background-secondary/60 border-border/60",
    primary: "bg-primary/8 border-primary/15",
    accent: "bg-accent-gold/8 border-accent-gold/15",
    success: "bg-accent-success/8 border-accent-success/15",
  };

  const hoverStyles = hoverable
    ? "transition-all duration-200 hover:bg-background-secondary/80 hover:border-border-light/50"
    : "";

  return (
    <motion.div
      className={`
        rounded-xl border
        ${variantStyles[variant]}
        ${hoverStyles}
        ${className}
      `}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
