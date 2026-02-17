"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const values = [
  { icon: "🧘", label: "Daily Meditation", description: "20 min mindfulness" },
  { icon: "🏃", label: "Running", description: "1 hour daily" },
  { icon: "💪", label: "Exercise", description: "Half-day workouts" },
  { icon: "📚", label: "Continuous Learning", description: "Never stop improving" },
];

export default function ValuesPills() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {values.map((value, index) => (
        <motion.div
          key={value.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
        >
          <GlassCard variant="success" className="p-4 hover:scale-105 transition-transform">
            <div className="text-3xl mb-2">{value.icon}</div>
            <div className="text-sm font-semibold text-foreground mb-1">
              {value.label}
            </div>
            <div className="text-xs text-foreground-muted">
              {value.description}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
