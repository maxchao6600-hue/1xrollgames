import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import {
  providers,
  getProviderBySlug,
  getGamesByProvider,
  getAllGuides,
} from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath, providerPath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { GameCard } from "@/components/games/GameCard";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return providers.flatMap((p) =>
    (["en", "zh"] as const).map((locale) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const provider = getProviderBySlug(slug);
  if (!provider) return {};
  return buildMetadata({
    locale,
    path: `/providers/${provider.slug}`,
    title: provider.name,
    description: localize(provider.shortDescription, locale),
  });
}

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();
  const dict = getDictionary(locale);
  const list = getGamesByProvider(provider.slug);
  const guides = getAllGuides().filter(
    (g) => g.relatedProviderSlug === provider.slug,
  );

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            {
              label: t(dict, "providers.hubTitle"),
              href: localePath(locale, "/providers"),
            },
            { label: provider.name },
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
              {
                name: provider.name,
                url: absoluteUrl(providerPath(locale, provider.slug)),
              },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: provider.name,
              description: localize(provider.shortDescription, locale),
              url: absoluteUrl(providerPath(locale, provider.slug)),
            },
          ]}
        />

        <div className="mb-8 flex items-center gap-4">
          <div className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border border-border bg-bg-elevated p-2">
            {provider.logo ? (
              <Image
                src={provider.logo}
                alt={`${provider.name} logo`}
                width={56}
                height={56}
                className="h-full w-full object-contain"
                priority
              />
            ) : (
              <span
                className="grid h-full w-full place-items-center text-lg font-bold text-white"
                style={{ background: provider.logoColor }}
                aria-hidden
              >
                {provider.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
              {provider.name}
            </h1>
            <p className="mt-1 text-sm text-text-muted">
              {localize(provider.shortDescription, locale)}
            </p>
            <p className="mt-2 text-xs text-text-muted">
              {locale === "zh"
                ? `${list.length} 款已收录游戏`
                : `${list.length} catalogue games`}
            </p>
          </div>
        </div>

        <article className="prose-brand max-w-3xl whitespace-pre-line">
          {localize(provider.description, locale)}
        </article>

        <h2 className="mt-10 text-xl text-text">
          {locale === "zh" ? "专长" : "Specialties"}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {(locale === "zh" ? provider.specialties.zh : provider.specialties.en).map(
            (s: string) => (
              <li
                key={s}
                className="rounded-full border border-border bg-bg-surface px-3 py-1 text-sm text-text-muted"
              >
                {s}
              </li>
            ),
          )}
        </ul>

        <h2 className="mt-12 mb-5 text-2xl text-text">
          {t(dict, "providers.gamesFrom")}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {list.map((g: (typeof list)[number]) => (
            <div key={g.id} className="[&_article]:w-full">
              <GameCard game={g} locale={locale} />
            </div>
          ))}
        </div>

        {guides.length ? (
          <div className="mt-12">
            <h2 className="mb-4 text-2xl text-text">
              {t(dict, "common.relatedGuides")}
            </h2>
            <ul className="space-y-2">
              {guides.map((g) => (
                <li key={g.id}>
                  <Link
                    href={localePath(locale, `/guides/${g.slug}`)}
                    className="text-accent hover:underline"
                  >
                    {localize(g.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <p className="mt-10 text-sm text-text-muted">
          <Link href={localePath(locale, "/games")} className="text-accent hover:underline">
            {t(dict, "nav.games")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/guides")} className="text-accent hover:underline">
            {t(dict, "nav.guides")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/providers")} className="text-accent hover:underline">
            {t(dict, "providers.hubTitle")}
          </Link>
        </p>
      </Container>
    </Section>
  );
}
