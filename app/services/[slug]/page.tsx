import { notFound } from "next/navigation";
import Image, { type StaticImageData } from "next/image";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import EnquiryCta from "@/components/EnquiryCta";
import { services, getServiceBySlug } from "@/lib/services";
import adultPersonalCareImg from "@/public/services/adult-personal-care.jpg";
import careHomesImg from "@/public/services/care-homes.jpg";
import childrensServicesImg from "@/public/services/childrens-services.jpg";
import learningDisabilitiesImg from "@/public/services/learning-disabilities.jpg";
import liveInCareImg from "@/public/services/live-in-care.jpg";
import supportedLivingImg from "@/public/services/supported-living.jpg";

const serviceImages: Record<string, StaticImageData> = {
  "adult-personal-care": adultPersonalCareImg,
  "care-homes": careHomesImg,
  "childrens-services": childrensServicesImg,
  "learning-disabilities": learningDisabilitiesImg,
  "live-in-care": liveInCareImg,
  "supported-living": supportedLivingImg,
};

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

      <div className="mx-auto max-w-3xl px-6 pt-8">
        <Image
          src={serviceImages[service.slug]}
          alt={service.name}
          sizes="(min-width: 768px) 768px, 100vw"
          className="h-auto w-full rounded-lg"
          priority
        />
      </div>

      {service.sections.map((section) => (
        <ContentSection key={section.heading} heading={section.heading}>
          {section.bullets ? (
            <ul className="list-disc space-y-1 pl-5">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : (
            <p>{section.paragraph}</p>
          )}
        </ContentSection>
      ))}

      <div className="mx-auto max-w-3xl px-6 pb-16">
        <EnquiryCta href={ctaHref} label={service.ctaLabel} />
      </div>
    </div>
  );
}
