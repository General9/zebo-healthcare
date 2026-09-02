// Business background from Website brief.pdf §2.
// Fields still marked "[Client to confirm]" are unresolved in the brief itself —
// keep them as literal placeholders (grep-able) rather than guessing real values.

export const siteConfig = {
  tradingName: "Zebo Healthcare Services",

  /** Never render a CQC/regulator badge or "CQC-registered" claim — see brief §2 & §7. */
  cqcStatus: "CQC registration in progress",

  coverageAreas: ["Surrey", "Bedfordshire", "Buckinghamshire", "Northamptonshire", "Hampshire"],
  companyRegNumber: "17338840",

  contact: {
    phone: "07341859179",
    email: "info@zebohealthcare.co.uk",
    address: "Office headquarters in Bedfordshire",
  },

  goals: {
    primary: "Generate client/family enquiries for care services",
    secondary: [
      "Build trust and credibility",
      "Support future recruitment of care staff",
      "Rank locally for care-related search terms",
    ],
  },
} as const;

/** e.g. "Surrey, Bedfordshire, Buckinghamshire, Northamptonshire and Hampshire" */
export function formatCoverageAreas(): string {
  const areas = siteConfig.coverageAreas;
  if (areas.length <= 1) return areas.join("");
  return `${areas.slice(0, -1).join(", ")} and ${areas[areas.length - 1]}`;
}
