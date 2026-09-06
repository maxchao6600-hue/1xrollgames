"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { Locale } from "@/types/content";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";

export default function LocaleNotFound() {
  const params = useParams<{ locale?: string }>();
  const raw = typeof params?.locale === "string" ? params.locale : "en";
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-xs tracking-[0.2em] text-accent uppercase">404</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-text">
        {t(dict, "notFound.title")}
      </h1>
      <p className="mt-4 max-w-md text-text-muted">{t(dict, "notFound.body")}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href={localePath(locale, "/")} variant="outline">
          {t(dict, "common.backHome")}
        </Button>
        <Button href={localePath(locale, "/games")}>
          {t(dict, "common.exploreGames")}
        </Button>
        <Button href={localePath(locale, "/guides")} variant="secondary">
          {t(dict, "common.browseGuides")}
        </Button>
      </div>
      <p className="mt-6 text-sm text-text-muted">
        <Link href={localePath(locale, "/faq")} className="text-accent hover:underline">
          {t(dict, "nav.faq")}
        </Link>
      </p>
    </div>
  );
}
