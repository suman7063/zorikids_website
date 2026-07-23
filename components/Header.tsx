"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/hindi", label: "ZoriKids Hindi", external: false },
  { href: "/english", label: "ZoriKids English", external: false },
  { href: "https://zorikidshindi.blogspot.com", label: "Blog", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md shadow-soft">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/zorikids_logo.png"
            alt="ZoriKids logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full"
            priority
          />
          <span className="font-heading text-2xl font-bold text-zori-purple">
            Zori<span className="text-[#f59e0b]">Kids</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-2 font-heading font-semibold text-zori-ink transition-colors hover:bg-zori-purple/10 hover:text-zori-purple"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 font-heading font-semibold text-zori-ink transition-colors hover:bg-zori-purple/10 hover:text-zori-purple"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-2xl bg-zori-purple/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-zori-purple transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 rounded-full bg-zori-purple transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 rounded-full bg-zori-purple transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-zori-purple/10 bg-white px-4 pb-4 pt-2 md:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl px-4 py-3 font-heading text-lg font-semibold text-zori-ink hover:bg-zori-purple/10"
                onClick={() => setOpen(false)}
              >
                {link.label} ↗
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 font-heading text-lg font-semibold text-zori-ink hover:bg-zori-purple/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
