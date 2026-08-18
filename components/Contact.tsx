"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { LinkedInIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

const socials = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(226,84,201,0.12),transparent)]" />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} align="center" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.05}>
            <div className="glass-card h-full rounded-3xl p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                {t.directLabel}
              </p>
              <div className="mt-6 space-y-5">
                <a href={`mailto:${t.email}`} className="flex items-center gap-3 text-ink transition-colors hover:text-violet-300">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Mail size={17} />
                  </span>
                  {t.email}
                </a>
                <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-ink transition-colors hover:text-violet-300">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Phone size={17} />
                  </span>
                  {t.phone}
                </a>
                <div className="flex items-center gap-3 text-ink">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <MapPin size={17} />
                  </span>
                  {t.location}
                </div>
              </div>

              <div className="mt-9 border-t border-violet-900/60 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                  {t.socialLabel}
                </p>
                <div className="mt-4 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      data-cursor-hover
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-700/60 text-ink-dim transition-colors hover:border-violet-400 hover:text-ink"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={onSubmit} className="glass-card space-y-5 rounded-3xl p-8">
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label={t.formName} name="name" required />
                <Field label={t.formEmail} name="email" type="email" required />
              </div>
              <Field label={t.formSubject} name="subject" />
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-dim">
                  {t.formMessage}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-violet-800/50 bg-bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-violet-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-magenta px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "sending" ? t.formSending : t.formSubmit}
                <Send size={15} />
              </button>

              {status === "success" && (
                <p className="text-sm text-violet-300">{t.formSuccess}</p>
              )}
              {status === "error" && <p className="text-sm text-magenta">{t.formError}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-dim">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-violet-800/50 bg-bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-violet-400 focus:outline-none"
      />
    </div>
  );
}
