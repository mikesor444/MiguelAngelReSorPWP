import { ReactNode } from "react";

type SnapshotCard = { value: string; label: string };

type SnapshotProps = {
  items: SnapshotCard[];
};

export function SnapshotCards({ items }: SnapshotProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="avoid-break rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition hover:border-cyan-300/60 hover:shadow-[0_24px_60px_rgba(0,255,255,0.12)] print:border print:border-zinc-300 print:bg-white print:shadow-none"
        >
          <p className="text-2xl font-semibold text-white print:text-black">
            {item.value}
          </p>
          <p className="text-sm text-white/70 print:text-black/80">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

type ChipProps = {
  items: string[];
  tone?: "default" | "glow";
};

export function ChipList({ items, tone = "default" }: ChipProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`avoid-break rounded-full border px-3 py-1 text-xs font-semibold transition ${
            tone === "glow"
              ? "border-indigo-300/40 bg-indigo-300/10 text-indigo-50 shadow-[0_0_25px_rgba(99,102,241,0.35)] print:shadow-none"
              : "border-white/10 bg-white/5 text-white/80 print:border-zinc-300 print:bg-white print:text-black/80"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

type CardProps = {
  title: string;
  detail?: string;
  meta?: ReactNode;
  children?: ReactNode;
};

export function SimpleCard({ title, detail, meta, children }: CardProps) {
  return (
    <div className="avoid-break rounded-xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.3)] print:border print:border-zinc-300 print:bg-white print:shadow-none">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm uppercase tracking-[0.12em] text-cyan-200">
            {title}
          </p>
          {detail && (
            <p className="text-sm font-medium text-white print:text-black">
              {detail}
            </p>
          )}
        </div>
        {meta}
      </div>
      {children && <div className="mt-3 text-sm text-white/80">{children}</div>}
    </div>
  );
}
