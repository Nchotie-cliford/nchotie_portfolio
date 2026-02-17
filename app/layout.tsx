import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "@/components/ui/PreloaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Cliford Ndonwie Nchotie - Aspiring Full-Stack Developer",
  description: "Aspiring Full-Stack Developer passionate about AI-powered backends, RAG pipelines, and scalable infrastructure. Learning and building intelligent systems with Java, TypeScript, and Python.",
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
    title: "Cliford Ndonwie Nchotie - Aspiring Full-Stack Developer",
    description: "Learning and building intelligent systems with AI/ML, Java, and TypeScript",
    siteName: "Cliford Ndonwie Nchotie Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliford Ndonwie Nchotie - Full-Stack Developer",
    description: "Learning AI/ML • Backend Development • Bayreuth, Germany",
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
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  );
}
