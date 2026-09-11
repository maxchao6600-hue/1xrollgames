import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import {
  footerBrand,
  footerGames,
  footerGuidesSupport,
  footerLegal,
  footerPlatform,
  footerRewards,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { CustomerServiceTextLinks } from "@/components/layout/CustomerService";
import { FooterLocaleLinks } from "@/components/layout/FooterLocaleLinks";

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
          <li key={item.labelKey + item.href}>
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
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <div className="sm:col-span-2 xl:col-span-1">
          <div className="relative mb-4 h-9 w-[8.5rem]">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              fill
              className="object-contain object-left"
              sizes="136px"
            />
          </div>
          <p className="mb-6 max-w-sm text-sm leading-relaxed text-text-muted">
            {t(dict, "footer.brandBlurb")}
          </p>
          <FooterColumn title={t(dict, "footer.company")} items={footerBrand} locale={locale} />
        </div>
        <FooterColumn title={t(dict, "footer.games")} items={footerGames} locale={locale} />
        <FooterColumn title={t(dict, "footer.rewards")} items={footerRewards} locale={locale} />
        <FooterColumn
          title={t(dict, "footer.guidesSupport")}
          items={footerGuidesSupport}
          locale={locale}
        />
        <div className="space-y-8">
          <FooterColumn
            title={t(dict, "footer.platform")}
            items={footerPlatform}
            locale={locale}
          />
          <FooterColumn title={t(dict, "footer.legal")} items={footerLegal} locale={locale} />
        </div>
        <div>
          <p className="mb-3 text-sm font-medium text-text">
            {t(dict, "footer.languages")}
          </p>
          <div className="flex gap-3 text-sm">
            <FooterLocaleLinks />
          </div>
          <p className="mt-8 text-sm font-medium text-text">
            {t(dict, "nav.contact")}
          </p>
          <CustomerServiceTextLinks locale={locale} className="mt-3" />
          <p className="mt-8 text-xs leading-relaxed text-text-faint">
            {t(dict, "footer.notice")}
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-text-faint md:flex-row md:items-center md:justify-between">
          <p>18+</p>
          <p>{`© ${year} ${siteConfig.legalName}. ${t(dict, "footer.copyright")}`}</p>
        </div>
      </div>
    </footer>
  );
}
