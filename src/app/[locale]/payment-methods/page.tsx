import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEcosystemHub, paymentMethods } from "@/data";
import { isLocale } from "@/lib/i18n";
import { localize } from "@/lib/utils";
import { EcosystemHubView, ecosystemMetadata } from "@/components/ecosystem/EcosystemHubView";
import { Container, Section } from "@/components/ui/Container";

const SLUG = "payment-methods";
const PATH = "/payment-methods";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const hub = getEcosystemHub(SLUG);
  if (!hub) return {};
  return ecosystemMetadata(raw, hub, PATH);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const hub = getEcosystemHub(SLUG);
  if (!hub) notFound();

  return (
    <>
      <EcosystemHubView
        locale={raw}
        hub={hub}
        path={PATH}
      />
      <Section>
        <Container>
          <ul className="mx-auto max-w-3xl list-disc space-y-3 pl-5 text-text-muted">
            {paymentMethods.map((method) => (
              <li key={method.id}>
                <span className="font-medium text-text">
                  {localize(method.name, raw)}
                </span>
                {" — "}
                {localize(method.summary, raw)}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
