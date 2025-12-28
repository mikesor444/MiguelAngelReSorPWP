"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useMemo, useState } from "react";
import { ChipList, SimpleCard, SnapshotCards } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { ModalSummary } from "@/components/ModalSummary";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { Toggles } from "@/components/Toggles";
import { Language, LINKEDIN_URL, PDF_URL, WORK_PERMIT_URL, content } from "@/content";

type Theme = "dark" | "light";

const THEME_KEY = "pwp-theme";
const LANG_KEY = "pwp-lang";
const SUMMARY_KEY = "pwp-summary-dismissed";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [showSummary, setShowSummary] = useState(false);

  const t = useMemo(() => content[lang], [lang]);

  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_KEY) as Language | null;
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const summaryDismissed = localStorage.getItem(SUMMARY_KEY) === "true";

    if (storedLang === "es") setLang("es");
    if (storedTheme === "light") setTheme("light");
    setShowSummary(!summaryDismissed);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-light", theme === "light");
    root.classList.toggle("theme-dark", theme === "dark");
    root.style.backgroundColor = theme === "light" ? "#ffffff" : "#05060a";
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowSummary(false);
        localStorage.setItem(SUMMARY_KEY, "true");
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const footerText = t.footer.replace("{year}", new Date().getFullYear().toString());

  const closeSummary = () => {
    setShowSummary(false);
    localStorage.setItem(SUMMARY_KEY, "true");
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_26%)] blur-3xl print:hidden" />
      <Toggles
        lang={lang}
        theme={theme}
        onToggleLang={() => setLang((prev) => (prev === "en" ? "es" : "en"))}
        onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-16 pt-10 sm:px-8">
        <Hero data={t.hero} onOpenSummary={() => setShowSummary(true)} lang={lang} />

        <div className="hidden print-inline rounded-xl border border-zinc-300 bg-white px-5 py-4 text-black shadow-none">
          <h2 className="text-lg font-semibold">{t.summary.title}</h2>
          <p className="mt-2 text-sm leading-relaxed">{t.summary.body}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {t.summary.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <Section title="Offshore Snapshot" eyebrow={lang === "en" ? "Snapshot" : "Resumen"}>
          <SnapshotCards items={t.snapshot} />
        </Section>

        <Section title={t.coreSkills.title} eyebrow="Skills">
          <div className="space-y-3 text-sm">
            <ChipList items={t.coreSkills.skills} />
            <p className="text-xs text-white/60 print:text-black/70">{t.coreSkills.note}</p>
          </div>
        </Section>

        <Section id="sea-service" title={t.seaService.title} eyebrow="Sea Service">
          <Timeline entries={t.seaService.entries} />
        </Section>

        <Section title={t.currentWork.title} eyebrow="Continuity">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <SimpleCard
              title={t.currentWork.role}
              detail={t.currentWork.dates}
              meta={
                <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/70 print:border-zinc-300 print:bg-white print:text-black/70">
                  {lang === "en" ? "Ongoing" : "En curso"}
                </span>
              }
            >
              <p className="text-white/80 print:text-black/80">{t.currentWork.detail}</p>
              <p className="mt-1 text-xs text-white/60 print:text-black/70">{t.currentWork.note}</p>
            </SimpleCard>
          </div>
        </Section>

        <Section title={t.jetRescue.title} eyebrow="Featured">
          <div className="avoid-break rounded-2xl border border-indigo-400/50 bg-indigo-500/5 px-5 py-4 shadow-[0_0_60px_rgba(99,102,241,0.35)] print:border-zinc-300 print:bg-white print:shadow-none">
            <p className="text-sm font-semibold text-indigo-100 print:text-black">
              {t.jetRescue.subtitle}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80 print:text-black/80">
              {t.jetRescue.bullets.map((item) => (
                <li key={item} className="leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <ChipList items={t.jetRescue.chips} tone="glow" />
            </div>
          </div>
        </Section>

        <Section title={t.certifications.title} eyebrow="Credentials">
          <div className="flex flex-wrap gap-2">
            {t.certifications.items.map((item) => (
              <span
                key={item}
                className="avoid-break rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/80 print:border-zinc-300 print:bg-white print:text-black/80"
              >
                {item}
              </span>
            ))}
          </div>
        </Section>

        <Section title={t.hobbies.title} eyebrow="Extra">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.hobbies.items.map((item) => (
              <SimpleCard key={item.title} title={item.title} detail={item.detail}>
                {item.link && (
                  <a
                    href={item.link}
                    className="text-xs font-semibold text-cyan-200 underline decoration-cyan-300/60 underline-offset-4 hover:text-cyan-100"
                  >
                    GitHub
                  </a>
                )}
              </SimpleCard>
            ))}
          </div>
        </Section>

        <Section id="contact" title={t.contact.title} eyebrow={lang === "en" ? "Reach" : "Contacto"}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.3)] print:border print:border-zinc-300 print:bg-white print:shadow-none">
              <form className="space-y-3">
                <label className="block text-sm text-white/80 print:text-black/80">
                  {t.contact.form.name}
                  <input
                    aria-label={t.contact.form.name}
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-300 focus:bg-white/10 print:border-zinc-300 print:bg-white print:text-black"
                    placeholder={t.contact.form.name}
                    type="text"
                  />
                </label>
                <label className="block text-sm text-white/80 print:text-black/80">
                  {t.contact.form.email}
                  <input
                    aria-label={t.contact.form.email}
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-300 focus:bg-white/10 print:border-zinc-300 print:bg-white print:text-black"
                    placeholder="name@email.com"
                    type="email"
                  />
                </label>
                <label className="block text-sm text-white/80 print:text-black/80">
                  {t.contact.form.message}
                  <textarea
                    aria-label={t.contact.form.message}
                    className="mt-1 h-28 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-300 focus:bg-white/10 print:border-zinc-300 print:bg-white print:text-black"
                    placeholder="—"
                  />
                </label>
                <button
                  type="button"
                  className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 print:hidden"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>

            <div className="space-y-3">
              <SimpleCard
                title={t.contact.direct}
                meta={
                  <span className="rounded-full border border-emerald-300/60 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-50 print:border-zinc-300 print:bg-white print:text-black/80">
                    {t.hero.badge}
                  </span>
                }
              >
                <div className="space-y-1 text-sm text-white/80 print:text-black/80">
                  <p>{t.hero.locationLabel}</p>
                  <a
                    href={`mailto:${t.hero.emailLabel}`}
                    className="underline decoration-cyan-300/60 underline-offset-4 hover:text-cyan-100"
                  >
                    {t.hero.emailLabel}
                  </a>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={LINKEDIN_URL}
                      className="underline decoration-indigo-300/60 underline-offset-4 hover:text-indigo-100"
                    >
                      {t.hero.linkedinLabel}
                    </a>
                    <a
                      href={WORK_PERMIT_URL}
                      className="underline decoration-emerald-300/60 underline-offset-4 hover:text-emerald-100"
                    >
                      {t.hero.permitLabel}
                    </a>
                  </div>
                </div>
              </SimpleCard>
              <a
                href={PDF_URL}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 print:hidden"
              >
                {t.contact.download}
              </a>
            </div>
          </div>
        </Section>

        <footer className="mb-6 text-center text-xs text-white/50 print:text-black/70">
          {footerText}
        </footer>
      </main>

      <ModalSummary
        open={showSummary}
        onClose={closeSummary}
        title={t.summary.title}
        body={t.summary.body}
        bullets={t.summary.bullets}
      />
    </div>
  );
}
