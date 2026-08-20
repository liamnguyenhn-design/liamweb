"use client";

import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Problem() {
  const { lang } = useLanguage();
  const t = content[lang].problem;

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">{t.label}</p>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-[1.1] font-medium text-ink sm:text-4xl md:text-5xl">
            {t.heading}
            <br />
            <span className="text-ink-faint">{t.sub}</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
          {t.points.map((p, i) => {
            const isLast = i === t.points.length - 1;
            const isSecondLast = i === t.points.length - 2;
            return (
              <RevealItem key={p}>
                <div
                  className={`flex items-start gap-4 border-line py-5 ${isLast ? "" : "border-b"} ${
                    isSecondLast ? "md:border-b-0" : ""
                  } ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                >
                  <span className="numeral mt-0.5 text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-base leading-relaxed text-ink-dim">{p}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-20">
          <p className="font-display max-w-2xl text-2xl leading-snug text-ink sm:text-3xl">
            {t.keyMessage[0]}
            <br />
            <span className="italic text-accent">{t.keyMessage[1]}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
