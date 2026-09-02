import Link from "next/link";
import type { Service } from "@/lib/services";
import ServiceIcon from "@/components/ServiceIcon";

/** Shared by the Home summary grid and the Services overview page (brief §4). */
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block overflow-hidden rounded-lg border border-zinc-200 transition hover:border-teal-700 hover:shadow-sm dark:border-zinc-800"
    >
      <ServiceIcon slug={service.slug} />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {service.name}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {service.positioning}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-teal-700 dark:text-teal-500">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
