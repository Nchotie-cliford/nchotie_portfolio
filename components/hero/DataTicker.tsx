"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import AnimatedCounter from "../ui/AnimatedCounter";

interface TickerItem {
  value: number;
  label: string;
  icon: string;
  trend?: "up" | "down";
}

const tickerData: TickerItem[] = [
  { value: 3, label: "Projects Deployed", icon: "🚀", trend: "up" },
  { value: 15, label: "Technologies Mastered", icon: "⚡", trend: "up" },
  { value: 99.9, label: "Uptime %", icon: "✓", trend: "up" },
  { value: 2, label: "Years Experience", icon: "📅" },
];

export default function DataTicker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
    >
      {tickerData.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
        >
          <GlassCard variant="primary" className="p-4 text-center">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 flex items-center justify-center gap-1">
              <AnimatedCounter
                target={item.value}
                suffix={item.label === "Uptime %" ? "%" : "+"}
              />
              {item.trend && (
                <span className={`text-sm ${item.trend === "up" ? "text-accent-success" : "text-red-500"}`}>
                  {item.trend === "up" ? "↑" : "↓"}
                </span>
              )}
            </div>
            <div className="text-xs text-foreground-muted">{item.label}</div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
