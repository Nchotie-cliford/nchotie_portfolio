"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const workItems = [
  {
    company: "CANCOM / IU",
    role: "Dual Student – B.Sc. Informatik",
    period: "Sep 2026 →",
    initials: "CA",
    color: "bg-red-600 text-white",
    logoSrc: "/images/CANCOM_Logo_Rot_sRGB.png",
  },
  {
    company: "Maisel's Brewery",
    role: "KI & Data Science",
    period: "Apr – Aug 2026",
    initials: "M",
    color: "bg-blue-900 text-yellow-400",
    logoSrc: "/images/images_maisel__logo.png",
  },
  {
    company: "Arvato Systems",
    role: "IT Engineer (TenneT TSO)",
    period: "2024 – 2025",
    initials: "AR",
    color: "bg-blue-700 text-white",
    logoSrc: "/images/arvato_logo.jpg",
  },
  {
    company: "In-Reach",
    role: "Junior Developer",
    period: "2023",
    initials: "IR",
    color: "bg-zinc-600 text-white",
    logoSrc: "/images/in_reach.png",
  },
  {
    company: "Fiverr",
    role: "Freelance Developer",
    period: "2017 →",
    initials: "F",
    color: "bg-green-500 text-white",
    logoSrc: "/images/fiver_logo.png",
  },
];

export default function CompactWorkTimeline() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
              Work
            </h2>
            <Link
              href="/experience"
              className="text-xs text-foreground-subtle hover:text-foreground transition-colors"
            >
              Full history →
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
            {workItems.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="snap-start shrink-0 flex items-start gap-3 min-w-[190px] md:min-w-0 md:flex-1"
              >
                {/* Logo */}
                {item.logoSrc ? (
                  <div className="w-14 h-14 rounded-xl border border-border/50 bg-white flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                    <Image
                      src={item.logoSrc}
                      alt={item.company}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${item.color}`}
                  >
                    {item.initials}
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium text-foreground leading-tight">
                    {item.company}
                  </p>
                  <p className="text-xs text-foreground-muted mt-0.5 leading-tight">
                    {item.role}
                  </p>
                  <p className="text-xs text-foreground-subtle mt-1 tabular-nums">
                    {item.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
