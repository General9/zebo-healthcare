// Core values supplied by the client for the homepage.

export type CoreValueIcon = "integrity" | "transparency" | "reliability" | "people-first";

export interface CoreValue {
  title: string;
  description: string;
  icon: CoreValueIcon;
}

export const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    description: "We do what's right for the client, and for the person receiving care.",
    icon: "integrity",
  },
  {
    title: "Transparency",
    description:
      "Openness guides every decision we make. We earn trust through clear communication and by consistently following through on what we say.",
    icon: "transparency",
  },
  {
    title: "Reliability",
    description:
      "We show up when it matters most. Consistent, dependable staffing that care providers can rely on, day or night.",
    icon: "reliability",
  },
  {
    title: "People First",
    description:
      "Our people are the heart of what we do. We invest in our associates' growth and wellbeing, because great care starts with great support.",
    icon: "people-first",
  },
];
