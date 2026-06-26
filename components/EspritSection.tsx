"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import InstagramCarousel from "@/components/InstagramCarousel";

const EASE = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  {
    n: "01",
    title: "Une sélection pensée avec exigence",
    body: "Chaque marque, chaque pièce et chaque détail sont choisis avec une seule intention : vous proposer des collections qui allient qualité, élégance et personnalité. Une sélection sincère, guidée par le goût plus que par les tendances.",
  },
  {
    n: "02",
    title: "Un univers qui inspire",
    body: "Honoris Cosa est un lieu où le prêt-à-porter, les accessoires et la beauté se rencontrent naturellement. Un univers raffiné, contemporain et intemporel, imaginé pour que chacun s'y sente bien.",
  },
  {
    n: "03",
    title: "Le plaisir de vous conseiller",
    body: "Parce que chaque personne est différente, nous prenons le temps de vous écouter, de comprendre vos envies et de vous accompagner avec attention. Le conseil fait partie intégrante de l'expérience Honoris Cosa.",
  },
];

export default function EspritSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="esprit"
      aria-label="L'esprit Honoris Cosa"
      className="relative scroll-mt-[var(--header-h)] overflow-hidden bg-lin py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[88rem] px-5 md:px-12 lg:px-16">
        <Reveal from="up" className="mb-10 md:mb-14">
          <span className="block text-[10px] font-medium uppercase tracking-[0.4em] text-or">
            Chapitre I — L&apos;Esprit d&apos;Honoris Cosa en quelques mots...
          </span>
        </Reveal>

        <Reveal from="up" delay={0.06} className="max-w-4xl">
          <h2 className="font-[family-name:var(--font-headline)] text-balance text-4xl leading-tight text-encre md:text-6xl lg:text-7xl">
            Plus qu&apos;une boutique,{" "}
            <span className="italic text-or">un lifestyle.</span>
          </h2>
        </Reveal>

        <Reveal from="up" delay={0.1} className="mt-8 max-w-2xl">
          <p className="text-lg font-light leading-relaxed text-secondary">
            Au cœur de Valenciennes, Honoris Cosa réunit des marques de
            prêt-à-porter, d&apos;accessoires et de beauté — choisies pour leur
            qualité et leur style.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <InstagramCarousel />
          </motion.div>

          <ul className="border-t border-encre/10 lg:col-span-5 lg:col-start-8">
            {PILLARS.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.08 * i }}
                className="grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-encre/10 py-6 md:grid-cols-[auto_1fr_2fr] md:gap-8 md:py-8"
              >
                <span className="text-[11px] tracking-[0.3em] text-or">
                  {p.n}
                </span>
                <h3 className="font-[family-name:var(--font-headline)] text-xl text-encre md:text-2xl">
                  {p.title}
                </h3>
                <p className="col-span-2 text-[15px] font-light leading-relaxed text-secondary md:col-span-1">
                  {p.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
