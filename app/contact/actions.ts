"use server";

import { sendFormEmail } from "@/lib/mail";
import { siteConfig } from "@/lib/site-config";

const RECIPIENT = process.env.FORM_RECIPIENT_EMAIL ?? siteConfig.contact.email;

export type EnquiryFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitEnquiry(
  _prevState: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  // Honeypot: real visitors never see or fill this field, so anything in it
  // means a bot filled it — silently drop the submission.
  if (formData.get("company_website")) {
    return { status: "idle" };
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const relationship = String(formData.get("relationship") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const postcode = String(formData.get("postcode") ?? "").trim();
  const urgency = String(formData.get("urgency") ?? "").trim();
  const bestTime = String(formData.get("bestTime") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const preferredContact = String(formData.get("preferredContact") ?? "").trim();
  const consent = formData.get("consent");

  if (!fullName || !relationship || !phone || !email || !service || !postcode || !urgency || !consent) {
    return { status: "error", message: "Please fill in all required fields and confirm consent." };
  }

  try {
    await sendFormEmail({
      to: RECIPIENT,
      subject: `New enquiry from ${fullName}`,
      replyTo: email,
      fields: [
        { label: "Full name", value: fullName },
        { label: "Relationship to person needing care", value: relationship },
        { label: "Phone number", value: phone },
        { label: "Email address", value: email },
        { label: "Service enquiring about", value: service },
        { label: "Location / postcode", value: postcode },
        { label: "When is care needed?", value: urgency },
        { label: "Best time to call", value: bestTime },
        { label: "Preferred contact method", value: preferredContact },
        { label: "Message / additional details", value: message },
      ],
    });
    return { status: "success" };
  } catch (error) {
    console.error("Failed to send enquiry email", error);
    return {
      status: "error",
      message: "Something went wrong sending your enquiry. Please call us directly instead.",
    };
  }
}
