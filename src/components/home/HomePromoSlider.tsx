"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/types/content";
import { promotions } from "@/data/promotions";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const AUTOPLAY_MS = 6500;

export function HomePromoSlider({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const slides = promotions.filter((p) => p.image && p.status === "active");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (next: number) => {
      if (count <= 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1 || paused) return;
    const id = window.setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [count, paused, index, go]);

  if (count === 0) return null;

  const slide = slides[index]!;

  return (
    <section className="border-b border-border/40 pt-5 pb-2 md:pt-7">
      <Container>
        <div
          className="relative overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface shadow-[var(--shadow)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setPaused(false);
            }
          }}
        >
          <div className="relative aspect-[16/9] w-full md:aspect-[3/1]">
            {slides.map((item, i) => (
              <div
                key={item.id}
                className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
                  i === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={i !== index}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={localize(item.title, locale)}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width:768px) 100vw, 1280px"
                    priority={i === 0}
                  />
                ) : null}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25"
                />
              </div>
            ))}

            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 md:p-9">
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">
                {t(dict, "home.promoSliderLabel")}
              </p>
              <h2 className="mt-2 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.45rem,3vw,2.35rem)] leading-tight text-white">
                {localize(slide.title, locale)}
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75 md:text-[0.95rem]">
                {localize(slide.description, locale)}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button href={localePath(locale, slide.href)} size="md">
                  {localize(slide.ctaLabel, locale)}
                </Button>
                <Link
                  href={localePath(locale, "/promotions")}
                  className="text-sm font-medium text-white/80 underline-offset-4 hover:text-accent hover:underline"
                >
                  {t(dict, "nav.promotions")}
                </Link>
              </div>
            </div>
          </div>

          {count > 1 ? (
            <>
              <div className="absolute top-1/2 left-3 z-10 flex -translate-y-1/2 gap-2 md:left-4">
                <button
                  type="button"
                  aria-label={t(dict, "home.promoPrev")}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition hover:border-accent/50 hover:bg-black/65"
                  onClick={() => go(index - 1)}
                >
                  ‹
                </button>
              </div>
              <div className="absolute top-1/2 right-3 z-10 flex -translate-y-1/2 gap-2 md:right-4">
                <button
                  type="button"
                  aria-label={t(dict, "home.promoNext")}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition hover:border-accent/50 hover:bg-black/65"
                  onClick={() => go(index + 1)}
                >
                  ›
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {slides.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`${localize(item.title, locale)}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition ${
                      i === index
                        ? "w-6 bg-accent"
                        : "w-2 bg-white/35 hover:bg-white/55"
                    }`}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
