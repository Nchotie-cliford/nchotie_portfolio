import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Cliford Ndonwie Nchotie",
  description: "AI engineering deep dives, dev talks, and honest opinions on where the industry is heading.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground relative z-10">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">

          {/* Page header */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-foreground-subtle hover:text-foreground-muted transition-colors mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to portfolio
            </Link>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
              Blog
            </h1>
            <p className="text-foreground-muted text-base max-w-lg">
              AI engineering deep dives, dev talks, and honest opinions on where
              the industry is heading.
            </p>
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="md:sticky md:top-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
                  {posts.length} {posts.length === 1 ? "post" : "posts"}
                </p>
              </div>
            </div>

            {/* Post list */}
            <div className="md:col-span-3">
              {posts.length === 0 ? (
                <p className="text-sm text-foreground-subtle">No posts yet — check back soon.</p>
              ) : (
                posts.map((post) => <PostCard key={post.slug} post={post} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
