import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import EnquiryCta from "@/components/EnquiryCta";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export const metadata = { title: "About Zebo Healthcare | Zebo Healthcare" };

const values = [
  {
    title: "Dignity and respect",
    description: "we treat every person we support as an individual, never as a diagnosis or a task.",
  },
  {
    title: "Honesty and transparency",
    description:
      "Openness guides every decision we make. We earn trust through clear communication and consistently following through what we say.",
  },
  {
    title: "Safety first",
    description: "robust recruitment, training and safeguarding practices underpin everything we do.",
  },
  {
    title: "Reliability",
    description: "we show up when it matters most. Consistent, dependable support that care providers can rely on.",
  },
  {
    title: "People First",
    description:
      "Our people are the heart of what we do. We invest in our people's growth and wellbeing, because great care starts with great support.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Zebo Healthcare"
        intro="At Zebo Healthcare, we believe good care starts with really knowing someone: their routines, their preferences, and what matters most to them. We are a UK-based care provider supporting adults, children and families, delivering personal care, live-in care, supported living for young adults and adults, children's services, learning disability support, and staffing solutions for care homes."
      />

      <ContentSection heading="Our story">
        <p>
          Zebo Healthcare was founded with a simple belief: that everyone deserves care that
          treats them as an individual, not a task on a rota. Our founder, who has over 10 years
          of experience in the care sector, set out to build a care organisation that puts
          relationships first, one where clients, families and care staff are all treated with
          the same honesty, respect and attention to detail we would want for our own loved ones.
        </p>
        <p className="mt-3">
          We are a young, growing company, and we are proud of that. It means we are building our
          services around what people actually need today, rather than following a template drawn
          up years ago. Every process we put in place, from how we match carers to clients to how
          we train and support our staff, is designed with real people in mind.
        </p>
      </ContentSection>

      <ContentSection heading="Our mission">
        <p>
          To provide safe, reliable and genuinely person-centred care that helps people live with
          dignity, independence and comfort, whether that is in their own home, in a care setting,
          or during life&apos;s most difficult moments.
        </p>
      </ContentSection>

      <ContentSection heading="Our values">
        <ul className="list-disc space-y-2 pl-5">
          {values.map((value) => (
            <li key={value.title}>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">{value.title}:</span>{" "}
              {value.description}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection heading="Why choose us">
        <p>
          We are small enough to know the people we support by name, and structured enough to
          deliver care safely and professionally. Every member of our care team is carefully
          recruited, vetted and trained, and every care plan is built around the person, not the
          other way round.
        </p>
      </ContentSection>

      <ContentSection heading="Regulator status">
        <p>{siteConfig.cqcStatus}.</p>
      </ContentSection>

      <div className="mx-auto w-full max-w-3xl px-6 pt-8">
        <p className="text-zinc-600 dark:text-zinc-400">
          Ready to talk about care for yourself or a loved one? Get in touch with our friendly
          team today for a no-obligation conversation.
        </p>
        <div className="mt-4">
          <EnquiryCta href="/contact" label="Enquire Now" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 pb-16">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Our services</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block overflow-hidden rounded-lg border border-zinc-200 transition hover:border-teal-700 hover:shadow-sm dark:border-zinc-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`/services/${service.slug}.jpg`}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <p className="p-3 text-sm font-medium text-zinc-900 dark:text-zinc-50">{service.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
