"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function AboutIntro() {
  const { lang } = useLanguage();
  const t = content[lang].aboutIntro;

  return (
    <section className="relative border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">{t.label}</p>
          <p className="font-display mt-5 max-w-3xl text-xl leading-snug text-ink sm:text-2xl md:text-[1.7rem]">
            {t.paragraph}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 border-t border-line pt-6">
          <p className="eyebrow">{t.pressLabel}</p>
          <RevealGroup className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.press.map((p) => (
              <RevealItem key={p.url}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group flex items-start gap-2 text-ink-dim transition-colors hover:text-ink"
                >
                  <span className="mt-1 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                      {p.outlet}
                    </span>
                    <span className="mt-1 block text-sm leading-snug">{p.title}</span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="mt-1 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
