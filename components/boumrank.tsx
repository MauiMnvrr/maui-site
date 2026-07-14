"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { BOUMRANK_URL, useLang } from "@/lib/i18n";

export function Boumrank() {
  const { t } = useLang();

  return (
    <section id="boumrank" className="mx-auto max-w-[1200px] scroll-mt-20 px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t.boumrank.title}
        </h2>
        <p className="mt-4 max-w-[65ch] leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t.boumrank.lead}
        </p>
      </Reveal>
      <div className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <div className="relative pb-12 pr-4 md:pr-8">
            <Image
              src="/projects/boumrank-home.png"
              alt={t.boumrank.altHome}
              width={1600}
              height={944}
              className="h-auto w-full rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-900/5 dark:border-zinc-800 dark:shadow-black/30"
            />
            <Image
              src="/projects/boumrank-wheel.png"
              alt={t.boumrank.altWheel}
              width={800}
              height={1350}
              className="absolute -bottom-0 right-0 w-[26%] rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-900/10 dark:border-zinc-800 dark:shadow-black/40"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.boumrank.role}
          </p>
          <dl className="mt-8 space-y-6">
            {t.boumrank.facts.map((fact) => (
              <div
                key={fact.title}
                className="border-t border-zinc-200 pt-5 dark:border-zinc-800"
              >
                <dt className="font-medium">{fact.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {fact.desc}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={BOUMRANK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 font-medium text-teal-700 transition hover:underline active:scale-[0.98] dark:text-teal-300"
          >
            {t.boumrank.link}
            <ArrowUpRight size={18} weight="bold" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
