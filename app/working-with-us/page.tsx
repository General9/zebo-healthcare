import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import EnquiryCta from "@/components/EnquiryCta";

export const metadata = { title: "Work With Zebo Healthcare | Zebo Healthcare" };

const whyWorkForUs = [
  "Flexible shifts to fit around your life: full-time, part-time, and bank/relief work available.",
  "Ongoing, paid training and clear pathways to develop your career in care.",
  "A genuinely supportive team: you are never just a name on a rota.",
  "Competitive pay, weekly/monthly pay options, and mileage where applicable.",
  "A company that listens: your feedback shapes how we work.",
];

const rolesWeRecruitFor = [
  "Care Assistants / Support Workers (personal care, live-in care)",
  "Live-in Carers",
  "Supported Living Support Workers (young adults and adults)",
  "Children's Support Workers",
  "Learning Disability Support Workers",
  "Care Home Staff for supply to partner care homes (Care Assistants, Senior Carers, Nurses)",
];

const recruitmentProcess = [
  "Step 1: Submit an application via our online form.",
  "Step 2: Telephone or video screening call.",
  "Step 3: Face-to-face or video interview.",
  "Step 4: Reference checks, right-to-work checks and enhanced DBS check.",
  "Step 5: Induction, mandatory training, and shadowing shifts before you work independently.",
];

export default function WorkingWithUsPage() {
  return (
    <div>
      <PageHeader
        title="Work With Zebo Healthcare"
        intro="Join a care team that values you as much as the people you support. We are always looking for compassionate, reliable care professionals to join us across our services, from personal care, live-in care and supported living to children's services and care home staffing."
      />

      <ContentSection heading="Why work for us">
        <ul className="list-disc space-y-1 pl-5">
          {whyWorkForUs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection heading="Roles we recruit for">
        <ul className="list-disc space-y-1 pl-5">
          {rolesWeRecruitFor.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection heading="What we look for">
        <p>
          You do not always need years of experience; you need patience, compassion, reliability
          and a genuine desire to make someone&apos;s day better. Where a role requires specific
          qualifications, clinical competencies or an enhanced DBS check, we will be clear about
          that in the job listing, and we will support you through training where needed.
        </p>
      </ContentSection>

      <ContentSection heading="Our recruitment process">
        <ul className="list-disc space-y-1 pl-5">
          {recruitmentProcess.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection heading="Training and development">
        <p>
          All staff complete our induction training programme covering safeguarding, moving and
          handling, medication awareness, infection control, and role-specific modules before
          starting work. We also offer ongoing training and support for staff who want to
          progress into senior or specialist roles.
        </p>
      </ContentSection>

      <ContentSection heading="Current vacancies">
        <p>Live vacancy listings are a future enhancement — see Open Question 3 (brief §13).</p>
      </ContentSection>

      <ContentSection heading="Register your interest">
        <p>
          Interested in joining us? Fill in our short registration form below and a member of our
          recruitment team will be in touch. The full quick-registration form (fields in brief
          §6.2 — role, right to work, DBS status, CV upload, etc.) is a separate build once Open
          Questions 2 &amp; 6 are answered, and must route to a dedicated recruitment inbox,
          separate from client enquiries, per brief §6. For now:
        </p>
        <div className="mt-4">
          <EnquiryCta href="/working-with-us" label="Register Your Interest" />
        </div>
      </ContentSection>
    </div>
  );
}
