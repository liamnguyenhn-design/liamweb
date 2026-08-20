"use client";

import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function EcosystemFlow() {
  const { lang } = useLanguage();
  const t = content[lang].ecosystem;

  return (
    <section className="relative border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">{t.label}</p>
          <h2 className="font-display mt-5 max-w-2xl text-3xl leading-[1.1] font-medium text-ink sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-dim md:text-lg">{t.sub}</p>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-2 border-t border-l border-line sm:grid-cols-5">
          {t.stages.map((s) => (
            <RevealItem key={s.number}>
              <div className="flex h-full flex-col justify-between gap-8 border-b border-r border-line px-5 py-7 transition-colors hover:bg-bg-elevated/60">
                <span className="numeral text-3xl md:text-4xl">{s.number}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">{s.label}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
