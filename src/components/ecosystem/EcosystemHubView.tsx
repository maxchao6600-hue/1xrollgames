import Image from "next/image";
import Link from "next/link";
import type { ContentBlock, EcosystemHub, FaqItem, Locale } from "@/types/content";
import { ctaConfig } from "@/config/site";
import { CATEGORY_ASSETS } from "@/data/assets";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { absoluteUrl, localize } from "@/lib/utils";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

function Blocks({ blocks, locale }: { blocks: ContentBlock[]; locale: Locale }) {
  return (
    <div className="prose-brand mt-8 max-w-3xl space-y-4">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="font-[family-name:var(--font-display)] text-2xl text-text">
              {localize(block.text, locale)}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={i} className="text-xl text-text">
              {localize(block.text, locale)}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5 text-text-muted">
              {block.items[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-text-muted">
            {localize(block.text, locale)}
          </p>
        );
      })}
    </div>
  );
}

export function ecosystemMetadata(
  locale: Locale,
  hub: EcosystemHub,
  path: string,
): Metadata {
  return buildMetadata({
    locale,
    path,
    title: localize(hub.title, locale),
    description: localize(hub.summary, locale),
  });
}

export function EcosystemHubView({
  locale,
  hub,
  path,
  showPlatformCtas = true,
  categoryId,
  faqItems = [],
}: {
  locale: Locale;
  hub: EcosystemHub;
  path: string;
  showPlatformCtas?: boolean;
  /** Optional category art for visual header */
  categoryId?: string;
  faqItems?: FaqItem[];
}) {
  const dict = getDictionary(locale);
  const asset = categoryId ? CATEGORY_ASSETS[categoryId] : undefined;
  const isPanel = asset?.fit === "panel";

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: localize(hub.title, locale) },
          ]}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
            {
              name: localize(hub.title, locale),
              url: absoluteUrl(localePath(locale, path)),
            },
          ])}
        />

        {asset?.image ? (
          <div className="relative mb-8 aspect-[16/8] overflow-hidden rounded-[1.35rem] border border-border md:aspect-[21/7]">
            {isPanel ? (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(45,212,191,0.16),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(255,196,90,0.12),transparent_40%),linear-gradient(160deg,#0a1210_0%,#0c1520_55%,#101820_100%)]"
                />
                <div className="absolute inset-y-[12%] left-[6%] right-[40%] overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:right-[48%]">
                  <Image
                    src={asset.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 520px"
                    priority
                  />
                </div>
              </>
            ) : (
              <Image
                src={asset.image}
                alt={`${localize(hub.title, locale)} on 1XROLL`}
                fill
                className="object-cover"
                style={{ objectPosition: asset.objectPosition ?? "center center" }}
                sizes="(max-width:768px) 100vw, 1120px"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                {locale === "zh" ? "平台通道" : "Platform lane"}
              </p>
              <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-white md:text-4xl">
                {localize(hub.title, locale)}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/75 md:text-base">
                {localize(hub.summary, locale)}
              </p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
              {localize(hub.title, locale)}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-text-muted">
              {localize(hub.intro, locale)}
            </p>
          </>
        )}

        {asset?.image ? (
          <p className="max-w-3xl text-base leading-relaxed text-text-muted">
            {localize(hub.intro, locale)}
          </p>
        ) : null}

        <Blocks blocks={hub.sections} locale={locale} />

        {showPlatformCtas ? (
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={ctaConfig.play.href} external>
              {t(dict, "common.openPlatform")}
            </Button>
            <Button href={localePath(locale, ctaConfig.register.path)} variant="secondary">
              {t(dict, "nav.register")}
            </Button>
            <Button href={localePath(locale, "/fair-play")} variant="outline">
              {t(dict, "nav.fairPlay")}
            </Button>
            <Button href={localePath(locale, "/responsible-gaming")} variant="outline">
              {t(dict, "nav.responsible")}
            </Button>
          </div>
        ) : null}

        {hub.relatedHrefs.length ? (
          <div className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
              {locale === "zh" ? "相关入口" : "Related destinations"}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {hub.relatedHrefs.map((item) => (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  className="rounded-2xl border border-border bg-bg-surface px-4 py-4 text-sm text-text transition hover:border-accent/40"
                >
                  {localize(item.label, locale)} →
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {faqItems.length ? (
          <div className="mt-14">
            <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl text-text">
              {t(dict, "nav.faq")}
            </h2>
            <Accordion
              items={faqItems.map((item) => ({
                id: item.id,
                title: localize(item.question, locale),
                content: localize(item.answer, locale),
              }))}
            />
            <p className="mt-4 text-sm text-text-muted">
              <Link href={localePath(locale, "/faq")} className="text-accent hover:underline">
                {locale === "zh" ? "查看全部常见问题" : "View all FAQ"} →
              </Link>
            </p>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
