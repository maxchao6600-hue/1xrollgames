import Link from "next/link";
import type { Guide, Locale } from "@/types/content";
import { CoverArt } from "@/components/shared/GameArt";
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
  const cover = guide.coverImage;
  const categoryLabel = guideCategoryLabel(guide.category, locale, dict);

  if (featured) {
    return (
      <article className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface">
        <Link href={href} className="block">
          <div className="overflow-hidden">
            <CoverArt title={title} gradient={guide.coverGradient} image={cover} />
          </div>
          <div className="space-y-3 p-6">
            <p className="text-xs tracking-wide text-accent uppercase">
              {categoryLabel}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-text">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              {localize(guide.excerpt, locale)}
            </p>
            <p className="text-xs text-text-faint">
              {formatDate(guide.publishedAt, locale)} · {guide.readingTimeMinutes}{" "}
              {t(dict, "common.minRead")}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface transition hover:border-accent/30">
      <Link href={href} className="block space-y-3 p-4">
        <div className="overflow-hidden rounded-xl">
          <CoverArt
            title={title}
            gradient={guide.coverGradient}
            image={cover}
            className="aspect-[16/9] rounded-xl"
          />
        </div>
        <p className="text-[11px] tracking-wide text-accent uppercase">
          {categoryLabel}
        </p>
        <h3 className="text-base font-medium text-text">{title}</h3>
        <p className="line-clamp-2 text-sm text-text-muted">
          {localize(guide.excerpt, locale)}
        </p>
        <p className="text-xs text-text-faint">
          {formatDate(guide.publishedAt, locale)} · {guide.readingTimeMinutes}{" "}
          {t(dict, "common.minRead")}
        </p>
      </Link>
    </article>
  );
}
