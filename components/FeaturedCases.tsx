"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content, type FeaturedCase } from "@/lib/content";

export default function FeaturedCases() {
  const { lang } = useLanguage();
  const cases = content[lang].featuredCases;

  return (
    <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
      {cases.map((c, i) => (
        <Reveal key={c.brand} delay={i * 0.06}>
          <Case case={c} />
        </Reveal>
      ))}
    </div>
  );
}

function Case({ case: c }: { case: FeaturedCase }) {
  return (
    <div className="flex h-full flex-col border-t border-line pt-6">
      <div className="flex items-center gap-3">
        {c.avatar ? (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-line">
            <Image src={c.avatar} alt={c.brand} fill sizes="44px" className="object-cover" />
          </div>
        ) : null}
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h3 className="font-display text-2xl text-ink md:text-[1.7rem]">{c.brand}</h3>
        </div>
      </div>

      {c.cover ? (
        <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-sm border border-line">
          <Image src={c.cover} alt={c.brand} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
        </div>
      ) : null}

      <p className="font-display mt-5 text-lg leading-snug text-ink md:text-xl">{c.title}</p>
      <p className="mt-1.5 text-sm font-medium text-accent">{c.metric}</p>

      <div className="mt-4 space-y-3">
        {c.intro.map((p) => (
          <p key={p} className="text-sm leading-relaxed text-ink-dim">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <p className="eyebrow">{c.roleLabel}</p>
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {c.roles.map((r) => (
            <div key={r.title}>
              <p className="text-sm font-semibold text-ink">{r.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-dim">{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <p className="eyebrow">{c.resultsLabel}</p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {c.results.map((r) => (
            <div key={r.label}>
              <p className="font-display text-xl text-ink md:text-2xl">{r.value}</p>
              <p className="mt-1 text-[11px] leading-snug text-ink-faint">{r.label}</p>
            </div>
          ))}
        </div>
      </div>

      {c.scale && c.scale.length > 0 ? (
        <div className="mt-6 border-t border-line pt-5">
          <p className="eyebrow">{c.scaleLabel}</p>
          {c.scaleIntro ? <p className="mt-2 text-xs leading-relaxed text-ink-dim">{c.scaleIntro}</p> : null}
          <div className="mt-3 grid grid-cols-3 gap-3">
            {c.scale.map((s) => (
              <div key={s.label}>
                <p className="font-display text-xl text-ink md:text-2xl">{s.value}</p>
                <p className="mt-1 text-[11px] leading-snug text-ink-faint">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {c.keyMessage ? (
        <div className="mt-auto pt-6">
          {c.keyLabel ? <p className="eyebrow">{c.keyLabel}</p> : null}
          <p className="font-display mt-2 text-base italic leading-snug text-accent md:text-lg">{c.keyMessage}</p>
        </div>
      ) : null}
    </div>
  );
}
