import Link from "next/link";

interface EnquiryCtaProps {
  href: string;
  label: string;
  className?: string;
}

/**
 * Link-only for now — the brief's full enquiry/staff forms (§5, §6) are a
 * separate workstream. This just gets a working CTA on every page/card.
 */
export default function EnquiryCta({ href, label, className = "" }: EnquiryCtaProps) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-md bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 ${className}`}
    >
      {label}
    </Link>
  );
}
