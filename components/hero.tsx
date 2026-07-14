"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang();

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.h1
            {...enter(0)}
            className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
          >
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </motion.h1>
          <motion.p
            {...enter(0.1)}
            className="mt-6 max-w-[46ch] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {t.hero.sub}
          </motion.p>
          <motion.div {...enter(0.2)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#boumrank"
              className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-800 active:scale-[0.98] dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-teal-200"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:border-zinc-500 active:scale-[0.98] dark:border-zinc-700 dark:hover:border-zinc-500"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </div>
        <motion.div {...enter(0.15)} className="lg:col-span-5">
          <div className="relative mx-auto w-56 max-w-full md:w-72 lg:w-96">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-full bg-teal-100 dark:bg-teal-900/40"
            />
            <Image
              src="/portrait.png"
              alt={t.hero.portraitAlt}
              width={612}
              height={612}
              priority
              className="relative rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
