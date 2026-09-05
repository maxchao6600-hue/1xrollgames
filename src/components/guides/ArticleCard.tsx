import Link from "next/link";
import type { Guide, Locale } from "@/types/content";
import { CoverArt } from "@/components/shared/GameArt";
import { getDictionary, t } from "@/lib/i18n";
import { guidePath } from "@/lib/paths";
import { formatDate, localize } from "@/lib/utils";

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

  if (featured) {
    return (
      <article className="overflow-hidden rounded-[1.4rem] border border-border bg-bg-surface">
        <Link href={href} className="block">
          <CoverArt
            title={title}
            gradient={guide.coverGradient}
            image={cover}
          />
          <div className="space-y-3 p-6">
            <p className="text-xs tracking-wide text-accent uppercase">
              {guide.category}
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
    <article className="rounded-2xl border border-border bg-bg-surface p-4 transition hover:border-accent/30">
      <Link href={href} className="block space-y-3">
        <CoverArt
          title={title}
          gradient={guide.coverGradient}
          image={cover}
          className="aspect-[16/9] rounded-xl"
        />
        <p className="text-[11px] tracking-wide text-accent uppercase">
          {guide.category}
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
