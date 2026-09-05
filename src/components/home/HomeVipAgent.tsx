import Link from "next/link";
import type { Locale } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function HomeVipAgent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow={locale === "zh" ? "会员与合作" : "Membership & partners"}
          title={t(dict, "home.vipAgentTitle")}
          description={t(dict, "home.vipAgentSubtitle")}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href={localePath(locale, "/vip")}
            className="group relative overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface p-8 transition hover:border-accent/50"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/15"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              VIP
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-text">
              {t(dict, "nav.vip")}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
              {locale === "zh"
                ? "VIP 返水摘要与俱乐部导览——仅展示已发布信息，不编造等级表。"
                : "VIP cashback summaries and club guidance — published facts only, no invented tier tables."}
            </p>
            <span className="mt-6 inline-flex text-sm font-medium text-accent">
              {t(dict, "common.explore")} →
            </span>
          </Link>
          <Link
            href={localePath(locale, "/agent")}
            className="group relative overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface p-8 transition hover:border-accent/50"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-2/10 blur-2xl transition group-hover:bg-accent-2/15"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              Agent
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-text">
              {t(dict, "nav.agent")}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
              {locale === "zh"
                ? "代理与推荐生态导览——不编造佣金比例。"
                : "Agent and referral paths on 1XROLL — no invented commission rates."}
            </p>
            <span className="mt-6 inline-flex text-sm font-medium text-accent">
              {t(dict, "common.explore")} →
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
