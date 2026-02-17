"use client";

import { motion } from "framer-motion";
import GradientText from "./GradientText";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center" | "right";
  gradient?: "primary" | "gold" | "success" | "hero";
}

export default function SectionHeader({
  title,
  subtitle,
  accent,
  align = "center",
  gradient = "primary",
}: SectionHeaderProps) {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${alignmentClass[align]}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-foreground">{title} </span>
        {accent && <GradientText gradient={gradient}>{accent}</GradientText>}
      </h2>
      {subtitle && (
        <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
