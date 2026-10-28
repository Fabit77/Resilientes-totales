import type { MetadataRoute } from "next";
import { stories } from "@/content/stories";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/historias",
    "/nosotros",
    "/para-marcas",
    "/contacto",
    "/privacidad",
    ...stories.map((s) => `/historias/${s.slug}`),
  ].map((path) => ({
    url: `${siteUrl()}${path}`,
    changeFrequency: path === "/historias" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path.startsWith("/historias") ? 0.8 : 0.6,
  }));
}
