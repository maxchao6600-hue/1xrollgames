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
} from "@/data";
import { CATEGORY_ASSETS } from "@/data/assets";
import { ctaConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { GamesExplorer } from "@/components/games/GamesExplorer";
import { JsonLd } from "@/components/seo/JsonLd";

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
  return buildMetadata({
    locale,
    path: `/games/${category.slug}`,
    title: localize(category.name, locale),
    description: localize(category.shortDescription, locale),
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
  const dict = getDictionary(locale);
  const list = getGameCardsByCategory(category.id as CategoryId);
  const isHub = category.inventoryMode === "hub";
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
  const isPanel = asset?.fit === "panel";

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
          data={breadcrumbJsonLd([
            { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
            { name: t(dict, "nav.games"), url: absoluteUrl(localePath(locale, "/games")) },
            {
              name: localize(category.name, locale),
              url: absoluteUrl(localePath(locale, `/games/${category.slug}`)),
            },
          ])}
        />

        {asset?.image ? (
          <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-[1.35rem] border border-border md:aspect-[21/7]">
            {isPanel ? (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(45,212,191,0.16),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(255,196,90,0.12),transparent_40%),linear-gradient(160deg,#0a1210_0%,#0c1520_55%,#101820_100%)]"
                />
                <div className="absolute inset-y-[14%] left-[8%] right-[38%] overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:right-[45%]">
                  <Image
                    src={asset.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 560px"
                    priority
                  />
                </div>
              </>
            ) : (
              <Image
                src={asset.image}
                alt={`${localize(category.name, locale)} on 1XROLL`}
                fill
                className="object-cover"
                style={{ objectPosition: asset.objectPosition ?? "center center" }}
                sizes="(max-width:768px) 100vw, 1120px"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <h1 className="font-[family-name:var(--font-display)] text-3xl text-white md:text-4xl">
                {localize(category.name, locale)}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/75 md:text-base">
                {localize(category.shortDescription, locale)}
              </p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
              {localize(category.name, locale)}
            </h1>
            <p className="mt-3 max-w-2xl text-text-muted">
              {localize(category.shortDescription, locale)}
            </p>
          </>
        )}

        {isHub ? (
          <>
            <article className="prose-brand mt-2 max-w-3xl whitespace-pre-line">
              {localize(category.description, locale)}
            </article>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={ctaConfig.play.href} external>
                {t(dict, "common.openPlatform")}
              </Button>
              <Button href={localePath(locale, "/fair-play")} variant="secondary">
                {t(dict, "nav.fairPlay")}
              </Button>
              <Button href={localePath(locale, "/games")} variant="outline">
                {t(dict, "common.exploreGames")}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-2">
              <GamesExplorer
                locale={locale}
                games={list}
                categories={categoryOptions}
                providers={providers}
                initialCategory={category.id}
              />
            </div>
            <article className="prose-brand mt-14 max-w-3xl whitespace-pre-line">
              {localize(category.description, locale)}
            </article>
          </>
        )}

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
          {isHub ? (
            <>
              {" · "}
              <Link href={localePath(locale, "/fair-play")} className="text-accent hover:underline">
                {t(dict, "nav.fairPlay")}
              </Link>
            </>
          ) : null}
        </p>
      </Container>
    </Section>
  );
}
