import Link from "next/link";
import type { Locale } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

const walletLinks = [
  { href: "/deposit", labelKey: "nav.deposit" },
  { href: "/withdraw", labelKey: "nav.withdraw" },
  { href: "/payment-methods", labelKey: "nav.payments" },
  { href: "/currency-purchase", labelKey: "nav.currency" },
] as const;

export function HomeWallet({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="bg-bg-elevated/30">
      <Container>
        <SectionHeader
          title={t(dict, "home.walletTitle")}
          description={t(dict, "home.walletSubtitle")}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {walletLinks.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              className="rounded-2xl border border-border bg-bg-surface px-5 py-6 text-text transition hover:border-accent/40"
            >
              <span className="font-[family-name:var(--font-display)] text-lg">
                {t(dict, item.labelKey)}
              </span>
              <span className="mt-2 block text-sm text-accent">→</span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
