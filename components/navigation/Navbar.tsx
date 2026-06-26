"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Writing", href: "/writing" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Floating pill nav */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-fit"
      >
        {/* Desktop pill */}
        <nav className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/95 backdrop-blur-md border border-border/60 shadow-sm">
          {/* Profile photo */}
          <Link href="/" className="mr-1">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-border/40 shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Cliford Nchotie"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>

          {/* Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
                ${isActive(link.href)
                  ? "bg-foreground text-background"
                  : "text-foreground-muted hover:text-foreground hover:bg-background-secondary"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile pill */}
        <div className="flex md:hidden items-center gap-2 px-3 py-2 rounded-full bg-white/95 backdrop-blur-md border border-border/60 shadow-sm">
          <Link href="/">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-border/40 shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Cliford Nchotie"
                width={28}
                height={28}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>

          <span className="text-sm font-medium text-foreground">Cliford</span>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-1 w-7 h-7 flex flex-col items-center justify-center gap-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 5 : 0 }}
              className="block w-4 h-px bg-foreground"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="block w-4 h-px bg-foreground"
            />
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -5 : 0 }}
              className="block w-4 h-px bg-foreground"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 md:hidden"
          >
            <div className="flex flex-col gap-1 p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-border/60 shadow-md min-w-[160px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium transition-colors
                    ${isActive(link.href)
                      ? "bg-foreground text-background"
                      : "text-foreground-muted hover:text-foreground hover:bg-background-secondary"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
