import { Language } from "@/content";

type Props = {
  lang: Language;
  theme: "dark" | "light";
  onToggleLang: () => void;
  onToggleTheme: () => void;
};

export function Toggles({ lang, theme, onToggleLang, onToggleTheme }: Props) {
  const nextLang = lang === "en" ? "ES" : "EN";

  return (
    <div className="print:hidden fixed right-4 top-4 z-50">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          aria-label="Toggle language"
          aria-pressed={lang === "es"}
          onClick={onToggleLang}
          className="rounded-full bg-gradient-to-r from-indigo-500/40 via-cyan-500/40 to-emerald-500/40 px-3 py-1 text-xs font-semibold text-white transition hover:from-indigo-500/60 hover:to-emerald-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          {lang.toUpperCase()} / {nextLang}
        </button>
        <span className="h-5 w-px bg-gradient-to-b from-indigo-400 via-cyan-400 to-emerald-400 opacity-70" />
        <button
          type="button"
          aria-label="Toggle theme"
          aria-pressed={theme === "light"}
          onClick={onToggleTheme}
          className="rounded-full px-2 text-sm text-white transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}
