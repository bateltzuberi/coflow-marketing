import type { MetadataRoute } from "next";
import { SOLUTION_SLUGS, GUIDE_SLUGS } from "@/lib/discovery-content";
import { isPreviewDeployment } from "@/lib/indexing";
import { SITE } from "@/lib/site";
import { getAcademyAreas } from "@/lib/academy";
import { localizedPath, SUPPORTED_LOCALES } from "@/lib/locale-path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (isPreviewDeployment()) return [];
  const areas = await getAcademyAreas();
  const paths = ["/", "/waitlist", "/terms", "/privacy", "/academy", "/solutions", "/guides", "/about", ...SOLUTION_SLUGS.map(s => `/solutions/${s}`), ...GUIDE_SLUGS.map(s => `/guides/${s}`), ...areas.map(a => `/academy/${a.id}`)];
  return paths.flatMap(path => SUPPORTED_LOCALES.map(locale => ({
    url: `${SITE.url}${localizedPath(path, locale)}`,
    alternates: { languages: {
      he: `${SITE.url}${localizedPath(path, "he")}`,
      en: `${SITE.url}${localizedPath(path, "en")}`,
      "x-default": `${SITE.url}${localizedPath(path, "he")}`,
    } },
  })));
}
