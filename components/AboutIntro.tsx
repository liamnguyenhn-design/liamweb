"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

function AboutGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line bg-bg-card">
      <AnimatePresence mode="sync">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt=""
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function AboutIntro() {
  const { lang } = useLanguage();
  const t = content[lang].aboutIntro;
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow">{t.label}</p>
            <p className="font-display mt-5 max-w-3xl text-xl leading-snug text-ink sm:text-2xl md:text-[1.7rem]">
              {t.paragraph}
            </p>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-dim">
                    {t.paragraphMore}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              data-cursor-hover
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-ink"
            >
              {expanded ? t.readLess : t.readMore}
              {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>

            <div className="mt-10 border-t border-line pt-6">
              <p className="eyebrow">{t.pressLabel}</p>
              <RevealGroup className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {t.press.map((p) => (
                  <RevealItem key={p.url}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="group flex items-start gap-2 text-ink-dim transition-colors hover:text-ink"
                    >
                      <span className="mt-1 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                          {p.outlet}
                        </span>
                        <span className="mt-1 block text-sm leading-snug">{p.title}</span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="mt-1 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <AboutGallery images={t.images} />
            <p className="mt-4 text-sm leading-relaxed text-ink-dim">{t.imageCaption}</p>
            <a
              href={t.imageCaptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.1em] text-accent transition-colors hover:text-ink"
            >
              {t.imageCaptionLinkLabel}
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
