import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getAllGuides } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { ArticleCard } from "@/components/guides/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/guides",
    title: t(dict, "guides.hubTitle"),
    description: t(dict, "guides.hubSubtitle"),
  });
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const guides = getAllGuides();

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "guides.hubTitle") },
          ]}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
            {
              name: t(dict, "guides.hubTitle"),
              url: absoluteUrl(localePath(locale, "/guides")),
            },
          ])}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "guides.hubTitle")}
        </h1>
        <p className="mt-3 max-w-3xl text-text-muted">
          {locale === "zh"
            ? "攻略中心：游戏解读、RTP/波动率教育、真人基础、移动体验、入门路径、分类与厂商说明、优惠条款识读、奖励与 VIP，以及理性游戏。每篇为原创说明，不编造返还率或虚假更新日期。"
            : "Guides hub: title explainers, RTP/volatility education, live basics, mobile experience, beginner paths, category and provider literacy, promotions terms, rewards & VIP, and responsible gaming. Each article is original orientation — no invented RTP figures or fake update dates."}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <ArticleCard key={guide.id} guide={guide} locale={locale} />
          ))}
        </div>
        <p className="mt-10 text-sm text-text-muted">
          <a href={localePath(locale, "/games")} className="text-accent hover:underline">
            {t(dict, "nav.games")}
          </a>
          {" · "}
          <a href={localePath(locale, "/providers")} className="text-accent hover:underline">
            {t(dict, "nav.providers")}
          </a>
          {" · "}
          <a
            href={localePath(locale, "/responsible-gaming")}
            className="text-accent hover:underline"
          >
            {t(dict, "nav.responsible")}
          </a>
          {" · "}
          <a href={localePath(locale, "/faq")} className="text-accent hover:underline">
            {t(dict, "nav.faq")}
          </a>
        </p>
      </Container>
    </Section>
  );
}
