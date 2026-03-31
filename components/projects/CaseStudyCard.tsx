"use client";

import { motion } from "framer-motion";

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "AI/ML" | "Backend" | "Fullstack";
  imageUrl?: string;
}

const categoryColor: Record<string, string> = {
  "AI/ML": "text-primary-light",
  Backend: "text-accent-success",
  Fullstack: "text-accent-gold",
};

export default function CaseStudyCard({
  title,
  subtitle,
  problem,
  solution,
  techStack,
  impact,
  githubUrl,
  liveUrl,
  category,
}: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="article-hover py-6 border-b border-border/50 last:border-0"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <span className={`text-xs font-medium uppercase tracking-wider ${categoryColor[category]} mb-1 block`}>
            {category}
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm text-foreground-muted mt-0.5">{subtitle}</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 shrink-0 mt-1">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-subtle hover:text-foreground transition-colors"
              aria-label="View source"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-subtle hover:text-primary-light transition-colors"
              aria-label="Live site"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Impact */}
      <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
        {impact}
      </p>

      {/* Problem / Solution */}
      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div className="border-l-2 border-accent-gold/40 pl-3">
          <p className="text-xs font-medium text-accent-gold mb-1">Challenge</p>
          <p className="text-xs text-foreground-subtle leading-relaxed line-clamp-3">{problem}</p>
        </div>
        <div className="border-l-2 border-primary/40 pl-3">
          <p className="text-xs font-medium text-primary-light mb-1">Solution</p>
          <p className="text-xs text-foreground-subtle leading-relaxed line-clamp-3">{solution}</p>
        </div>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-md bg-background-secondary border border-border/60 text-foreground-subtle"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
