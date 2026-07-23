import type { Metadata } from "next";
import Image from "next/image";
import VideoGrid, { type Video } from "@/components/VideoGrid";
import videos from "@/data/english-videos.json";

export const metadata: Metadata = {
  title: "ZoriKids English — Fun Learning Songs for Kids",
  description:
    "Calm, low stimulation kids videos in English — ABC phonics, numbers, colors, body parts & opposites. Slow-paced nursery rhymes for toddlers aged 1-6.",
  openGraph: {
    title: "ZoriKids English — Fun Learning Songs for Kids",
    description: "Gentle ABC, numbers & colors songs for toddlers — calm nursery rhymes, ages 1-6.",
    images: [{ url: "/zorikids_english_banner.jpg", width: 1600, height: 893, alt: "ZoriKids — Learn, Play, Grow" }],
  },
  alternates: { canonical: "/english" },
};

const categories = ["ABC", "Numbers", "Colors", "Body Parts", "Opposites", "Animals"];

export default function EnglishPage() {
  const featured = (videos as Video[]).find((v) => !v.id.startsWith("VIDEO_ID"));

  return (
    <>
      {/* Hero — full-width clean banner, content below */}
      <section>
        <Image
          src="/zorikids_english_banner.jpg"
          alt="ZoriKids banner — Learn, Play, Grow"
          width={1600}
          height={893}
          priority
          sizes="100vw"
          className="max-h-140 w-full object-cover object-center"
        />
        <div className="bg-linear-to-b from-zori-purple/15 via-zori-cream to-zori-cream">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 md:py-16">
            <p className="mb-3 inline-block rounded-full bg-zori-purple/10 px-4 py-1.5 font-heading text-sm font-semibold text-zori-purple-dark">
              🎨 New song every Friday — with Zori &amp; Banni
            </p>
            <h1 className="font-heading text-4xl font-extrabold text-zori-purple sm:text-5xl">
              ZoriKids English — Fun Learning Songs for Kids
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zori-ink/75">
              ABC phonics, counting, colors and more — gentle, slow-paced songs made for little learners aged 1-6.
            </p>
            <a
              href="https://www.youtube.com/@zorikids?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-red-600 px-8 py-3.5 font-heading text-lg font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-red-700"
            >
              ▶ Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Featured video */}
      {featured && (
        <section className="mx-auto max-w-3xl px-4 pt-12 sm:px-6" aria-labelledby="featured-en">
          <h2 id="featured-en" className="text-center font-heading text-2xl font-bold text-zori-ink sm:text-3xl">
            ⭐ Featured Song
          </h2>
          <div className="mt-6 overflow-hidden rounded-blob shadow-lift">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube-nocookie.com/embed/${featured.id}`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      )}

      {/* Video grid */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6" aria-labelledby="videos-en">
        <h2 id="videos-en" className="mb-8 text-center font-heading text-2xl font-bold text-zori-ink sm:text-3xl">
          All Songs 🎶
        </h2>
        <VideoGrid videos={videos as Video[]} categories={categories} allLabel="All" />
      </section>
    </>
  );
}
