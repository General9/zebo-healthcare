interface ContentSectionProps {
  heading: string;
  children: React.ReactNode;
}

/** Placeholder body copy container matching a brief §4 "key content" bullet. */
export default function ContentSection({ heading, children }: ContentSectionProps) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-8">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{heading}</h2>
      <div className="mt-2 text-zinc-600 dark:text-zinc-400">{children}</div>
    </section>
  );
}
