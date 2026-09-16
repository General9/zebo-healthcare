import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

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

/** Escapes then converts newlines to <br> so multi-line values (e.g. a message textarea) still wrap. */
function escapeHtmlMultiline(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

// Brand palette pulled from the site's Tailwind classes (teal-950/700/500, zinc neutrals)
// so the notification emails read as an extension of the site rather than a generic form dump.
const BRAND = {
  headerBg: "#042f2e", // teal-950
  accent: "#14b8a6", // teal-500
  accentDark: "#0f766e", // teal-700
  ink: "#18181b", // zinc-900
  subtleInk: "#52525b", // zinc-600
  muted: "#71717a", // zinc-500
  border: "#e4e4e7", // zinc-200
  panel: "#fafafa", // zinc-50
};

function buildEmailHtml({
  heading,
  intro,
  fields,
}: {
  heading: string;
  intro: string;
  fields: { label: string; value: string }[];
}): string {
  const rows = fields
    .map(({ label, value }, index) => {
      const borderTop = index === 0 ? "" : `border-top:1px solid ${BRAND.border};`;
      return `
        <tr>
          <td style="padding:14px 0;${borderTop}">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.accentDark};padding-bottom:4px;">
                  ${escapeHtml(label)}
                </td>
              </tr>
              <tr>
                <td style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:${BRAND.ink};">
                  ${value ? escapeHtmlMultiline(value) : `<span style="color:${BRAND.muted};">&mdash;</span>`}
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
    })
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(heading)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f4f5;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(intro)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f5;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#ffffff;border-radius:10px;overflow:hidden;border:1px solid ${BRAND.border};">
            <!-- Header -->
            <tr>
              <td style="background-color:${BRAND.headerBg};padding:28px 40px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;letter-spacing:0.03em;color:#ffffff;">
                  ${escapeHtml(siteConfig.tradingName)}
                </span>
              </td>
            </tr>
            <tr>
              <td style="background-color:${BRAND.accent};height:4px;line-height:4px;font-size:0;">&nbsp;</td>
            </tr>
            <!-- Title -->
            <tr>
              <td style="padding:32px 40px 4px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;color:${BRAND.ink};">
                  ${escapeHtml(heading)}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px 24px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:${BRAND.subtleInk};">
                  ${escapeHtml(intro)}
                </span>
              </td>
            </tr>
            <!-- Fields -->
            <tr>
              <td style="padding:0 40px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 0;">&nbsp;</td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color:${BRAND.panel};border-top:1px solid ${BRAND.border};padding:20px 40px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${BRAND.muted};">
                  Automatically generated from the form at zebohealthcare.co.uk. Reply to this email to respond directly.
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendFormEmail({
  to,
  subject,
  replyTo,
  heading,
  intro,
  fields,
}: {
  to: string;
  subject: string;
  replyTo?: string;
  /** Short title shown at the top of the email body, e.g. "New Enquiry". */
  heading: string;
  /** One-line summary shown under the heading, e.g. "Jane Doe is enquiring about Live-in Care in SW1A." */
  intro: string;
  fields: { label: string; value: string }[];
}): Promise<void> {
  const text = [heading, intro, "", ...fields.map(({ label, value }) => `${label}: ${value || "—"}`)].join("\n");
  const html = buildEmailHtml({ heading, intro, fields });

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
