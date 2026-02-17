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
    default: "bg-background-tertiary/70 border-border-light/20",
    primary: "bg-primary/10 border-primary/20",
    accent: "bg-accent-gold/10 border-accent-gold/20",
    success: "bg-accent-success/10 border-accent-success/20",
  };

  const hoverStyles = hoverable
    ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50"
    : "";

  return (
    <motion.div
      className={`
        rounded-2xl border backdrop-blur-xl
        ${variantStyles[variant]}
        ${hoverStyles}
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
