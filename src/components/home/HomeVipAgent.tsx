import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { REWARD_ASSETS } from "@/data/assets";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

export function HomeVip({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface md:grid md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[17rem]">
            <Image
              src={REWARD_ASSETS["vip-club"]}
              alt={t(dict, "nav.vip")}
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-bg-surface"
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              VIP
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {t(dict, "nav.vip")}
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-text-muted">
              {t(dict, "home.vipSectionBody")}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href={localePath(locale, "/vip")}>
                {t(dict, "common.explore")} →
              </Button>
              <Link
                href={localePath(locale, "/rebates")}
                className="text-sm text-accent hover:underline"
              >
                {t(dict, "nav.rebates")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function HomeAgent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="bg-[rgba(14,18,24,0.4)]">
      <Container>
        <div className="rounded-[1.35rem] border border-border bg-bg-surface px-7 py-9 md:flex md:items-end md:justify-between md:gap-8 md:px-10 md:py-11">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              {t(dict, "nav.agent")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {t(dict, "nav.agent")}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {t(dict, "home.agentSectionBody")}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
            <Button href={localePath(locale, "/agent")}>
              {t(dict, "common.explore")} →
            </Button>
            <Button href={localePath(locale, "/contact")} variant="outline">
              {t(dict, "nav.contact")}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
