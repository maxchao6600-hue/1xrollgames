import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { BRAND_ASSETS, GAME_ASSETS } from "@/data/assets";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";

const HERO_ANCHOR = {
  src: GAME_ASSETS["fortune-tiger"],
  alt: "Fortune Tiger on 1XROLL",
} as const;

export function HomeHero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 88% 18%, rgba(255,196,90,0.11), transparent 58%), radial-gradient(45% 40% at 8% 85%, rgba(45,212,191,0.06), transparent 55%)",
        }}
      />
      <div className="container-page relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14 lg:py-[4.75rem]">
        <div className="fade-in max-w-xl">
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase">
            {t(dict, "home.heroEyebrow")}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.2vw,3.15rem)] leading-[1.12] tracking-tight text-text">
            {t(dict, "home.heroTitle")}
          </h1>
          <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-text-muted md:text-base">
            {t(dict, "home.heroSubtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/games")} size="lg">
              {t(dict, "common.exploreGames")}
            </Button>
            <Button
              href={localePath(locale, "/register")}
              variant="outline"
              size="lg"
            >
              {t(dict, "home.heroSecondaryCta")}
            </Button>
          </div>
          <p className="mt-5 text-sm text-text-faint">
            <Link
              href={localePath(locale, "/rewards")}
              className="transition hover:text-accent"
            >
              {t(dict, "nav.rewards")}
            </Link>
            <span className="mx-2 opacity-40">·</span>
            <Link
              href={localePath(locale, "/vip")}
              className="transition hover:text-accent"
            >
              {t(dict, "nav.vip")}
            </Link>
            <span className="mx-2 opacity-40">·</span>
            <Link
              href={localePath(locale, "/download")}
              className="transition hover:text-accent"
            >
              {t(dict, "nav.download")}
            </Link>
          </p>
        </div>

        <div className="fade-in relative mx-auto w-full max-w-lg lg:max-w-none">
          {/* One coherent visual panel — not stacked game cards */}
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.5rem] border border-border bg-[#0b121b] shadow-[var(--shadow)] sm:aspect-[4/3]">
            <Image
              src={HERO_ANCHOR.src}
              alt={HERO_ANCHOR.alt}
              fill
              className="object-cover object-[center_18%]"
              sizes="(max-width:1024px) 90vw, 560px"
              priority
            />

            {/* Depth + brand-first overlays */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[#070b10]/92 via-[#070b10]/45 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#070b10] via-transparent to-[#070b10]/35"
            />
            <div
              aria-hidden
              className="absolute -right-10 top-1/4 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/15 bg-black/40 backdrop-blur-sm">
                  <Image
                    src={BRAND_ASSETS.logo}
                    alt=""
                    fill
                    className="object-contain p-1.5"
                    sizes="40px"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-white">
                    1XROLL
                  </p>
                  <p className="text-[0.65rem] tracking-[0.16em] text-white/60 uppercase">
                    {locale === "zh" ? "完整游戏生态" : "Full gaming ecosystem"}
                  </p>
                </div>
              </div>

              <div className="max-w-xs">
                <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                  {locale === "zh" ? "品牌平台" : "Brand platform"}
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug text-white sm:text-2xl">
                  {locale === "zh"
                    ? "游戏 · 奖励 · 平台服务"
                    : "Games · Rewards · Platform"}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(locale === "zh"
                    ? ["老虎机", "真人", "加密", "体育", "奖励"]
                    : ["Slots", "Live", "Crypto", "Sports", "Rewards"]
                  ).map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[0.68rem] text-white/80 backdrop-blur-sm"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
