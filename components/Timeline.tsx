"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Timeline() {
  const { lang } = useLanguage();
  const t = content[lang].journey;
  const items = [...t.items].reverse();

  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <div className="mt-16 border-t border-line">
          {items.map((item, i) => (
            <Reveal key={item.title + item.period} delay={Math.min(i * 0.03, 0.15)}>
              <div className="grid grid-cols-1 gap-6 border-b border-line py-10 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="font-display italic text-xl text-accent md:text-2xl">{item.era}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                    {item.period}
                  </p>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl leading-snug text-ink md:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-dim">{item.org}</p>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
