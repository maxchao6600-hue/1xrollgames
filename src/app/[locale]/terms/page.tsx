import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { siteConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    path: "/terms",
    title: locale === "zh" ? "使用条款" : "Terms of use",
    description:
      locale === "zh"
        ? "Aether 网站使用条款：内容性质、免责声明与可接受使用。"
        : "Terms of use for the Aether website: content nature, disclaimers, and acceptable use.",
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "terms.title") },
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "terms.title")}
        </h1>
        <div className="prose-aether mt-8 max-w-3xl">
          {locale === "zh" ? (
            <>
              <p>最后更新：2026-09-05。本条款适用于 {siteConfig.name} 网站的访问与使用。</p>
              <h2>服务性质</h2>
              <p>
                Aether 提供游戏发现、厂商介绍与编辑向攻略等内容。除非另有明确书面说明，本站不构成博彩运营商、支付中介或持牌平台。我们不在缺乏核实材料时展示牌照信息。
              </p>
              <h2>信息准确性</h2>
              <p>
                我们努力保持内容准确，但不保证完整性或实时性。游戏机制可能随工作室更新而变化。未核实的统计（例如 RTP）会被省略，而不是猜测填入。
              </p>
              <h2>可接受使用</h2>
              <p>
                你同意不滥用本站（包括抓取造成服务损害、试图破坏安全，或将内容用于误导性再分发）。你可以出于个人、非商业参考链接本站公开页面。
              </p>
              <h2>第三方链接</h2>
              <p>
                本站可能包含指向外部网站的链接。我们不控制第三方内容或做法，点击外部链接的风险由你自行承担。
              </p>
              <h2>免责声明</h2>
              <p>
                在法律允许范围内，本站按“现状”提供，不附带明示或默示保证。游玩涉及风险；请遵守当地法律并理性参与。
              </p>
              <h2>联系</h2>
              <p>
                关于条款的问题请联系{" "}
                <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>。
              </p>
            </>
          ) : (
            <>
              <p>Last updated: 2026-09-05. These terms govern access to and use of the {siteConfig.name} website.</p>
              <h2>Nature of the service</h2>
              <p>
                Aether publishes game discovery content, studio profiles, and editorial guides.
                Unless expressly stated in writing, this site is not a gambling operator,
                payment intermediary, or licensed platform. We do not display license claims
                without verified materials.
              </p>
              <h2>Information accuracy</h2>
              <p>
                We aim for accuracy but do not guarantee completeness or real-time updates.
                Game mechanics can change when studios ship updates. Unverified statistics
                such as RTP are omitted rather than guessed.
              </p>
              <h2>Acceptable use</h2>
              <p>
                You agree not to misuse the site (including scraping that harms service,
                attempting to breach security, or redistributing content in misleading ways).
                You may link to public pages for personal, non-commercial reference.
              </p>
              <h2>Third-party links</h2>
              <p>
                The site may include links to external properties. We do not control third-party
                content or practices; you assume risk when leaving Aether.
              </p>
              <h2>Disclaimer</h2>
              <p>
                To the fullest extent permitted by law, the site is provided “as is” without
                warranties. Gaming involves risk; follow local laws and play responsibly.
              </p>
              <h2>Contact</h2>
              <p>
                Questions about these terms:{" "}
                <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
              </p>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
