import { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  eyebrow?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, actions, children }: Props) {
  return (
    <section id={id} className="scroll-m-20 space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 opacity-70" />
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm uppercase tracking-[0.25em] text-cyan-200/80 backdrop-blur print:hidden">
          <span>{eyebrow ?? "SECTION"}</span>
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <div>
          <h2 className="text-xl font-semibold text-[var(--text)]">
            {title}
          </h2>
          {actions}
        </div>
      </div>
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] print:border-0 print:bg-transparent print:shadow-none">
        {children}
      </div>
    </section>
  );
}
