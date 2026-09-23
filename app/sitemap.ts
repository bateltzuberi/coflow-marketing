import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAcademyAreas } from "@/lib/academy";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    // Only pages that actually render. /studio and /pricing are redirects and
    // /blog does not exist at all; listing them told crawlers to fetch a 404
    // and two hops. The site is three real pages right now.
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // The only entry point for a visitor who arrives without an invite code.
    { url: `${base}/waitlist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // No /features/* routes exist. They used to be listed here and every one of
  // them 404'd for anything that crawled the sitemap.

  // The help centre: its index plus one page per area. The list comes from the
  // product (lib/academy.ts) so an area added there is crawled without a commit
  // here; if that fetch fails the sitemap is simply the static routes, never a
  // list of URLs that 404.
  const areas = await getAcademyAreas();
  const academyRoutes: MetadataRoute.Sitemap = areas.length
    ? [
        { url: `${base}/academy`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        ...areas.map((area) => ({
          url: `${base}/academy/${area.id}`,
          lastModified: now,
          changeFrequency: "weekly" as const,
          priority: 0.7,
        })),
      ]
    : [];

  return [...staticRoutes, ...academyRoutes];
}
