"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowUpRight,
  ChatCircleText,
  Waveform,
  type Icon,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { useLang, type Dict } from "@/lib/i18n";

const MORE_ICONS: Icon[] = [ChatCircleText, Waveform];

function displayDomain(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

type Featured = Dict["projects"]["featured"][number];

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/40">
      <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
      <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
      <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
      <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
        {displayDomain(url)}
      </span>
    </div>
  );
}

/* Scroll-driven showcase: the browser frame stays pinned and its screenshot
   pans top to bottom as you scroll, while the side text swaps to the project
   currently in view. */
function FeaturedScroll({ t }: { t: Dict }) {
  const featured = t.projects.featured;
  const count = featured.length;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.max(0, Math.min(count - 1, Math.floor(p * count)));
    setActive(next);
  });

  const pan = useTransform(scrollYProgress, (p) => {
    const local = ((p * count) % 1 + 1) % 1;
    return `${(local * 100).toFixed(2)}%`;
  });

  const project: Featured = featured[active];
  const panStyle = { "--pan": pan } as unknown as CSSProperties;

  return (
    <section ref={ref} className="relative" style={{ height: `${count * 140}vh` }}>
      <div className="sticky top-0 flex min-h-[100dvh] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-4 py-20 md:grid-cols-2 md:gap-14 md:px-8">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {t.projects.title}
            </h2>
            <div className="relative mt-8 min-h-[210px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-2xl font-medium">{project.name}</h3>
                  <p className="mt-4 max-w-[46ch] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.desc}
                  </p>
                  <p className="mt-5 text-sm text-zinc-500 dark:text-zinc-500">
                    {project.tech}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 font-medium text-teal-700 transition hover:underline active:scale-[0.98] dark:text-teal-300"
                  >
                    {t.projects.visit}
                    <ArrowUpRight size={18} weight="bold" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex items-center gap-2.5">
              {featured.map((p, i) => (
                <span
                  key={p.name}
                  className={
                    i === active
                      ? "h-1.5 w-8 rounded-full bg-teal-600 transition-all duration-300 dark:bg-teal-400"
                      : "h-1.5 w-4 rounded-full bg-zinc-300 transition-all duration-300 dark:bg-zinc-700"
                  }
                />
              ))}
              <span className="ml-2 text-xs tabular-nums text-zinc-500 dark:text-zinc-500">
                0{active + 1} / 0{count}
              </span>
            </div>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group order-1 block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/5 transition duration-300 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30 md:order-2"
          >
            <BrowserChrome url={project.url} />
            <div className="relative aspect-[16/10] overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  style={panStyle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover [object-position:50%_var(--pan)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* Static fallback for reduced-motion users: no pinning, no pan, hero shown. */
function FeaturedStatic({ t }: { t: Dict }) {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 md:px-8 md:py-28">
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
              className="group block h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <BrowserChrome url={project.url} />
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <ArrowUpRight size={20} weight="bold" className="mt-0.5 shrink-0 text-zinc-400" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.desc}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">{project.tech}</span>
                  <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
                    {t.projects.visit}
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MoreProjects({ t }: { t: Dict }) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-20 md:px-8 md:pb-28">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
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
    </div>
  );
}

export function Projects() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <div id="projets" className="scroll-mt-20">
      {reduce ? <FeaturedStatic t={t} /> : <FeaturedScroll t={t} />}
      <MoreProjects t={t} />
    </div>
  );
}
