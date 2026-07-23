import Link from "next/link";
import Image from "next/image";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZoriKids",
  url: "https://zorikids.in",
  logo: "https://zorikids.in/zorikids_logo.png",
  description:
    "Calm, low-stimulation learning songs for kids aged 1-6, in Hindi & English, featuring Zori and Banni.",
  sameAs: [
    "https://www.youtube.com/@ZorikidsHindi",
    "https://www.youtube.com/@zorikids",
    "https://www.instagram.com/zorikids_you",
    "https://zorikidshindi.blogspot.com",
  ],
};

const features = [
  {
    emoji: "🌙",
    title: "Low-stimulation",
    bg: "bg-zori-sky",
    text: "No flashing colors, no loud music. Gentle visuals and soft voices — so kids stay calm even after screen time.",
  },
  {
    emoji: "🧸",
    title: "Made for ages 1-6",
    bg: "bg-zori-mint",
    text: "Simple words, slow rhythm and repetition-based learning — exactly how toddlers learn best.",
  },
  {
    emoji: "🎵",
    title: "Two new songs every week",
    bg: "bg-zori-pink",
    text: "हर गुरुवार a new Hindi song, हर शुक्रवार a new English song — fresh varnamala, counting and rhyme videos every week.",
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-linear-to-b from-zori-sky via-zori-cream to-zori-cream">
        {/* soft decorative blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-zori-yellow/30 blur-2xl" />
          <div className="absolute -right-20 top-32 h-64 w-64 rounded-full bg-zori-purple/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-zori-mint/60 blur-2xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 pt-10 sm:px-6 md:flex-row md:gap-10 md:pb-20 md:pt-14">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-3 inline-block rounded-full bg-zori-purple/10 px-4 py-1.5 font-heading text-sm font-semibold text-zori-purple-dark">
              👋 Zori और Banni के साथ
            </p>
            <h1 className="font-heading text-5xl font-extrabold leading-tight text-zori-purple sm:text-6xl">
              सीखें <span className="text-[#f59e0b]">•</span> खेलें <span className="text-[#f59e0b]">•</span> बढ़ें
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-zori-ink/80 md:mx-0">
              Calm, slow-paced learning songs for kids aged 1-6 — in Hindi &amp; English.
            </p>

            {/* Quick info chips */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              {["🎵 हर हफ्ते 2 नए गाने", "🧸 Ages 1-6", "🌙 Low-stimulation"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-zori-ink/80 shadow-soft"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/hindi"
                className="rounded-full bg-zori-purple px-7 py-3.5 font-heading text-lg font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-zori-purple-dark"
              >
                हिंदी गाने देखें 🎶
              </Link>
              <Link
                href="/english"
                className="rounded-full bg-zori-yellow px-7 py-3.5 font-heading text-lg font-bold text-zori-ink shadow-lift transition-transform hover:-translate-y-0.5 hover:brightness-105"
              >
                English Songs ✨
              </Link>
            </div>
          </div>

          {/* Banner collage */}
          <div className="relative flex-1">
            <div className="relative mx-auto mb-12 max-w-md md:mb-8">
              <Link href="/hindi" className="block -rotate-3 overflow-hidden rounded-blob shadow-lift transition-transform duration-300 hover:-translate-y-1 hover:rotate-0">
                <Image
                  src="/zorikids_hindi_banner.jpg"
                  alt="ZoriKids Hindi banner — सीखें, खेलें, बढ़ें"
                  width={800}
                  height={447}
                  className="h-auto w-full"
                  priority
                />
              </Link>
              <Link
                href="/english"
                className="absolute -bottom-12 -right-2 block w-3/5 rotate-3 overflow-hidden rounded-blob border-4 border-white shadow-lift transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 sm:-right-6"
              >
                <Image
                  src="/zorikids_english_banner.jpg"
                  alt="ZoriKids English banner — Learn, Play, Grow"
                  width={600}
                  height={335}
                  className="h-auto w-full"
                />
              </Link>
              <Image
                src="/zorikids_logo.png"
                alt=""
                aria-hidden="true"
                width={72}
                height={72}
                className="animate-float absolute -left-5 -top-6 h-16 w-16 rounded-full border-4 border-white shadow-lift"
              />
              <span className="animate-float-slow absolute -right-3 -top-5 text-3xl" aria-hidden="true">
                ⭐
              </span>
              <span className="animate-wiggle absolute -left-6 bottom-6 text-3xl" aria-hidden="true">
                🎈
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHANNEL CARDS ============ */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6" aria-labelledby="channels-heading">
        <h2 id="channels-heading" className="text-center font-heading text-3xl font-bold text-zori-ink sm:text-4xl">
          हमारे दो चैनल 📺
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-zori-ink/70">
          Pick your language — same calm learning, दो भाषाओं में।
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Hindi card */}
          <div className="group relative overflow-hidden rounded-blob bg-linear-to-br from-zori-purple to-zori-purple-dark p-8 text-white shadow-lift transition-transform hover:-translate-y-1.5">
            <span className="absolute -right-6 -top-6 text-8xl opacity-20" aria-hidden="true">
              🪁
            </span>
            <h3 className="font-heading text-3xl font-bold">ZoriKids हिंदी</h3>
            <p className="mt-3 text-white/85">
              वर्णमाला, गिनती, बालगीत और देशभक्ति गीत — धीमी रफ़्तार, आसान शब्द। हर गुरुवार नया गाना!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/hindi"
                className="rounded-full bg-white px-6 py-2.5 font-heading font-bold text-zori-purple transition-colors hover:bg-zori-yellow hover:text-zori-ink"
              >
                Videos देखें →
              </Link>
              <a
                href="https://www.youtube.com/@ZorikidsHindi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/60 px-6 py-2.5 font-heading font-bold text-white transition-colors hover:bg-white/15"
              >
                ▶ YouTube
              </a>
            </div>
          </div>

          {/* English card */}
          <div className="group relative overflow-hidden rounded-blob bg-linear-to-br from-zori-yellow to-amber-300 p-8 text-zori-ink shadow-lift transition-transform hover:-translate-y-1.5">
            <span className="absolute -right-6 -top-6 text-8xl opacity-25" aria-hidden="true">
              🎨
            </span>
            <h3 className="font-heading text-3xl font-bold">ZoriKids English</h3>
            <p className="mt-3 text-zori-ink/80">
              ABC phonics, numbers, colors, body parts &amp; opposites — gentle songs that make first words easy. New song every Friday!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/english"
                className="rounded-full bg-zori-ink px-6 py-2.5 font-heading font-bold text-white transition-colors hover:bg-zori-purple"
              >
                See Videos →
              </Link>
              <a
                href="https://www.youtube.com/@zorikids"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-zori-ink/40 px-6 py-2.5 font-heading font-bold text-zori-ink transition-colors hover:bg-white/40"
              >
                ▶ YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY ZORIKIDS ============ */}
      <section className="bg-white/60 py-14" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="why-heading" className="text-center font-heading text-3xl font-bold text-zori-ink sm:text-4xl">
            Why ZoriKids? 💜
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-zori-ink/70">
            Screen time जो शांत रखे — designed for tiny attention spans and peaceful minds.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className={`rounded-blob ${f.bg} p-7 shadow-soft transition-transform hover:-translate-y-1`}
              >
                <span className="text-5xl" aria-hidden="true">
                  {f.emoji}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-zori-ink">{f.title}</h3>
                <p className="mt-2 text-zori-ink/75">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
        <div className="rounded-blob bg-linear-to-r from-zori-purple to-zori-purple-dark px-6 py-12 shadow-lift">
          <h2 className="font-heading text-3xl font-bold text-white">गुरुवार को Hindi, शुक्रवार को English 🎉</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Subscribe करें और अपने नन्हे-मुन्नों के लिए calm learning songs पाएँ।
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.youtube.com/@ZorikidsHindi?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-zori-yellow px-7 py-3 font-heading font-bold text-zori-ink transition-transform hover:-translate-y-0.5"
            >
              ▶ Subscribe — Hindi
            </a>
            <a
              href="https://www.youtube.com/@zorikids?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3 font-heading font-bold text-zori-purple transition-transform hover:-translate-y-0.5"
            >
              ▶ Subscribe — English
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
