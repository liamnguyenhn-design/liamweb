"use client";

import Image from "next/image";
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

        <div className="mt-14 border-t border-line">
          {t.items.map((c, i) => {
            const images = c.images ?? (c.image ? [c.image] : []);
            return (
              <Reveal key={c.number} delay={Math.min(i * 0.02, 0.12)}>
                <div className="flex flex-col gap-6 border-b border-line py-7 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex items-start gap-4 sm:w-72 sm:shrink-0">
                    <span className="numeral text-xl">{c.number}</span>
                    <div>
                      <h3 className="font-display text-lg text-ink md:text-xl">{c.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{c.body}</p>
                    </div>
                  </div>
                  {images.length > 0 ? (
                    <div className="flex gap-3 sm:ml-auto">
                      {images.map((src) => (
                        <div
                          key={src}
                          className="relative h-20 w-28 shrink-0 overflow-hidden rounded-sm border border-line sm:h-24 sm:w-36"
                        >
                          <Image src={src} alt={c.title} fill sizes="144px" className="object-cover" />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
