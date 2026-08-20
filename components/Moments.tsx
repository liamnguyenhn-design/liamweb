"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

const VISIBLE_COUNT = 6;

const spanClasses = [
  "col-span-2 md:col-span-2 md:row-span-1",
  "col-span-1 md:row-span-2",
  "col-span-1",
  "col-span-2 md:col-span-1",
  "col-span-2 md:col-span-1",
  "col-span-2 md:col-span-1",
];

export default function Moments() {
  const { lang } = useLanguage();
  const t = content[lang].moments;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = t.items.slice(0, VISIBLE_COUNT);
  const remaining = t.items.length - VISIBLE_COUNT;

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + t.items.length) % t.items.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % t.items.length));

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3">
          {visible.map((item, i) => {
            const isLastWithMore = i === VISIBLE_COUNT - 1 && remaining > 0;
            return (
              <RevealItem
                key={item.src}
                className={`group relative aspect-[4/3] overflow-hidden rounded-sm border border-line md:aspect-auto ${
                  spanClasses[i] ?? "col-span-1"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  data-cursor-hover
                  className="absolute inset-0 h-full w-full text-left"
                  aria-label={item.caption}
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300 ${
                      isLastWithMore ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  {isLastWithMore ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 backdrop-blur-[2px]">
                      <Images size={22} className="text-white" />
                      <span className="font-display text-2xl font-bold text-white">+{remaining}</span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-white/80">
                        {t.viewAll}
                      </span>
                    </div>
                  ) : (
                    <p className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-xs leading-snug text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.caption}
                    </p>
                  )}
                </button>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
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
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[85vh] w-full max-w-3xl flex-col items-center"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={t.items[activeIndex].src}
                  alt={t.items[activeIndex].caption}
                  fill
                  sizes="100vw"
                  className="object-contain bg-black"
                />
              </div>
              <p className="mt-4 max-w-xl text-center text-sm text-white/80">
                {t.items[activeIndex].caption}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                {activeIndex + 1} / {t.items.length}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
