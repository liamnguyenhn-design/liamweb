"use client";

import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function WhyMe() {
  const { lang } = useLanguage();
  const t = content[lang].whyMe;

  return (
    <section id="who" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="eyebrow">{t.label}</p>
              <h2 className="font-display mt-5 max-w-xl text-3xl leading-[1.1] font-medium text-ink sm:text-4xl md:text-5xl">
                {t.heading}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-dim md:text-lg">{t.sub}</p>
            </Reveal>

            <RevealGroup className="mt-14 border-t border-line">
              {t.facets.map((f, i) => (
                <RevealItem key={f.title}>
                  <div
                    className={`flex flex-col gap-2 border-line py-6 sm:flex-row sm:gap-10 ${
                      i === t.facets.length - 1 ? "" : "border-b"
                    }`}
                  >
                    <span className="font-display text-xl text-accent sm:w-40 sm:shrink-0">{f.title}</span>
                    <p className="max-w-md text-base leading-relaxed text-ink-dim">{f.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1} className="mt-10">
              <p className="font-display max-w-lg text-xl leading-snug text-ink md:text-2xl">
                {t.keyMessage}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="relative aspect-[1110/1200] w-full overflow-hidden rounded-sm border border-line">
              <Image
                src="/images/about-accent.jpg"
                alt="Hoàng Nguyễn tại sự kiện Kỷ nguyên vươn mình của dân tộc"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative mx-auto aspect-[975/1400] w-2/3 overflow-hidden rounded-sm border border-line lg:w-1/2">
              <Image
                src="/images/google-feature.jpg"
                alt="Hoàng Nguyễn tại trụ sở Google"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
