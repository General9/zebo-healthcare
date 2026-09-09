"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const availabilityOptions = ["Full-time", "Part-time", "Bank / relief work"];

/**
 * Front-end only — fields match brief §6.2 (CV upload excluded per request),
 * but there's no backend wired up yet (§6.3's recruitment-inbox routing is
 * Open Question 2). Submitting just shows the success state below; nothing
 * is sent anywhere.
 */
export default function StaffRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [availabilityError, setAvailabilityError] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Honeypot: real visitors never see or fill this field, so anything in
    // it means a bot filled it — silently drop the submission.
    if (formData.get("company_website")) return;

    if (formData.getAll("availability").length === 0) {
      setAvailabilityError(true);
      return;
    }
    setAvailabilityError(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-teal-200 bg-teal-50 p-6 dark:border-teal-900 dark:bg-teal-950/30">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Thank you for registering your interest
        </h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A member of our recruitment team will be in touch. If you&apos;d like to speak to us
          sooner, call us on{" "}
          <a href={`tel:${siteConfig.contact.phone}`} className="font-medium text-teal-700 hover:underline">
            {siteConfig.contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from sighted and screen-reader users, left open for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website_staff">Leave this field blank</label>
        <input type="text" id="company_website_staff" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="staffFullName" required>
          <input id="staffFullName" name="fullName" type="text" required className={inputClass} />
        </Field>

        <Field label="Phone number" htmlFor="staffPhone" required>
          <input id="staffPhone" name="phone" type="tel" required className={inputClass} />
        </Field>

        <Field label="Email address" htmlFor="staffEmail" required>
          <input id="staffEmail" name="email" type="email" required className={inputClass} />
        </Field>

        <Field label="Role / discipline" htmlFor="role" required>
          <select id="role" name="role" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a role
            </option>
            <option value="care-assistant">Care Assistant</option>
            <option value="senior-carer">Senior Carer</option>
            <option value="support-worker">Support Worker</option>
            <option value="nurse">Nurse (RGN/RMN)</option>
            <option value="other">Other</option>
          </select>
        </Field>

        <Field label="Years of care experience" htmlFor="experience" required>
          <select id="experience" name="experience" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select one
            </option>
            <option value="none">None / entry level</option>
            <option value="under-1-year">Under 1 year</option>
            <option value="1-3-years">1–3 years</option>
            <option value="3-plus-years">3+ years</option>
          </select>
        </Field>

        <Field label="Areas willing to work in / postcode" htmlFor="areas" required>
          <input id="areas" name="areas" type="text" required className={inputClass} />
        </Field>
      </div>

      <Field label="Relevant qualifications" htmlFor="qualifications">
        <input
          id="qualifications"
          name="qualifications"
          type="text"
          placeholder="e.g. NVQ/QCF, Care Certificate"
          className={inputClass}
        />
      </Field>

      <fieldset>
        <legend className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Right to work in the UK <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <label className="flex items-center gap-2">
            <input type="radio" name="rightToWork" value="yes" required className="h-4 w-4" />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rightToWork" value="no" className="h-4 w-4" />
            No
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rightToWork" value="requires-sponsorship" className="h-4 w-4" />
            Requires sponsorship
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Availability <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          {availabilityOptions.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input type="checkbox" name="availability" value={option} className="h-4 w-4" />
              {option}
            </label>
          ))}
        </div>
        {availabilityError && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">Select at least one option.</p>
        )}
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Current DBS check status <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <label className="flex items-center gap-2">
            <input type="radio" name="dbsStatus" value="have-valid-dbs" required className="h-4 w-4" />
            Have valid DBS
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="dbsStatus" value="willing-to-undergo" className="h-4 w-4" />
            Willing to undergo DBS
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="dbsStatus" value="not-sure" className="h-4 w-4" />
            Not sure
          </label>
        </div>
      </fieldset>

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
          <input type="checkbox" name="consent" required className="mt-1 h-4 w-4" />
          <span>
            I consent to being contacted about my registration and have read the{" "}
            <Link href="/policies/privacy-policy" className="text-teal-700 underline hover:no-underline">
              privacy notice
            </Link>
            . *
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
      >
        Register Your Interest
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
