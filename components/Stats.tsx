"use client";

import { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Stats() {
  const { lang } = useLanguage();
  const stats = content[lang].stats;

  return (
    <section className="relative border-y border-line">
      <RevealGroup className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 px-6 py-12 md:grid-cols-5 md:px-10">
        {stats.map((s) => (
          <RevealItem key={s.label} className="text-center md:text-left">
            <p className="font-display text-3xl font-medium text-ink sm:text-4xl">{s.value}</p>
            <p className="mt-1.5 text-xs leading-snug text-ink-faint md:text-sm">{s.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
