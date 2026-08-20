"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function FinalCta() {
  const { lang } = useLanguage();
  const t = content[lang].finalCta;

  return (
    <section className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.1] font-medium text-ink sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 space-y-1.5">
          {t.options.map((o) => (
            <p key={o} className="text-base text-ink-dim md:text-lg">
              {o}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.16} className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-bg transition-colors hover:bg-accent"
          >
            {t.cta}
            <ArrowRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
