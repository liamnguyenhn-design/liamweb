export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="no-scrollbar relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max gap-12 py-2">
        {doubled.map((item, i) => (
          <span
            key={item + i}
            className="font-display shrink-0 text-2xl font-semibold tracking-tight text-ink-faint transition-colors hover:text-violet-300 sm:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
