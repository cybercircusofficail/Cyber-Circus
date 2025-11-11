import type { MetadataRoute } from "next";
import { buildCanonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 3600;

const routes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/career",
  "/contact"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return routes.map((route) => ({
    url: buildCanonicalUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}

