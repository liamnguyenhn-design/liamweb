"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Showreel() {
  const { lang } = useLanguage();
  const t = content[lang].showreel;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.controls = true;
    v.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <Reveal>
      <section className="relative">
        <button
          type="button"
          onClick={playing ? undefined : handlePlay}
          data-cursor-hover
          className="group relative block h-[52vh] w-full overflow-hidden md:h-[64vh]"
          aria-label={t.play}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/showreel.mp4"
            poster="/videos/showreel-poster.jpg"
            playsInline
          />
          {!playing ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-black transition-transform group-hover:scale-110 md:h-20 md:w-20">
                  <Play size={26} className="ml-1" fill="currentColor" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-6 py-8 text-left md:px-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">{t.label}</p>
                <p className="font-display mt-2 text-2xl text-white md:text-3xl">{t.title}</p>
                <p className="mt-1 text-sm text-white/60">{t.tag}</p>
              </div>
            </>
          ) : null}
        </button>

        <div className="mx-auto max-w-[1400px] border-b border-line px-6 py-10 md:px-10">
          <p className="max-w-2xl text-base leading-relaxed text-ink-dim">{t.description}</p>

          <div className="mt-6 flex flex-col gap-1.5 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-1.5">
            {t.credits.map((c) => (
              <p key={c.role} className="text-xs leading-relaxed text-ink-faint">
                <span className="font-medium text-ink-dim">{c.role}:</span> {c.names}
              </p>
            ))}
          </div>

          <p className="mt-5 text-xs text-accent">{t.hashtags}</p>
        </div>
      </section>
    </Reveal>
  );
}
