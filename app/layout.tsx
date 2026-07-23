import type { Metadata } from "next";
import { Baloo_2, Mukta } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zorikids.com"),
  title: {
    default: "ZoriKids — Hindi & English Learning Songs for Kids (Ages 1-6)",
    template: "%s | ZoriKids",
  },
  description:
    "Calm, low-stimulation kids videos in Hindi & English. Slow-paced hindi rhymes, varnamala, counting songs and calm nursery rhymes for toddlers aged 1-6, with Zori & Banni.",
  keywords: [
    "low stimulation kids videos",
    "slow-paced hindi rhymes",
    "hindi varnamala for toddlers",
    "calm nursery rhymes",
    "kids learning songs",
    "hindi songs for kids",
    "ZoriKids",
  ],
  openGraph: {
    type: "website",
    siteName: "ZoriKids",
    title: "ZoriKids — Hindi & English Learning Songs for Kids (Ages 1-6)",
    description:
      "Calm, low-stimulation learning songs for kids aged 1-6 — in Hindi & English. Meet Zori & Banni!",
    images: [{ url: "/zorikids_logo.png", width: 512, height: 512, alt: "ZoriKids logo" }],
  },
  twitter: {
    card: "summary",
    title: "ZoriKids — Hindi & English Learning Songs for Kids",
    description: "Calm, slow-paced learning songs for kids aged 1-6 — in Hindi & English.",
    images: ["/zorikids_logo.png"],
  },
  icons: { icon: "/zorikids_logo.png", apple: "/zorikids_logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${baloo.variable} ${mukta.variable} min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
