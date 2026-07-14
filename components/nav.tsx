"use client";

import { useLang, type Lang } from "@/lib/i18n";

const LANGS: Lang[] = ["fr", "en"];

export function Nav() {
  const { lang, setLang, t } = useLang();

  const links = [
    { href: "#boumrank", label: t.nav.boumrank },
    { href: "#projets", label: t.nav.projects },
    { href: "#parcours", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-zinc-50/85 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/85">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-8">
        <a href="#" className="font-semibold tracking-tight">
          Maui Manavarere
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div
          role="group"
          aria-label={t.nav.langLabel}
          className="flex items-center rounded-full border border-zinc-200 p-0.5 dark:border-zinc-800"
        >
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`rounded-full px-2.5 py-1 text-xs font-medium uppercase transition-colors ${
                lang === code
                  ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
