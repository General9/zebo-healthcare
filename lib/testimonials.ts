// Sample/placeholder testimonials — NOT real client reviews.
// Brief §7 & §11: testimonials require documented consent before publishing,
// and no identifying details for children's/vulnerable-adult services without
// written parental/guardian consent. Replace every entry here with a real,
// consented testimonial before launch — do not publish this file as-is.

export interface Testimonial {
  quote: string;
  attribution: string;
  relation: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The carers treat my mother with such patience and respect. She looks forward to their visits, which says everything.",
    attribution: "Sample testimonial",
    relation: "Daughter of an Adult Personal Care client",
  },
  {
    quote:
      "Having a live-in carer meant Dad could stay in his own home. The whole family felt reassured knowing someone was always there.",
    attribution: "Sample testimonial",
    relation: "Family member of a Live-in Care client",
  },
  {
    quote:
      "Our son's support worker understands his needs completely. The safeguarding-led approach gave us real peace of mind.",
    attribution: "Sample testimonial",
    relation: "Parent, Children's Services",
  },
  {
    quote:
      "The team filled our weekend shifts at short notice without ever compromising on the quality of care our residents receive.",
    attribution: "Sample testimonial",
    relation: "Care home manager, staffing supply",
  },
  {
    quote:
      "During a difficult time, the palliative care team were compassionate, professional, and coordinated closely with our GP throughout.",
    attribution: "Sample testimonial",
    relation: "Family member, Palliative Care",
  },
];
