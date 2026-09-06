import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { categories, categoryPath } from "@/data/categories";
import {
  getAllProviders,
  getFaqByIds,
  getFeaturedGames,
  getGameCards,
  getGameCardsByCategory,
} from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { GamesExplorer } from "@/components/games/GamesExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  PageFaqSection,
  RelatedLinkGrid,
} from "@/components/content/PageSections";
import { FeaturedGamesRail, HubAnchorNav, InfoGrid, StepGrid, HubCtaBand } from "@/components/content/HubModules";
import { GameCard } from "@/components/games/GameCard";

const GAMES_HUB_FAQ = [
  "how-many-games",
  "game-categories",
  "explore-games",
  "providers",
  "providers-why",
  "slots-what",
  "live-what",
  "hash-what",
  "sports-what",
  "mobile",
];

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
    path: "/games",
    title: t(dict, "games.hubTitle"),
    description: t(dict, "games.hubSubtitle"),
  });
}

export default async function GamesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const games = getGameCards();
  const featured = getFeaturedGames().slice(0, 6);
  const slotPicks = getGameCardsByCategory("slots").filter((g) => g.image).slice(0, 6);
  const livePicks = getGameCardsByCategory("live-casino").filter((g) => g.image).slice(0, 6);
  const fastPicks = getGameCardsByCategory("fast-games").slice(0, 6);
  const fishPicks = getGameCardsByCategory("fishing").slice(0, 6);
  const providers = getAllProviders();
  const providerOptions = providers.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
  }));
  const categoryOptions = categories.map((c) => ({
    id: c.id,
    name: c.name,
  }));
  const faqItems = getFaqByIds(GAMES_HUB_FAQ);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "games.hubTitle") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
              {
                name: t(dict, "games.hubTitle"),
                url: absoluteUrl(localePath(locale, "/games")),
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
          {t(dict, "games.hubTitle")}
        </h1>
        <p className="mt-3 max-w-4xl text-text-muted">
          {locale === "zh"
            ? "游戏库枢纽：浏览已核实目录（老虎机 32、真人 6、加密 4、快速 2、捕鱼 3），并通过枢纽页了解哈希、体育、棋牌与彩票等平台通道。筛选可在下方使用；无匹配时请清除筛选并改从分类进入。"
            : "Game library hub: browse the verified catalogue (32 slots, 6 live, 4 crypto, 2 fast, 3 fishing) and use hub pages for hash, sports, chess & card, and lottery lanes. Filters work below; if nothing matches, clear filters and explore by category."}
        </p>
        <HubAnchorNav
          items={
            locale === "zh"
              ? [
                  { href: "#featured", label: "精选" },
                  { href: "#categories", label: "分类" },
                  { href: "#collections", label: "合集" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#featured", label: "Featured" },
                  { href: "#categories", label: "Categories" },
                  { href: "#collections", label: "Collections" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <div className="mt-10 scroll-mt-28" id="featured">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
            {locale === "zh" ? "精选游戏" : "Featured Games"}
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {featured.map((game) => (
              <div key={game.id} className="min-w-0 [&_article]:!w-full">
                <GameCard game={game} locale={locale} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 scroll-mt-28" id="categories">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
            {locale === "zh" ? "按分类探索" : "Explore by category"}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={localePath(locale, categoryPath(cat.id))}
                className="rounded-2xl border border-border bg-bg-surface px-4 py-4 transition hover:border-accent/40"
              >
                <p className="font-medium text-text">{localize(cat.name, locale)}</p>
                <p className="mt-1 text-sm text-text-muted">
                  {localize(cat.shortDescription, locale)}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
            {locale === "zh" ? "厂商目录" : "Provider Directory"}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {providers.map((p) => (
              <Link
                key={p.id}
                href={localePath(locale, `/providers/${p.slug}`)}
                className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-sm text-text hover:border-accent/40"
              >
                {p.name}
              </Link>
            ))}
            <Link
              href={localePath(locale, "/providers")}
              className="rounded-full border border-accent/40 px-3 py-1.5 text-sm text-accent"
            >
              {locale === "zh" ? "全部厂商 →" : "All providers →"}
            </Link>
          </div>
        </div>

        <div id="collections" className="scroll-mt-28">
          <FeaturedGamesRail
            locale={locale}
            title={locale === "zh" ? "精选老虎机合集" : "Featured slots collection"}
            games={slotPicks}
          />
          <FeaturedGamesRail
            locale={locale}
            title={locale === "zh" ? "真人赌场精选" : "Live casino highlights"}
            games={livePicks}
          />
          <FeaturedGamesRail
            locale={locale}
            title={locale === "zh" ? "快速游戏精选" : "Fast game picks"}
            games={fastPicks}
          />
          <FeaturedGamesRail
            locale={locale}
            title={locale === "zh" ? "捕鱼合集" : "Fishing collection"}
            games={fishPicks}
          />
        </div>

        <div className="mt-10">
          <GamesExplorer
            locale={locale}
            games={games}
            categories={categoryOptions}
            providers={providerOptions}
          />
        </div>

        <StepGrid
          title={locale === "zh" ? "如何探索游戏" : "How to explore games"}
          steps={
            locale === "zh"
              ? [
                  { title: "选分类或厂商", body: "先缩小工艺家族，再打开作品页。" },
                  { title: "读机制说明", body: "作品页解释节奏与会话建议。本站保持信息向。" },
                  { title: "使用筛选", body: "无匹配时清除筛选，改走分类路径——不生成可索引空查询页。" },
                  { title: "打开平台", body: "实际开玩在登录 / 注册之后。" },
                ]
              : [
                  { title: "Pick category or studio", body: "Narrow a craft family, then open a title page." },
                  { title: "Read mechanics notes", body: "Title pages explain pacing and session notes. This site stays informational." },
                  { title: "Use filters", body: "If nothing matches, clear filters and use category paths — we do not create indexable empty query pages." },
                  { title: "Open the platform", body: "Live play follows Login / Register." },
                ]
          }
        />
        <InfoGrid
          title={locale === "zh" ? "发现、移动端与新手" : "Discovery, mobile and beginners"}
          columns={3}
          items={
            locale === "zh"
              ? [
                  {
                    title: "发现指南",
                    body: "用精选轨道比较节奏，用攻略学习 RTP/波动率等教育概念（不编造具体返还率），再用厂商页理解工作室工艺。",
                  },
                  {
                    title: "移动端",
                    body: "目录与详情页面向手机阅读。进入直播或时机敏感回合时请保持稳定网络。",
                  },
                  {
                    title: "新手建议",
                    body: "先读一篇攻略，再选一款作品做短时体验。避免同时打开多条短回合车道。",
                    href: localePath(locale, "/guides/beginners-guide-1xroll-games"),
                  },
                ]
              : [
                  {
                    title: "Discovery guide",
                    body: "Use featured rails to compare pacing, guides for RTP/volatility literacy (without inventing percentages), and provider pages for studio craft.",
                  },
                  {
                    title: "Mobile",
                    body: "Catalogue and detail pages are built for phone reading. Prefer a stable connection for live or timing-sensitive rounds.",
                  },
                  {
                    title: "Beginners",
                    body: "Read one guide, then try one title in a short timed session. Avoid opening multiple short-round lanes at once.",
                    href: localePath(locale, "/guides/beginners-guide-1xroll-games"),
                  },
                ]
          }
        />

        <RelatedLinkGrid
          locale={locale}
          title={locale === "zh" ? "相关攻略与页面" : "Related guides & pages"}
          links={[
            {
              href: "/guides/beginners-guide-1xroll-games",
              label: {
                en: "Beginner's Guide",
                zh: "入门指南",
              },
            },
            {
              href: "/guides/explore-game-categories",
              label: {
                en: "Explore Categories Guide",
                zh: "分类探索攻略",
              },
            },
            {
              href: "/guides/understanding-game-providers",
              label: {
                en: "Understanding Providers",
                zh: "理解游戏厂商",
              },
            },
            {
              href: "/providers",
              label: { en: "Providers", zh: "厂商" },
            },
            {
              href: "/responsible-gaming",
              label: { en: "Responsible Gaming", zh: "理性游戏" },
            },
            { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
          ]}
        />

        <div id="faq" className="scroll-mt-28">
        <PageFaqSection locale={locale} items={faqItems} />
        </div>
        <HubCtaBand
          locale={locale}
          title={locale === "zh" ? "从目录走进大厅" : "Move from catalogue to lobby"}
          body={
            locale === "zh"
              ? "本枢纽列出已核实作品与分类。实时库存与开玩在平台。"
              : "This hub lists verified titles and categories. Live inventory and play stay on the platform."
          }
        />
      </Container>
    </Section>
  );
}
