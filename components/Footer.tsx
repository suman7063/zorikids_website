import Image from "next/image";
import Link from "next/link";

const socials = [
  { label: "YouTube Hindi", href: "https://www.youtube.com/@ZorikidsHindi", emoji: "▶️" },
  { label: "YouTube English", href: "https://www.youtube.com/@zorikids", emoji: "▶️" },
  { label: "Instagram", href: "https://www.instagram.com/zorikids_you", emoji: "📸" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61565460457738", emoji: "👍" },
  { label: "Blog", href: "https://zorikidshindi.blogspot.com", emoji: "✍️" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-zori-purple text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2.5">
              <Image
                src="/zorikids_logo.png"
                alt="ZoriKids logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-white"
              />
              <span className="font-heading text-2xl font-bold">ZoriKids</span>
            </div>
            <p className="max-w-xs text-center text-sm text-white/85 md:text-left">
              सीखें • खेलें • बढ़ें — calm, slow-paced learning songs for little ones aged 1–6.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="font-heading text-lg font-bold text-zori-yellow">Explore</h3>
            <Link href="/hindi" className="text-white/90 transition-colors hover:text-zori-yellow">
              ZoriKids Hindi
            </Link>
            <Link href="/english" className="text-white/90 transition-colors hover:text-zori-yellow">
              ZoriKids English
            </Link>
          </nav>

          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="font-heading text-lg font-bold text-zori-yellow">Follow us</h3>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 transition-colors hover:text-zori-yellow"
                  >
                    <span aria-hidden="true">{s.emoji}</span> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} ZoriKids. Made with 💜 for little learners &amp; their parents.
        </div>
      </div>
    </footer>
  );
}
