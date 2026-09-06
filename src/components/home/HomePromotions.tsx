import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { promotions } from "@/data/promotions";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function HomePromotions({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow={locale === "zh" ? "活动浏览" : "Browse offers"}
          title={t(dict, "home.promotionsTitle")}
          description={t(dict, "home.promotionsSubtitle")}
          action={
            <Button href={localePath(locale, "/promotions")} variant="secondary">
              {t(dict, "nav.promotions")}
            </Button>
          }
        />
        <div className="mb-6 rounded-[1.15rem] border border-border bg-bg-surface/80 p-5 text-sm leading-relaxed text-text-muted">
          {locale === "zh" ? (
            <>
              <p className="font-medium text-text">优惠区你会看到什么</p>
              <p className="mt-2">
                本站汇总已发布活动摘要（如首存类优惠以配置数据为准）。资格、流水与期限因活动而异——参与前请阅读平台条款。奖励与 VIP
                入口相关，但不会在此编造未核实金额。
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-text">What to expect from Promotions</p>
              <p className="mt-2">
                This section summarises published offers (first-deposit details follow config data).
                Eligibility, wagering and expiry vary by promotion — review platform terms before you
                join. Rewards and VIP are related, but we do not invent unverified amounts here.
              </p>
            </>
          )}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface transition hover:border-accent/35"
            >
              {promo.image ? (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={promo.image}
                    alt={localize(promo.title, locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="space-y-3 p-5">
                <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  {locale === "zh" ? "当前活动" : "Current offer"}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-lg text-text">
                  {localize(promo.title, locale)}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {localize(promo.description, locale)}
                </p>
                <Link
                  href={localePath(locale, promo.href)}
                  className="inline-flex text-sm font-medium text-accent hover:underline"
                >
                  {localize(promo.ctaLabel, locale)} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
