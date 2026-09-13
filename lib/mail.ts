import { Resend } from "resend";

/**
 * Until zebohealthcare.co.uk is verified in Resend, sends must go through
 * Resend's shared onboarding@resend.dev domain — which only delivers to the
 * email address on the Resend account itself. Swap RESEND_FROM_EMAIL once a
 * verified domain is set up so mail can go to arbitrary recipients again.
 */
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Zebo Healthcare <onboarding@resend.dev>";

let resendClient: Resend | null = null;

function getClient(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set");
  }
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendFormEmail({
  to,
  subject,
  replyTo,
  fields,
}: {
  to: string;
  subject: string;
  replyTo?: string;
  fields: { label: string; value: string }[];
}): Promise<void> {
  const text = fields.map(({ label, value }) => `${label}: ${value || "—"}`).join("\n");
  const html = `<div style="font-family: sans-serif; font-size: 14px; color: #18181b;">${fields
    .map(
      ({ label, value }) =>
        `<p style="margin: 0 0 8px;"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value || "—")}</p>`
    )
    .join("")}</div>`;

  const { error } = await getClient().emails.send({
    from: FROM_EMAIL,
    to,
    replyTo,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
