"use server";

import { sendFormEmail } from "@/lib/mail";
import { siteConfig } from "@/lib/site-config";

const RECIPIENT = process.env.FORM_RECIPIENT_EMAIL ?? siteConfig.contact.email;

export type StaffRegistrationFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitStaffRegistration(
  _prevState: StaffRegistrationFormState,
  formData: FormData
): Promise<StaffRegistrationFormState> {
  // Honeypot: real visitors never see or fill this field, so anything in it
  // means a bot filled it — silently drop the submission.
  if (formData.get("company_website")) {
    return { status: "idle" };
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim();
  const experience = String(formData.get("experience") ?? "").trim();
  const areas = String(formData.get("areas") ?? "").trim();
  const qualifications = String(formData.get("qualifications") ?? "").trim();
  const rightToWork = String(formData.get("rightToWork") ?? "").trim();
  const canDrive = String(formData.get("canDrive") ?? "").trim();
  const availability = formData.getAll("availability").map(String);
  const dbsStatus = String(formData.get("dbsStatus") ?? "").trim();
  const consent = formData.get("consent");

  if (
    !fullName ||
    !phone ||
    !email ||
    !role ||
    !experience ||
    !areas ||
    !rightToWork ||
    !canDrive ||
    availability.length === 0 ||
    !dbsStatus ||
    !consent
  ) {
    return { status: "error", message: "Please fill in all required fields and confirm consent." };
  }

  try {
    await sendFormEmail({
      to: RECIPIENT,
      subject: `New staff registration from ${fullName}`,
      replyTo: email,
      fields: [
        { label: "Full name", value: fullName },
        { label: "Phone number", value: phone },
        { label: "Email address", value: email },
        { label: "Role / discipline", value: role },
        { label: "Years of care experience", value: experience },
        { label: "Areas willing to work in / postcode", value: areas },
        { label: "Relevant qualifications", value: qualifications },
        { label: "Right to work in the UK", value: rightToWork },
        { label: "Can you drive?", value: canDrive },
        { label: "Availability", value: availability.join(", ") },
        { label: "Current DBS check status", value: dbsStatus },
      ],
    });
    return { status: "success" };
  } catch (error) {
    console.error("Failed to send staff registration email", error);
    return {
      status: "error",
      message: "Something went wrong sending your registration. Please call us directly instead.",
    };
  }
}
