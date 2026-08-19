import Image from "next/image";
import type { BrandLogo } from "@/lib/content";

export default function Marquee({ items }: { items: BrandLogo[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="no-scrollbar relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-6 py-2">
        {doubled.map((item, i) => (
          <a
            key={item.name + i}
            href="https://www.youtube.com/@hoangng79"
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            data-cursor-hover
            className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl bg-white/95 px-4 py-3 shadow-sm transition-transform hover:scale-105 sm:h-20 sm:w-40"
          >
            <div className="relative h-full w-full">
              <Image
                src={item.logo}
                alt={item.name}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
