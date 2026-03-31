"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

interface TechItem {
  name: string;
  category: string;
  proficiency: number;
  years: number;
}

const techStack: TechItem[] = [
  { name: "TypeScript", category: "Frontend", proficiency: 95, years: 2 },
  { name: "React / Next.js", category: "Frontend", proficiency: 90, years: 2 },
  { name: "Java", category: "Backend", proficiency: 90, years: 2 },
  { name: "Spring Boot", category: "Backend", proficiency: 90, years: 2 },
  { name: "Python", category: "AI/ML", proficiency: 90, years: 2 },
  { name: "FastAPI", category: "Backend", proficiency: 95, years: 1 },
  { name: "PostgreSQL", category: "Database", proficiency: 85, years: 2 },
  { name: "Redis", category: "Database", proficiency: 80, years: 1 },
  { name: "Docker", category: "DevOps", proficiency: 85, years: 1 },
  { name: "OpenAI API", category: "AI/ML", proficiency: 95, years: 1 },
  { name: "C# / .NET", category: "Backend", proficiency: 75, years: 1 },
];

const categories = ["All", "Frontend", "Backend", "AI/ML", "Database", "DevOps"];

const categoryColor: Record<string, string> = {
  Frontend: "text-primary-light border-primary/20 bg-primary/8",
  Backend: "text-accent-success border-accent-success/20 bg-accent-success/8",
  "AI/ML": "text-purple-400 border-purple-400/20 bg-purple-400/8",
  Database: "text-accent-gold border-accent-gold/20 bg-accent-gold/8",
  DevOps: "text-foreground-muted border-border-light/40 bg-background-secondary",
};

export default function TechStackShowcase() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All" ? techStack : techStack.filter((t) => t.category === selected);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="md:sticky md:top-24 space-y-6">
                <SectionHeader layout="sidebar" title="Skills" />

                {/* Category filter */}
                <div className="flex flex-wrap md:flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelected(cat)}
                      className={`text-left text-sm transition-colors px-1 py-0.5 rounded ${
                        selected === cat
                          ? "text-foreground font-medium"
                          : "text-foreground-subtle hover:text-foreground-muted"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech grid */}
            <div className="md:col-span-3">
              <motion.div layout className="flex flex-wrap gap-2">
                {filtered.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    className={`
                      inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                      border text-sm font-medium transition-all
                      ${categoryColor[tech.category] ?? "text-foreground-muted border-border bg-background-secondary"}
                    `}
                  >
                    {tech.name}
                    <span className="text-xs opacity-50 font-normal">
                      {tech.years}y
                    </span>
                  </motion.span>
                ))}
              </motion.div>

              {/* Also experienced with */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 text-sm text-foreground-subtle"
              >
                Also experienced with{" "}
                <span className="text-foreground-muted">
                  Angular, Django, RabbitMQ, AWS, Power BI, Xamarin
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
