"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { LinkedInIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

const socials = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "https://www.facebook.com/liamnguyen.hn/", label: "Facebook" },
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
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading label={t.label} heading={t.heading} sub={t.sub} />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={0.05}>
            <p className="eyebrow">{t.directLabel}</p>
            <div className="mt-6 space-y-4 border-t border-line pt-6">
              <a href={`mailto:${t.email}`} className="flex items-center gap-3 text-ink transition-colors hover:text-accent">
                <Mail size={16} className="text-ink-faint" />
                {t.email}
              </a>
              <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-ink transition-colors hover:text-accent">
                <Phone size={16} className="text-ink-faint" />
                {t.phone}
              </a>
              <div className="flex items-center gap-3 text-ink">
                <MapPin size={16} className="text-ink-faint" />
                {t.location}
              </div>
            </div>

            <div className="mt-9 border-t border-line pt-7">
              <p className="eyebrow">{t.socialLabel}</p>
              <div className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    data-cursor-hover
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-accent/60 hover:text-ink"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={onSubmit} className="space-y-6">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label={t.formName} name="name" required />
                <Field label={t.formCompany} name="company" />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-dim">
                  {t.formProjectType}
                </label>
                <select
                  name="projectType"
                  defaultValue=""
                  className="w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
                >
                  <option value="" disabled>
                    —
                  </option>
                  {t.formProjectTypeOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-dim">
                  {t.formProblem}
                </label>
                <textarea
                  name="problem"
                  required
                  rows={4}
                  className="w-full resize-none rounded-none border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-dim">
                    {t.formTimeline}
                  </label>
                  <select
                    name="timeline"
                    defaultValue=""
                    className="w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
                  >
                    <option value="" disabled>
                      —
                    </option>
                    {t.formTimelineOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label={t.formContactInfo} name="contactInfo" required />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? t.formSending : t.formSubmit}
                <ArrowRight size={15} />
              </button>

              {status === "success" && <p className="text-sm text-accent">{t.formSuccess}</p>}
              {status === "error" && <p className="text-sm text-red-400">{t.formError}</p>}
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
        className="w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
      />
    </div>
  );
}
