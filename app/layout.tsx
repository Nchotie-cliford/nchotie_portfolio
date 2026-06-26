import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Cliford Ndonwie Nchotie — AI Developer & Builder",
    template: "%s | Cliford Ndonwie Nchotie",
  },
  description:
    "Cliford Ndonwie Nchotie is an AI developer and builder based in Bayreuth, Germany. Building RAG systems, AI products, and tools for the German market. Freelancing since 2017. Building toward his own AI company.",
  keywords: [
    "Cliford Ndonwie Nchotie",
    "Cliford Nchotie",
    "Nchotie Cliford",
    "Cliford Ndonwie",
    "AI Developer Germany",
    "RAG System Developer",
    "Full-Stack Developer Bayreuth",
    "AI Engineer Germany",
    "Cameroon developer Germany",
    "KI Entwickler Bayern",
    "Freelance AI Developer",
    "Next.js TypeScript Python",
    "LangChain RAG LLM",
    "Mittelstand AI",
  ],
  authors: [{ name: "Cliford Ndonwie Nchotie", url: "https://nchotie.xyz" }],
  creator: "Cliford Ndonwie Nchotie",
  publisher: "Cliford Ndonwie Nchotie",
  metadataBase: new URL("https://nchotie.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nchotie.xyz",
    title: "Cliford Ndonwie Nchotie — AI Developer & Builder",
    description:
      "AI developer and builder based in Germany. Building RAG systems, AI products, and tools for the German market. Freelancing since 2017.",
    siteName: "Cliford Ndonwie Nchotie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliford Ndonwie Nchotie — AI Developer & Builder",
    description:
      "AI developer and builder based in Germany. RAG systems · AI products · Freelancing since 2017.",
    creator: "@clifordnchotie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cliford Ndonwie Nchotie",
  alternateName: ["Cliford Nchotie", "Nchotie Cliford"],
  url: "https://nchotie.xyz",
  jobTitle: "AI Developer & Builder",
  description:
    "AI developer and builder based in Bayreuth, Germany. Building RAG systems and AI products for the German market. Freelancing since 2017. Building toward starting his own AI company.",
  sameAs: [
    "https://github.com/Nchotie-cliford",
    "https://linkedin.com/in/cliford-ndonwie-nchoti",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Retrieval-Augmented Generation",
    "Large Language Models",
    "Full-stack Development",
    "Data Pipelines",
    "Machine Learning",
    "Python",
    "TypeScript",
    "Next.js",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Brauerei Gebr. Maisel",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bayreuth",
    addressRegion: "Bavaria",
    addressCountry: "DE",
  },
  nationality: {
    "@type": "Country",
    name: "Cameroon",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universität Bayreuth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
