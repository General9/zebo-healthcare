// Legal pages from Website brief.pdf §4 ("Policies" row) & §7.
// Content is a placeholder pending the client's compliance lead/solicitor
// review (brief §11) — not real legal copy.

export interface Policy {
  slug: string;
  title: string;
}

export const policies: Policy[] = [
  { slug: "privacy-policy", title: "Privacy Policy" },
  { slug: "cookie-policy", title: "Cookie Policy" },
  { slug: "safeguarding-policy", title: "Safeguarding Policy" },
  { slug: "complaints-procedure", title: "Complaints Procedure" },
  { slug: "terms-of-use", title: "Terms of Use" },
];

export function getPolicyBySlug(slug: string): Policy | undefined {
  return policies.find((policy) => policy.slug === slug);
}
