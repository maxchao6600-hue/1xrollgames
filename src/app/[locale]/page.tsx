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
import { HowItWorks } from "@/components/home/HowItWorks";
import { HomeRewards } from "@/components/home/HomeRewards";
import { HomePromotions } from "@/components/home/HomePromotions";
import { ProviderDiscovery } from "@/components/home/ProviderDiscovery";
import { HomeWallet } from "@/components/home/HomeWallet";
import { LatestGuides } from "@/components/home/LatestGuides";
import { HomeVipAgent } from "@/components/home/HomeVipAgent";
import { WhyPlatform } from "@/components/home/WhyPlatform";
import { HomeMobileApp } from "@/components/home/HomeMobileApp";
import { HomeFaq } from "@/components/home/HomeFaq";
import { ResponsibleTeaser } from "@/components/home/ResponsibleTeaser";
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
        ? "1XROLL — 完整数字游戏生态"
        : "1XROLL — Complete Digital Gaming Ecosystem",
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
      <DiscoverByExperience locale={locale} />
      <FeaturedGamesRail locale={locale} />
      <HomePromotions locale={locale} />
      <HomeRewards locale={locale} />
      <ProviderDiscovery locale={locale} />
      <HowItWorks locale={locale} />
      <HomeMobileApp locale={locale} />
      <LatestGuides locale={locale} guides={guides} />
      <HomeVipAgent locale={locale} />
      <HomeWallet locale={locale} />
      <WhyPlatform locale={locale} />
      <HomeFaq locale={locale} />
      <ResponsibleTeaser locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
