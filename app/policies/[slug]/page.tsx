import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import { policies, getPolicyBySlug } from "@/lib/policies";

export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({ params }: PageProps<"/policies/[slug]">) {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);
  return { title: policy ? `${policy.title} | Zebo Healthcare` : "Zebo Healthcare" };
}

export default async function PolicyPage({ params }: PageProps<"/policies/[slug]">) {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);
  if (!policy) notFound();

  return (
    <div>
      <PageHeader title={policy.title} />
      <ContentSection heading="Policy Text">
        <p>
          Pending review and sign-off by the client&apos;s compliance lead or solicitor before
          publishing (brief §11).
        </p>
      </ContentSection>
    </div>
  );
}
