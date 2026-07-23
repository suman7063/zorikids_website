import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zorikids.in";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hindi/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/english/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact/`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
