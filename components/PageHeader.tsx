interface PageHeaderProps {
  title: string;
  intro?: string;
}

export default function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <div className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{title}</h1>
        {intro && <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">{intro}</p>}
      </div>
    </div>
  );
}
