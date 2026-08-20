"use client";

import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Insights() {
  const { lang } = useLanguage();
  const t = content[lang].insights;

  return (
    <section id="insights" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {t.items.map((item) => (
            <RevealItem key={item.quote} className="border-t border-line pt-6">
              <p className="font-display text-xl leading-snug text-ink md:text-2xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-dim">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
