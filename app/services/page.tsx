import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const metadata = { title: "Services | Zebo Healthcare" };

export default function ServicesOverviewPage() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        intro="Seven care service lines, each tailored to a different need."
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
