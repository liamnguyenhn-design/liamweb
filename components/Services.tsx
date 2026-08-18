"use client";

import { Compass, Radio, Sparkles, ArrowRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

const icons = [Compass, Radio, Sparkles];

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang].services;

  return (
    <section className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(139,92,246,0.1),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} align="center" />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.pillars.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={p.number}>
                <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-violet-400/40">
                  <span className="font-display absolute -right-2 -top-4 text-8xl font-bold text-violet-500/10 transition-colors group-hover:text-violet-500/20">
                    {p.number}
                  </span>
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-magenta/20 text-violet-300">
                    <Icon size={22} />
                  </div>
                  <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {p.number} · {p.title}
                  </p>
                  <h3 className="font-display relative mt-2 text-xl font-semibold leading-snug text-ink">
                    {p.subtitle}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink-dim">{p.body}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-14">
          <div className="glass-card mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border-gold/25 px-8 py-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {t.philosophyLabel}
            </p>
            <p className="font-display flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-lg font-semibold text-ink md:text-xl">
              {t.philosophy.split("→").map((part, i, arr) => (
                <span key={i} className="flex items-center gap-3">
                  <span>{part.trim()}</span>
                  {i < arr.length - 1 && <ArrowRight size={18} className="text-violet-400" />}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
