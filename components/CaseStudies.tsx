"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ChuongTailorCase from "@/components/ChuongTailorCase";
import { useLanguage } from "@/lib/language-context";
import { content, type CaseStudy } from "@/lib/content";

const ROWS: { key: keyof CaseStudy; label: { vi: string; en: string } }[] = [
  { key: "problem", label: { vi: "Bài toán", en: "Problem" } },
  { key: "perspective", label: { vi: "Góc nhìn", en: "Perspective" } },
  { key: "solution", label: { vi: "Giải pháp", en: "Solution" } },
  { key: "execution", label: { vi: "Triển khai", en: "Execution" } },
  { key: "result", label: { vi: "Kết quả", en: "Result" } },
];

export default function CaseStudies() {
  const { lang } = useLanguage();
  const t = content[lang].caseStudies;
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <ChuongTailorCase />

        {/* Other case studies */}
        <div className="mt-16 border-t border-line">
          <p className="eyebrow mb-2 pt-8">{t.otherCasesLabel}</p>
          {t.items.map((c, i) => (
            <Reveal key={c.id} delay={Math.min(0.04 * i, 0.16)}>
              <button
                onClick={() => setActive(c)}
                data-cursor-hover
                className="group flex w-full flex-col items-start justify-between gap-3 border-t border-line py-8 text-left sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    {c.tag} · {c.year}
                  </p>
                  <h3 className="font-display mt-1.5 text-xl text-ink md:text-2xl">
                    {c.brand} — {c.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">{c.result}</p>
                </div>
                <span className="shrink-0 border-b border-ink/30 pb-0.5 text-sm font-medium text-ink transition-colors group-hover:border-accent group-hover:text-accent">
                  {t.viewCase}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Brand campaigns */}
        <Reveal delay={0.1} className="mt-16">
          <p className="eyebrow mb-8">{t.campaignsHeading}</p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.campaigns.map((c) => (
              <div key={c.id}>
                {c.logo ? (
                  <div className="relative h-7 w-24 grayscale">
                    <Image src={c.logo} alt={c.brand} fill sizes="96px" className="object-contain object-left" />
                  </div>
                ) : (
                  <p className="font-display text-lg text-ink">{c.brand}</p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-ink-dim">{c.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-accent">{c.proof}</p>
                <p className="mt-1 text-xs text-ink-faint">{c.year}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-sm border border-line bg-bg p-8 shadow-2xl md:p-10"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-accent/60 hover:text-ink"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                {active.tag} · {active.year}
              </p>
              <h3 className="font-display mt-2 text-2xl text-ink md:text-3xl">
                {active.brand} — {active.title}
              </h3>

              <div className="mt-6 space-y-5">
                {ROWS.map((r) => (
                  <div key={r.key} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent sm:w-28 sm:shrink-0">
                      {r.label[lang]}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-dim">{active[r.key] as string}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {active.stages.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-[11px] font-medium text-ink-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
