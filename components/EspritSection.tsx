"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import styles from "@/styles/EspritSection.module.css";
import { IMG } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  {
    title: "Style affirmé",
    body: "Des pièces qui parlent. Des coupes nettes qui captent l\u2019énergie de la ville.",
  },
  {
    title: "Créateurs d\u2019exception",
    body: "Les marques de demain, dénichées aujourd\u2019hui. L\u2019exclusivité au quotidien.",
  },
];

export default function EspritSection() {
  return (
    <section
      className={`${styles.section} scroll-mt-[var(--header-h)]`}
      id="esprit"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <motion.div
            className={styles.colImage}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <div className={styles.aspectPortrait}>
              <Image
                className={styles.portraitImg}
                src={"/about.jpg"}
                alt="Texture de tissu détaillée"
                width={800}
                height={1067}
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className={styles.quoteCard}>
              <p className={styles.quoteItalic}>L&apos;Essence du Vrai.</p>
              <p className={styles.quoteMeta}>Depuis 2024</p>
            </div>
          </motion.div>
          <motion.div
            className={styles.colText}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
          >
            <Reveal from="none">
              <span className={styles.kicker}>L&apos;Esprit</span>
              <h2 className={styles.h2}>
                Plus qu&apos;une boutique, <br />
                <span className={styles.italic}>un style de vie.</span>
              </h2>
            </Reveal>
            <div className={styles.body}>
              <Reveal from="none" delay={0.1}>
                <p>
                  Honoriscosa, c&apos;est la mode qui a du caractère. Au cœur
                  de Valenciennes, on déniche les créateurs qui font le paysage
                  mode de demain. Élégance, qualité, audace.
                </p>
              </Reveal>
              <div className={styles.pillars}>
                {PILLARS.map((p, i) => (
                  <motion.div
                    key={p.title}
                    className={styles.pillar}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.12 }}
                  >
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
