"use client";

import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Framework() {
  const { lang } = useLanguage();
  const t = content[lang].framework;

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

        <RevealGroup className="mx-auto mt-16 max-w-3xl">
          {t.stages.map((s, i) => (
            <RevealItem key={s.key}>
              <div
                className={`flex flex-col items-baseline justify-between gap-1 border-line py-6 sm:flex-row sm:gap-8 ${
                  i === t.stages.length - 1 ? "" : "border-b"
                }`}
              >
                <span className="font-display text-2xl text-ink sm:w-64 sm:shrink-0 md:text-3xl">{s.key}</span>
                <p className="font-display text-lg italic text-ink-dim sm:text-right md:text-xl">{s.question}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-faint">↓</p>
          <p className="font-display mt-4 text-3xl italic text-accent md:text-4xl">{t.center}</p>
        </Reveal>
      </div>
    </section>
  );
}
