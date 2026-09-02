import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import CountyMapLoader from "@/components/CountyMapLoader";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Areas We Cover | Zebo Healthcare" };

export default function AreasWeCoverPage() {
  return (
    <div>
      <PageHeader
        title="Areas We Cover"
        intro="Zebo Healthcare provides care services across the following counties."
      />
      <ContentSection heading="Counties We Cover">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {siteConfig.coverageAreas.map((area) => (
            <li key={area} className="font-medium text-zinc-900 dark:text-zinc-50">
              {area}
            </li>
          ))}
        </ul>
      </ContentSection>
      <div className="mx-auto w-full max-w-3xl px-6 pb-8">
        <CountyMapLoader />
        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
          Contains OS and ONS data © Crown copyright and database rights, Open Government Licence.
        </p>
      </div>
    </div>
  );
}
