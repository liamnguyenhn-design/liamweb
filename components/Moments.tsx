"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Moments() {
  const { lang } = useLanguage();
  const t = content[lang].moments;
  const doubled = [...t.items, ...t.items];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <div className="no-scrollbar relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="animate-moments-marquee flex w-max items-center gap-4 py-2">
            {doubled.map((src, i) => (
              <div
                key={src + i}
                className="relative h-40 w-56 shrink-0 overflow-hidden rounded-sm border border-line sm:h-48 sm:w-64"
              >
                <Image src={src} alt="" fill sizes="256px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
