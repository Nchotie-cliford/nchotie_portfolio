"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-accent-gold/20 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-light backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-success opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-success"></span>
            </span>
            Open to IT Engineer Apprenticeships • Bayreuth, Deutschland
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-foreground">Bridging </span>
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent-gold bg-clip-text text-transparent">
              AI Infrastructure
            </span>
            <br />
            <span className="text-foreground">with </span>
            <span className="bg-gradient-to-r from-accent-gold to-primary bg-clip-text text-transparent">
              Enterprise Systems
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Developer specializing in{" "}
            <span className="text-primary-light font-semibold">AI-powered backends</span>,{" "}
            <span className="text-accent-gold font-semibold">RAG pipelines</span>, and{" "}
            <span className="text-primary-light font-semibold">scalable infrastructure</span>.
            Building the next generation of intelligent systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-light hover:shadow-primary/50"
            >
              View Projects
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border-2 border-border-light bg-background-tertiary px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary hover:bg-primary/10"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light">3+</div>
              <div className="text-sm text-foreground-muted mt-1">Production Projects</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-3xl font-bold text-accent-gold">2</div>
              <div className="text-sm text-foreground-muted mt-1">Werkstudent Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-success">AI/LLM</div>
              <div className="text-sm text-foreground-muted mt-1">Specialist</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-foreground-subtle">
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <svg
                className="h-6 w-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
