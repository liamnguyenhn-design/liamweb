"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function ChuongTailorCase() {
  const { lang } = useLanguage();
  const t = content[lang].chuongTailor;

  return (
    <div className="mt-16">
      <Reveal>
        <p className="eyebrow">{t.eyebrow}</p>
        <h3 className="font-display mt-4 text-4xl text-ink md:text-5xl">{t.heading}</h3>
        <p className="mt-3 max-w-2xl text-lg leading-snug text-ink-dim">{t.subheading}</p>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-line lg:aspect-auto">
          <Image
            src={t.cover}
            alt="Chương Tailor"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">{t.problemLabel}</p>
          <div className="mt-4 space-y-4">
            {t.problem.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink-dim">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="eyebrow">{t.roleLabel}</p>
            <p className="font-display mt-3 text-xl text-ink md:text-2xl">{t.roleHeading}</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-accent">{t.roleFlow}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">{t.roleBody}</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 border-t border-line">
        {t.process.map((stage, i) => (
          <Reveal key={stage.number} delay={Math.min(i * 0.03, 0.15)}>
            <div className="grid grid-cols-1 gap-6 border-b border-line py-10 lg:grid-cols-[0.55fr_1.1fr]">
              <div className="flex items-start gap-5">
                <span className="numeral text-2xl">{stage.number}</span>
                <h4 className="font-display max-w-xs text-xl leading-snug text-ink md:text-2xl">
                  {stage.title}
                </h4>
              </div>
              <div className="max-w-2xl">
                <p className="text-base leading-relaxed text-ink-dim">{stage.body}</p>
                {stage.bullets ? (
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {stage.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {stage.flow ? (
                  <p className="mt-4 text-sm font-medium text-accent">{stage.flow}</p>
                ) : null}
                {stage.note ? (
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{stage.note}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05} className="mt-16">
        <p className="eyebrow">{t.resultsHeading}</p>

        <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
          {[
            { value: t.growth.start, label: t.growth.startLabel },
            { value: t.growth.added, label: t.growth.addedLabel },
            { value: t.growth.end, label: t.growth.endLabel },
          ].map((g, i, arr) => (
            <div key={g.label} className="flex items-center gap-4 sm:gap-6">
              <div>
                <p className="font-display text-4xl text-ink md:text-5xl">{g.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-faint">{g.label}</p>
              </div>
              {i < arr.length - 1 ? (
                <ArrowRight size={20} className="shrink-0 text-accent" />
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-dim">{t.growthBody}</p>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
          {t.metrics.map((m) => (
            <RevealItem key={m.label}>
              <p className="font-display text-3xl text-ink md:text-4xl">{m.value}</p>
              <p className="mt-1 text-sm font-medium text-accent">{m.label}</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-dim">{m.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Reveal>

      <Reveal delay={0.08} className="mt-16 border-t border-line pt-10">
        <p className="eyebrow">{t.keyResultLabel}</p>
        <p className="font-display mt-4 max-w-2xl text-2xl leading-snug text-ink md:text-3xl">
          {t.keyResult[0]}
          <br />
          {t.keyResult[1]}
          <br />
          <span className="text-accent">{t.keyResult[2]}</span>
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <p className="font-display max-w-xl text-2xl leading-snug text-ink sm:text-3xl">
          {t.keyMessage[0]}
          <br />
          <span className="italic text-accent">{t.keyMessage[1]}</span>
        </p>
      </Reveal>
    </div>
  );
}
