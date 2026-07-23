"use client";

import { useState } from "react";

export type Video = {
  id: string;
  title: string;
  category: string;
};

const badgeColors: Record<string, string> = {
  // Hindi categories
  "वर्णमाला": "bg-zori-sky text-sky-800",
  "गिनती": "bg-zori-mint text-emerald-800",
  "बालगीत": "bg-zori-pink text-pink-800",
  "देशभक्ति": "bg-orange-100 text-orange-800",
  "रंग": "bg-zori-yellow/40 text-amber-800",
  // English categories
  ABC: "bg-zori-sky text-sky-800",
  Numbers: "bg-zori-mint text-emerald-800",
  Colors: "bg-zori-yellow/40 text-amber-800",
  "Body Parts": "bg-zori-pink text-pink-800",
  Opposites: "bg-orange-100 text-orange-800",
  Animals: "bg-lime-100 text-lime-800",
};

function isPlaceholder(id: string) {
  return id.startsWith("VIDEO_ID");
}

function VideoCard({ video }: { video: Video }) {
  const placeholder = isPlaceholder(video.id);
  const thumb = placeholder ? null : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  const card = (
    <article className="group flex h-full flex-col overflow-hidden rounded-blob bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-video overflow-hidden bg-zori-purple-light/30">
        {thumb ? (
          <img
            src={thumb}
            alt={`Thumbnail: ${video.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-zori-purple-light/40 to-zori-sky">
            <span className="text-5xl" aria-hidden="true">
              🎬
            </span>
          </div>
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-zori-ink/0 transition-colors duration-300 group-hover:bg-zori-ink/20">
          <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-zori-purple/90 text-white opacity-0 shadow-lift transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${badgeColors[video.category] ?? "bg-zori-purple/10 text-zori-purple-dark"}`}
        >
          {video.category}
        </span>
        <h3 className="font-heading text-base font-semibold leading-snug text-zori-ink group-hover:text-zori-purple">
          {video.title}
        </h3>
      </div>
    </article>
  );

  if (placeholder) {
    return <div title="Coming soon on YouTube">{card}</div>;
  }

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch on YouTube: ${video.title}`}
    >
      {card}
    </a>
  );
}

export default function VideoGrid({
  videos,
  categories,
  allLabel = "All",
}: {
  videos: Video[];
  categories: string[];
  allLabel?: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? videos.filter((v) => v.category === active) : videos;

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter videos by category">
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={`rounded-full px-5 py-2 font-heading text-sm font-semibold transition-all ${
            active === null
              ? "bg-zori-purple text-white shadow-soft"
              : "bg-white text-zori-ink shadow-soft hover:bg-zori-purple/10"
          }`}
        >
          {allLabel}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat === active ? null : cat)}
            aria-pressed={active === cat}
            className={`rounded-full px-5 py-2 font-heading text-sm font-semibold transition-all ${
              active === cat
                ? "bg-zori-purple text-white shadow-soft"
                : "bg-white text-zori-ink shadow-soft hover:bg-zori-purple/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-lg text-zori-ink/60">No videos in this category yet — coming soon! 🌱</p>
      )}
    </div>
  );
}
