import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CategoryId, Locale } from "@/types/content";
import {
  categories,
  getCategory,
  getAllProviders,
  getGameCardsByCategory,
  getEcosystemHub,
  getCategoryPageContent,
  getFaqByIds,
} from "@/data";
import { CATEGORY_ASSETS } from "@/data/assets";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { GamesExplorer } from "@/components/games/GamesExplorer";
import { EcosystemHubView } from "@/components/ecosystem/EcosystemHubView";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  PageFaqSection,
  PlatformCtaRow,
  RelatedLinkGrid,
  RichContentBlocks,
} from "@/components/content/PageSections";

export function generateStaticParams() {
  return categories
    .filter((c) => c.routeBase !== "top")
    .flatMap((c) =>
      (["en", "zh"] as const).map((locale) => ({
        locale,
        category: c.slug,
      })),
    );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale: raw, category: cat } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const category = getCategory(cat);
  if (!category) return {};
  const deep = getCategoryPageContent(category.id);
  const hub = getEcosystemHub(category.slug);
  return buildMetadata({
    locale,
    path: `/games/${category.slug}`,
    title: deep
      ? localize(deep.pageTitle, locale)
      : hub
        ? localize(hub.title, locale)
        : localize(category.name, locale),
    description: deep
      ? localize(deep.intro, locale)
      : hub
        ? localize(hub.summary, locale)
        : localize(category.shortDescription, locale),
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale: raw, category: cat } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const category = getCategory(cat);
  if (!category) notFound();
  if (category.routeBase === "top") notFound();

  const deep = getCategoryPageContent(category.id);
  const hub = getEcosystemHub(category.slug);
  const faqItems = deep ? getFaqByIds(deep.faqIds) : getFaqByIds([]);

  if (category.inventoryMode === "hub" && hub) {
    return (
      <EcosystemHubView
        locale={locale}
        hub={hub}
        path={`/games/${category.slug}`}
        categoryId={category.id}
        deepContent={deep}
        faqItems={faqItems.length ? faqItems : undefined}
      />
    );
  }

  const dict = getDictionary(locale);
  const list = getGameCardsByCategory(category.id as CategoryId);
  const asset = CATEGORY_ASSETS[category.id];
  const providers = getAllProviders().map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
  }));
  const categoryOptions = categories.map((c) => ({
    id: c.id,
    name: c.name,
  }));

  const relatedLinks =
    deep?.relatedHrefs ??
    [
      { href: "/providers", label: { en: "Providers", zh: "厂商" } },
      { href: "/guides", label: { en: "Guides", zh: "攻略" } },
      { href: "/promotions", label: { en: "Promotions", zh: "优惠" } },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
    ];

  const title = deep
    ? localize(deep.pageTitle, locale)
    : localize(category.name, locale);
  const intro = deep
    ? localize(deep.intro, locale)
    : localize(category.shortDescription, locale);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "nav.games"), href: localePath(locale, "/games") },
            { label: localize(category.name, locale) },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
              {
                name: t(dict, "nav.games"),
                url: absoluteUrl(localePath(locale, "/games")),
              },
              {
                name: localize(category.name, locale),
                url: absoluteUrl(localePath(locale, `/games/${category.slug}`)),
              },
            ]),
            ...(faqItems.length
              ? [
                  faqJsonLd(
                    faqItems.map((item) => ({
                      question: localize(item.question, locale),
                      answer: localize(item.answer, locale),
                    })),
                  ),
                ]
              : []),
          ]}
        />

        {asset?.image ? (
          <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-[1.35rem] border border-border md:aspect-[21/7]">
            <Image
              src={asset.image}
              alt={`${localize(category.name, locale)} on 1XROLL`}
              fill
              className="object-cover"
              style={{ objectPosition: asset.objectPosition ?? "center center" }}
              sizes="(max-width:768px) 100vw, 1120px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <h1 className="font-[family-name:var(--font-display)] text-3xl text-white md:text-4xl">
                {title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/75 md:text-base">{intro}</p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
              {title}
            </h1>
            <p className="mt-3 max-w-3xl text-text-muted">{intro}</p>
          </>
        )}

        <div className="mt-2">
          <GamesExplorer
            locale={locale}
            games={list}
            categories={categoryOptions}
            providers={providers}
            initialCategory={category.id}
          />
        </div>

        {deep?.sections?.length ? (
          <RichContentBlocks blocks={deep.sections} locale={locale} />
        ) : (
          <article className="prose-brand mt-14 max-w-3xl whitespace-pre-line">
            {localize(category.description, locale)}
          </article>
        )}

        <PlatformCtaRow locale={locale} />

        <RelatedLinkGrid
          locale={locale}
          title={locale === "zh" ? "相关分类与页面" : "Related categories & pages"}
          links={relatedLinks}
        />

        <PageFaqSection locale={locale} items={faqItems} />

        <p className="mt-8 text-sm text-text-muted">
          <Link href={localePath(locale, "/providers")} className="text-accent hover:underline">
            {t(dict, "nav.providers")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/guides")} className="text-accent hover:underline">
            {t(dict, "nav.guides")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/promotions")} className="text-accent hover:underline">
            {t(dict, "nav.promotions")}
          </Link>
          {" · "}
          <Link
            href={localePath(locale, "/responsible-gaming")}
            className="text-accent hover:underline"
          >
            {t(dict, "nav.responsible")}
          </Link>
        </p>
      </Container>
    </Section>
  );
}
