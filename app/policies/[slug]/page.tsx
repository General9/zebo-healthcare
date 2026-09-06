import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
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
      <div className="mx-auto w-full max-w-3xl px-6 py-8">
        <div className="space-y-8">
          {policy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-500">
          Last updated: {policy.lastUpdated}
        </p>
      </div>
    </div>
  );
}
