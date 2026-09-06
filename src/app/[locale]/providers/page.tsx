import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getAllProviders, getCategory, getFaqByIds, getGamesByProvider, getProviderCategoryMatrix } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { ProviderCard } from "@/components/providers/ProviderCard";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FeatureSplit,
  HubAnchorNav,
  HubCtaBand,
  InfoGrid,
  ProviderMatrix,
  StepGrid,
} from "@/components/content/HubModules";
import {
  PageFaqSection,
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
  const featuredStudio = [...providers].sort(
    (a, b) => getGamesByProvider(b.slug).length - getGamesByProvider(a.slug).length,
  )[0];
  const featuredTitles = featuredStudio
    ? getGamesByProvider(featuredStudio.slug)
        .map((g) => g.name)
        .slice(0, 4)
    : [];
  const matrix = getProviderCategoryMatrix().map((row) => ({
    name: row.provider.name,
    href: localePath(locale, `/providers/${row.provider.slug}`),
    count: row.count,
    categories: row.categoryIds
      .map((id) => getCategory(id))
      .filter((c): c is NonNullable<typeof c> => Boolean(c))
      .map((c) => localize(c.name, locale)),
    titles: row.featuredNames,
  }));
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
        <p className="mt-3 max-w-4xl text-text-muted">
          {locale === "zh"
            ? "厂商决定界面语言、特色语法与会话节奏。本目录只列出本站已核实工作室：Pragmatic Play、PG Soft、Evolution、Spribe、Jili、Endorphina、Relax Gaming、Playson——不编造额外厂商或奖项。"
            : "Providers shape UI language, feature grammar, and session pacing. This directory lists only verified studios on this site: Pragmatic Play, PG Soft, Evolution, Spribe, Jili, Endorphina, Relax Gaming, and Playson — we do not invent extra studios or awards."}
        </p>
        <HubAnchorNav
          items={
            locale === "zh"
              ? [
                  { href: "#directory", label: "目录" },
                  { href: "#featured", label: "精选" },
                  { href: "#matrix", label: "矩阵" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#directory", label: "Directory" },
                  { href: "#featured", label: "Featured" },
                  { href: "#matrix", label: "Matrix" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <div className="mt-8 scroll-mt-28" id="directory">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        </div>

        <InfoGrid
          title={locale === "zh" ? "厂商如何塑造游戏库" : "How providers shape the game library"}
          subtitle={
            locale === "zh"
              ? "工作室决定节奏、界面与分类手感。按厂商浏览是比较工艺家族，而不是追逐“今日最热返还率”传闻。"
              : "Studios decide pacing, UI and category feel. Provider browsing compares craft families — it is not a hunt for unverified “hot RTP” rumours."
          }
          columns={3}
          items={
            locale === "zh"
              ? [
                  {
                    title: "不同游戏风格",
                    body: "竖屏节日老虎机、消除网格、真人秀与短回合时机玩法，往往来自不同工艺习惯。",
                  },
                  {
                    title: "不同分类足迹",
                    body: "有的工作室在老虎机目录更深，有的出现在真人或加密短回合。打开档案查看本站已核实足迹。",
                  },
                  {
                    title: "为何厂商导航有用",
                    body: "当你喜欢某种控件布局或特色语法，厂商页比随机跳主题更有效。",
                  },
                ]
              : [
                  {
                    title: "Different game styles",
                    body: "Portrait festive slots, cascade grids, live shows and short timing rounds often come from different craft habits.",
                  },
                  {
                    title: "Different category footprints",
                    body: "Some studios sit deeper in slots; others appear in live or crypto short rounds. Open a profile for this site’s verified footprint.",
                  },
                  {
                    title: "Why provider navigation helps",
                    body: "When you like a control layout or feature grammar, a provider page beats hopping themes at random.",
                  },
                ]
          }
        />

        <div id="featured" className="scroll-mt-28">
        {featuredStudio ? (
          <FeatureSplit
            kicker={locale === "zh" ? "精选厂商" : "Featured provider"}
            title={featuredStudio.name}
            image={featuredStudio.logo}
            imageAlt={featuredStudio.name}
            body={localize(featuredStudio.shortDescription, locale)}
            points={
              locale === "zh"
                ? [
                    `本站已核实作品 ${getGamesByProvider(featuredStudio.slug).length} 款`,
                    featuredTitles.length
                      ? `精选标题：${featuredTitles.join("、")}`
                      : "打开档案查看标题",
                    "数量是策展足迹，不是全球发行量",
                  ]
                : [
                    `${getGamesByProvider(featuredStudio.slug).length} verified titles on this site`,
                    featuredTitles.length
                      ? `Featured titles: ${featuredTitles.join(", ")}`
                      : "Open the profile for titles",
                    "Counts are curated footprint — not global release volume",
                  ]
            }
            cta={
              <Button href={localePath(locale, `/providers/${featuredStudio.slug}`)} variant="secondary">
                {locale === "zh" ? "打开厂商档案" : "Open provider profile"}
              </Button>
            }
          />
        ) : null}
        </div>

        <StepGrid
          title={locale === "zh" ? "如何按厂商探索" : "How to explore by provider"}
          steps={
            locale === "zh"
              ? [
                  { title: "选工作室", body: "从上方目录进入档案，而不是只记一个游戏名。" },
                  { title: "看已核实作品", body: "数量描述本站策展足迹，不是质量分数。" },
                  { title: "对比分类", body: "从老虎机跳到真人或短回合，感受节奏差。" },
                  { title: "打开平台", body: "实际开玩仍走登录 / 注册。" },
                ]
              : [
                  { title: "Pick a studio", body: "Open a profile from the directory above instead of memorising one title." },
                  { title: "Read verified titles", body: "Counts describe this site’s curated footprint — not a quality score." },
                  { title: "Compare categories", body: "Jump from slots to live or short rounds to feel pacing differences." },
                  { title: "Open the platform", body: "Live play still goes through Login / Register." },
                ]
          }
        />

        <div id="matrix" className="scroll-mt-28">
        <ProviderMatrix
          locale={locale}
          title={locale === "zh" ? "厂商 × 分类矩阵" : "Provider + category matrix"}
          subtitle={
            locale === "zh"
              ? "仅统计本站已核实目录。空分类表示该工作室未出现在对应货架——不是质量判断。"
              : "Counts only this site’s verified catalogue. A missing category means the studio is not on that shelf here — not a quality score."
          }
          rows={matrix}
        />
        </div>

        <InfoGrid
          title={locale === "zh" ? "如何按厂商选游戏" : "How to choose games by provider"}
          columns={3}
          items={
            locale === "zh"
              ? [
                  { title: "先认控件习惯", body: "竖屏、连消或真人转播，选你已经读得懂的工艺。" },
                  { title: "再比分类足迹", body: "用矩阵看工作室落在哪些货架。" },
                  { title: "打开一款作品页", body: "机制说明在作品页；开玩在平台。" },
                ]
              : [
                  { title: "Start with control habits", body: "Portrait, cascade or live broadcast — pick a craft you already read." },
                  { title: "Then compare footprints", body: "Use the matrix to see which shelves a studio occupies." },
                  { title: "Open one title page", body: "Mechanics notes live there; play lives on the platform." },
                ]
          }
        />

        <HubCtaBand
          locale={locale}
          title={locale === "zh" ? "从厂商走进游戏库" : "Move from studios into the library"}
          body={
            locale === "zh"
              ? "档案页列出已核实作品与攻略链接。大厅库存仍以平台为准。"
              : "Profiles list verified titles and guide links. Lobby inventory still belongs to the platform."
          }
        />

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
        <div id="faq" className="scroll-mt-28">
        <PageFaqSection locale={locale} items={faqItems} />
        </div>
      </Container>
    </Section>
  );
}
