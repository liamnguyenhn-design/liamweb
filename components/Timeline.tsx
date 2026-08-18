"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Timeline() {
  const { lang } = useLanguage();
  const t = content[lang].timeline;

  return (
    <section id="journey" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <div className="relative mt-16">
          <div className="hairline-v absolute left-[7px] top-2 bottom-2 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {t.items.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={item.title + item.period} delay={0.03 * i}>
                  <div
                    className={`relative flex flex-col gap-4 pl-8 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                      isEven ? "" : ""
                    }`}
                  >
                    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 -translate-x-[1px] rounded-full border-2 border-violet-400 bg-bg shadow-[0_0_14px_rgba(139,92,246,0.7)] md:left-1/2 md:-translate-x-1/2" />

                    <div className={`md:contents`}>
                      <div className={`${isEven ? "md:order-1 md:pr-12 md:text-right" : "md:order-2 md:col-start-2 md:pl-12"}`}>
                        <span className="inline-block rounded-full border border-violet-700/50 bg-violet-950/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-violet-300">
                          {item.tag}
                        </span>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                          {item.period}
                        </p>
                        <h3 className="font-display mt-2 text-xl font-semibold text-ink md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-violet-300">{item.org}</p>
                      </div>

                      <div className={`${isEven ? "md:order-2 md:col-start-2 md:pl-12" : "md:order-1 md:pr-12"}`}>
                        <div className="glass-card rounded-2xl p-6">
                          <ul className="space-y-3">
                            {item.bullets.map((b) => (
                              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
