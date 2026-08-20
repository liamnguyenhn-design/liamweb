"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Capabilities() {
  const { lang } = useLanguage();
  const t = content[lang].capabilities;

  return (
    <section id="capabilities" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
          <p className="mt-6 text-sm font-medium leading-relaxed text-accent md:text-base">{t.flow}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((c, i) => (
            <Reveal key={c.number} delay={Math.min(i * 0.03, 0.18)}>
              <div
                className={`h-full border-line px-0 py-7 sm:px-7 ${i === 0 ? "sm:pl-0" : ""} border-b sm:border-b ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } lg:border-b-0 ${i % 4 !== 0 ? "lg:border-l" : ""} lg:pl-7 ${i === 0 ? "lg:pl-0" : ""}`}
              >
                <span className="numeral text-2xl">{c.number}</span>
                <h3 className="font-display mt-3 text-lg text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
