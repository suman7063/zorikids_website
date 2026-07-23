import Image from "next/image";
import Link from "next/link";

const icons = {
  youtube: {
    viewBox: "0 0 24 24",
    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  instagram: {
    viewBox: "0 0 24 24",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  facebook: {
    viewBox: "0 0 24 24",
    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  blog: {
    viewBox: "0 0 24 24",
    d: "M13.5 3.6c-4.9 0-9 4-9 9v.1c0 5 4.1 9 9 9h.1c2.7 0 5.2-1.2 6.9-3.2.6-.8 1-1.8 1-2.9v-3.2c0-.8-.6-1.4-1.4-1.4h-1c-.4 0-.7-.3-.7-.7 0-3.7-3-6.7-6.7-6.7h1.8zm-2.1 5.2h3.1c.6 0 1 .4 1 1s-.4 1-1 1h-3.1c-.6 0-1-.4-1-1s.4-1 1-1zm0 5.2h5.2c.6 0 1 .4 1 1s-.4 1-1 1h-5.2c-.6 0-1-.4-1-1s.4-1 1-1z",
  },
};

type SocialIcon = keyof typeof icons;

const socials: { label: string; href: string; icon: SocialIcon }[] = [
  { label: "YouTube Hindi", href: "https://www.youtube.com/@ZorikidsHindi", icon: "youtube" },
  { label: "YouTube English", href: "https://www.youtube.com/@zorikids", icon: "youtube" },
  { label: "Instagram", href: "https://www.instagram.com/zorikids_you", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591575310734", icon: "facebook" },
  { label: "Blog", href: "https://zorikidshindi.blogspot.com", icon: "blog" },
];

function Icon({ name }: { name: SocialIcon }) {
  const icon = icons[name];
  return (
    <svg viewBox={icon.viewBox} fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path d={icon.d} />
    </svg>
  );
}

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
            <Link href="/contact" className="text-white/90 transition-colors hover:text-zori-yellow">
              Contact Us
            </Link>
          </nav>

          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="font-heading text-lg font-bold text-zori-yellow">Follow us</h3>
            <ul className="flex flex-col items-center gap-2.5 md:items-start">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/90 transition-colors hover:text-zori-yellow"
                  >
                    <Icon name={s.icon} />
                    {s.label}
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
