"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// Generate sample data (in production, fetch from GitHub API)
const generateContributionData = (): ContributionDay[] => {
  const data: ContributionDay[] = [];
  const today = new Date();

  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const count = Math.floor(Math.random() * 12);
    const level = count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 9 ? 3 : 4;

    data.push({
      date: date.toISOString().split('T')[0],
      count,
      level: level as 0 | 1 | 2 | 3 | 4,
    });
  }

  return data;
};

const getLevelColor = (level: number) => {
  const colors = {
    0: "bg-background-secondary",
    1: "bg-primary/30",
    2: "bg-primary/50",
    3: "bg-primary/70",
    4: "bg-primary",
  };
  return colors[level as keyof typeof colors] || colors[0];
};

export default function GitHubActivity() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setContributions(generateContributionData());
  }, []);

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
  const currentStreak = 45; // Calculate based on consecutive days
  const longestStreak = 87;

  // Prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <section className="py-24 relative overflow-hidden bg-background-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">GitHub </span>
              <span className="bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
                Consistency
              </span>
            </h2>
            <p className="text-foreground-muted mb-8">
              365 days of building, learning, and shipping
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="rounded-xl border border-border bg-background-tertiary p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {totalContributions}
                </div>
                <div className="text-sm text-foreground-muted">
                  Contributions this year
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background-tertiary p-6">
                <div className="text-4xl font-bold text-accent-success mb-2">
                  {currentStreak}
                </div>
                <div className="text-sm text-foreground-muted">
                  Day current streak 🔥
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background-tertiary p-6">
                <div className="text-4xl font-bold text-accent-gold mb-2">
                  {longestStreak}
                </div>
                <div className="text-sm text-foreground-muted">
                  Day longest streak
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="rounded-xl border border-border bg-background-tertiary p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Month Labels */}
              <div className="flex gap-1 mb-2 text-xs text-foreground-subtle ml-8">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                  <div key={month} className="w-12">
                    {month}
                  </div>
                ))}
              </div>

              {/* Grid */}
              <div className="flex gap-1">
                {/* Day Labels */}
                <div className="flex flex-col gap-1 text-xs text-foreground-subtle justify-around py-1">
                  <div>Mon</div>
                  <div>Wed</div>
                  <div>Fri</div>
                </div>

                {/* Contribution Squares */}
                <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
                  {contributions.map((day, index) => (
                    <motion.div
                      key={day.date}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.001 }}
                      whileHover={{ scale: 1.5, zIndex: 10 }}
                      className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} transition-all cursor-pointer group relative`}
                      title={`${day.count} contributions on ${day.date}`}
                    >
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background-secondary border border-border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        <div className="font-semibold">{day.count} contributions</div>
                        <div className="text-foreground-muted">{day.date}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-4 text-xs text-foreground-subtle">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="https://github.com/clifordnchotie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-light bg-background-tertiary px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Full GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
