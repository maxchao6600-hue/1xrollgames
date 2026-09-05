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
          title={t(dict, "home.vipAgentTitle")}
          description={t(dict, "home.vipAgentSubtitle")}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href={localePath(locale, "/vip")}
            className="rounded-[1.25rem] border border-border bg-gradient-to-br from-[#1a1408] to-bg-surface p-8 transition hover:border-accent/50"
          >
            <p className="text-xs tracking-[0.18em] text-accent uppercase">VIP</p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-text">
              {t(dict, "nav.vip")}
            </h3>
            <p className="mt-3 text-sm text-text-muted">
              {locale === "zh"
                ? "VIP 返水摘要与俱乐部导览——不编造等级表。"
                : "VIP cashback summaries and club orientation — no invented tier tables."}
            </p>
          </Link>
          <Link
            href={localePath(locale, "/agent")}
            className="rounded-[1.25rem] border border-border bg-gradient-to-br from-[#0a1a18] to-bg-surface p-8 transition hover:border-accent/50"
          >
            <p className="text-xs tracking-[0.18em] text-accent uppercase">Agent</p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-text">
              {t(dict, "nav.agent")}
            </h3>
            <p className="mt-3 text-sm text-text-muted">
              {locale === "zh"
                ? "代理与推荐生态导览——不编造佣金比例。"
                : "Agent and referral ecosystem orientation — no invented commission rates."}
            </p>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
