"use client";

import { Reveal } from "@/components/reveal";
import { useLang } from "@/lib/i18n";

export function Education() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t.education.title}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {t.education.degrees.map((degree, i) => (
          <Reveal key={degree.degree} delay={i * 0.05}>
            <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
              <h3 className="text-lg font-medium">{degree.degree}</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                {degree.school}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {degree.years}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-medium">{t.education.certsTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.education.certs.map((cert) => (
                <li
                  key={cert}
                  className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium">{t.education.langsTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.education.langs.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
