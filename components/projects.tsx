"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ChatCircleText,
  Waveform,
  type Icon,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { useLang } from "@/lib/i18n";

const MORE_ICONS: Icon[] = [ChatCircleText, Waveform];

function displayDomain(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

export function Projects() {
  const { t } = useLang();

  return (
    <section
      id="projets"
      className="mx-auto max-w-[1200px] scroll-mt-20 px-4 py-20 md:px-8 md:py-28"
    >
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t.projects.title}
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {t.projects.featured.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/40"
            >
              <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/40">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                  {displayDomain(project.url)}
                </span>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="site-shot object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <ArrowUpRight
                    size={20}
                    weight="bold"
                    className="mt-0.5 shrink-0 text-zinc-400 transition group-hover:text-teal-700 dark:group-hover:text-teal-300"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.desc}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {project.tech}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-700 dark:text-teal-300">
                    {t.projects.visit}
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
        {t.projects.more.map((item, i) => {
          const IconComponent = MORE_ICONS[i] ?? ChatCircleText;
          return (
            <Reveal key={item.name} delay={i * 0.08}>
              <article className="flex h-full items-start gap-5 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/40">
                  <IconComponent
                    size={22}
                    weight="duotone"
                    className="text-teal-700 dark:text-teal-300"
                  />
                </span>
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.desc}
                  </p>
                  <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
                    {item.tech}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
