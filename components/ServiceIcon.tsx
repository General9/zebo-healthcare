import Image from "next/image";

export default function ServiceIcon({ slug, name }: { slug: string; name: string }) {
  return (
    <div className="relative h-36 w-full overflow-hidden rounded-t-lg bg-teal-50 dark:bg-teal-950/30">
      <Image
        src={`/services/${slug}.jpg`}
        alt={name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
