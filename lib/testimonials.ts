// Real, client-supplied testimonials for the homepage.

export interface Testimonial {
  quote: string;
  attribution: string;
  relation: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We have been extremely impressed with the professionalism, efficiency and responsiveness of the service. The team consistently demonstrates a strong understanding of the demands of residential care and has proven exceptionally reliable, particularly when we have required staffing support at short notice.\n\nYour ability to respond quickly to last-minute shift requirements, whilst maintaining high standards and professionalism, has provided our home with valuable reassurance and continuity. The staff are committed, flexible and consistently willing to go above and beyond to support the needs of the service.\n\nWhat particularly stands out is the combination of excellent service, reliability and competitive pricing. They offer a genuinely professional and responsive staffing solution without compromising on quality. We have developed a high level of confidence in their service and would readily recommend them to other care providers looking for a dependable staffing partner.",
    attribution: "Levina",
    relation: "Manager, children's home in Surrey",
  },
  {
    quote:
      "We have used several agencies for our staffing needs and none of them compare to Zebo. There are times when life happens and it cannot be helped that we need agency staff to step in and make sure our children are safeguarded. Zebo staff members come highly trained and engage with our children in a way that other agencies have failed to do for us in the past. I would recommend Zebo Healthcare to any children's home that require competent and well trained staff!",
    attribution: "Sidney",
    relation: "Deputy Manager, children's home in Surrey",
  },
];
