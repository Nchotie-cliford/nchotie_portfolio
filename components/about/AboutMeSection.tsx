"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ProfileCard from "./ProfileCard";
import ValuesPills from "./ValuesPills";
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

                <div className="glass-card p-6 rounded-xl text-foreground-muted leading-relaxed">
                  <p>
                    I am never satisfied with my goals, and I am always fighting to improve. I never stop learning
                    and love reaching new heights. I am an optimistic and faithful believer that for every problem,
                    there is always a solution. I live by the principle that{" "}
                    <span className="text-primary-light font-semibold">setbacks are merely setups for a stronger comeback</span>.
                    My journey has taught me that with{" "}
                    <span className="text-accent-gold font-semibold">hard work and a clear vision</span>,
                    any goal is within reach.
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
