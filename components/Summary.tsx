"use client";

import Image from "next/image";
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
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <SectionHeading label={t.label} heading={t.heading} />
            <div className="mt-6 max-w-2xl space-y-4">
              {t.body.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-dim md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-magenta/25 to-gold/25 blur-2xl" />
              <div className="relative h-full w-full rounded-[1.75rem] bg-gradient-to-br from-violet-400/70 via-magenta/70 to-gold/70 p-[2px]">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-2px)]">
                  <Image
                    src="/images/about-accent.jpg"
                    alt="Hoàng Nguyễn cùng cộng đồng Creators"
                    fill
                    sizes="(min-width: 1024px) 384px, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg/70 to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

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
