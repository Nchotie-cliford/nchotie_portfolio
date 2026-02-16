"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Command {
  input: string;
  output: string | string[];
  type: "success" | "info" | "data";
}

const commands: Command[] = [
  {
    input: "whoami",
    output: "Cliford Ndonwie Nchotie • Full-Stack Developer • AI/ML Specialist • Bayreuth, DE",
    type: "info",
  },
  {
    input: "ls skills/",
    output: [
      "├── backend/",
      "│   ├── FastAPI (Python)",
      "│   ├── Spring Boot (Java)",
      "│   └── PostgreSQL",
      "├── ai-ml/",
      "│   ├── OpenAI API",
      "│   ├── RAG Pipelines",
      "│   └── LangChain",
      "└── devops/",
      "    ├── Docker",
      "    └── CI/CD",
    ],
    type: "success",
  },
  {
    input: "git log --oneline --graph",
    output: [
      "* d4f8a21 feat: Implement RAG pipeline for RKA-AI",
      "* 8b2c3e4 fix: Optimize FastAPI endpoints for 40% faster response",
      "* 1a9f7d6 feat: Build EasyHR matching algorithm (87% accuracy)",
      "* 6c5e2b8 refactor: Migrate to PostgreSQL for better scalability",
    ],
    type: "data",
  },
  {
    input: "cat experience.json",
    output: [
      '{',
      '  "current": "IT Engineer @ Arvato Systems (TenneT TSO)",',
      '  "previous": ["Software Developer @ In-Reach", "IT Support @ Uni Bayreuth"],',
      '  "location": "Bayreuth, Deutschland",',
      '  "focus": ["Backend Engineering", "AI/LLM", "Infrastructure", "DevOps"]',
      '}',
    ],
    type: "data",
  },
  {
    input: "echo $MISSION",
    output: "Building intelligent systems that bridge AI and enterprise infrastructure",
    type: "success",
  },
];

const InteractiveTerminal: React.FC = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState<number>(0);
  const [displayedCommands, setDisplayedCommands] = useState<Command[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setDisplayedCommands((prev) => [...prev, commands[currentCommandIndex]]);
          setCurrentCommandIndex((prev) => prev + 1);
          setIsTyping(false);
        }, 800);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentCommandIndex]);

  const resetTerminal = () => {
    setDisplayedCommands([]);
    setCurrentCommandIndex(0);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal Header */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-foreground">Developer </span>
              <span className="bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
                Console
              </span>
            </h2>
            <p className="text-foreground-muted">
              A live glimpse into my development environment
            </p>
          </div>

          {/* Terminal Window */}
          <div className="rounded-lg overflow-hidden border border-border shadow-2xl shadow-primary/5">
            {/* Title Bar */}
            <div className="bg-background-secondary border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-sm text-foreground-muted font-mono">
                  cliford@portfolio:~
                </span>
              </div>
              <button
                onClick={resetTerminal}
                className="text-xs text-foreground-subtle hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-background-tertiary"
              >
                Reset
              </button>
            </div>

            {/* Terminal Content */}
            <div className="bg-background-tertiary p-6 font-mono text-sm min-h-[400px] max-h-[600px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {displayedCommands.map((cmd, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    {/* Command Input */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent-success">➜</span>
                      <span className="text-primary">~</span>
                      <span className="text-foreground">{cmd.input}</span>
                    </div>

                    {/* Command Output */}
                    <div
                      className={`ml-4 ${cmd.type === "success"
                          ? "text-accent-success"
                          : cmd.type === "info"
                            ? "text-primary-light"
                            : "text-foreground-muted"
                        }`}
                    >
                      {Array.isArray(cmd.output) ? (
                        cmd.output.map((line, i) => (
                          <div key={i} className="leading-relaxed">
                            {line}
                          </div>
                        ))
                      ) : (
                        <div>{cmd.output}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-accent-success">➜</span>
                  <span className="text-primary">~</span>
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-4 bg-foreground-muted animate-pulse" />
                    <span
                      className="w-2 h-4 bg-foreground-muted animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <span
                      className="w-2 h-4 bg-foreground-muted animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </span>
                </motion.div>
              )}

              {/* Cursor */}
              {!isTyping && currentCommandIndex >= commands.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-accent-success">➜</span>
                  <span className="text-primary">~</span>
                  <span className="inline-block w-2 h-4 bg-foreground animate-pulse" />
                </motion.div>
              )}
            </div>
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-foreground-subtle">
              💡 This terminal auto-plays. Click &quot;Reset&quot; to watch again.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
