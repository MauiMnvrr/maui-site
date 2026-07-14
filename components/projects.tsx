"use client";

import {
  ChatCircleText,
  Storefront,
  Waveform,
  type Icon,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { useLang } from "@/lib/i18n";

const CELLS: { icon: Icon; span: string; tone: string }[] = [
  {
    icon: ChatCircleText,
    span: "md:col-span-6",
    tone: "bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/40 dark:to-zinc-900",
  },
  {
    icon: Waveform,
    span: "md:col-span-3",
    tone: "bg-zinc-100 dark:bg-zinc-900/60",
  },
  {
    icon: Storefront,
    span: "md:col-span-3",
    tone: "bg-teal-50/70 dark:bg-teal-950/25",
  },
];

export function Projects() {
  const { t } = useLang();

  return (
    <section id="projets" className="mx-auto max-w-[1200px] scroll-mt-20 px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t.projects.title}
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        {t.projects.items.map((item, i) => {
          const cell = CELLS[i];
          const IconComponent = cell.icon;
          return (
            <Reveal key={item.name} delay={i * 0.05} className={cell.span}>
              <article
                className={`h-full rounded-2xl border border-zinc-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:hover:shadow-black/20 md:p-8 ${cell.tone}`}
              >
                <IconComponent
                  size={26}
                  weight="duotone"
                  className="text-teal-700 dark:text-teal-300"
                />
                <h3 className="mt-5 text-lg font-medium">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.desc}
                </p>
                <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
                  {item.tech}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
