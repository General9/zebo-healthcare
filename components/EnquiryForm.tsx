"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

/**
 * Front-end only — fields match brief §5.1, but there's no backend wired up
 * yet (§5.2's CRM/notification routing is Open Question 2). Submitting just
 * shows the success state below; nothing is sent anywhere.
 */
export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Honeypot: real visitors never see or fill this field, so anything in
    // it means a bot filled it — silently drop the submission.
    if (formData.get("company_website")) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-teal-200 bg-teal-50 p-6 dark:border-teal-900 dark:bg-teal-950/30">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Thank you for your enquiry
        </h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A member of our care team will be in touch as soon as possible. If your enquiry is
          urgent, please call us directly on{" "}
          <a href={`tel:${siteConfig.contact.phone}`} className="font-medium text-teal-700 hover:underline">
            {siteConfig.contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      {/* Honeypot — hidden from sighted and screen-reader users, left open for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field blank</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="fullName" required>
          <input id="fullName" name="fullName" type="text" required className={inputClass} />
        </Field>

        <Field label="Relationship to person needing care" htmlFor="relationship" required>
          <select id="relationship" name="relationship" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select one
            </option>
            <option value="self">Self</option>
            <option value="family-member">Family member</option>
            <option value="professional-referrer">Professional referrer</option>
          </select>
        </Field>

        <Field label="Phone number" htmlFor="phone" required>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </Field>

        <Field label="Email address" htmlFor="email" required>
          <input id="email" name="email" type="email" required className={inputClass} />
        </Field>

        <Field label="Service enquiring about" htmlFor="service" required>
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="not-sure">Not sure / general enquiry</option>
          </select>
        </Field>

        <Field label="Location / postcode" htmlFor="postcode" required>
          <input id="postcode" name="postcode" type="text" required className={inputClass} />
        </Field>

        <Field label="When is care needed?" htmlFor="urgency" required>
          <select id="urgency" name="urgency" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select one
            </option>
            <option value="urgent">Urgent (within 48hrs)</option>
            <option value="within-2-weeks">Within 2 weeks</option>
            <option value="within-a-month">Within a month</option>
            <option value="just-researching">Just researching</option>
          </select>
        </Field>

        <Field label="Best time to call" htmlFor="bestTime">
          <input id="bestTime" name="bestTime" type="text" placeholder="e.g. weekday mornings" className={inputClass} />
        </Field>
      </div>

      <Field label="Message / additional details" htmlFor="message">
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </Field>

      <fieldset>
        <legend className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Preferred contact method
        </legend>
        <div className="mt-2 flex gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <label className="flex items-center gap-2">
            <input type="radio" name="preferredContact" value="phone" className="h-4 w-4" />
            Phone
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="preferredContact" value="email" className="h-4 w-4" />
            Email
          </label>
        </div>
      </fieldset>

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
          <input type="checkbox" name="consent" required className="mt-1 h-4 w-4" />
          <span>
            I consent to being contacted about my enquiry and have read the{" "}
            <Link href="/policies/privacy-policy" className="text-teal-700 underline hover:no-underline">
              privacy notice
            </Link>
            . *
          </span>
        </label>
        <label className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
          <input type="checkbox" name="marketingOptIn" className="mt-1 h-4 w-4" />
          <span>I&apos;d also like to receive occasional news and updates by email.</span>
        </label>
      </div>

      <button
        type="submit"
        className="rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
      >
        Submit Enquiry
      </button>
    </form>
  );
}

const inputClass =
  "mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}
