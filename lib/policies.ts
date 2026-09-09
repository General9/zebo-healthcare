// Legal pages from Website brief.pdf §4 ("Policies" row) & §7.
// Copy sourced from "Website content.docx" (client-supplied draft pack).
// Bracketed placeholders (e.g. [Registered Office Address], [Effective Date])
// are values the docx itself flags as still unconfirmed — left as literal
// placeholders rather than guessed. Company number and general contact email
// are already confirmed (see lib/site-config.ts) so those are filled in.
//
// Per the docx's own developer note: this is a solid working draft, but
// should be reviewed by a solicitor/compliance adviser before publishing,
// particularly once CQC registration and full operating locations are
// confirmed.

export interface PolicySection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface Policy {
  slug: string;
  title: string;
  sections: PolicySection[];
  lastUpdated: string;
}

export const policies: Policy[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "6 September 2026",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          `Zebo Healthcare Limited ("Zebo Healthcare", "we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, store and protect personal information when you visit our website, make an enquiry about our services, or apply to work with us. This policy is written in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`,
        ],
      },
      {
        heading: "Who we are",
        paragraphs: [
          "Zebo Healthcare Limited is a company registered in England and Wales (Company Number: 17338840), with its registered office at [Registered Office Address]. We are the data controller responsible for your personal data.",
        ],
      },
      {
        heading: "Information we collect",
        paragraphs: ["We may collect and process the following information about you:"],
        list: [
          "Contact details you provide via our enquiry forms (name, email address, phone number, address).",
          "Information about the care needs of yourself or a person you are enquiring on behalf of, where voluntarily provided (this may include health information, which is special category data under UK GDPR).",
          "Information you provide if you apply to work with us (CV, employment history, right-to-work documents, references, DBS certificate details).",
          "Technical data such as IP address, browser type and usage data collected via cookies (see our Cookie Policy).",
        ],
      },
      {
        heading: "How we use your information",
        paragraphs: ["We use your information to:"],
        list: [
          "Respond to enquiries about our care services and provide you with relevant information.",
          "Assess and process job or work applications.",
          "Carry out our contractual obligations where we provide services to you or a family member.",
          "Comply with our legal and regulatory obligations, including safeguarding duties.",
          "Improve our website and services, with your consent where required (e.g. analytics cookies).",
        ],
      },
      {
        heading: "Our lawful basis for processing",
        paragraphs: [
          "We rely on one or more of the following lawful bases, depending on the circumstances: your consent, the performance of a contract with you, our legal obligations, and our legitimate interests in running and improving our business. Where we process special category data (such as health information), we do so with your explicit consent, or where necessary for the provision of health or social care, in line with UK GDPR Article 9.",
        ],
      },
      {
        heading: "Sharing your information",
        paragraphs: ["We do not sell your personal data. We may share information with:"],
        list: [
          "Care staff directly involved in delivering your care.",
          "Local authorities, NHS bodies, or other professionals involved in your care, where appropriate and necessary.",
          "Regulatory bodies, where we are required to report information by law.",
          "Trusted third-party service providers who support our operations (e.g. IT hosting, payroll), under data processing agreements.",
        ],
      },
      {
        heading: "How long we keep your information",
        paragraphs: [
          "We retain personal data only for as long as necessary to fulfil the purposes we collected it for, including to satisfy legal, accounting or reporting requirements. Care records are retained in line with relevant care sector retention guidance; recruitment records for unsuccessful applicants are typically retained for [X months] unless you ask us to delete them sooner.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: ["Under UK GDPR, you have the right to:"],
        list: [
          "Access the personal data we hold about you.",
          "Request correction of inaccurate data.",
          "Request erasure of your data, in certain circumstances.",
          "Object to or restrict certain processing.",
          "Request data portability, where applicable.",
          "Withdraw consent at any time, where processing is based on consent.",
        ],
      },
      {
        heading: "Exercising your rights",
        paragraphs: [
          "To exercise any of these rights, please contact us using the details below. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk if you believe we have not handled your data appropriately.",
        ],
      },
      {
        heading: "Children's information",
        paragraphs: [
          "Where we provide children's services, we may process personal data relating to children, provided by a parent, guardian or referring professional. We take particular care to ensure such data is processed lawfully, kept secure, and only shared with those directly involved in the child's care.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We take appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this policy from time to time. The latest version will always be available on this page, with the date it was last updated shown below.",
        ],
      },
      {
        heading: "Contact us",
        paragraphs: [
          "If you have any questions about this policy or how we handle your data, please contact us at info@zebohealthcare.co.uk or write to us at [Registered Office Address].",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "6 September 2026",
    sections: [
      {
        heading: "What are cookies",
        paragraphs: [
          "Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember your preferences, and understand how visitors use the site.",
        ],
      },
      {
        heading: "How we use cookies",
        paragraphs: ["We use cookies for the following purposes:"],
        list: [
          "Strictly necessary cookies: required for the website to function (e.g. remembering form entries, security features). These cannot be switched off.",
          "Functional cookies: remember choices you make to improve your experience.",
          "Analytics cookies: help us understand how visitors use our website (e.g. Google Analytics), so we can improve it. These are only set with your consent.",
        ],
      },
      {
        heading: "Third-party cookies",
        paragraphs: [
          "Some cookies may be set by third-party services we use, such as analytics providers. These third parties may use cookies in accordance with their own privacy and cookie policies.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "When you first visit our website, you will be asked to choose which categories of cookies you are happy for us to use, via our cookie consent banner. You can change your preferences at any time using the cookie settings link in the website footer. You can also manage or delete cookies through your browser settings; please note that blocking some cookies may affect how the website functions.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal or regulatory reasons.",
        ],
      },
      {
        heading: "Contact us",
        paragraphs: ["If you have questions about our use of cookies, please contact us at info@zebohealthcare.co.uk."],
      },
    ],
  },
  {
    slug: "safeguarding-policy",
    title: "Safeguarding Policy",
    lastUpdated: "6 September 2026",
    sections: [
      {
        heading: "Our commitment",
        paragraphs: [
          "Zebo Healthcare Limited is committed to safeguarding and promoting the welfare of all children, young people and adults at risk who come into contact with our services. Safeguarding is everyone's responsibility, and we expect the same commitment from every member of staff, contractor and volunteer working with us.",
        ],
      },
      {
        heading: "Purpose and scope",
        paragraphs: [
          "This policy applies to everyone who works for or on behalf of Zebo Healthcare, across all our service lines, including adult personal care, live-in care, children's services, learning disability support, and staff supplied to care homes.",
        ],
      },
      {
        heading: "Legal and regulatory framework",
        paragraphs: [
          "This policy is informed by relevant legislation and guidance, including the Care Act 2014, the Children Act 1989 and 2004, the Mental Capacity Act 2005, the Human Rights Act 1998, and statutory guidance such as Working Together to Safeguard Children.",
        ],
      },
      {
        heading: "Recognising abuse and neglect",
        paragraphs: ["Abuse can take many forms, including but not limited to:"],
        list: [
          "Physical abuse",
          "Emotional or psychological abuse",
          "Sexual abuse",
          "Financial or material abuse",
          "Neglect or acts of omission",
          "Discriminatory abuse",
          "Organisational or institutional abuse",
          "Domestic abuse",
          "Modern slavery",
          "Self-neglect",
        ],
      },
      {
        heading: "Roles and responsibilities",
        paragraphs: [
          "Our nominated Safeguarding Lead is responsible for overseeing safeguarding practice, providing advice and support to staff, and liaising with external agencies where a concern is raised. All staff receive safeguarding training as part of their induction and on an ongoing basis, and are expected to act promptly on any concern.",
        ],
      },
      {
        heading: "Reporting a concern",
        paragraphs: ["If you are worried that a child or adult is at risk of harm, please tell us as soon as possible:"],
        list: [
          "If someone is in immediate danger, call 999.",
          "To report a concern about someone supported by Zebo Healthcare, contact our Safeguarding Lead on [Safeguarding Contact Number] or [Safeguarding Contact Email].",
          "You can also raise concerns directly with the relevant local authority adult or children's safeguarding team, or with the police.",
        ],
      },
      {
        heading: "What happens after a concern is raised",
        paragraphs: [
          "All concerns are treated seriously, recorded, and acted upon in line with local safeguarding procedures. Wherever possible, we will keep you informed of the outcome, subject to confidentiality requirements.",
        ],
      },
      {
        heading: "Staff recruitment and training",
        paragraphs: [
          "We follow safer recruitment practices for all staff, including enhanced DBS checks, thorough reference checks, and mandatory safeguarding training before staff begin unsupervised work.",
        ],
      },
      {
        heading: "Whistleblowing",
        paragraphs: [
          "Staff who have concerns about the conduct of colleagues, or about safeguarding practice within Zebo Healthcare, are encouraged to raise these through our internal whistleblowing procedure without fear of reprisal.",
        ],
      },
      {
        heading: "Review",
        paragraphs: [
          "This policy is reviewed regularly to ensure it reflects current legislation, best practice and the needs of the people we support.",
        ],
      },
    ],
  },
  {
    slug: "complaints-procedure",
    title: "Complaints Procedure",
    lastUpdated: "6 September 2026",
    sections: [
      {
        heading: "Our commitment to you",
        paragraphs: [
          "We want to hear from you if something has not met your expectations. Feedback and complaints help us improve, and we treat every complaint fairly, promptly, and without any negative effect on the care or service you receive.",
        ],
      },
      {
        heading: "How to make a complaint",
        paragraphs: ["You can raise a complaint in whichever way is easiest for you:"],
        list: [
          "By phone: 07341859179",
          "By email: info@zebohealthcare.co.uk",
          "In person, by speaking to your care coordinator or a member of our office team",
        ],
      },
      {
        heading: "Support to make a complaint",
        paragraphs: [
          "If you need support to make a complaint, for example from a family member, advocate or interpreter, please let us know and we will help arrange this.",
        ],
      },
      {
        heading: "What happens next",
        list: [
          "Acknowledgement: We will acknowledge your complaint within [3 working days].",
          "Investigation: A senior member of our team will investigate your complaint thoroughly and impartially, which may include speaking with you and relevant staff.",
          "Response: We aim to provide a full written response within [20 working days]. If the investigation takes longer, we will keep you updated on progress and the expected timescale.",
          "Resolution: Where we have made a mistake, we will explain what happened, apologise where appropriate, and outline any actions we are taking as a result.",
        ],
      },
      {
        heading: "If you are not satisfied with our response",
        paragraphs: [
          "If you remain unhappy after our final response, you can ask for your complaint to be reviewed by [a Director / Registered Manager]. If you are still not satisfied, you have the right to refer your complaint to an independent body, depending on the service concerned:",
        ],
        list: [
          "Adult social care: Local Government and Social Care Ombudsman (lgo.org.uk).",
          "Children's services: Ofsted, or the Children's Commissioner, as appropriate.",
          "Regulatory concerns about the quality or safety of care: the Care Quality Commission (CQC). You can raise concerns with the CQC at any time, regardless of a provider's registration status.",
        ],
      },
      {
        heading: "Confidentiality",
        paragraphs: [
          "All complaints are handled confidentially and in line with our Privacy Policy. Raising a complaint will never negatively affect the care or service you or your family receive from us.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    lastUpdated: "6 September 2026",
    sections: [
      {
        heading: "Acceptance of these terms",
        paragraphs: [
          `These Terms of Use govern your use of the Zebo Healthcare Limited website ("the Site"). By accessing or using the Site, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use the Site.`,
        ],
      },
      {
        heading: "About this website",
        paragraphs: [
          "This Site is provided for general information purposes about Zebo Healthcare's services and to enable enquiries about our care services and job opportunities. Nothing on this Site constitutes medical, clinical or legal advice, and should not be relied upon as such. If you require urgent medical assistance, please contact emergency services or your GP.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Unless otherwise stated, all content on this Site, including text, graphics, logos and images, is owned by or licensed to Zebo Healthcare Limited and is protected by copyright and other intellectual property laws. You may view and print pages from the Site for your own personal, non-commercial use, but may not reproduce, distribute or otherwise use any content without our prior written consent.",
        ],
      },
      {
        heading: "Accuracy of information",
        paragraphs: [
          "We take reasonable care to ensure the information on this Site is accurate and up to date, but we make no warranties or representations as to its completeness or accuracy. Service availability, pricing and other details may change, and should be confirmed directly with our team.",
        ],
      },
      {
        heading: "Links to other websites",
        paragraphs: [
          "Our Site may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of any linked websites, and including a link does not imply endorsement.",
        ],
      },
      {
        heading: "Enquiry and application forms",
        paragraphs: [
          "When you submit an enquiry or job application form through this Site, you confirm that the information you provide is accurate and complete to the best of your knowledge. Please see our Privacy Policy for information on how we handle personal data submitted through the Site.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, Zebo Healthcare Limited accepts no liability for any loss or damage arising from your use of, or inability to use, this Site, or from any reliance placed on its content.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These Terms of Use are governed by and construed in accordance with the laws of England and Wales, and any disputes relating to them will be subject to the exclusive jurisdiction of the courts of England and Wales.",
        ],
      },
      {
        heading: "Changes to these terms",
        paragraphs: [
          "We may update these Terms of Use from time to time. Continued use of the Site after changes are posted constitutes your acceptance of the revised terms.",
        ],
      },
      {
        heading: "Contact us",
        paragraphs: ["If you have any questions about these Terms of Use, please contact us at info@zebohealthcare.co.uk."],
      },
    ],
  },
];

export function getPolicyBySlug(slug: string): Policy | undefined {
  return policies.find((policy) => policy.slug === slug);
}
