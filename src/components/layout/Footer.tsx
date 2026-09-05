import Link from "next/link";
import type { Locale } from "@/types/content";
import {
  footerCompany,
  footerExplore,
  footerHelp,
  footerLegal,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";

function FooterColumn({
  title,
  items,
  locale,
}: {
  title: string;
  items: Array<{ href: string; labelKey: string }>;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-text">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.labelKey}>
            <Link
              href={localePath(locale, item.href)}
              className="text-sm text-text-muted transition hover:text-accent"
            >
              {t(dict, item.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl text-text">
            <span className="text-accent">{siteConfig.name[0]}</span>
            <span>{siteConfig.name.slice(1)}</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
            {t(dict, "footer.brandBlurb")}
          </p>
        </div>
        <FooterColumn title={t(dict, "footer.explore")} items={footerExplore} locale={locale} />
        <FooterColumn title={t(dict, "footer.company")} items={footerCompany} locale={locale} />
        <FooterColumn title={t(dict, "footer.help")} items={footerHelp} locale={locale} />
        <div>
          <FooterColumn title={t(dict, "footer.legal")} items={footerLegal} locale={locale} />
          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-text">
              {t(dict, "footer.languages")}
            </p>
            <div className="flex gap-3 text-sm">
              <Link href={localePath("en", "/")} className="text-text-muted hover:text-accent" hrefLang="en">
                English
              </Link>
              <Link href={localePath("zh", "/")} className="text-text-muted hover:text-accent" hrefLang="zh">
                中文
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-text-faint md:flex-row md:items-center md:justify-between">
          <p>{t(dict, "footer.notice")}</p>
          <p>
            © {year} {siteConfig.name}. {t(dict, "footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
