"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  /** "centered" — full-width centered heading (default)
   *  "sidebar"  — small uppercase label for sidebar-grid sections */
  layout?: "centered" | "sidebar";
}

export default function SectionHeader({
  title,
  subtitle,
  accent,
  layout = "centered",
}: SectionHeaderProps) {
  if (layout === "sidebar") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
          {title}
          {accent && ` ${accent}`}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-foreground-subtle leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-foreground">
        {title}
        {accent && (
          <span className="text-primary-light"> {accent}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-foreground-muted text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
