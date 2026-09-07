import Link from "next/link";
import type { Guide, Locale } from "@/types/content";
import { OptionalCardMedia } from "@/components/shared/OptionalCardMedia";
import { getDictionary, t } from "@/lib/i18n";
import { guidePath } from "@/lib/paths";
import { formatDate, localize } from "@/lib/utils";

function guideCategoryLabel(category: string, locale: Locale, dict: ReturnType<typeof getDictionary>) {
  const key = `nav.cat.${category}`;
  const translated = t(dict, key);
  if (translated !== key) return translated;
  if (category === "education") {
    return locale === "zh" ? "教程" : "Education";
  }
  return category;
}

export function ArticleCard({
  guide,
  locale,
  featured = false,
}: {
  guide: Guide;
  locale: Locale;
  featured?: boolean;
}) {
  const dict = getDictionary(locale);
  const href = guidePath(locale, guide.slug);
  const title = localize(guide.title, locale);
  const cover = guide.coverImage?.trim() || undefined;
  const categoryLabel = guideCategoryLabel(guide.category, locale, dict);
  const alt = locale === "zh" ? `${title} · 1XROLL 攻略` : `${title} — 1XROLL guide`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface transition hover:border-accent/30">
      <Link href={href} className="flex h-full flex-col">
        <OptionalCardMedia
          src={cover}
          alt={alt}
          className="rounded-none"
          sizes={featured ? "(max-width:1024px) 100vw, 55vw" : "(max-width:768px) 100vw, 420px"}
        />
        <div className={`flex flex-1 flex-col ${featured ? "space-y-3 p-6" : "space-y-3 p-5"}`}>
          <p className="text-[11px] tracking-wide text-accent uppercase">{categoryLabel}</p>
          <h3
            className={
              featured
                ? "font-[family-name:var(--font-display)] text-2xl text-text"
                : "text-base font-medium text-text"
            }
          >
            {title}
          </h3>
          <p className={`text-sm leading-relaxed text-text-muted ${featured ? "" : "line-clamp-3"}`}>
            {localize(guide.excerpt, locale)}
          </p>
          <p className="mt-auto pt-2 text-xs text-text-faint">
            {formatDate(guide.publishedAt, locale)} · {guide.readingTimeMinutes}{" "}
            {t(dict, "common.minRead")}
          </p>
          <span className="text-sm font-medium text-accent">
            {t(dict, "guides.readArticle")} →
          </span>
        </div>
      </Link>
    </article>
  );
}
