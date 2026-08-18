"use client";

import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

const spanClasses = [
  "col-span-2 md:col-span-2 md:row-span-1",
  "col-span-1 md:row-span-2",
  "col-span-1",
  "col-span-2 md:col-span-1",
];

export default function Moments() {
  const { lang } = useLanguage();
  const t = content[lang].moments;

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3">
          {t.items.map((item, i) => (
            <RevealItem
              key={item.src}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-violet-900/50 md:aspect-auto ${
                spanClasses[i] ?? ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-xs leading-snug text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
