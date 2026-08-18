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
    { href: "#about", label: t.nav.about },
    { href: "#journey", label: t.nav.journey },
    { href: "#awards", label: t.nav.awards },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-violet-900/60 bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          HN<span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-700/60 text-ink-dim transition-colors hover:border-violet-400 hover:text-ink"
            aria-label="Toggle light/dark mode"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={toggle}
            className="rounded-full border border-violet-700/60 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink-dim transition-colors hover:border-violet-400 hover:text-ink"
            aria-label="Toggle language"
          >
            {lang === "vi" ? "VI / EN" : "EN / VI"}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-violet-500 to-magenta px-5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-transform hover:scale-105"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          className="text-ink md:hidden"
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
            className="overflow-hidden border-t border-violet-900/60 bg-bg/95 backdrop-blur-xl md:hidden"
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
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-700/60 text-ink-dim"
                  aria-label="Toggle light/dark mode"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <button
                  onClick={toggle}
                  className="rounded-full border border-violet-700/60 px-3 py-1.5 text-xs font-semibold text-ink-dim"
                >
                  {lang === "vi" ? "VI / EN" : "EN / VI"}
                </button>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-gradient-to-r from-violet-500 to-magenta px-5 py-2.5 text-center text-sm font-semibold text-white"
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
