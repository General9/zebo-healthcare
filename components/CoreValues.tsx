import ValueIcon from "@/components/ValueIcon";
import { coreValues } from "@/lib/values";

interface CoreValuesProps {
  headingClassName?: string;
}

export default function CoreValues({
  headingClassName = "text-2xl font-bold text-zinc-900 dark:text-zinc-50",
}: CoreValuesProps) {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className={headingClassName}>Our Core Values</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {coreValues.map((value) => (
            <div key={value.title} className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black">
              <ValueIcon icon={value.icon} />
              <h3 className="mt-4 text-lg font-semibold text-teal-700 dark:text-teal-500">{value.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
