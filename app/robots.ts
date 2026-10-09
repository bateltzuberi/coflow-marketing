import type { MetadataRoute } from "next";
import { isPreviewDeployment } from "@/lib/indexing";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment()) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["OAI-SearchBot", "PerplexityBot"], allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
