import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import EnquiryCta from "@/components/EnquiryCta";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service ? `${service.name} | Zebo Healthcare` : "Zebo Healthcare" };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const ctaHref = service.audience === "b2b" ? "/contact?type=staff-request" : "/contact";

  return (
    <div>
      <PageHeader title={service.name} intro={service.positioning} />

      {service.keyContent.map((heading) => (
        <ContentSection key={heading} heading={heading}>
          <p>Content pending from client/copywriter (brief §11).</p>
        </ContentSection>
      ))}

      <div className="mx-auto max-w-3xl px-6 pb-16">
        <EnquiryCta href={ctaHref} label={service.ctaLabel} />
      </div>
    </div>
  );
}
