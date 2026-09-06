import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getAllProviders, getFaqByIds, getGamesByProvider } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { ProviderCard } from "@/components/providers/ProviderCard";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  PageFaqSection,
  PlatformCtaRow,
  RelatedLinkGrid,
} from "@/components/content/PageSections";

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
    path: "/providers",
    title: t(dict, "providers.hubTitle"),
    description: t(dict, "providers.hubSubtitle"),
  });
}

export default async function ProvidersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const providers = getAllProviders();
  const faqItems = getFaqByIds([
    "providers",
    "providers-why",
    "how-many-games",
    "explore-games",
    "slots-what",
    "live-what",
  ]);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "providers.hubTitle") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
              {
                name: t(dict, "providers.hubTitle"),
                url: absoluteUrl(localePath(locale, "/providers")),
              },
            ]),
            faqJsonLd(
              faqItems.map((item) => ({
                question: localize(item.question, locale),
                answer: localize(item.answer, locale),
              })),
            ),
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {locale === "zh" ? "游戏厂商" : "Game Providers"}
        </h1>
        <p className="mt-3 max-w-3xl text-text-muted">
          {locale === "zh"
            ? "厂商决定界面语言、特色语法与会话节奏。本目录只列出本站已核实工作室：Pragmatic Play、PG Soft、Evolution、Spribe、Jili、Endorphina、Relax Gaming、Playson——不编造额外厂商或奖项。"
            : "Providers shape UI language, feature grammar, and session pacing. This directory lists only verified studios on this site: Pragmatic Play, PG Soft, Evolution, Spribe, Jili, Endorphina, Relax Gaming, and Playson — we do not invent extra studios or awards."}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => {
            const count = getGamesByProvider(p.slug).length;
            return (
              <div key={p.id} className="space-y-2">
                <ProviderCard provider={p} locale={locale} />
                <p className="px-1 text-xs text-text-muted">
                  {locale === "zh"
                    ? `已核实作品 ${count} · 打开档案浏览分类与精选`
                    : `${count} verified titles · open profile for categories & featured`}
                </p>
              </div>
            );
          })}
        </div>

        <div className="prose-brand mt-14 max-w-3xl space-y-4">
          <h2>
            {locale === "zh" ? "为何厂商重要" : "Why providers matter"}
          </h2>
          <p>
            {locale === "zh"
              ? "同一主题在不同工作室可能有完全不同的节奏。按厂商浏览，可比较工艺家族，而不是只追单一标题神话。"
              : "The same theme can feel completely different across studios. Browsing by provider lets you compare craft families instead of chasing title myths."}
          </p>
          <h2>
            {locale === "zh" ? "如何探索" : "How to explore"}
          </h2>
          <p>
            {locale === "zh"
              ? "打开厂商页查看已核实游戏、相关分类与攻略链接，再回到游戏库筛选。实际开玩仍通过平台入口。"
              : "Open a provider profile for verified games, related categories, and guide links, then return to the game library filters. Live play still happens via platform entry."}
          </p>
        </div>

        <PlatformCtaRow locale={locale} />
        <RelatedLinkGrid
          locale={locale}
          title={locale === "zh" ? "相关页面" : "Related pages"}
          links={[
            { href: "/games", label: { en: "Games", zh: "游戏" } },
            {
              href: "/games/slots",
              label: { en: "Slots", zh: "老虎机" },
            },
            {
              href: "/games/live-casino",
              label: { en: "Live Casino", zh: "真人赌场" },
            },
            {
              href: "/guides/understanding-game-providers",
              label: {
                en: "Providers guide",
                zh: "厂商攻略",
              },
            },
            { href: "/guides", label: { en: "Guides", zh: "攻略" } },
            { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
          ]}
        />
        <PageFaqSection locale={locale} items={faqItems} />
      </Container>
    </Section>
  );
}
