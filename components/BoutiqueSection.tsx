"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

const CARDS = [
  {
    src: IMG.boutiqueAccessories,
    alt: "L'univers accessoires",
    eyebrow: " ",
    label: "L'univers accessoires",
    delay: 0.1,
  },
  {
    src: IMG.boutiqueLifestyle,
    alt: "L'univers lifestyle",
    eyebrow: "",
    label: "L'univers lifestyle",
    delay: 0.2,
  },
];

export default function BoutiqueSection() {
  return (
    <section
      id="boutique"
      aria-label="La boutique"
      className="relative scroll-mt-[var(--header-h)] overflow-hidden bg-encre py-16 text-lin md:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(184,154,106,0.12)_0%,transparent_70%)]"
      />

      <div className="mx-auto max-w-[88rem] px-5 md:px-12 lg:px-16">
        <div className="mb-14 grid gap-10 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal from="up">
              <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.4em] text-or">
                Chapitre II — La Boutique
              </span>
            </Reveal>
            <h2 className="font-[family-name:var(--font-headline)] text-balance text-4xl leading-tight text-lin md:text-6xl lg:text-7xl">
              De la sélection{" "}
              <span className="italic text-or">au lifestyle.</span>
            </h2>
          </div>

          <Reveal from="up" delay={0.15} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-lin/70 md:text-lg">
              Une sélection élégante et raffinée, choisie avec soin par notre équipe. Un univers de prêt-à-porter, d'accessoires et de lifestyle.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-lin underline-offset-8 transition-colors hover:text-or hover:underline"
            >
              Je découvre en boutique
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: EASE }}
            className="group relative md:col-span-8 md:row-span-2"
          >
            <div className="relative h-[28rem] overflow-hidden bg-encre/40 md:h-[44rem]">
              <Image
                src={IMG.heroInterior}
                alt="Vue de la boutique"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-encre via-encre/30 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 z-[1] flex items-end justify-between gap-6 p-6 md:p-10">
                <div className="flex flex-col gap-3">
                  <h3 className="font-[family-name:var(--font-headline)] text-3xl italic text-lin md:text-5xl">
                    L'univers prêt-à-porter
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="hidden size-12 items-center justify-center rounded-full border border-lin/30 text-lin transition-all duration-500 group-hover:border-or group-hover:bg-or group-hover:text-encre md:flex"
                >
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-lin/60 md:left-10 md:top-10">
                <span className="size-1.5 animate-pulse rounded-full bg-or" />
              </div>
            </div>
          </motion.div>

          {CARDS.map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: EASE, delay: c.delay }}
              className="group relative md:col-span-4"
            >
              <div className="relative h-72 overflow-hidden bg-encre/40 md:h-[21.5rem]">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] group-hover:grayscale-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-encre/90 via-encre/30 to-transparent opacity-90"
                />
                <div className="absolute inset-x-0 bottom-0 z-[1] flex items-end justify-between gap-3 p-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-or/85">
                      {c.eyebrow}
                    </span>
                    <h3 className="font-[family-name:var(--font-headline)] text-2xl italic text-lin md:text-3xl">
                      {c.label}
                    </h3>
                  </div>
                  <span
                    aria-hidden
                    className="flex size-9 items-center justify-center rounded-full border border-lin/30 text-lin transition-all duration-500 group-hover:border-or group-hover:bg-or group-hover:text-encre"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <blockquote className="mt-12 border-t border-lin/10 pt-10 md:pt-14">
          <p className="font-[family-name:var(--font-headline)] text-2xl font-bold leading-tight text-lin md:text-4xl lg:text-5xl">
            &ldquo;Fashion fades, style is eternal&rdquo;
          </p>
          <cite className="mt-4 block text-sm font-medium not-italic tracking-[0.2em] text-or uppercase md:text-base">
            Yves Saint Laurent
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
