"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "../ui/GlassCard";
import GradientText from "../ui/GradientText";

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "AI/ML" | "Backend" | "Fullstack";
}

export default function CaseStudyCard({
  title,
  subtitle,
  problem,
  solution,
  techStack,
  impact,
  imageUrl,
  githubUrl,
  liveUrl,
  category,
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    "AI/ML": { gradient: "hero", badge: "from-primary to-purple-500" },
    Backend: { gradient: "primary", badge: "from-primary-dark to-primary" },
    Fullstack: { gradient: "gold", badge: "from-accent-gold to-yellow-500" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassCard hoverable className="overflow-hidden h-full">
        {/* Category Badge */}
        <div className="absolute right-4 top-4 z-10">
          <span
            className={`
              px-4 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg
              bg-gradient-to-r ${categoryColors[category].badge}
            `}
          >
            {category}
          </span>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 overflow-hidden bg-background-secondary">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              <GradientText gradient={categoryColors[category].gradient as any}>
                {title}
              </GradientText>
            </h3>
            <p className="text-sm text-foreground-muted">{subtitle}</p>
          </div>

          {/* Problem-Solution Framework */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Problem */}
            <div className="glass-card p-4 rounded-lg border-l-4 border-accent-gold">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚠️</span>
                <h4 className="text-sm font-semibold text-accent-gold">Challenge</h4>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {problem}
              </p>
            </div>

            {/* Solution */}
            <div className="glass-primary p-4 rounded-lg border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">✓</span>
                <h4 className="text-sm font-semibold text-primary-light">Solution</h4>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {solution}
              </p>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="glass-success p-4 rounded-lg">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-success mb-2">
              Impact
            </h4>
            <p className="text-sm font-medium text-foreground">{impact}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold text-foreground-muted mb-3 uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full glass-card text-foreground-subtle hover:glass-primary transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-3 pt-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass-card hover:glass-primary transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30 transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
