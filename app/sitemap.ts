import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAcademyAreas } from "@/lib/academy";
import { localizedPath, SUPPORTED_LOCALES } from "@/lib/locale-path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const areas = await getAcademyAreas();
  const paths = ["/", "/waitlist", "/terms", "/privacy", "/academy", ...areas.map(a => `/academy/${a.id}`)];
  return paths.flatMap(path => SUPPORTED_LOCALES.map(locale => ({
    url: `${SITE.url}${localizedPath(path, locale)}`,
    alternates: { languages: {
      he: `${SITE.url}${localizedPath(path, "he")}`,
      en: `${SITE.url}${localizedPath(path, "en")}`,
      "x-default": `${SITE.url}${localizedPath(path, "he")}`,
    } },
  })));
}
