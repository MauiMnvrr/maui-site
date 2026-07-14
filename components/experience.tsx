"use client";

import { Reveal } from "@/components/reveal";
import { useLang } from "@/lib/i18n";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="parcours" className="mx-auto max-w-[1200px] scroll-mt-20 px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t.experience.title}
        </h2>
      </Reveal>
      <ol className="mt-12 space-y-12 border-l border-zinc-200 pl-6 dark:border-zinc-800 md:pl-12">
        {t.experience.entries.map((entry, i) => (
          <Reveal
            as="li"
            key={entry.org + entry.dates}
            delay={i * 0.04}
            className="grid gap-1 md:grid-cols-12 md:gap-6"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400 md:col-span-3 md:pt-0.5">
              {entry.dates}
            </p>
            <div className="md:col-span-9">
              <h3 className="text-lg font-medium">{entry.role}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {entry.org}
              </p>
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {entry.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
