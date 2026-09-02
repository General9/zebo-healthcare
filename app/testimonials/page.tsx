import PageHeader from "@/components/PageHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

export const metadata = { title: "Testimonials | Zebo Healthcare" };

export default function TestimonialsPage() {
  return (
    <div>
      <PageHeader
        title="Testimonials & Case Studies"
        intro="Family and client reviews, and anonymised case studies (with documented consent)."
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.relation} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
