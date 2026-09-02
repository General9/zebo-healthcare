import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import EnquiryCta from "@/components/EnquiryCta";

export const metadata = { title: "Careers | Zebo Healthcare" };

export default function CareersPage() {
  return (
    <div>
      <PageHeader
        title="Work With Us"
        intro="Join the Zebo Healthcare team — kept separate from client enquiries so the two never get mixed up."
      />
      <ContentSection heading="Why Work for Zebo Healthcare">
        <p>Content pending from client (brief §11).</p>
      </ContentSection>
      <ContentSection heading="Current Vacancies">
        <p>Live vacancy listings are a future enhancement — see Open Question 3 (brief §13).</p>
      </ContentSection>
      <ContentSection heading="Register Your Interest">
        <p>
          The full quick-registration form (fields in brief §6.2 — role, right to work, DBS
          status, CV upload, etc.) is a separate build once Open Questions 2 &amp; 6 are
          answered. For now:
        </p>
        <div className="mt-4">
          <EnquiryCta href="/careers" label="Register Your Interest" />
        </div>
      </ContentSection>
    </div>
  );
}
