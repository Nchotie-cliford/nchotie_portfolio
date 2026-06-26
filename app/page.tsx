import Navbar from "@/components/navigation/Navbar";
import EnhancedHero from "@/components/hero/EnhancedHero";
import PhotoStrip from "@/components/home/PhotoStrip";
import CompactWorkTimeline from "@/components/home/CompactWorkTimeline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <EnhancedHero />
      <PhotoStrip />
      <CompactWorkTimeline />

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
                Let&apos;s talk
              </h2>
              <p className="text-foreground-muted text-sm max-w-sm">
                I&apos;m open to interesting projects, collaborations, and conversations
                about AI and building in Germany.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello.cliford@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4 text-foreground-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello.cliford@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/cliford-ndonwie-nchoti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4 text-foreground-subtle" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Nchotie-cliford"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4 text-foreground-subtle" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground-subtle">
            <p>© 2026 Cliford Ndonwie Nchotie</p>
            <div className="flex gap-5">
              <Link href="/projects" className="hover:text-foreground-muted transition-colors">Projects</Link>
              <Link href="/experience" className="hover:text-foreground-muted transition-colors">Experience</Link>
              <Link href="/writing" className="hover:text-foreground-muted transition-colors">Writing</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
