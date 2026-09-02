import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "About Us | Zebo Healthcare" };

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Us"
        intro={`Getting to know ${siteConfig.tradingName} and the people behind our care.`}
      />
      <ContentSection heading="Our Story">
        <p>Company story — content pending from client (brief §11).</p>
      </ContentSection>
      <ContentSection heading="Mission & Values">
        <p>Mission and values statement — content pending from client.</p>
      </ContentSection>
      <ContentSection heading="Leadership & Registered Manager">
        <p>Leadership/registered manager profile and bio — content pending from client.</p>
      </ContentSection>
      <ContentSection heading="Accreditations & Regulator Status">
        <p>{siteConfig.cqcStatus}. No regulator badge is shown until registration is confirmed (brief §2, §7).</p>
      </ContentSection>
      <ContentSection heading="Safeguarding Commitment">
        <p>Safeguarding commitment statement — content pending from client.</p>
      </ContentSection>
    </div>
  );
}
