import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import GiscusComments from "@/components/blog/GiscusComments";
import VideoEmbed from "@/components/blog/VideoEmbed";
import { getAllPosts, getPost } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPost(slug);
    return {
      title: `${meta.title} — Cliford Ndonwie Nchotie`,
      description: meta.description,
    };
  } catch {
    return { title: "Post not found" };
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// MDX components available inside posts
const mdxComponents = {
  VideoEmbed,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  return (
    <main className="min-h-screen bg-background text-foreground relative z-10">
      <Navbar />

      <article className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-2xl mx-auto">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-foreground-subtle hover:text-foreground-muted transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All posts
          </Link>

          {/* Header */}
          <header className="mb-10 pb-8 border-b border-border/40">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4 leading-tight">
              {meta.title}
            </h1>
            <p className="text-foreground-muted mb-5">{meta.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-foreground-subtle">
              <span>{formatDate(meta.date)}</span>
              {meta.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-background-secondary border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Optional video embed at top of post */}
          {meta.videoUrl && (
            <div className="mb-8">
              <VideoEmbed url={meta.videoUrl} title={meta.title} />
            </div>
          )}

          {/* MDX content */}
          <div className="prose prose-invert prose-zinc max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-foreground-muted prose-p:leading-relaxed prose-p:text-sm
            prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-primary-light prose-code:bg-background-secondary
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
            prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border/40
            prose-blockquote:border-l-primary/40 prose-blockquote:text-foreground-muted
            prose-li:text-foreground-muted prose-li:text-sm
            prose-hr:border-border/40">
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          {/* Comments */}
          <GiscusComments />
        </div>
      </article>
    </main>
  );
}
