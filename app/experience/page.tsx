import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import { experience } from "@/lib/projectData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work history of Cliford Ndonwie Nchotie — CANCOM, Maisel's brewery (KI & Data Science), Arvato Systems, In-Reach, Fiverr (120+ projects). 9 years of building.",
  alternates: { canonical: "https://nchotie.xyz/experience" },
  openGraph: {
    title: "Experience — Cliford Ndonwie Nchotie",
    description:
      "From IT support to production AI systems. CANCOM dual study, Maisel's RAG pipeline, Arvato Systems, and 9 years freelancing on Fiverr.",
    url: "https://nchotie.xyz/experience",
    images: [{ url: "https://nchotie.xyz/images/profile.jpg", width: 800, height: 800 }],
  },
};

interface CompanyMeta {
  initials: string;
  color: string;
  logoSrc?: string;
}

const companyMeta: Record<string, CompanyMeta> = {
  "IU Internationale Hochschule / CANCOM SE": {
    initials: "CA",
    color: "bg-red-600 text-white",
    logoSrc: "/images/CANCOM_Logo_Rot_sRGB.png",
  },
  "Brauerei Gebr. Maisel": {
    initials: "M",
    color: "bg-blue-900 text-yellow-400",
    logoSrc: "/images/images_maisel__logo.png",
  },
  "Arvato Systems GmbH": {
    initials: "AR",
    color: "bg-blue-700 text-white",
    logoSrc: "/images/arvato_logo.jpg",
  },
  "In-Reach UG & Co. KG": {
    initials: "IR",
    color: "bg-zinc-600 text-white",
    logoSrc: "/images/in_reach.png",
  },
  "Universität Bayreuth": {
    initials: "UBT",
    color: "bg-indigo-700 text-white",
    logoSrc: "/images/Universität_Bayreuth.svg.png",
  },
  Fiverr: {
    initials: "F",
    color: "bg-green-500 text-white",
    logoSrc: "/images/fiver_logo.png",
  },
  "Africa Multiple Cluster of Excellence": {
    initials: "AM",
    color: "bg-amber-700 text-white",
    logoSrc: "/images/Africa Multiple Cluster of Excellence.webp",
  },
};

function LogoBadge({ meta }: { meta: CompanyMeta }) {
  if (meta.logoSrc) {
    return (
      <div className="w-14 h-14 rounded-xl border border-border/50 bg-white flex items-center justify-center shrink-0 overflow-hidden p-1.5">
        <Image
          src={meta.logoSrc}
          alt=""
          width={48}
          height={48}
          className="object-contain w-full h-full"
        />
      </div>
    );
  }
  return (
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${meta.color}`}>
      {meta.initials}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="container mx-auto px-6 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

            <div className="md:col-span-1">
              <div className="md:sticky md:top-24">
                <h1 className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle mb-3">
                  Experience
                </h1>
                <p className="text-sm text-foreground-subtle leading-relaxed">
                  Every role is a step toward the same goal.
                </p>
              </div>
            </div>

            <div className="md:col-span-3 divide-y divide-border/40">
              {experience.map((exp, index) => {
                const meta = companyMeta[exp.company] ?? {
                  initials: exp.company.slice(0, 2).toUpperCase(),
                  color: "bg-zinc-400 text-white",
                };

                return (
                  <article key={index} className="py-8 first:pt-0">
                    <div className="flex items-start gap-4 mb-4">
                      <LogoBadge meta={meta} />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h2 className="text-base font-semibold text-foreground">
                            {exp.company}
                          </h2>
                          <span className="text-xs text-foreground-subtle tabular-nums shrink-0">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm text-primary font-medium mt-0.5">
                          {exp.role}
                        </p>
                        <p className="text-xs text-foreground-subtle mt-0.5">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 ml-[4.5rem]">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                          <span className="mt-2 h-1 w-1 rounded-full bg-border-light shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 ml-[4.5rem]">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-md bg-background-secondary border border-border/60 text-foreground-subtle"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
