"use client";

import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function WhoIWorkWith() {
  const { lang } = useLanguage();
  const t = content[lang].whoIWorkWith;

  return (
    <section className="relative border-b border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">{t.label}</p>
          <h2 className="font-display mt-4 text-2xl font-medium text-ink md:text-3xl">{t.heading}</h2>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
          {t.items.map((item, i) => (
            <RevealItem key={item.title}>
              <div
                className={`h-full border-line px-0 py-6 sm:px-6 sm:py-8 ${
                  i === 0 ? "sm:pl-0" : ""
                } border-b sm:border-b-0 lg:border-l ${i === 0 ? "lg:border-l-0" : ""}`}
              >
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{item.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
