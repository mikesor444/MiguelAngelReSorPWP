type Entry = {
  role: string;
  vessel: string;
  detail: string;
  bullets: string[];
};

type Props = {
  entries: Entry[];
};

export function Timeline({ entries }: Props) {
  return (
    <ol className="relative space-y-8 border-l border-white/10 pl-6 print:border-zinc-300">
      {entries.map((entry) => (
        <li
          key={`${entry.role}-${entry.vessel}`}
          className="relative pb-2 avoid-break"
        >
          <span className="absolute -left-[13px] top-1 block h-3 w-3 rounded-full bg-gradient-to-br from-indigo-400 via-cyan-300 to-emerald-400 shadow-[0_0_0_6px_rgba(6,9,14,0.6)] print:shadow-none" />
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm uppercase tracking-[0.12em] text-cyan-200">
              {entry.role}
            </p>
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/80 print:bg-transparent print:text-black/80">
              {entry.vessel}
            </span>
          </div>
          <p className="text-sm font-semibold text-white print:text-black">
            {entry.detail}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-white/80 print:text-black/80">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="leading-relaxed">
                • {bullet}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
