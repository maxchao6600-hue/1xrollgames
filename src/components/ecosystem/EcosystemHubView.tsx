import Link from "next/link";
import type { ContentBlock, EcosystemHub, Locale } from "@/types/content";
import { ctaConfig } from "@/config/site";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { absoluteUrl, localize } from "@/lib/utils";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
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
          <p key={i} className="text-text-muted leading-relaxed">
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
  showPlatformCtas = false,
}: {
  locale: Locale;
  hub: EcosystemHub;
  path: string;
  showPlatformCtas?: boolean;
}) {
  const dict = getDictionary(locale);

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
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
          {localize(hub.title, locale)}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-text-muted">
          {localize(hub.intro, locale)}
        </p>
        <Blocks blocks={hub.sections} locale={locale} />
        {showPlatformCtas ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={ctaConfig.register.href} external>
              {t(dict, "nav.register")}
            </Button>
            <Button href={ctaConfig.login.href} external variant="secondary">
              {t(dict, "nav.login")}
            </Button>
          </div>
        ) : null}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hub.relatedHrefs.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              className="rounded-2xl border border-border bg-white/[0.02] px-4 py-4 text-sm text-text transition hover:border-accent/40"
            >
              {localize(item.label, locale)} →
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
