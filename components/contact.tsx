"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { EMAIL, LINKEDIN_URL, useLang } from "@/lib/i18n";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="mx-auto max-w-[1200px] scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="rounded-2xl bg-zinc-100 px-6 py-16 dark:bg-zinc-900 md:px-16 md:py-20">
          <h2 className="max-w-[20ch] text-3xl font-semibold tracking-tight md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            {t.contact.sub}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-block break-all text-xl font-medium underline decoration-teal-700/50 underline-offset-8 transition hover:decoration-teal-700 dark:decoration-teal-300/50 dark:hover:decoration-teal-300 md:text-3xl"
          >
            {EMAIL}
          </a>
          <div className="mt-10">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-zinc-500 active:scale-[0.98] dark:border-zinc-700 dark:hover:border-zinc-500"
            >
              {t.contact.linkedin}
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
