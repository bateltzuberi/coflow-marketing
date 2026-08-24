import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    // Only pages that actually render. /studio and /pricing are redirects and
    // /blog does not exist at all; listing them told crawlers to fetch a 404
    // and two hops. The site is two real pages right now.
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  // No /features/* routes exist. They used to be listed here and every one of
  // them 404'd for anything that crawled the sitemap.
  return staticRoutes;
}
