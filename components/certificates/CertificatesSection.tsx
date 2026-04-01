"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { certificates } from "@/lib/projectData";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="md:sticky md:top-24">
                <SectionHeader layout="sidebar" title="Certificates" />
              </div>
            </div>

            {/* Articles */}
            <div className="md:col-span-3 divide-y divide-border/40">
              {certificates.map((cert, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="article-hover py-5 first:pt-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight text-foreground mb-0.5">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-foreground-muted">{cert.issuer}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-foreground-subtle tabular-nums mb-1.5">
                        {cert.date}
                      </p>
                      {cert.credentialUrl && cert.credentialUrl !== "#" ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary-light hover:underline underline-offset-2"
                        >
                          View credential ↗
                        </a>
                      ) : (
                        <span className="text-xs text-foreground-subtle italic">
                          coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
