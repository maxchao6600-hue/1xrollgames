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
import { FeaturedGamesRail } from "@/components/home/FeaturedGamesRail";
import { DiscoverByExperience } from "@/components/home/DiscoverByExperience";
import { ProviderDiscovery } from "@/components/home/ProviderDiscovery";
import { HomePromotions } from "@/components/home/HomePromotions";
import { LatestGuides } from "@/components/home/LatestGuides";
import { WhyPlatform } from "@/components/home/WhyPlatform";
import { HomeMobileApp } from "@/components/home/HomeMobileApp";
import { HomeFaq } from "@/components/home/HomeFaq";
import { ResponsibleTeaser } from "@/components/home/ResponsibleTeaser";
import { FinalCta } from "@/components/home/FinalCta";
import { getDictionary, t } from "@/lib/i18n";

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
        ? "1XROLL — 游戏、优惠与攻略"
        : "1XROLL — Games, Promotions & Guides",
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
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={[
          {
            ...organizationJsonLd(),
            name: siteConfig.name,
            alternateName: siteConfig.legalName,
            url: siteConfig.url,
          },
          websiteJsonLd(),
        ]}
      />
      <HomeHero locale={locale} />
      <FeaturedGamesRail locale={locale} />
      <DiscoverByExperience locale={locale} />
      <ProviderDiscovery locale={locale} />
      <HomePromotions locale={locale} />
      <LatestGuides locale={locale} guides={guides} />
      <WhyPlatform locale={locale} />
      <HomeMobileApp locale={locale} />
      <HomeFaq locale={locale} />
      <ResponsibleTeaser locale={locale} />
      <FinalCta locale={locale} />
      <span className="sr-only">{t(dict, "home.ctaTitle")}</span>
    </>
  );
}
