"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the very top
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      // Detect active section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
    >
      {sections.map((section) => (
        <div key={section.id} className="relative group">
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="glass-card px-3 py-1.5 rounded-lg whitespace-nowrap">
              <span className="text-xs font-medium text-foreground">
                {section.label}
              </span>
            </div>
          </div>

          {/* Dot */}
          <button
            onClick={() => scrollToSection(section.id)}
            className="relative block"
            aria-label={`Go to ${section.label}`}
          >
            <motion.div
              className={`
                w-3 h-3 rounded-full border-2 transition-all duration-300
                ${
                  activeSection === section.id
                    ? "border-primary bg-primary scale-125"
                    : "border-foreground-muted bg-transparent hover:border-primary hover:scale-110"
                }
              `}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          </button>
        </div>
      ))}
    </motion.div>
  );
}
