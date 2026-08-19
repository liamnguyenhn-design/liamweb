"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, Radio, Sparkles, ArrowRight, ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

const icons = [Compass, Radio, Sparkles];

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang].services;
  const [gallery, setGallery] = useState<{ pillar: number; index: number } | null>(null);

  const close = () => setGallery(null);
  const prev = () =>
    setGallery((g) => {
      if (!g) return g;
      const len = t.pillars[g.pillar].images.length;
      return { pillar: g.pillar, index: (g.index - 1 + len) % len };
    });
  const next = () =>
    setGallery((g) => {
      if (!g) return g;
      const len = t.pillars[g.pillar].images.length;
      return { pillar: g.pillar, index: (g.index + 1) % len };
    });

  return (
    <section className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(139,92,246,0.1),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} align="center" />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.pillars.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={p.number}>
                <div className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-violet-400/40">
                  <span className="font-display absolute -right-2 -top-4 text-8xl font-bold text-violet-500/10 transition-colors group-hover:text-violet-500/20">
                    {p.number}
                  </span>
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-magenta/20 text-violet-300">
                    <Icon size={22} />
                  </div>
                  <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {p.number} · {p.title}
                  </p>
                  <h3 className="font-display relative mt-2 text-xl font-semibold leading-snug text-ink">
                    {p.subtitle}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-dim">{p.body}</p>

                  <button
                    type="button"
                    onClick={() => setGallery({ pillar: i, index: 0 })}
                    data-cursor-hover
                    className="group/btn relative mt-6 flex items-center gap-3 overflow-hidden rounded-xl border border-violet-700/50 bg-bg/40 p-2 text-left transition-colors hover:border-violet-400/60"
                  >
                    <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={p.images[0]}
                        alt={p.subtitle}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-500 group-hover/btn:scale-110"
                      />
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-violet-300">
                      <Images size={14} />
                      {t.galleryCta}
                    </span>
                  </button>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-14">
          <div className="glass-card mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border-gold/25 px-8 py-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {t.philosophyLabel}
            </p>
            <p className="font-display flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-lg font-semibold text-ink md:text-xl">
              {t.philosophy.split("→").map((part, i, arr) => (
                <span key={i} className="flex items-center gap-3">
                  <span>{part.trim()}</span>
                  {i < arr.length - 1 && <ArrowRight size={18} className="text-violet-400" />}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {gallery ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:border-white/50"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:border-white/50 md:left-6"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:border-white/50 md:right-6"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={`${gallery.pillar}-${gallery.index}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[85vh] w-full max-w-3xl flex-col items-center"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={t.pillars[gallery.pillar].images[gallery.index]}
                  alt={t.pillars[gallery.pillar].subtitle}
                  fill
                  sizes="100vw"
                  className="object-contain bg-black"
                />
              </div>
              <p className="mt-4 max-w-xl text-center text-sm text-white/80">
                {t.pillars[gallery.pillar].number} · {t.pillars[gallery.pillar].title}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                {gallery.index + 1} / {t.pillars[gallery.pillar].images.length}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
