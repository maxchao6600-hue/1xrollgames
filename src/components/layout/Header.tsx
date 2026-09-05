"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/types/content";
import { gamesMegaNav, mainNav } from "@/config/navigation";
import { ctaConfig, siteConfig } from "@/config/site";
import { CATEGORY_ASSETS } from "@/data/assets";
import { getDictionary, t } from "@/lib/i18n";
import { localePath, switchLocalePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const otherLocale: Locale = locale === "en" ? "zh" : "en";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setGamesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-[#0a1018]/92 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-6">
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
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const href = localePath(locale, item.href);
              const active =
                pathname === href ||
                (item.href !== "/" && pathname.startsWith(href));

              if (item.href === "/games") {
                return (
                  <div
                    key={item.labelKey}
                    className="relative"
                    onMouseEnter={() => setGamesOpen(true)}
                    onMouseLeave={() => setGamesOpen(false)}
                  >
                    <Link
                      href={href}
                      className={cn(
                        "rounded-lg px-2.5 py-2 text-sm text-text-muted transition hover:text-text",
                        active && "bg-white/5 text-text",
                      )}
                    >
                      {t(dict, item.labelKey)}
                    </Link>
                    {gamesOpen ? (
                      <div className="absolute left-0 top-full z-50 w-[min(40rem,70vw)] pt-2">
                        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-[#0d1520] p-3 shadow-2xl sm:grid-cols-2">
                          {gamesMegaNav.map((mega) => {
                            const megaHref = localePath(locale, mega.href);
                            const asset = mega.categoryId
                              ? CATEGORY_ASSETS[mega.categoryId]
                              : undefined;
                            return (
                              <Link
                                key={mega.href}
                                href={megaHref}
                                className="flex gap-3 rounded-xl border border-transparent p-2 transition hover:border-border hover:bg-white/[0.03]"
                                onClick={closeMenu}
                              >
                                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white/5">
                                  {asset?.image ? (
                                    <Image
                                      src={asset.image}
                                      alt=""
                                      fill
                                      className="object-cover"
                                      sizes="48px"
                                    />
                                  ) : null}
                                </div>
                                <span className="min-w-0">
                                  <span className="block text-sm text-text">
                                    {t(dict, mega.labelKey)}
                                  </span>
                                  {mega.descriptionKey ? (
                                    <span className="mt-0.5 block text-xs text-text-muted">
                                      {t(dict, mega.descriptionKey)}
                                    </span>
                                  ) : null}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              }

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
            href={localePath(locale, "/login")}
            variant="ghost"
            size="sm"
          >
            {t(dict, "nav.login")}
          </Button>
          <Button
            href={localePath(locale, "/register")}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t(dict, "nav.register")}
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text xl:hidden"
            aria-expanded={open}
            aria-label={open ? t(dict, "nav.close") : t(dict, "nav.menu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t(dict, "nav.close") : t(dict, "nav.menu")}</span>
            <span aria-hidden className="text-lg">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-border bg-[#0a1018] xl:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.labelKey + item.href}
                href={localePath(locale, item.href)}
                className="rounded-lg px-3 py-3 text-base text-text"
                onClick={closeMenu}
              >
                {t(dict, item.labelKey)}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs uppercase tracking-wide text-text-muted">
              {t(dict, "nav.games")}
            </p>
            {gamesMegaNav.map((mega) => (
              <Link
                key={mega.href}
                href={localePath(locale, mega.href)}
                className="rounded-lg px-3 py-2.5 text-sm text-text-muted"
                onClick={closeMenu}
              >
                {t(dict, mega.labelKey)}
              </Link>
            ))}
            <Link
              href={switchLocalePath(pathname, otherLocale)}
              className="mt-2 rounded-lg px-3 py-3 text-sm text-text-muted"
              onClick={closeMenu}
            >
              {otherLocale === "en" ? "English" : "中文"}
            </Link>
            <div className="mt-3 flex gap-2 px-3 pb-2">
              <Button
                href={localePath(locale, ctaConfig.login.path)}
                className="flex-1"
                size="sm"
                variant="secondary"
              >
                {t(dict, "nav.login")}
              </Button>
              <Button
                href={localePath(locale, ctaConfig.register.path)}
                className="flex-1"
                size="sm"
              >
                {t(dict, "nav.register")}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
