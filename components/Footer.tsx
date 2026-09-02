import Link from "next/link";
import { siteConfig, formatCoverageAreas } from "@/lib/site-config";
import { policies } from "@/lib/policies";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">{siteConfig.tradingName}</p>
            <p className="mt-2">{siteConfig.cqcStatus}</p>
            <p className="mt-1">{formatCoverageAreas()}</p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">Contact</p>
            <p className="mt-2">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-teal-700 dark:hover:text-teal-500">
                {siteConfig.contact.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-teal-700 dark:hover:text-teal-500">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="mt-1">{siteConfig.contact.address}</p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">Policies</p>
            <ul className="mt-2 space-y-1">
              {policies.map((policy) => (
                <li key={policy.slug}>
                  <Link href={`/policies/${policy.slug}`} className="hover:text-teal-700 dark:hover:text-teal-500">
                    {policy.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-600">
          Company registration number: {siteConfig.companyRegNumber}
        </p>
      </div>
    </footer>
  );
}
