"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Reveal } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  {
    n: "01",
    title: "Une sélection exigeante",
    body: "Vingt-huit marques choisies pour leur qualité, leur coupe et leur personnalité — française, italienne ou scandinave.",
  },
  {
    n: "02",
    title: "Des pièces qui durent",
    body: "Des coupes nettes, des matières nobles, des vêtements pensés pour rester dans votre garde-robe.",
  },
  {
    n: "03",
    title: "Conseil en boutique",
    body: "On prend le temps de vous guider pour trouver les pièces qui vous vont vraiment.",
  },
];

const STATS = [
  { n: 28, suffix: "+", label: "Marques" },
  { n: 6, suffix: "", label: "Pays représentés" },
  { n: 100, suffix: "%", label: "Made in Europe" },
];

function Counter({
  to,
  suffix = "",
  start,
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  start: boolean;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const [val, setVal] = useState(() => (reduce ? to : 0));

  useEffect(() => {
    if (!start || reduce) return;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - t0) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration, reduce]);

  return (
    <span className="font-[family-name:var(--font-headline)] text-5xl tabular-nums text-encre md:text-6xl">
      {val}
      <span className="text-or">{suffix}</span>
    </span>
  );
}

export default function EspritSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      id="esprit"
      aria-label="L'esprit Honoris Cosa"
      className="relative scroll-mt-[var(--header-h)] overflow-hidden bg-lin py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[88rem] px-5 md:px-12 lg:px-16">
        <Reveal from="up" className="mb-14 md:mb-20">
          <span className="block text-[10px] font-medium uppercase tracking-[0.4em] text-or">
            Chapitre I — L&apos;Esprit
          </span>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="relative lg:col-span-5"
            style={reduce ? undefined : { y: portraitY }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-encre/5">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 1.2, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src="/about.jpg"
                  alt="Texture de tissu — détail"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              className="mt-6 flex w-full flex-col gap-3 bg-encre p-8 text-lin shadow-[0_30px_80px_rgba(0,0,0,0.15)] lg:absolute lg:-bottom-10 lg:-right-2 lg:mt-0 lg:w-[18rem]"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-or/90">
                Manifeste
              </span>
              <p className="font-[family-name:var(--font-headline)] text-2xl italic leading-tight">
                Une boutique où l&apos;on prend le temps
                <br />
                de bien choisir — et de bien conseiller.
              </p>
              <span className="text-[10px] uppercase tracking-[0.4em] text-lin/45">
                Honoris Cosa · Depuis 2024
              </span>
            </motion.figure>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-[family-name:var(--font-headline)] text-balance text-4xl leading-tight text-encre md:text-6xl lg:text-7xl">
              Plus qu&apos;une boutique,{" "}
              <span className="italic text-or">un style de vie.</span>
            </h2>

            <Reveal from="up" delay={0.12} className="mt-8 max-w-xl">
              <p className="text-lg font-light leading-relaxed text-secondary">
                Au cœur de Valenciennes, Honoris Cosa réunit des marques
                de prêt-à-porter, d&apos;accessoires et de beauté — choisies
                pour leur qualité et leur style.
              </p>
            </Reveal>

            <ul className="mt-12 border-t border-encre/10">
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

        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 gap-10 border-t border-encre/10 pt-14 md:grid-cols-3"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.08 * i }}
              className="flex flex-col gap-2"
            >
              <Counter to={s.n} suffix={s.suffix} start={inView} />
              <span className="text-[11px] uppercase tracking-[0.3em] text-secondary">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
