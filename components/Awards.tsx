"use client";

import { Trophy } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Awards() {
  const { lang } = useLanguage();
  const t = content[lang].awards;

  return (
    <section id="awards" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(139,92,246,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((a) => (
            <RevealItem key={a.title + a.org}>
              <div className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-gold/50">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold/25 to-violet-500/20 text-gold">
                    <Trophy size={18} />
                  </div>
                  <span className="text-xs font-semibold text-ink-faint">{a.year}</span>
                </div>
                <h3 className="font-display mt-4 text-base font-semibold leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-violet-300">{a.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{a.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
