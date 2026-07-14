"use client";

import { Reveal } from "@/components/reveal";
import { useLang } from "@/lib/i18n";

export function Method() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t.method.title}
        </h2>
      </Reveal>
      <ol className="mt-8">
        {t.method.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 0.06}
            className="grid gap-2 border-t border-zinc-200 py-8 first:border-t-0 dark:border-zinc-800 md:grid-cols-12 md:gap-6 md:py-10"
          >
            <h3 className="text-xl font-semibold tracking-tight md:col-span-4 md:text-2xl">
              {item.title}
            </h3>
            <p className="max-w-[60ch] leading-relaxed text-zinc-600 dark:text-zinc-400 md:col-span-8 md:pt-1">
              {item.desc}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
