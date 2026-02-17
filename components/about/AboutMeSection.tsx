"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ProfileCard from "./ProfileCard";
import ValuesPills from "./ValuesPills";
import MetricCard from "../ui/MetricCard";
import GradientText from "../ui/GradientText";

export default function AboutMeSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="About"
          accent="Me"
          subtitle="Driven by continuous improvement and a passion for solving complex problems"
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Profile Card (40%) */}
            <div className="lg:col-span-2">
              <ProfileCard />
            </div>

            {/* Right: Content (60%) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Biography */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  My <GradientText gradient="primary">Philosophy</GradientText>
                </h3>

                <div className="glass-card p-6 rounded-xl space-y-4 text-foreground-muted leading-relaxed">
                  <p>
                    I'm <span className="text-primary-light font-semibold">never satisfied with my goals</span>,
                    and I'm always fighting to improve. I never stop learning and love reaching new heights.
                    I'm an <span className="text-accent-gold font-semibold">optimistic and faithful believer</span> that
                    for every problem, there is always a solution.
                  </p>

                  <p>
                    I think that to be <span className="text-accent-success font-semibold">efficient in my work</span>,
                    I need to be healthy, so I like to{" "}
                    <span className="text-foreground font-medium">meditate every day, run for one hour, and exercise during the half-day break</span>.
                    This helps me keep my mind awake and skillfully manage my tasks.
                  </p>
                </div>
              </motion.div>

              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Core <GradientText gradient="success">Values</GradientText>
                </h4>
                <ValuesPills />
              </motion.div>

              {/* Mini Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Quick <GradientText gradient="gold">Stats</GradientText>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <MetricCard
                    value={2}
                    label="Years Coding"
                    icon="💻"
                    suffix="+"
                    variant="primary"
                  />
                  <MetricCard
                    value={3}
                    label="Projects Built"
                    icon="🚀"
                    suffix="+"
                    trend="up"
                    variant="accent"
                  />
                  <MetricCard
                    value={15}
                    label="Technologies"
                    icon="⚡"
                    suffix="+"
                    variant="success"
                  />
                  <MetricCard
                    value={1000}
                    label="Support Tickets"
                    icon="🎯"
                    suffix="+"
                    trend="up"
                    variant="default"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
