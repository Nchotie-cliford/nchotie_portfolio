"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    src: "/images/FLS_Cheftreff_Hackathon_Day1.jpg",
    alt: "ChefTreff AI Hackathon, Hamburg 2026",
    caption: "ChefTreff AI Hackathon",
    sublabel: "Hamburg, April 2026",
  },
  {
    src: "/images/Simon Squid.jpg",
    alt: "Meeting Simon Squibb",
    caption: "Meeting Simon Squibb",
    sublabel: "2026",
  },
  {
    src: "/images/maisel_brewery.jpg",
    alt: "Maisel's Brewery, Bayreuth",
    caption: "Maisel's Brewery",
    sublabel: "Bayreuth",
  },
];

const rotations = [-2.5, 1.5, -1.5];

export default function PhotoStrip() {
  return (
    <section className="py-12 relative">
      {/* Right fade hint — mobile only, signals more to scroll */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 md:hidden" />

      <div
        className="
          flex gap-6
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory md:snap-none
          scrollbar-hide
          px-6 md:px-4
          md:justify-center md:items-center
          pb-4 md:pb-0
        "
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
            style={{ rotate: rotations[i] }}
            className="snap-center shrink-0 cursor-pointer"
          >
            <div className="relative w-52 h-72 md:w-60 md:h-80 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 768px) 416px, 480px"
              />
            </div>
            <div className="mt-2.5 text-center">
              <p className="text-xs font-medium text-foreground-muted">{photo.caption}</p>
              <p className="text-xs text-foreground-subtle">{photo.sublabel}</p>
            </div>
          </motion.div>
        ))}

        {/* Right padding spacer on mobile so last card isn't hidden behind fade */}
        <div className="shrink-0 w-4 md:hidden" />
      </div>
    </section>
  );
}
