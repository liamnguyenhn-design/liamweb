"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Showreel() {
  const { lang } = useLanguage();
  const t = content[lang].showreel;

  return (
    <Reveal>
      <section className="relative h-[52vh] w-full overflow-hidden md:h-[64vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/showreel.mp4"
          poster="/videos/showreel-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-6 py-8 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">{t.label}</p>
          <p className="font-display mt-2 text-2xl text-white md:text-3xl">{t.title}</p>
          <p className="mt-1 text-sm text-white/60">{t.tag}</p>
        </div>
      </section>
    </Reveal>
  );
}
