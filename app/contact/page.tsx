import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Contact Us | Zebo Healthcare" };

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <ContentSection heading="Get in Touch">
        <p>
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-teal-700">
            {siteConfig.contact.phone}
          </a>
        </p>
        <p className="mt-1">
          <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-teal-700">
            {siteConfig.contact.email}
          </a>
        </p>
        <p className="mt-1">{siteConfig.contact.address}</p>
      </ContentSection>
      <div className="mx-auto w-full max-w-3xl px-6 py-8">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Enquiry Form</h2>
        <div className="mt-6">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}
