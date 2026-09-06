import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { rewardTopics } from "@/data/rewards";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function HomeRewards({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="bg-[rgba(14,18,24,0.4)]">
      <Container>
        <SectionHeader
          eyebrow={locale === "zh" ? "礼遇体系" : "Benefits"}
          title={t(dict, "home.rewardsTitle")}
          description={t(dict, "home.rewardsSubtitle")}
          action={
            <Button href={localePath(locale, "/rewards")} variant="secondary">
              {t(dict, "nav.rewards")}
            </Button>
          }
        />
        <div className="mb-6 rounded-[1.15rem] border border-border bg-bg-surface/80 p-5 text-sm leading-relaxed text-text-muted">
          {locale === "zh" ? (
            <>
              <p className="font-medium text-text">奖励生态如何协作</p>
              <p className="mt-2">
                优惠、返水、VIP 与活动入口共同构成账户向体验。本站解释结构与阅读路径，不编造未核实的奖励金额；细则以平台条款为准。
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-text">How the rewards ecosystem fits together</p>
              <p className="mt-2">
                Promotions, rebates, VIP and event entry points form an account-based experience.
                This site explains the structure and reading path — it does not invent unverified
                reward amounts; platform terms remain authoritative.
              </p>
            </>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rewardTopics.map((topic) => (
            <Link
              key={topic.id}
              href={localePath(locale, topic.href)}
              className="group overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface transition hover:border-accent/40"
            >
              {topic.image ? (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={localize(topic.title, locale)}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-text">
                  {localize(topic.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {localize(topic.summary, locale)}
                </p>
                <span className="mt-4 inline-flex text-sm font-medium text-accent">
                  {t(dict, "common.explore")} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
