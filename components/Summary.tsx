"use client";

import { Compass, Network, Layers } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

const icons = [Compass, Network, Layers];

export default function Summary() {
  const { lang } = useLanguage();
  const t = content[lang].summary;

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.body} />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.highlights.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={h.title}>
                <div className="glass-card group h-full rounded-2xl p-7 transition-colors hover:border-violet-400/40">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-magenta/20 text-violet-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-dim">{h.body}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
