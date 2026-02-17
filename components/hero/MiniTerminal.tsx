"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { cmd: "git status", output: "On branch main\nYour branch is up to date" },
  { cmd: "docker ps", output: "3 containers running" },
  { cmd: "npm run build", output: "✓ Build successful" },
];

export default function MiniTerminal() {
  const [currentCmd, setCurrentCmd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCmd((prev) => (prev + 1) % commands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.7 }}
      className="max-w-2xl mx-auto"
    >
      <div className="glass-card rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-background-secondary/80 px-4 py-2 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-foreground-muted ml-2 font-mono">
            cliford@portfolio:~
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm h-24 bg-background-tertiary/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCmd}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 text-accent-success mb-1">
                <span>➜</span>
                <span className="text-primary">~</span>
                <span className="text-foreground">{commands[currentCmd].cmd}</span>
              </div>
              <div className="text-foreground-muted text-xs pl-4 whitespace-pre">
                {commands[currentCmd].output}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
