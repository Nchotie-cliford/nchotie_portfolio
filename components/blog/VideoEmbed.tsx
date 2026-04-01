"use client";

interface VideoEmbedProps {
  url: string;
  title?: string;
}

function getEmbedUrl(url: string): string {
  // YouTube — handles youtube.com/watch?v=... and youtu.be/...
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return url;
}

export default function VideoEmbed({ url, title = "Video" }: VideoEmbedProps) {
  const embedUrl = getEmbedUrl(url);
  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border/50 my-8">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
