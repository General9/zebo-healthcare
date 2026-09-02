// The 7 service lines from Website brief.pdf §3, in the brief's table order.
// `audience` drives which CTA a service page/card renders: "family" pages get
// the client enquiry CTA, the "b2b" page (Care Homes) gets the staffing CTA —
// per the brief's explicit instruction that these must never share a CTA.

export type Audience = "family" | "b2b";

export interface Service {
  slug: string;
  name: string;
  positioning: string;
  audience: Audience;
  ctaLabel: string;
  /** Section headings from the brief §4 "Key content" column for this page. */
  keyContent: string[];
}

export const services: Service[] = [
  {
    slug: "adult-personal-care",
    name: "Adult Personal Care",
    positioning:
      "Everyday support with dignity — washing, dressing, medication and meals — so clients stay independent at home.",
    audience: "family",
    ctaLabel: "Enquire Now",
    keyContent: [
      "What's Included",
      "Who It's For",
      "How to Arrange It",
    ],
  },
  {
    slug: "live-in-care",
    name: "Live-in Care",
    positioning:
      "A dedicated carer living in the home, offering round-the-clock support as a genuine alternative to residential care.",
    audience: "family",
    ctaLabel: "Enquire Now",
    keyContent: [
      "How Live-in Care Works",
      "Carer Matching Process",
      "A Typical Day",
      "Cost Guidance",
      "Live-in Care vs. a Care Home",
    ],
  },
  {
    slug: "childrens-services",
    name: "Children's Services",
    positioning:
      "Specialist, safeguarding-led care for children and young people with additional or complex needs.",
    audience: "family",
    ctaLabel: "Enquire Now",
    keyContent: [
      "Age Ranges & Conditions Supported",
      "Safeguarding & DBS Assurance",
      "School & Holiday Support",
    ],
  },
  {
    slug: "learning-disabilities",
    name: "Learning Disabilities",
    positioning:
      "Person-centred support that builds independence, confidence and community participation.",
    audience: "family",
    ctaLabel: "Enquire Now",
    keyContent: [
      "Person-Centred, Outcomes-Focused Support",
      "Specialist Staff Training",
      "Community Inclusion",
    ],
  },
  {
    slug: "care-homes",
    name: "Care Homes",
    positioning:
      "Reliable, compliance-checked care staff supplied to care home operators, filling shifts quickly without compromising on quality.",
    audience: "b2b",
    ctaLabel: "Request Staff",
    keyContent: [
      "How Staff Supply Works",
      "Compliance & Vetting Standards",
      "Shift Cover Process",
    ],
  },
  {
    slug: "complex-care",
    name: "Complex Care",
    positioning:
      "Nurse-led packages for clients with clinical or long-term health needs, delivered safely at home.",
    audience: "family",
    ctaLabel: "Enquire Now",
    keyContent: [
      "Clinical & Complex Conditions Supported",
      "Nurse-Led Oversight",
      "Care Package Process",
    ],
  },
  {
    slug: "palliative-care",
    name: "Palliative Care",
    positioning:
      "Compassionate, dignified end-of-life support for clients and their families, coordinated with clinical teams.",
    audience: "family",
    ctaLabel: "Enquire Now",
    keyContent: [
      "Compassionate End-of-Life Support",
      "Family Support",
      "Coordination with Hospice, District Nurses & GP",
      "24/7 Availability",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
