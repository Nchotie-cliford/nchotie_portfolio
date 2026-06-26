import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles and notes from Cliford Ndonwie Nchotie — AI engineering, building RAG systems in Germany, dual-study reflections, and lessons from production work.",
  alternates: { canonical: "https://nchotie.xyz/writing" },
  openGraph: {
    title: "Writing — Cliford Ndonwie Nchotie",
    description:
      "Notes on building AI systems, working in Germany, and what I'm learning along the way.",
    url: "https://nchotie.xyz/writing",
    images: [{ url: "https://nchotie.xyz/images/profile.jpg", width: 800, height: 800 }],
  },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="container mx-auto px-6 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">

          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
              Writing
            </h1>
            <p className="text-foreground-muted text-base max-w-lg">
              Notes on building AI systems, working in Germany, and what I&apos;m
              learning along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <div className="md:sticky md:top-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
                  {posts.length} {posts.length === 1 ? "post" : "posts"}
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              {posts.length === 0 ? (
                <div className="text-sm text-foreground-subtle space-y-1">
                  <p>No posts yet.</p>
                  <p className="text-xs">
                    First up: lessons from building the Maisel&apos;s RAG system.
                  </p>
                </div>
              ) : (
                posts.map((post) => (
                  <PostCard
                    key={post.slug}
                    post={{ ...post, slug: `/writing/${post.slug}` }}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
