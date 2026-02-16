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
  title: "Cliford Ndonwie Nchotie - Full-Stack Developer & AI Specialist",
  description: "Full-Stack Developer specializing in AI-powered backends, RAG pipelines, and scalable infrastructure. Building intelligent enterprise systems with Java, TypeScript, and Python.",
  keywords: [
    "Full-Stack Developer",
    "AI/ML Engineer",
    "FastAPI",
    "Spring Boot",
    "RAG",
    "Deutsche Bank",
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
    title: "Cliford Ndonwie Nchotie - Full-Stack Developer & AI Specialist",
    description: "Building intelligent enterprise systems with AI/ML, Java, and TypeScript",
    siteName: "Cliford Ndonwie Nchotie Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliford Ndonwie Nchotie - Full-Stack Developer",
    description: "AI/ML Specialist • Backend Engineer • Bayreuth, Germany",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
