import type { CoreValueIcon } from "@/lib/values";

const icons: Record<CoreValueIcon, React.ReactNode> = {
  integrity: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  transparency: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  reliability: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  "people-first": (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M3 20v-1.5a6 6 0 0 1 12 0V20" />
      <path d="M14.5 20v-1a5 5 0 0 1 7-4.6" />
    </>
  ),
};

export default function ValueIcon({ icon }: { icon: CoreValueIcon }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-500">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        {icons[icon]}
      </svg>
    </div>
  );
}
