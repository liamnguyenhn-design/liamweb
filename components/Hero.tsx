"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-bg.mp4"
        poster="/videos/hero-bg-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-28 pb-20 md:px-10">
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
          className="font-display mt-6 max-w-3xl text-[2.6rem] leading-[1.06] font-medium tracking-tight text-white sm:text-6xl md:text-[4.2rem]"
        >
          {t.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {t.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50"
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-accent hover:text-white"
          >
            {t.ctaPrimary}
            <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center gap-2 border-b border-white/40 pb-0.5 text-sm font-medium text-white transition-colors hover:border-accent-dim hover:text-accent-dim"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col gap-1.5"
        >
          {t.subCredentials.map((line) => (
            <p key={line} className="max-w-md text-xs leading-relaxed text-white/50">
              {line}
            </p>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#who"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">{t.scrollHint}</span>
        <ArrowDown size={14} className="animate-pulse-slow" />
      </motion.a>
    </section>
  );
}
