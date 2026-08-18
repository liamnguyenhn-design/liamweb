"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useLanguage } from "@/lib/language-context";
import { content, type CaseStudy } from "@/lib/content";

const gradients = [
  "from-violet-600 via-violet-500 to-magenta",
  "from-fuchsia-600 via-violet-500 to-indigo-600",
  "from-violet-700 via-violet-500 to-gold",
  "from-indigo-600 via-violet-500 to-fuchsia-500",
  "from-violet-600 via-fuchsia-500 to-violet-800",
  "from-gold via-violet-500 to-violet-800",
];

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = content[lang].portfolio;
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.items.map((item, i) => (
            <RevealItem key={item.id}>
              <button
                onClick={() => setActive(item)}
                data-cursor-hover
                className="glass-card group relative flex w-full flex-col overflow-hidden rounded-2xl text-left transition-all hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div
                  className={`relative h-40 w-full overflow-hidden ${
                    item.cover ? "" : `bg-gradient-to-br ${gradients[i % gradients.length]} opacity-90`
                  }`}
                >
                  {item.cover ? (
                    <>
                      <Image
                        src={item.cover}
                        alt={item.brand}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                  )}
                  <span className="absolute right-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {item.year}
                  </span>
                  {item.logo ? (
                    <span className="absolute left-5 top-4 flex h-11 w-20 items-center justify-center rounded-lg bg-white/95 px-2.5 py-1.5 shadow-md">
                      <span className="relative h-full w-full">
                        <Image src={item.logo} alt={item.brand} fill sizes="80px" className="object-contain" />
                      </span>
                    </span>
                  ) : null}
                  <span className="font-display absolute bottom-4 left-5 text-2xl font-bold text-white/95 drop-shadow">
                    {item.brand}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                    {item.tag}
                  </p>
                  <h3 className="font-display mt-2 text-lg font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-dim">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gold">{item.metric}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-violet-300 transition-transform group-hover:translate-x-1">
                      {t.viewCase} <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-24" delay={0.1}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint">
            {t.brandsLabel}
          </p>
          <div className="mt-6">
            <Marquee items={content[lang].brands} />
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-violet-700/40 bg-bg-elevated p-8 shadow-2xl shadow-black/60 md:p-10"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-violet-700/60 bg-bg-elevated/80 text-ink-dim backdrop-blur transition-colors hover:border-violet-400 hover:text-ink"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              {active.cover ? (
                <div className="relative -mx-8 -mt-8 mb-6 h-48 w-[calc(100%+4rem)] overflow-hidden md:-mx-10 md:-mt-10 md:h-56 md:w-[calc(100%+5rem)]">
                  <Image src={active.cover} alt={active.brand} fill sizes="640px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent" />
                </div>
              ) : null}
              {active.logo ? (
                <span className="mb-4 flex h-12 w-24 items-center justify-center rounded-lg bg-white/95 px-3 py-2 shadow-md">
                  <span className="relative h-full w-full">
                    <Image src={active.logo} alt={active.brand} fill sizes="96px" className="object-contain" />
                  </span>
                </span>
              ) : null}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                {active.tag}
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-ink md:text-3xl">
                {active.brand} — {active.title}
              </h3>
              <p className="mt-1 text-sm text-ink-faint">{active.year}</p>
              <p className="mt-6 text-base leading-relaxed text-ink-dim">{active.description}</p>
              <div className="mt-6 rounded-xl border border-gold/30 bg-gold/5 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.15em] text-gold/80">Highlight</p>
                <p className="font-display mt-1 text-lg font-semibold text-gold">{active.metric}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
