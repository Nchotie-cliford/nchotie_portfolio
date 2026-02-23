"use client";

import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";
import ParticleBackground from "../ui/ParticleBackground";
import DataTicker from "./DataTicker";
import MiniTerminal from "./MiniTerminal";

export default function EnhancedHero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Multi-layer Background */}

      {/* Layer 1: Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px),
                             linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Layer 2: Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-accent-gold/15 blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />

      {/* Layer 3: Particles */}
      <ParticleBackground particleCount={60} />

      {/* Layer 4: Diagonal Light Streaks */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent transform -skew-x-12" />
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-accent-gold to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent transform -skew-x-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto text-center space-y-8">

          {/* Stage 1: Status Badge (0-0.5s) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-primary px-5 py-2.5 rounded-full text-sm font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-success opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-success" />
            </span>
            <span className="text-primary-light">
              Open to IT Engineer Apprenticeships
            </span>
            <span className="text-foreground-muted">•</span>
            <span className="text-foreground-muted">Bayreuth, Deutschland</span>
          </motion.div>

          {/* Stage 2: Headline (0.5-1s) - Word by word */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="block text-foreground"
              >
                Hi, I&apos;m{" "}
                <GradientText gradient="hero" animated>
                  Cliford
                </GradientText>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="block text-foreground mt-2"
              >
                <GradientText gradient="gold" animated>
                  Ndonwie Nchotie
                </GradientText>
              </motion.span>
            </motion.h1>
          </div>

          {/* Stage 3: Live Data Ticker (1-1.5s) */}
          <DataTicker />

          {/* Stage 4: Subheading (1.5-2s) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed"
          >
            Aspiring Lead Engineer specializing in{" "}
            <span className="text-primary-light font-semibold">low-latency, high-throughput backend architecture</span>{" "}
            and{" "}
            <span className="text-accent-gold font-semibold">end-to-end AI pipelines</span>.
            <br />
            I build scalable, reliable systems that connect{" "}
            <span className="text-primary-light font-semibold">mission-critical infrastructure</span>{" "}
            with RAG/LLM automation.
          </motion.p>

          {/* Stage 5: CTA Buttons (2-2.5s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.2, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-lg bg-gradient-to-r from-primary to-purple-600 shadow-lg overflow-hidden"
            >
              <span className="relative z-10">View Case Studies</span>
              <svg
                className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg glass-card hover:glass-primary transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>

            <motion.a
              href="https://github.com/Nchotie-cliford"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glass-primary transition-all"
              transition={{ type: "spring", stiffness: 200 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Stage 6: Mini Terminal (2.5-3s) */}
          <MiniTerminal />

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-foreground-subtle">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
}
