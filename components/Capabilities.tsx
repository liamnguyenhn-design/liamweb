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
        </Reveal>

        <div className="mt-16 border-t border-line">
          {t.items.map((c, i) => (
            <Reveal key={c.number} delay={Math.min(i * 0.03, 0.15)}>
              <div
                className={`grid grid-cols-1 gap-8 border-b border-line py-12 ${
                  c.image ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[0.55fr_1.1fr]"
                }`}
              >
                <div className="flex items-start gap-5">
                  <span className="numeral text-2xl">{c.number}</span>
                  <h3 className="font-display max-w-xs text-xl leading-snug text-ink md:text-2xl">
                    {c.title}
                  </h3>
                </div>

                <div className={c.image ? "grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr]" : ""}>
                  <div className="max-w-2xl">
                    <p className="font-display text-lg leading-snug text-ink md:text-xl">{c.headline}</p>
                    <p className="mt-4 text-base leading-relaxed text-ink-dim">{c.body}</p>
                    <p className="mt-4 text-sm font-medium text-accent">{c.result}</p>
                  </div>
                  {c.image ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line md:aspect-auto">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="(min-width: 1024px) 420px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
