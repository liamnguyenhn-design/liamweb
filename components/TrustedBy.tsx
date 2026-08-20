"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function TrustedBy() {
  const { lang } = useLanguage();
  const t = content[lang].trustedBy;
  const doubled = [...t.items, ...t.items];

  return (
    <section className="relative border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-center">{t.label}</p>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="mt-10">
        <div className="no-scrollbar relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-14 py-1 md:gap-16">
            {doubled.map((item, i) => (
              <div
                key={item.name + i}
                title={item.name}
                className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl bg-white/95 px-4 py-3 shadow-sm transition-transform duration-300 hover:scale-110"
              >
                <div className="relative h-full w-full">
                  <Image src={item.logo} alt={item.name} fill sizes="128px" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="mt-10 text-center text-xs text-ink-faint">{t.note}</p>
      </div>
    </section>
  );
}
