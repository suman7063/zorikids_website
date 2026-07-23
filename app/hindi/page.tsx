import type { Metadata } from "next";
import Image from "next/image";
import VideoGrid, { type Video } from "@/components/VideoGrid";
import videos from "@/data/hindi-videos.json";

export const metadata: Metadata = {
  title: { absolute: "ZoriKids Hindi — हिंदी वर्णमाला, गिनती और बालगीत | Kids Songs" },
  description:
    "बच्चों के लिए slow-paced hindi rhymes — हिंदी वर्णमाला (क ख ग), गिनती, बालगीत और देशभक्ति गीत। Hindi varnamala for toddlers, calm nursery rhymes for ages 1-6.",
  openGraph: {
    title: "ZoriKids Hindi — हिंदी वर्णमाला, गिनती और बालगीत",
    description: "बच्चों के लिए धीमी रफ़्तार वाले हिंदी गाने — हर गुरुवार नया गाना!",
    images: [{ url: "/zorikids_hindi_banner.jpg", width: 1600, height: 893, alt: "ZoriKids Hindi — सीखें खेलें बढ़ें" }],
  },
  alternates: { canonical: "/hindi" },
};

const categories = ["वर्णमाला", "गिनती", "बालगीत", "देशभक्ति", "रंग"];

export default function HindiPage() {
  const featured = (videos as Video[]).find((v) => !v.id.startsWith("VIDEO_ID"));

  return (
    <>
      {/* Hero — full-width clean banner, content below */}
      <section>
        <Image
          src="/zorikids_hindi_banner.jpg"
          alt="ZoriKids Hindi banner — सीखें, खेलें, बढ़ें"
          width={1600}
          height={893}
          priority
          sizes="100vw"
          className="max-h-140 w-full object-cover object-center"
        />
        <div className="bg-linear-to-b from-zori-purple/15 via-zori-cream to-zori-cream">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 md:py-16">
            <p className="mb-3 inline-block rounded-full bg-zori-purple/10 px-4 py-1.5 font-heading text-sm font-semibold text-zori-purple-dark">
              🪁 हर गुरुवार नया गाना
            </p>
            <h1 className="font-heading text-4xl font-extrabold text-zori-purple sm:text-5xl">
              ZoriKids हिंदी — बच्चों के लिए हिंदी गाने
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zori-ink/75">
              वर्णमाला, गिनती और बालगीत — धीमी रफ़्तार, शांत संगीत। Calm hindi rhymes for toddlers aged 1-6.
            </p>
            <a
              href="https://www.youtube.com/@ZorikidsHindi?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-red-600 px-8 py-3.5 font-heading text-lg font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-red-700"
            >
              ▶ YouTube पर Subscribe करें
            </a>
          </div>
        </div>
      </section>

      {/* Featured video */}
      {featured && (
        <section className="mx-auto max-w-3xl px-4 pt-12 sm:px-6" aria-labelledby="featured-hi">
          <h2 id="featured-hi" className="text-center font-heading text-2xl font-bold text-zori-ink sm:text-3xl">
            ⭐ Featured गाना
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
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6" aria-labelledby="videos-hi">
        <h2 id="videos-hi" className="mb-8 text-center font-heading text-2xl font-bold text-zori-ink sm:text-3xl">
          सारे गाने 🎶
        </h2>
        <VideoGrid videos={videos as Video[]} categories={categories} allLabel="सभी" />
      </section>
    </>
  );
}
