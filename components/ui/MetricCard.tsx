"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import GlassCard from "./GlassCard";

interface MetricCardProps {
  value: number;
  label: string;
  trend?: "up" | "down" | "neutral";
  icon?: string;
  suffix?: string;
  prefix?: string;
  variant?: "default" | "primary" | "accent" | "success";
}

export default function MetricCard({
  value,
  label,
  trend = "neutral",
  icon,
  suffix = "",
  prefix = "",
  variant = "default",
}: MetricCardProps) {
  const trendIcons = {
    up: "↑",
    down: "↓",
    neutral: "→",
  };

  const trendColors = {
    up: "text-accent-success",
    down: "text-red-500",
    neutral: "text-foreground-muted",
  };

  return (
    <GlassCard variant={variant} className="p-6">
      <div className="flex items-start justify-between mb-3">
        {icon && <span className="text-3xl">{icon}</span>}
        {trend !== "neutral" && (
          <span className={`text-xl font-bold ${trendColors[trend]}`}>
            {trendIcons[trend]}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-3xl md:text-4xl font-bold text-foreground">
          <AnimatedCounter target={value} suffix={suffix} prefix={prefix} />
        </div>
        <div className="text-sm text-foreground-muted">{label}</div>
      </div>
    </GlassCard>
  );
}
