import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { categories, categoryPath } from "@/data/categories";
import { games } from "@/data/games";
import { providers } from "@/data/providers";
import { getAllGuides } from "@/data";
import { localePath } from "@/lib/paths";

const staticPaths = [
  "/",
  "/games",
  "/providers",
  "/guides",
  "/promotions",
  "/about",
  "/contact",
  "/faq",
  "/responsible-gaming",
  "/terms",
  "/privacy",
  "/rewards",
  "/rebates",
  "/vip",
  "/agent",
  "/beginner-guide",
  "/currency-purchase",
  "/deposit",
  "/withdraw",
  "/payment-methods",
  "/download",
  "/fair-play",
  "/login",
  "/register",
  "/sports",
  "/lottery",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = siteConfig.locales;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${siteConfig.url.replace(/\/$/, "")}${localePath(locale, path)}`,
        lastModified: new Date(),
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : 0.7,
      });
    }

    for (const category of categories) {
      entries.push({
        url: `${siteConfig.url.replace(/\/$/, "")}${localePath(locale, categoryPath(category.id))}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const game of games) {
      entries.push({
        url: `${siteConfig.url.replace(/\/$/, "")}${localePath(locale, `/games/${game.category}/${game.slug}`)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const provider of providers) {
      entries.push({
        url: `${siteConfig.url.replace(/\/$/, "")}${localePath(locale, `/providers/${provider.slug}`)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }

    for (const guide of getAllGuides()) {
      entries.push({
        url: `${siteConfig.url.replace(/\/$/, "")}${localePath(locale, `/guides/${guide.slug}`)}`,
        lastModified: new Date(guide.updatedAt),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  return entries;
}
