"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <section id="top" className="relative flex min-h-[100svh] items-start overflow-hidden pt-28 pb-16 md:items-center md:pt-32">
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {t.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display mt-6 max-w-3xl text-[2.6rem] leading-[1.06] font-medium tracking-tight text-ink sm:text-6xl md:text-[4.2rem]"
          >
            {t.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-dim md:text-lg"
          >
            {t.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-faint"
          >
            {t.capabilityLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              {t.ctaPrimary}
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-2 border-b border-ink/30 pb-0.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="relative h-full w-full overflow-hidden rounded-sm border border-line bg-bg-card">
            <Image
              src="/images/portrait.jpg"
              alt="Hoàng Nguyễn"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="mt-5 flex flex-col items-center gap-1.5 text-center">
            {t.subCredentials.map((line) => (
              <p key={line} className="max-w-xs text-xs leading-relaxed text-ink-faint">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#who"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">{t.scrollHint}</span>
        <ArrowDown size={14} className="animate-pulse-slow" />
      </motion.a>
    </section>
  );
}
