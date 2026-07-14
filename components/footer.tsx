"use client";

import { LINKEDIN_URL, useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 px-4 py-10 text-sm text-zinc-500 dark:text-zinc-400 md:flex-row md:items-center md:px-8">
        <p>© 2026 Maui Manavarere. {t.footer.made}</p>
        <div className="flex items-center gap-6">
          <span>{t.footer.location}</span>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
