import Navbar from "@/components/navigation/Navbar";
import CaseStudyCard from "@/components/projects/CaseStudyCard";
import { projects } from "@/lib/projectData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Cliford Ndonwie Nchotie — RAG systems, AI platforms, and full-stack products built in production. Betta Health, EasyHR, RKA-AI, UrlaubPilot.",
  alternates: { canonical: "https://nchotie.xyz/projects" },
  openGraph: {
    title: "Projects — Cliford Ndonwie Nchotie",
    description:
      "RAG systems, AI platforms, and full-stack products built in production. Real systems, not demos.",
    url: "https://nchotie.xyz/projects",
    images: [{ url: "https://nchotie.xyz/images/profile.jpg", width: 800, height: 800 }],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="container mx-auto px-6 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-2">
            <div className="md:col-span-1">
              <div className="md:sticky md:top-24">
                <h1 className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle mb-2">
                  Projects
                </h1>
                <p className="text-sm text-foreground-subtle leading-relaxed">
                  Production systems, not demos.
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              {projects.map((project, index) => (
                <CaseStudyCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
