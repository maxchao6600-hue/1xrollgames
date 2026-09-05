import Image from "next/image";
import type { Locale } from "@/types/content";
import { APP_ASSETS } from "@/data/assets";
import { ctaConfig } from "@/config/site";
import { getDictionary, t } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

export function HomeMobileApp({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="bg-[rgba(14,18,24,0.45)]">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-[1.25rem] border border-border bg-bg-surface md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <div className="p-8 md:p-10">
            <div className="mb-6 max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
                {t(dict, "home.mobileTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {t(dict, "home.mobileSubtitle")}
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-text-muted">
              <li>{t(dict, "home.mobile.fast")}</li>
              <li>{t(dict, "home.mobile.android")}</li>
              <li>{t(dict, "home.mobile.notify")}</li>
              <li>{t(dict, "home.mobile.secure")}</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={ctaConfig.register.href} external size="lg">
                {t(dict, "home.mobile.cta")}
              </Button>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-4 px-6 pb-8 md:pb-10">
            <div className="relative aspect-[9/16] w-[42%] overflow-hidden rounded-[1.25rem] border border-border shadow-[var(--shadow)]">
              <Image
                src={APP_ASSETS.screenshot}
                alt="1XROLL mobile app screenshot"
                fill
                className="object-cover object-top"
                sizes="200px"
              />
            </div>
            <div className="relative mb-4 aspect-square w-[38%] overflow-hidden rounded-2xl border border-border bg-bg-elevated p-3">
              <Image
                src={APP_ASSETS.qr}
                alt="1XROLL app download QR code"
                fill
                className="object-contain p-2"
                sizes="160px"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
