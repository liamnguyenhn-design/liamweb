"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function TrustedBy() {
  const { lang } = useLanguage();
  const t = content[lang].trustedBy;

  return (
    <section className="relative border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-center">{t.label}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            {t.items.map((item) => (
              <div
                key={item.name}
                title={item.name}
                className="relative h-7 w-24 shrink-0 grayscale transition-all duration-300 hover:grayscale-0 md:h-8 md:w-28"
              >
                <Image src={item.logo} alt={item.name} fill sizes="112px" className="object-contain" />
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-ink-faint">{t.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
