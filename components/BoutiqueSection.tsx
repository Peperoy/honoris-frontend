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
    alt: "Accessoires",
    eyebrow: "Catégorie 02",
    label: "Accessoires",
    delay: 0.1,
  },
  {
    src: IMG.boutiqueLifestyle,
    alt: "Art de vivre",
    eyebrow: "Catégorie 03",
    label: "Art de Vivre",
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
              Une sélection{" "}
              <span className="italic text-or">qui dit tout.</span>
            </h2>
          </div>

          <Reveal from="up" delay={0.15} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-lin/70 md:text-lg">
              Du prêt-à-porter aux accessoires et à l&apos;art de vivre — chaque
              catégorie raconte une humeur et une attitude.
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
                  <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-or/85">
                    Catégorie 01
                  </span>
                  <h3 className="font-[family-name:var(--font-headline)] text-3xl italic text-lin md:text-5xl">
                    Lignes architecturales
                  </h3>
                  <p className="max-w-md text-sm font-light leading-relaxed text-lin/65 md:text-base">
                    Prêt-à-porter — silhouettes contemporaines.
                  </p>
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
                Nouveau
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

        <div className="mt-12 flex flex-col items-start gap-6 border-t border-lin/10 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm font-light text-lin/55">
            Sélection mise à jour chaque mois — privilèges réservés aux
            clientes de la lettre.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-lin/20 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-lin transition-colors hover:border-lin hover:bg-lin hover:text-encre"
          >
            S&apos;inscrire à la lettre
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
