"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import ProgressCircle from "../ui/ProgressCircle";

interface TechItem {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
  color: string;
  years: number;
}

const techStack: TechItem[] = [
  { name: "TypeScript", icon: "TS", category: "Frontend", proficiency: 95, color: "#3B82F6", years: 2 },
  { name: "Java", icon: "☕", category: "Backend", proficiency: 90, color: "#F59E0B", years: 2 },
  { name: "Python", icon: "🐍", category: "AI/ML", proficiency: 90, color: "#10B981", years: 2 },
  { name: "Spring Boot", icon: "🍃", category: "Backend", proficiency: 90, color: "#10B981", years: 2 },
  { name: "FastAPI", icon: "⚡", category: "Backend", proficiency: 95, color: "#3B82F6", years: 1 },
  { name: "PostgreSQL", icon: "🐘", category: "Database", proficiency: 85, color: "#3B82F6", years: 2 },
  { name: "Docker", icon: "🐳", category: "DevOps", proficiency: 85, color: "#3B82F6", years: 1 },
  { name: "OpenAI API", icon: "🤖", category: "AI/ML", proficiency: 95, color: "#EC4899", years: 1 },
  { name: "React/Next.js", icon: "⚛️", category: "Frontend", proficiency: 90, color: "#3B82F6", years: 2 },
  { name: "Redis", icon: "🔴", category: "Database", proficiency: 80, color: "#EF4444", years: 1 },
  { name: "C#/.NET", icon: "#️⃣", category: "Backend", proficiency: 75, color: "#8B5CF6", years: 1 },
];

const categories = ["All", "Frontend", "Backend", "AI/ML", "Database", "DevOps"];

export default function TechStackShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTech =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Tech"
          accent="Arsenal"
          subtitle="Production-tested technologies for building enterprise-grade AI systems"
        />

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all
                ${
                  selectedCategory === category
                    ? "glass-primary text-primary shadow-lg"
                    : "glass-card text-foreground-muted hover:glass-primary"
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <GlassCard hoverable className="p-6 h-full">
                {/* Tech Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <span className="text-xs px-2 py-1 rounded-full glass-primary text-primary">
                    {tech.category}
                  </span>
                </div>

                {/* Tech Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {tech.name}
                </h3>

                {/* Years of Experience */}
                <div className="text-sm text-foreground-muted mb-4">
                  {tech.years} year{tech.years > 1 ? "s" : ""} experience
                </div>

                {/* Proficiency Progress Circle */}
                <div className="flex justify-center">
                  <ProgressCircle
                    percentage={tech.proficiency}
                    size={100}
                    color={tech.color}
                  />
                </div>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}, transparent)`,
                  }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 glass-primary px-6 py-3 rounded-full">
            <span className="text-foreground-muted text-sm">Also experienced with:</span>
            <span className="font-semibold text-primary text-sm">
              Angular, Django, RabbitMQ, AWS, Power BI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
