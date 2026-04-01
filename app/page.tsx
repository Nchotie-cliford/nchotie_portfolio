import dynamic from "next/dynamic";
import Navbar from "@/components/navigation/Navbar";
import FloatingNav from "@/components/navigation/FloatingNav";
import EnhancedHero from "@/components/hero/EnhancedHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/projectData";
import CertificatesSection from "@/components/certificates/CertificatesSection";

// Lazy-load below-the-fold sections so they don't block initial paint
const AboutMeSection = dynamic(() => import("@/components/about/AboutMeSection"));
const CaseStudyCard = dynamic(() => import("@/components/projects/CaseStudyCard"));
const TechStackShowcase = dynamic(() => import("@/components/tech-stack/TechStackShowcase"));
const ExperienceTimeline = dynamic(() => import("@/components/experience/ExperienceTimeline"));
const InteractiveTerminal = dynamic(() => import("@/components/ui/InteractiveTerminal"));

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative z-10">
      {/* Navigation */}
      <Navbar />
      <FloatingNav />

      {/* Hero */}
      <EnhancedHero />

      {/* About Me */}
      <AboutMeSection />

      {/* Featured Projects — sidebar grid layout */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              {/* Sidebar label */}
              <div className="md:col-span-1">
                <div className="md:sticky md:top-24">
                  <SectionHeader
                    layout="sidebar"
                    title="Projects"
                    subtitle="Production-grade systems solving real business problems"
                  />
                </div>
              </div>

              {/* Article list */}
              <div className="md:col-span-3">
                {projects.map((project, index) => (
                  <CaseStudyCard key={index} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStackShowcase />

      {/* Certificates */}
      <CertificatesSection />

      {/* Experience */}
      <ExperienceTimeline />

      {/* Interactive Terminal */}
      <InteractiveTerminal />

      {/* Contact */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Let&apos;s build something{" "}
              <span className="text-primary-light">together</span>
            </h2>
            <p className="text-foreground-muted">
              Let&apos;s connect and discuss how I can add value to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="mailto:hello.cliford@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/cliford-ndonwie-nchoti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-light px-6 py-3 text-sm font-semibold text-foreground-muted transition-all hover:text-foreground hover:border-border-light/80"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-subtle">
            <p>© 2026 Cliford Ndonwie Nchotie</p>
            <div className="flex gap-6">
              <a href="https://github.com/Nchotie-cliford" className="hover:text-foreground-muted transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/cliford-ndonwie-nchoti" className="hover:text-foreground-muted transition-colors">
                LinkedIn
              </a>
              <a href="mailto:hello.cliford@gmail.com" className="hover:text-foreground-muted transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
