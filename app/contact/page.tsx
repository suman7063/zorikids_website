import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — हमसे जुड़ें",
  description:
    "ZoriKids से संपर्क करें — collaboration, feedback या सुझाव के लिए email, Instagram या Facebook पर message करें। We love hearing from parents!",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  {
    emoji: "📧",
    title: "Email",
    text: "Collaboration, feedback या किसी भी सवाल के लिए हमें email करें — हम जल्दी जवाब देते हैं।",
    action: "Email लिखें",
    href: "mailto:hellozorikids@gmail.com",
    bg: "bg-zori-sky",
  },
  {
    emoji: "📸",
    title: "Instagram",
    text: "Behind-the-scenes, नए गानों की झलक और updates — DM भी यहीं सबसे जल्दी देखते हैं।",
    action: "@zorikids_you",
    href: "https://www.instagram.com/zorikids_you",
    bg: "bg-zori-pink",
  },
  {
    emoji: "👍",
    title: "Facebook",
    text: "हमारे Facebook page पर message करें या posts पर अपनी राय बताएं।",
    action: "Zori Kids page",
    href: "https://www.facebook.com/profile.php?id=61591575310734",
    bg: "bg-zori-mint",
  },
  {
    emoji: "💬",
    title: "YouTube Comments",
    text: "किसी गाने पर सुझाव है? उसी video के comments में बताएं — Zori की team पढ़ती है!",
    action: "YouTube पर जाएं",
    href: "https://www.youtube.com/@ZorikidsHindi",
    bg: "bg-zori-yellow/40",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-b from-zori-purple/15 via-zori-cream to-zori-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 md:py-18">
          <p className="mb-3 inline-block rounded-full bg-zori-purple/10 px-4 py-1.5 font-heading text-sm font-semibold text-zori-purple-dark">
            💌 हम सुन रहे हैं
          </p>
          <h1 className="font-heading text-4xl font-extrabold text-zori-purple sm:text-5xl">
            Contact Us — हमसे जुड़ें
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zori-ink/75">
            सुझाव, collaboration या बस hello कहना हो — parents की हर बात हमारे लिए ज़रूरी है।
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-5xl px-4 pt-4 sm:px-6" aria-label="Contact options">
        <div className="grid gap-6 sm:grid-cols-2">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={card.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className={`group rounded-blob ${card.bg} p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift`}
            >
              <span className="text-5xl" aria-hidden="true">
                {card.emoji}
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-zori-ink">{card.title}</h2>
              <p className="mt-2 text-zori-ink/75">{card.text}</p>
              <span className="mt-4 inline-block font-heading font-bold text-zori-purple-dark group-hover:underline">
                {card.action} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="mx-auto max-w-3xl px-4 pt-14 text-center sm:px-6">
        <div className="rounded-blob bg-white p-8 shadow-soft">
          <span className="text-4xl" aria-hidden="true">
            🧸
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold text-zori-ink">Parents, एक छोटी सी बात</h2>
          <p className="mx-auto mt-2 max-w-lg text-zori-ink/75">
            आपके बच्चे को कौन सा गाना सबसे पसंद है? कौन सा topic अगला चाहिए — shapes, फल, या कुछ और? बताइए,
            अगला गाना शायद आपके सुझाव पर ही बने! 💜
          </p>
        </div>
      </section>
    </>
  );
}
