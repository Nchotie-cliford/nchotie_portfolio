"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { experience } from "@/lib/projectData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Sidebar label */}
            <div className="md:col-span-1">
              <div className="md:sticky md:top-24">
                <SectionHeader layout="sidebar" title="Experience" />
              </div>
            </div>

            {/* Articles */}
            <div className="md:col-span-3 divide-y divide-border/40">
              {experience.map((exp, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="article-hover py-6 first:pt-0"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {exp.company}
                    </h3>
                    <span className="text-xs text-foreground-subtle tabular-nums">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-primary-light font-medium mb-1">{exp.role}</p>
                  <p className="text-xs text-foreground-subtle mb-3">{exp.location}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-border-light shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md bg-background-secondary border border-border/60 text-foreground-subtle"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
