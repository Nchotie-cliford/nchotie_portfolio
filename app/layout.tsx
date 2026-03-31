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
  title: "Cliford Ndonwie Nchotie - Aspiring Lead Engineer",
  description: "Aspiring Lead Engineer specializing in low-latency, high-throughput backend architecture and end-to-end AI pipelines. Building scalable systems that connect mission-critical infrastructure with RAG/LLM automation.",
  keywords: [
    "Full-Stack Developer",
    "AI/ML",
    "FastAPI",
    "Spring Boot",
    "RAG",
    "Bayreuth",
    "Java",
    "TypeScript",
    "Python",
    "OpenAI",
    "Gemini API",
    "PostgreSQL",
    "Docker",
  ],
  authors: [{ name: "Cliford Ndonwie Nchotie", url: "https://nchotie.xyz" }],
  creator: "Cliford Ndonwie Nchotie",
  publisher: "Cliford Ndonwie Nchotie",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://nchotie.xyz",
    title: "Cliford Ndonwie Nchotie - Aspiring Lead Engineer",
    description: "Building scalable, reliable systems that connect mission-critical infrastructure with RAG/LLM automation",
    siteName: "Cliford Ndonwie Nchotie Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliford Ndonwie Nchotie - Aspiring Lead Engineer",
    description: "Backend Architecture • AI/ML Pipelines • RAG/LLM • Bayreuth, Germany",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="canonical" href="https://nchotie.xyz" />
      </head>
      <body className="font-sans">
        {/* Site-wide fixed radial gradient — subtle blue from top-center */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(59,130,246,0.07) 0%, transparent 55%)",
          }}
        />
        {children}
      </body>
    </html>
  );
}
