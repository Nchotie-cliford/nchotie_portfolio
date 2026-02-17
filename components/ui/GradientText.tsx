"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  gradient?: "primary" | "gold" | "success" | "hero";
  className?: string;
  animated?: boolean;
}

export default function GradientText({
  children,
  gradient = "primary",
  className = "",
  animated = false,
}: GradientTextProps) {
  const gradientStyles = {
    primary: "from-primary via-primary-light to-primary",
    gold: "from-accent-gold via-yellow-400 to-accent-gold",
    success: "from-accent-success via-green-400 to-accent-success",
    hero: "from-primary via-purple-500 to-accent-gold",
  };

  const animationStyles = animated
    ? "bg-[length:200%_auto] animate-gradient-x"
    : "";

  return (
    <span
      className={`
        bg-gradient-to-r ${gradientStyles[gradient]}
        bg-clip-text text-transparent
        ${animationStyles}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
