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
import { HubCtaBand, HubH2, InfoGrid } from "@/components/content/HubModules";

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
        <p className="mt-3 max-w-4xl text-text-muted">
          {locale === "zh"
            ? "攻略中心：游戏解读、RTP/波动率教育、真人基础、移动体验、入门路径、分类与厂商说明、优惠条款识读、奖励与 VIP，以及理性游戏。每篇为原创说明，不编造返还率或虚假更新日期。"
            : "Guides hub: title explainers, RTP/volatility education, live basics, mobile experience, beginner paths, category and provider literacy, promotions terms, rewards & VIP, and responsible gaming. Each article is original orientation — no invented RTP figures or fake update dates."}
        </p>
        <InfoGrid
          title={locale === "zh" ? "攻略怎么读" : "How to use these guides"}
          columns={4}
          items={
            locale === "zh"
              ? [
                  { title: "作品解读", body: "帮助你认识机制语言，而不是预测下一把。" },
                  { title: "分类与厂商", body: "比较工艺家族与通道，而不是追逐传闻返还率。" },
                  { title: "优惠与奖励", body: "把公开数字放回资格、流水与平台条款里读。" },
                  { title: "理性游戏", body: "限额、离开与合法地区始终优先于发现。" },
                ]
              : [
                  { title: "Title explainers", body: "Learn mechanics language — not the next spin." },
                  { title: "Categories & studios", body: "Compare craft families and lanes — not rumour RTP." },
                  { title: "Offers & rewards", body: "Put published figures back into eligibility, wagering and platform terms." },
                  { title: "Responsible play", body: "Limits, leaving and legal markets stay ahead of discovery." },
                ]
          }
        />
        {[
          {
            title: locale === "zh" ? "入门攻略" : "Beginner guides",
            slugs: [
              "beginners-guide-1xroll-games",
              "explore-game-categories",
              "mobile-gaming-guide",
            ],
          },
          {
            title: locale === "zh" ? "游戏攻略" : "Game guides",
            slugs: [
              "fortune-tiger-guide",
              "mahjong-ways-2-guide",
              "gates-of-olympus-guide",
            ],
          },
          {
            title: locale === "zh" ? "教育与条款" : "Education",
            slugs: [
              "understanding-rtp-volatility",
              "understanding-game-providers",
              "live-casino-basics",
              "understanding-promotions-terms",
              "understanding-rewards-vip",
              "responsible-gaming-guide",
            ],
          },
        ].map((group) => {
          const items = group.slugs
            .map((slug) => guides.find((g) => g.slug === slug))
            .filter((g): g is NonNullable<typeof g> => Boolean(g));
          if (!items.length) return null;
          return (
            <div key={group.title} className="mt-12">
              <HubH2>{group.title}</HubH2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((guide) => (
                  <ArticleCard key={guide.id} guide={guide} locale={locale} />
                ))}
              </div>
            </div>
          );
        })}
        <HubCtaBand
          locale={locale}
          title={locale === "zh" ? "把识读带回游戏库" : "Take literacy back to the library"}
          body={
            locale === "zh"
              ? "攻略是编辑向说明，不是必胜系统。日期以各篇页脚为准，不编造更新。"
              : "Guides are editorial explainers, not winning systems. Dates follow each article footer — we do not invent updates."
          }
        />
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
