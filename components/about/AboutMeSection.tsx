"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ProfileCard from "./ProfileCard";

export default function AboutMeSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="About"
          accent="Me"
          subtitle=""
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Profile Card */}
            <div className="lg:col-span-2">
              <ProfileCard />
            </div>

            {/* Right: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 space-y-5 text-foreground-muted leading-relaxed"
            >
              <p>
                I&apos;m originally from Cameroon, based in Bayreuth, Germany. Right now I&apos;m
                building a RAG system and the data infrastructure behind it at Maisel&apos;s brewery
                — real production AI work. In September I&apos;m starting a dual study in Informatik
                at IU with CANCOM, which gives me both the degree and direct experience inside
                German enterprise IT — exactly the world I want to eventually sell into.
              </p>
              <p>
                The job is only part of it. I&apos;ve been freelancing on Fiverr since 2017 — over
                120 projects — and alongside that I&apos;m building my own products: iFemi, a
                community platform for the African diaspora in Europe, and a few AI tools like an
                enterprise RAG assistant and an HR automation system. I&apos;m also involved in
                diaspora-led business projects back in Cameroon with my family.
              </p>
              <p>
                The goal isn&apos;t just to be a good developer. It&apos;s to understand both the
                technical and business sides well enough to build AI products for the German
                Mittelstand and eventually start my own company. Every job, every project is
                feeding that.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
