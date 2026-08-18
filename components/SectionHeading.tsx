type SectionHeadingProps = {
  label: string;
  heading: string;
  sub?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ label, heading, sub, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <div
        className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
        {label}
      </div>
      <h2 className="font-display mt-5 text-3xl leading-[1.1] font-semibold text-ink sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      {sub ? <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">{sub}</p> : null}
    </div>
  );
}
