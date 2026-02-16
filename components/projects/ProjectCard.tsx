"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  videoUrl?: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "AI/ML" | "Backend" | "Fullstack";
}

export default function ProjectCard({
  title,
  subtitle,
  problem,
  solution,
  techStack,
  impact,
  videoUrl,
  imageUrl,
  githubUrl,
  liveUrl,
  category,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoUrl) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && videoUrl) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const categoryColors = {
    "AI/ML": "from-primary to-accent-gold",
    Backend: "from-primary-dark to-primary",
    Fullstack: "from-accent-gold to-primary",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background-tertiary transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Category Badge */}
      <div className="absolute right-4 top-4 z-10">
        <span
          className={`bg-gradient-to-r ${categoryColors[category]} rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-lg`}
        >
          {category}
        </span>
      </div>

      {/* Video/Image Preview */}
      <div className="relative h-64 overflow-hidden bg-background-secondary">
        {videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <img
              src={imageUrl}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
          </>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-foreground-muted">{subtitle}</p>
        </div>

        {/* Problem-Solution Framework */}
        <div className="space-y-3">
          <div className="rounded-lg border border-border-light/30 bg-background-secondary/50 p-4">
            <h4 className="mb-2 flex items-center text-sm font-semibold text-accent-gold">
              <span className="mr-2">⚠️</span>
              Challenge
            </h4>
            <p className="text-sm leading-relaxed text-foreground-muted">
              {problem}
            </p>
          </div>

          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
            <h4 className="mb-2 flex items-center text-sm font-semibold text-primary-light">
              <span className="mr-2">✓</span>
              Solution
            </h4>
            <p className="text-sm leading-relaxed text-foreground-muted">
              {solution}
            </p>
          </div>
        </div>

        {/* Impact Metric */}
        <div className="rounded-lg border border-accent-success/30 bg-accent-success/5 p-4">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-success">
            Impact
          </h4>
          <p className="text-sm font-medium text-foreground">{impact}</p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-background-secondary px-3 py-1 text-xs font-medium text-foreground-subtle ring-1 ring-border-light"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border-light bg-background-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
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
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-light"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
