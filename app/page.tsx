import Link from "next/link";
import EnquiryCta from "@/components/EnquiryCta";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services } from "@/lib/services";
import { siteConfig, formatCoverageAreas } from "@/lib/site-config";
import { testimonials } from "@/lib/testimonials";
import { coreValues } from "@/lib/values";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero + enquiry CTA (brief §1 primary goal, §4 Home row) */}
      <section className="bg-teal-50 dark:bg-teal-950/20">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Compassionate care, delivered at home
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {siteConfig.tradingName} supports clients and families across{" "}
            {formatCoverageAreas()} with dignified, person-centred care.
          </p>
          <div className="mt-8">
            <EnquiryCta href="/contact" label="Make an Enquiry" />
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">Regulator status</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{siteConfig.cqcStatus}</p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">DBS-checked staff</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Every carer is vetted before placement
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">Areas covered</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{formatCoverageAreas()}</p>
          </div>
        </div>
      </section>

      {/* Service summary cards — all 7 lines, brief §3/§4 */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Our Services</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Our Core Values</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black">
                <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-500">{value.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials teaser — sample placeholders, see /testimonials for the consent disclaimer */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          What Families Say
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.relation} testimonial={testimonial} />
          ))}
        </div>
        <Link href="/testimonials" className="mt-6 inline-block text-sm font-medium text-teal-700 dark:text-teal-500">
          Read more testimonials &rarr;
        </Link>
      </section>
    </div>
  );
}
