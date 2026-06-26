import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cliford Ndonwie Nchotie â€” AI developer and builder from Cameroon, based in Germany. The full story behind the work.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="container mx-auto px-6 pt-28 pb-24">
        <div className="max-w-2xl mx-auto">

          {/* Photo */}
          <div className="mb-12">
            <Image
              src="/images/profile.jpg"
              alt="Cliford Ndonwie Nchotie"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          </div>

          {/* Framing line */}
          <p className="text-sm text-foreground-subtle mb-12 leading-relaxed">
            Each stop below â€” university IT support, Arvato Systems, Maisel&apos;s,
            now CANCOM â€” is a deliberate step toward building my own AI company for
            the German Mittelstand.
          </p>

          {/* Bio */}
          <div className="space-y-6 text-foreground-muted leading-relaxed text-base">
            <p>
              I&apos;m Cliford â€” originally from Cameroon, based in Bayreuth and moving
              to Munich this September. My goal is to start an AI company in Germany
              within the next six years, specifically targeting the Mittelstand: the
              mid-size family-owned businesses that form the backbone of the German
              economy and are only just beginning to adopt AI seriously.
            </p>

            <p>
              Right now I&apos;m building a RAG system and the data infrastructure behind
              it at Maisel&apos;s brewery in Bayreuth â€” real production work, not just
              prototyping. The system connects cloud and on-premise data sources into
              a unified fabric that can power AI applications across the company. It&apos;s
              exactly the kind of problem I want to be solving commercially, so this
              role is both a job and a proof of concept.
            </p>

            <p>
              In September I&apos;m starting a dual study program in Informatik at IU
              Internationale Hochschule, partnered with CANCOM SE. This gives me the
              formal degree and direct experience inside one of Germany&apos;s largest IT
              service companies â€” the kind of enterprise infrastructure and client
              relationships that are central to the market I eventually want to sell
              into.
            </p>

            <p>
              The employment is only part of it. I&apos;ve been freelancing on Fiverr since
              2017 â€” over 120 completed projects â€” spanning web development, automation,
              AI integration, and mobile apps. That track record is the foundation:
              it proves I can deliver independently, handle client relationships across
              cultures, and build things that work without a team structure underneath me.
            </p>

            <p>
              Alongside the day job and freelancing, I&apos;m building my own products.
              iFemi is a community and dating platform for the African diaspora in Europe â€”
              a project that is personal and commercial at once. I&apos;m also building AI
              tools I use in my own work and intend to package for others: an enterprise
              RAG assistant and an HR automation system.
            </p>

            <p>
              The throughline across all of it is that I&apos;m not waiting for permission
              to build. Every job, every project, every conversation is feeding the same
              goal. I want to be someone who understands both the technical side and the
              business side well enough to build and sell AI products â€” not just as an
              engineer who gets handed requirements, but as someone who identifies the
              problem, builds the solution, and owns the outcome.
            </p>
          </div>

          {/* Contact nudge */}
          <div className="mt-16 pt-10 border-t border-border/40">
            <p className="text-sm text-foreground-muted mb-4">
              If any of this resonates â€” a project, a collaboration, or just a
              conversation â€” reach out.
            </p>
            <a
              href="mailto:hello.cliford@gmail.com"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              hello.cliford@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

