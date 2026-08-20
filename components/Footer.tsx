"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
        <p className="text-sm text-ink-faint">
          © {year} Hoàng Nguyễn. {t.footer.rights}
        </p>
        <a
          href="#top"
          data-cursor-hover
          className="inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
        >
          {t.footer.back}
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
