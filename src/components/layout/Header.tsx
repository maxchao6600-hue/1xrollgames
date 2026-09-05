"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/types/content";
import { mainNav } from "@/config/navigation";
import { ctaConfig, siteConfig } from "@/config/site";
import { getDictionary, t } from "@/lib/i18n";
import { localePath, switchLocalePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const otherLocale: Locale = locale === "en" ? "zh" : "en";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#0a1018]/95 backdrop-blur-xl">
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link
            href={localePath(locale, "/")}
            className="relative block h-8 w-[7.5rem] shrink-0"
            onClick={closeMenu}
            aria-label={siteConfig.name}
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              fill
              className="object-contain object-left"
              priority
              sizes="120px"
            />
          </Link>
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const href = localePath(locale, item.href);
              const active =
                pathname === href ||
                (item.href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={item.labelKey + item.href}
                  href={href}
                  className={cn(
                    "rounded-lg px-2.5 py-2 text-sm text-text-muted transition hover:text-text",
                    active && "bg-white/5 text-text",
                  )}
                >
                  {t(dict, item.labelKey)}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={switchLocalePath(pathname, otherLocale)}
            className="hidden rounded-lg border border-border px-2.5 py-1.5 text-xs text-text-muted transition hover:border-accent/40 hover:text-text md:inline-flex"
            hrefLang={otherLocale}
          >
            {otherLocale === "en" ? "EN" : "中文"}
          </Link>
          <Button
            href={ctaConfig.login.href}
            external={ctaConfig.login.external}
            variant="ghost"
            size="sm"
          >
            {t(dict, "nav.login")}
          </Button>
          <Button
            href={ctaConfig.register.href}
            external={ctaConfig.register.external}
            size="sm"
            className="hidden md:inline-flex"
          >
            {t(dict, "nav.register")}
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t(dict, "nav.close") : t(dict, "nav.menu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden>{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-bg-elevated lg:hidden"
      >
        {open ? (
          <div className="container-page space-y-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.labelKey + item.href}
                href={localePath(locale, item.href)}
                className="block rounded-xl px-3 py-3 text-base text-text hover:bg-white/5"
                onClick={closeMenu}
              >
                {t(dict, item.labelKey)}
              </Link>
            ))}
            <Link
              href={switchLocalePath(pathname, otherLocale)}
              className="block rounded-xl px-3 py-3 text-sm text-text-muted"
              onClick={closeMenu}
            >
              {t(dict, "nav.language")}: {otherLocale === "en" ? "English" : "中文"}
            </Link>
            <div className="flex gap-2 pt-2">
              <Button
                href={ctaConfig.login.href}
                external={ctaConfig.login.external}
                variant="secondary"
                className="flex-1"
              >
                {t(dict, "nav.login")}
              </Button>
              <Button
                href={ctaConfig.register.href}
                external={ctaConfig.register.external}
                className="flex-1"
              >
                {t(dict, "nav.register")}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
