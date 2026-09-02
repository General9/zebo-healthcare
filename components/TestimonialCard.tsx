import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
      <blockquote className="text-zinc-700 dark:text-zinc-300">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold text-zinc-900 dark:text-zinc-50">
          {testimonial.attribution}
        </span>
        <span className="text-zinc-500 dark:text-zinc-500"> — {testimonial.relation}</span>
      </figcaption>
    </figure>
  );
}
