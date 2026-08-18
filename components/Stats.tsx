"use client";

import { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Stats() {
  const { lang } = useLanguage();
  const stats = content[lang].stats;

  return (
    <section className="relative border-y border-violet-900/50 bg-bg-elevated/60">
      <div className="hairline absolute inset-x-0 top-0" />
      <RevealGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-5 md:px-10">
        {stats.map((s) => (
          <RevealItem key={s.label} className="text-center md:text-left">
            <p className="font-display text-gradient text-3xl font-bold sm:text-4xl md:text-[2.6rem]">
              {s.value}
            </p>
            <p className="mt-2 text-xs leading-snug text-ink-dim md:text-sm">{s.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
