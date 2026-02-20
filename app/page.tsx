import Navbar from "@/components/navigation/Navbar";
import FloatingNav from "@/components/navigation/FloatingNav";
import EnhancedHero from "@/components/hero/EnhancedHero";
import AboutMeSection from "@/components/about/AboutMeSection";
import TechStackShowcase from "@/components/tech-stack/TechStackShowcase";
import CaseStudyCard from "@/components/projects/CaseStudyCard";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import InteractiveTerminal from "@/components/ui/InteractiveTerminal";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/projectData";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navbar />
      <FloatingNav />

      {/* Enhanced Hero Section with 6-stage animation */}
      <EnhancedHero />

      {/* About Me Section with Profile */}
      <AboutMeSection />

      {/* Tech Stack Showcase */}
      <TechStackShowcase />

      {/* Featured Projects - Case Studies */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Featured"
            accent="Projects"
            subtitle="Production-grade systems solving real business problems with AI and enterprise architecture"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <CaseStudyCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Interactive Terminal */}
      <InteractiveTerminal />

      {/* Contact CTA */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Ready to build </span>
              <span className="bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
                the future?
              </span>
            </h2>
            <p className="text-xl text-foreground-muted">
              I'm actively seeking an IT Engineer apprenticeship to grow and contribute.
              Let's discuss how I can add value to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello.cliford@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-primary/50 hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/cliford-ndonwie-nchoti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg glass-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:glass-primary hover:scale-105"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background-secondary/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-muted">
            <p>© 2026 Cliford Ndonwie Nchotie. Built with Next.js, TypeScript & Framer Motion.</p>
            <div className="flex gap-6">
              <a
                href="https://github.com/Nchotie-cliford"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/cliford-ndonwie-nchoti"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a href="mailto:hello.cliford@gmail.com" className="hover:text-primary transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
