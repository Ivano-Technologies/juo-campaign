"use client";

import Image from "next/image";
import { useState } from "react";
import type { CommunityImage } from "@/lib/community";

type YouTubeClickEmbedProps = {
  /** youtube-nocookie.com embed URL. */
  embedSrc: string;
  title: string;
  poster: CommunityImage;
};

function withAutoplay(src: string): string {
  const url = new URL(src);
  url.searchParams.set("autoplay", "1");
  return url.toString();
}

/**
 * Click to load video. Shows a self hosted poster and a play button; the
 * youtube-nocookie.com iframe is injected only after the click, so YouTube
 * gets no request and sets no cookie before the visitor asks for the video.
 */
export function YouTubeClickEmbed({ embedSrc, title, poster }: YouTubeClickEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={withAutoplay(embedSrc)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-brand-white"
      aria-label={`Play video: ${title}`}
      data-video-poster=""
    >
      <Image
        src={poster.src}
        alt=""
        width={poster.width}
        height={poster.height}
        sizes="(min-width: 768px) 768px, 100vw"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-brand-blue/20 transition-colors duration-200 group-hover:bg-brand-blue/5"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red text-brand-white shadow-lg transition-transform duration-200 group-hover:scale-105 sm:h-20 sm:w-20"
      >
        <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
