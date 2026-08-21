"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import { content } from "@/lib/content";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const t = content[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#who", label: t.nav.whoAmI },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  // The Hero behind the navbar is always a dark video, regardless of theme —
  // force light text/borders until scrolled past it onto the themed page bg.
  const onVideo = !scrolled;
  const textMain = onVideo ? "text-white" : "text-ink";
  const textDim = onVideo ? "text-white/70" : "text-ink-dim";
  const textFaint = onVideo ? "text-white/50" : "text-ink-faint";
  const lineColor = onVideo ? "border-white/25" : "border-line";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-bg/90 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className={`flex items-center gap-2.5 ${textMain}`} aria-label="Hoàng Nguyễn — hoangcreators">
          <BrandMark className="h-7 w-7 shrink-0 text-accent" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight">
              Hoàng Nguyễn<span className="text-accent">.</span>
            </span>
            <span className={`mt-0.5 text-[10px] tracking-wide ${textFaint}`}>@hoangcreators</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium uppercase tracking-[0.08em] transition-colors hover:${
                onVideo ? "text-white" : "text-ink"
              } ${textDim}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${lineColor} ${textDim} transition-colors hover:border-accent/60 hover:${
              onVideo ? "text-white" : "text-ink"
            }`}
            aria-label="Toggle light/dark mode"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={toggle}
            className={`rounded-full border ${lineColor} px-3 py-1.5 text-xs font-semibold tracking-wide ${textDim} transition-colors hover:border-accent/60 hover:${
              onVideo ? "text-white" : "text-ink"
            }`}
            aria-label="Toggle language"
          >
            {lang === "vi" ? "VI / EN" : "EN / VI"}
          </button>
          <a
            href="#contact"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors hover:bg-accent ${
              onVideo ? "bg-white text-black hover:text-white" : "bg-ink text-bg"
            }`}
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          className={`${textMain} lg:hidden`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-bg/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-ink-dim transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-dim"
                  aria-label="Toggle light/dark mode"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <button
                  onClick={toggle}
                  className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink-dim"
                >
                  {lang === "vi" ? "VI / EN" : "EN / VI"}
                </button>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-ink px-5 py-2.5 text-center text-sm font-medium text-bg"
                >
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="9.5" y="17" width="2.6" height="6.5" rx="0.4" fill="currentColor" />
      <rect x="14.7" y="13" width="2.6" height="10.5" rx="0.4" fill="currentColor" />
      <rect x="19.9" y="8.5" width="2.6" height="15" rx="0.4" fill="currentColor" />
    </svg>
  );
}
