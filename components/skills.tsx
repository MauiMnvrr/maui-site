"use client";

import {
  ChartLineUp,
  Code,
  Sparkle,
  TrendUp,
  type Icon,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { useLang } from "@/lib/i18n";

const GROUP_ICONS: Icon[] = [TrendUp, ChartLineUp, Code, Sparkle];

export function Skills() {
  const { t } = useLang();

  return (
    <section id="competences" className="mx-auto max-w-[1200px] scroll-mt-20 px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t.skills.title}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-x-16 gap-y-14 md:grid-cols-2">
        {t.skills.groups.map((group, i) => {
          const IconComponent = GROUP_ICONS[i];
          return (
            <Reveal key={group.name} delay={i * 0.05}>
              <div className="flex items-center gap-3">
                <IconComponent
                  size={24}
                  weight="duotone"
                  className="text-teal-700 dark:text-teal-300"
                />
                <h3 className="text-lg font-medium">{group.name}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
