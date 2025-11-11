import type { MetadataRoute } from "next";
import { buildCanonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = buildCanonicalUrl("/sitemap.xml");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: sitemapUrl,
    host: buildCanonicalUrl("/")
  };
}

