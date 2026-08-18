"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      <div className="aurora" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-700/60 bg-violet-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300"
          >
            <Sparkles size={13} className="text-gold" />
            {t.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-7 text-[13vw] leading-[0.95] font-semibold tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[6.4rem]"
          >
            <span className="block text-gradient">{t.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display mt-5 max-w-xl text-2xl leading-snug font-medium text-ink/90 md:text-3xl"
          >
            {t.roleLine1}
            <br />
            {t.roleLine2}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-dim md:text-lg"
          >
            {t.pitch}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-violet-400 to-magenta px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(139,92,246,0.4)] transition-transform hover:scale-[1.03]"
            >
              {t.ctaPrimary}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-violet-700/60 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-violet-400 hover:bg-violet-950/40"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 text-xs uppercase tracking-[0.25em] text-ink-faint"
          >
            {t.credential}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="animate-float absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-600/30 via-violet-500/10 to-magenta/20 blur-2xl" />
          <div className="glass-card relative h-full w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/portrait.jpg"
              alt="Hoàng Nguyễn (Liam)"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 via-transparent to-transparent" />
            <div className="absolute inset-0 shadow-[inset_0_0_90px_45px_rgba(7,5,13,0.85)]" />
            <div className="absolute inset-0 bg-violet-600 mix-blend-color opacity-[0.12]" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass-card animate-float absolute -left-8 top-8 rounded-2xl px-4 py-3 [animation-delay:1s]"
          >
            <p className="font-display text-2xl font-bold text-gradient-violet">4.6M</p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-ink-faint">YouTube subs</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="glass-card animate-float absolute -right-6 bottom-16 rounded-2xl px-4 py-3 [animation-delay:2.2s]"
          >
            <p className="font-display text-2xl font-bold text-gradient-violet">105B+</p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-ink-faint">VNĐ box office</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-faint"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">{t.scrollHint}</span>
        <ArrowDown size={16} className="animate-pulse-slow" />
      </motion.a>
    </section>
  );
}
