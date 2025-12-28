import { Language, LINKEDIN_URL, PDF_URL, WORK_PERMIT_URL } from "@/content";

type HeroData = {
  name: string;
  title: string;
  subtitle: string;
  highlights: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  locationLabel: string;
  emailLabel: string;
  linkedinLabel: string;
  permitLabel: string;
  badge: string;
  summaryButton: string;
};

type Props = {
  data: HeroData;
  onOpenSummary: () => void;
  lang: Language;
};

export function Hero({ data, onOpenSummary, lang }: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.2),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.18),transparent_26%)] px-5 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] print:border print:border-zinc-300 print:bg-white print:shadow-none">
      <div className="pointer-events-none absolute inset-0">
        <svg
          aria-hidden="true"
          className="absolute -right-14 top-6 h-48 w-72 text-cyan-500/20"
          viewBox="0 0 240 180"
          fill="none"
        >
          <defs>
            <linearGradient
              id="flow"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor="#6366F1" stopOpacity="0.7" />
              <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.9" />
              <stop offset="1" stopColor="#34D399" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <path
            d="M20 120C60 90 110 150 150 120C190 90 220 40 240 20"
            stroke="url(#flow)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 40C30 30 90 40 130 70C170 100 210 110 240 90"
            stroke="url(#flow)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="6 6"
          />
          <circle cx="130" cy="70" r="3" fill="#22D3EE" opacity="0.7" />
          <circle cx="190" cy="100" r="2.5" fill="#6366F1" opacity="0.6" />
          <circle cx="90" cy="50" r="2.5" fill="#34D399" opacity="0.6" />
        </svg>
      </div>

      <div className="relative flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100">
            {lang === "en" ? "Offshore résumé" : "Résumé offshore"}
          </span>
          <button
            type="button"
            onClick={onOpenSummary}
            className="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-200/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            {data.summaryButton}
          </button>
          <span className="rounded-full border border-emerald-300/60 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-50">
            {data.badge}
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.name}
          </h1>
          <p className="text-lg font-medium text-cyan-100">{data.title}</p>
          <p className="max-w-3xl text-base text-white/80">{data.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PDF_URL}
            className="rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            {data.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/80 hover:text-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            {data.ctaSecondary}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/80 backdrop-blur print:border print:border-zinc-300 print:bg-white print:text-black/80">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100">
              {lang === "en" ? "Canadian header" : "Encabezado Canadá"}
            </span>
            <span>{data.locationLabel}</span>
            <span className="h-4 w-px bg-white/10" aria-hidden />
            <a
              href={`mailto:${data.emailLabel}`}
              className="underline decoration-cyan-300/60 decoration-2 underline-offset-4 hover:text-cyan-100"
            >
              {data.emailLabel}
            </a>
            <span className="h-4 w-px bg-white/10" aria-hidden />
            <a
              href={LINKEDIN_URL}
              className="underline decoration-indigo-300/60 decoration-2 underline-offset-4 hover:text-indigo-100"
            >
              {data.linkedinLabel}
            </a>
            <span className="h-4 w-px bg-white/10" aria-hidden />
            <a
              href={WORK_PERMIT_URL}
              className="underline decoration-emerald-300/60 decoration-2 underline-offset-4 hover:text-emerald-100"
            >
              {data.permitLabel}
            </a>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
        {lang === "en" ? "Mobile-first · keyboard-ready · print clean" : "Mobile primero · listo para teclado · impresión limpia"}
      </p>
    </section>
  );
}
