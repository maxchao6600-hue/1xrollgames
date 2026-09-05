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
    path: "/privacy",
    title: locale === "zh" ? "隐私政策" : "Privacy policy",
    description:
      locale === "zh"
        ? "1XROLL 如何处理访问数据、联系邮件与 Cookie 的隐私说明。"
        : "How 1XROLL handles visit data, contact email, and cookies.",
  });
}

export default async function PrivacyPage({
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
            { label: t(dict, "privacy.title") },
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "privacy.title")}
        </h1>
        <div className="prose-brand mt-8 max-w-3xl">
          {locale === "zh" ? (
            <>
              <p>最后更新：2026-09-05。</p>
              <h2>我们收集什么</h2>
              <p>
                访问网站时，服务器与托管提供商可能自动处理技术日志（例如 IP、用户代理、请求路径与时间戳）以保障安全与可靠性。若你主动发送邮件至{" "}
                {siteConfig.supportEmail}，我们将处理你提供的地址与消息内容以便回复。
              </p>
              <h2>我们如何使用信息</h2>
              <p>
                技术日志用于运行、保护与改进网站。联系邮件仅用于回应你的请求。我们不会出售个人信息。
              </p>
              <h2>Cookie 与类似技术</h2>
              <p>
                本站可能使用对基本功能必要的技术存储。若未来引入分析工具，我们将更新本政策并在需要时提供选择控制。当前实现以内容投递与性能为首要目标。
              </p>
              <h2>第三方</h2>
              <p>
                托管、CDN 或字体提供商可能在其服务过程中处理请求数据，并受其自身政策约束。外链网站有独立的隐私实践。
              </p>
              <h2>保留与安全</h2>
              <p>
                我们按运营需要保留日志与邮件通信，并采取合理的技术与组织措施降低未授权访问风险。没有任何在线传输是绝对安全的。
              </p>
              <h2>你的选择</h2>
              <p>
                你可联系我们询问与你邮件相关的访问或删除请求（在适用法律范围内）。浏览器设置可限制 Cookie。
              </p>
              <h2>联系</h2>
              <p>
                隐私相关问询：{" "}
                <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>。
              </p>
            </>
          ) : (
            <>
              <p>Last updated: 2026-09-05.</p>
              <h2>What we collect</h2>
              <p>
                When you visit the site, servers and hosting providers may process technical
                logs (such as IP address, user agent, request path, and timestamps) to keep
                the service secure and reliable. If you email {siteConfig.supportEmail}, we
                process the address and message content you provide so we can reply.
              </p>
              <h2>How we use information</h2>
              <p>
                Technical logs support operations, protection, and improvement of the site.
                Contact email is used only to respond to your request. We do not sell personal
                information.
              </p>
              <h2>Cookies and similar technologies</h2>
              <p>
                The site may use storage that is necessary for basic functionality. If analytics
                tools are introduced later, we will update this policy and provide controls
                where required. The current implementation prioritizes content delivery and
                performance.
              </p>
              <h2>Third parties</h2>
              <p>
                Hosting, CDN, or font providers may process request data as part of their
                service under their own policies. External websites linked from 1XROLL have
                independent privacy practices.
              </p>
              <h2>Retention and security</h2>
              <p>
                We retain logs and email correspondence as needed for operations and apply
                reasonable technical and organizational measures against unauthorized access.
                No online transmission is perfectly secure.
              </p>
              <h2>Your choices</h2>
              <p>
                You may contact us about access or deletion requests related to your email
                correspondence where applicable law allows. Browser settings can limit cookies.
              </p>
              <h2>Contact</h2>
              <p>
                Privacy inquiries:{" "}
                <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
              </p>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
