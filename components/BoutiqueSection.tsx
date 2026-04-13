"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import styles from "@/styles/BoutiqueSection.module.css";
import { IMG } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

const imageVariants = {
  hidden: { scale: 1.06, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: EASE },
  },
};

export default function BoutiqueSection() {
  return (
    <section
      className={`${styles.section} scroll-mt-[var(--header-h)]`}
      id="boutique"
    >
      <div className={styles.header}>
        <Reveal className={styles.headerText}>
          <span className={styles.kicker}>Nouvelle Sélection</span>
          <h2 className={styles.h2}>La Boutique</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <button
            type="button"
            className={`${styles.cta} transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or active:scale-[0.98] motion-reduce:transition-none`}
          >
            Je découvre
          </button>
        </Reveal>
      </div>
      <div className={styles.grid}>
        <motion.div
          className={styles.heroCell}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Image
            className={styles.heroImg}
            src={"/images/hero-interior.jpg"}
            alt="Éditorial mode"
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
          />
          <div className={styles.heroOverlay} aria-hidden />
          <motion.div
            className={styles.heroCaption}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
          >
            <p className={styles.captionKicker}>Prêt-à-Porter</p>
            <p className={styles.captionTitle}>Lignes Architecturales</p>
          </motion.div>
        </motion.div>
        <div className={styles.sideCol}>
          {[
            { src: IMG.boutiqueAccessories, alt: "Accessoires", label: "Accessoires", delay: 0.1 },
            { src: IMG.boutiqueLifestyle, alt: "Art de vivre", label: "Art de Vivre", delay: 0.2 },
          ].map(({ src, alt, label, delay }) => (
            <motion.div
              key={label}
              className={styles.sideCard}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay }}
            >
              <Image
                className={styles.sideImg}
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className={styles.sideGrad}>
                <p>{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
