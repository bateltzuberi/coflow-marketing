import type { MetadataRoute } from "next";
import { SITE, FEATURES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/studio`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const features = FEATURES.map((f) => ({
    url: `${base}/features/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...features];
}
