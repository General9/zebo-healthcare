/**
 * Placeholder visual for each service card — brief §9 flags real photography
 * (stock vs. commissioned) as a client-supplied asset still pending, so this
 * uses simple original line illustrations rather than sourced stock images.
 */

const icons: Record<string, React.ReactNode> = {
  "adult-personal-care": (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      <path d="M9 12.5c0 1.5 3 1.5 3 0" />
    </>
  ),
  "live-in-care": (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  "childrens-services": (
    <>
      <circle cx="8.5" cy="8" r="2.5" />
      <circle cx="16" cy="9.5" r="2" />
      <path d="M3.5 21v-1.5a5 5 0 0 1 10 0V21" />
      <path d="M13 21v-1a4 4 0 0 1 7-2.6" />
    </>
  ),
  "learning-disabilities": (
    <path d="M8 4h4a2 2 0 1 1 0 4h4v4a2 2 0 1 1 0 4h-4v4H8v-4a2 2 0 1 1 0-4H4V8h4Z" />
  ),
  "care-homes": (
    <>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 12h.01M15 12h.01" />
    </>
  ),
  "complex-care": (
    <path d="M3 12h4l2 5 4-10 2 5h6" />
  ),
  "palliative-care": (
    <>
      <path d="M12 20s-7-4.35-9.5-8.8C.8 8 2.2 5 5.3 4.6c1.8-.2 3.3.8 4 2.1.7-1.3 2.2-2.3 4-2.1 3.1.4 4.5 3.4 2.8 6.6C19 15.65 12 20 12 20Z" />
    </>
  ),
};

export default function ServiceIcon({ slug }: { slug: string }) {
  return (
    <div className="flex h-36 w-full items-center justify-center rounded-t-lg bg-teal-50 dark:bg-teal-950/30">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-14 w-14 text-teal-700 dark:text-teal-500"
        aria-hidden="true"
      >
        {icons[slug] ?? <circle cx="12" cy="12" r="8" />}
      </svg>
    </div>
  );
}
