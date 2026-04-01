import Link from "next/link";
import { PostMeta } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="article-hover py-6 border-b border-border/40 last:border-0">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <h2 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary-light transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2">
              {post.description}
            </p>
          </div>
          <span className="text-xs text-foreground-subtle tabular-nums shrink-0 mt-0.5">
            {formatDate(post.date)}
          </span>
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md bg-background-secondary border border-border/60 text-foreground-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Video indicator */}
        {post.videoUrl && (
          <div className="flex items-center gap-1.5 mt-2 text-xs text-primary-light">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Includes video
          </div>
        )}
      </article>
    </Link>
  );
}
