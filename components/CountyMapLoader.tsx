"use client";

import dynamic from "next/dynamic";

const CountyMap = dynamic(() => import("@/components/CountyMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-full items-center justify-center rounded-lg bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-900">
      Loading map…
    </div>
  ),
});

export default function CountyMapLoader() {
  return <CountyMap />;
}
