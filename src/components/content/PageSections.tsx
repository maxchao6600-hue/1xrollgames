import Link from "next/link";
import type { ContentBlock, FaqItem, Locale, LocalizedString } from "@/types/content";
import { ContentBlocks } from "@/components/guides/ContentBlocks";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ctaConfig } from "@/config/site";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";

export function RichContentBlocks({
  blocks,
  locale,
  className = "mt-10",
}: {
  blocks: ContentBlock[];
  locale: Locale;
  className?: string;
}) {
  return (
    <div className={className}>
      <ContentBlocks blocks={blocks} locale={locale} />
    </div>
  );
}

export function RelatedLinkGrid({
  locale,
  title,
  links,
}: {
  locale: Locale;
  title: string;
  links: { href: string; label: LocalizedString }[];
}) {
  if (!links.length) return null;
  return (
    <div className="mt-14">
      <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((item) => (
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
  );
}

export function PageFaqSection({
  locale,
  items,
}: {
  locale: Locale;
  items: FaqItem[];
}) {
  if (!items.length) return null;
  const dict = getDictionary(locale);
  return (
    <div className="mt-14">
      <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl text-text">
        {t(dict, "nav.faq")}
      </h2>
      <Accordion
        items={items.map((item) => ({
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
  );
}

export function PlatformCtaRow({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <Button href={ctaConfig.play.href} external>
        {t(dict, "common.openPlatform")}
      </Button>
      <Button href={localePath(locale, "/games")} variant="secondary">
        {t(dict, "common.exploreGames")}
      </Button>
      <Button href={localePath(locale, "/guides")} variant="outline">
        {t(dict, "common.browseGuides")}
      </Button>
      <Button href={localePath(locale, "/responsible-gaming")} variant="outline">
        {t(dict, "nav.responsible")}
      </Button>
    </div>
  );
}
