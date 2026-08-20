"use client";

import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Awards() {
  const { lang } = useLanguage();
  const t = content[lang].awards;

  return (
    <section id="awards" className="relative border-b border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">{t.label}</p>
          <h2 className="font-display mt-4 text-2xl font-medium text-ink md:text-3xl">{t.heading}</h2>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((a) => (
            <RevealItem key={a.title + a.org}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                {a.org} · {a.year}
              </p>
              <h3 className="font-display mt-1.5 text-base leading-snug text-ink">{a.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-dim">{a.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
