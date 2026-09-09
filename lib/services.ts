// The service lines from Website brief.pdf §3 (plus Supported Living, added
// later per Website content.docx), in that order.
// `audience` drives which CTA a service page/card renders: "family" pages get
// the client enquiry CTA, the "b2b" page (Care Homes) gets the staffing CTA —
// per the brief's explicit instruction that these must never share a CTA.

export type Audience = "family" | "b2b";

/** A page section — either a bulleted list or a single paragraph, not both. */
export interface ServiceSection {
  heading: string;
  bullets?: string[];
  paragraph?: string;
}

export interface Service {
  slug: string;
  name: string;
  positioning: string;
  audience: Audience;
  ctaLabel: string;
  /** Body copy from Service_Pages_Content.docx. */
  sections: ServiceSection[];
}

export const services: Service[] = [
  {
    slug: "adult-personal-care",
    name: "Adult Personal Care",
    positioning:
      "Everyday support with dignity — washing, dressing, medication and meals — so clients stay independent at home.",
    audience: "family",
    ctaLabel: "Enquire Now",
    sections: [
      {
        heading: "What's Included",
        bullets: [
          "Assistance with washing, bathing, dressing and personal hygiene, delivered with dignity and respect.",
          "Support with mobility, including help moving around the home and transferring safely between positions.",
          "Support with medication, including prompting and administration where this forms part of the agreed care plan.",
          "Help with meal preparation and nutrition, including support for specific dietary requirements.",
          "Light domestic support connected to daily wellbeing, such as tidying living areas used by the individual.",
        ],
      },
      {
        heading: "Who It's For",
        paragraph:
          "This service is for adults who need support with everyday tasks to remain living safely and comfortably in their own home. This includes older adults, people recovering from illness, injury or surgery, and individuals living with long term health conditions or disabilities.",
      },
      {
        heading: "How to Arrange It",
        bullets: [
          "Contact Zebo Healthcare Limited to discuss the type and level of support required.",
          "A needs assessment is arranged, usually involving a visit to the individual's home, to understand their routine, preferences and any risks that need to be managed.",
          "A personalised care plan is developed, setting out the tasks to be carried out and the frequency of visits.",
          "Care begins on the agreed start date, with the plan reviewed regularly and adjusted as circumstances change.",
        ],
      },
    ],
  },
  {
    slug: "live-in-care",
    name: "Live-in Care",
    positioning:
      "A dedicated carer living in the home, offering round-the-clock support as a genuine alternative to residential care.",
    audience: "family",
    ctaLabel: "Enquire Now",
    sections: [
      {
        heading: "What's Included",
        bullets: [
          "A dedicated live-in carer who resides in the individual's home, providing support throughout the day and being available overnight.",
          "Support with personal care, medication, mobility and meal preparation, tailored to the individual's routine.",
          "Companionship and support to maintain hobbies, interests and social connections.",
          "Help with household tasks connected to daily living, such as laundry and light cleaning.",
          "Careful matching of carers to individuals, taking into account personality, interests and specific care needs, with cover arranged for the carer's rest periods and time off.",
        ],
      },
      {
        heading: "Who It's For",
        paragraph:
          "This service is for individuals who wish to remain in their own home rather than move into residential care, but who need a greater level of support than visiting care can provide. It is often considered by families as an alternative to a care home for a relative with more complex or continuous care needs.",
      },
      {
        heading: "How to Arrange It",
        bullets: [
          "Contact Zebo Healthcare Limited to discuss the individual's needs, home environment and preferences for a carer.",
          "A detailed assessment is carried out to build a full picture of daily routines, care needs and any risks to be managed.",
          "A suitable live-in carer is matched to the individual, and a personalised care plan is agreed with the individual and their family.",
          "The live-in arrangement begins on the agreed date, with regular reviews and ongoing support from Zebo Healthcare Limited.",
        ],
      },
    ],
  },
  {
    slug: "supported-living",
    name: "Supported Living",
    positioning:
      "Tailored support for young adults and adults to live as independently as possible in their own home or shared accommodation.",
    audience: "family",
    ctaLabel: "Enquire Now",
    sections: [
      {
        heading: "What's Included",
        bullets: [
          "Support for young adults and adults to live independently in their own home or in supported accommodation.",
          "Development of practical life skills, including budgeting, cooking, shopping and managing a household.",
          "Support to access education, training, employment or voluntary opportunities.",
          "Encouragement to build and maintain community connections and social relationships.",
          "Flexible support hours agreed around the individual, ranging from a few hours a week to more intensive, regular support.",
        ],
      },
      {
        heading: "Who It's For",
        paragraph:
          "This service is for young adults and adults who want to live independently but benefit from a level of ongoing support, including individuals with learning disabilities, physical disabilities or mental health needs who are working towards greater independence.",
      },
      {
        heading: "How to Arrange It",
        bullets: [
          "Contact Zebo Healthcare Limited to discuss the individual's goals and the level of support being sought.",
          "An assessment is arranged to understand the individual's needs, existing skills and the areas where support would be most valuable.",
          "A support plan is agreed, setting out the goals to be worked towards and the support to be provided, including accommodation arrangements where relevant.",
          "Support begins according to the agreed plan, with progress reviewed regularly and the plan adjusted as the individual's independence develops.",
        ],
      },
    ],
  },
  {
    slug: "childrens-services",
    name: "Children's Services",
    positioning:
      "Specialist, safeguarding-led care for children and young people with additional or complex needs.",
    audience: "family",
    ctaLabel: "Enquire Now",
    sections: [
      {
        heading: "What's Included",
        bullets: [
          "Support tailored to the needs of children and young people with additional or complex needs.",
          "Assistance with daily routines, personal care and mobility, delivered in an age appropriate and reassuring way.",
          "Support to attend school, therapy sessions and other appointments.",
          "Respite support for families, giving parents and carers time to rest while their child continues to receive consistent, familiar care.",
          "Close working with parents, guardians and, where involved, other professionals supporting the child, to ensure a consistent approach.",
        ],
      },
      {
        heading: "Who It's For",
        paragraph:
          "This service is for children and young people with additional needs, disabilities or complex health requirements, and for the families and guardians who care for them and are seeking additional support at home or in the community.",
      },
      {
        heading: "How to Arrange It",
        bullets: [
          "Contact Zebo Healthcare Limited to discuss your child's needs and the type of support you are looking for.",
          "An assessment is arranged, involving the family and, where appropriate, the child, to understand routines, preferences and any relevant medical or care information.",
          "A support plan is developed in partnership with parents or guardians and, where relevant, other professionals involved in the child's care.",
          "Support begins according to the agreed plan, with regular reviews to ensure it continues to meet the child's needs as they grow and circumstances change.",
        ],
      },
    ],
  },
  {
    slug: "learning-disabilities",
    name: "Learning Disabilities",
    positioning:
      "Person-centred support that builds independence, confidence and community participation.",
    audience: "family",
    ctaLabel: "Enquire Now",
    sections: [
      {
        heading: "What's Included",
        bullets: [
          "Person centred support with daily living tasks, tailored to the individual's abilities, preferences and goals.",
          "Support to build and maintain independence, including practical skills such as budgeting, meal preparation and using public transport.",
          "Assistance with communication, where needed, using approaches suited to the individual.",
          "Support to access community activities, social opportunities and appointments.",
          "A support plan developed together with the individual and, where appropriate, their family or advocate, and reviewed regularly to reflect changing needs.",
        ],
      },
      {
        heading: "Who It's For",
        paragraph:
          "This service is for adults and young people with learning disabilities who benefit from tailored, one to one or group support, and for families seeking a consistent and person centred approach to care. Support is adapted to each individual, from occasional assistance to more regular, structured input.",
      },
      {
        heading: "How to Arrange It",
        bullets: [
          "Get in touch with Zebo Healthcare Limited to discuss the support being sought, either as the individual, a family member or a referring professional.",
          "A member of the team will arrange an initial conversation or visit to understand needs, preferences and any relevant background information.",
          "A personalised support plan is prepared and agreed with the individual and, where appropriate, their family or representative.",
          "Support begins according to the agreed plan, with regular reviews to ensure it continues to meet the individual's needs.",
        ],
      },
    ],
  },
  {
    slug: "care-homes",
    name: "Care Homes",
    positioning:
      "Reliable, compliance-checked care staff supplied to care home operators, filling shifts quickly without compromising on quality.",
    audience: "b2b",
    ctaLabel: "Request Staff",
    sections: [
      {
        heading: "What's Included",
        bullets: [
          "Supply of trained and vetted care staff to registered care home operators, including healthcare assistants, senior carers and, where required, registered nurses.",
          "Cover for both planned rotas and short notice absence, alongside longer term placements where a care home wishes to build a consistent staffing arrangement with Zebo Healthcare Limited.",
          "Staff who have completed relevant mandatory training, including moving and handling, safeguarding, infection control and medication awareness.",
          "Compliance checks carried out prior to placement, including enhanced DBS clearance, right to work verification, employment references and identity checks.",
          "A single point of contact at Zebo Healthcare Limited to coordinate bookings, confirm shift patterns and manage any changes to requirements.",
        ],
      },
      {
        heading: "Who It's For",
        paragraph:
          "This service is intended for care home operators, nursing homes and residential care providers who need reliable, appropriately trained staff to supplement their own workforce. It is a business to business staffing service and is not a placement or advisory service for families seeking a care home for a relative.",
      },
      {
        heading: "How to Arrange It",
        bullets: [
          "Contact Zebo Healthcare Limited to discuss your staffing requirements, including the roles needed, shift patterns and any specific skills or experience required.",
          "Zebo Healthcare Limited will confirm staff availability and share relevant compliance documentation for your review.",
          "Terms are agreed, including rates and the notice period for future bookings.",
          "Staff are placed according to the agreed schedule, with ongoing communication maintained between your home and Zebo Healthcare Limited throughout the placement.",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
