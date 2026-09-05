import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { isLocale } from "@/lib/i18n";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { localize } from "@/lib/utils";
import { getAllGuides } from "@/data";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeHero } from "@/components/home/HomeHero";
import { DiscoverByExperience } from "@/components/home/DiscoverByExperience";
import { FeaturedGamesRail } from "@/components/home/FeaturedGamesRail";
import { GuideFeature } from "@/components/home/GuideFeature";
import { ProviderDiscovery } from "@/components/home/ProviderDiscovery";
import { WhyPlatform } from "@/components/home/WhyPlatform";
import { LatestGuides } from "@/components/home/LatestGuides";
import { ResponsibleTeaser } from "@/components/home/ResponsibleTeaser";
import { HomeFaq } from "@/components/home/HomeFaq";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    path: "/",
    title:
      locale === "zh"
        ? "Aether — 数字游戏发现中心"
        : "Aether — Digital Gaming Discovery",
    description: localize(siteConfig.description, locale),
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const guides = getAllGuides();

  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <HomeHero locale={locale} />
      <DiscoverByExperience locale={locale} />
      <FeaturedGamesRail locale={locale} />
      <GuideFeature locale={locale} guides={guides} />
      <ProviderDiscovery locale={locale} />
      <WhyPlatform locale={locale} />
      <LatestGuides locale={locale} guides={guides} />
      <ResponsibleTeaser locale={locale} />
      <HomeFaq locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
