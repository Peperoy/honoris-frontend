"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BRAND_IMAGES,
  BRAND_LABELS,
  BRAND_ORDER,
  type BrandSlug,
  LONG_DESCRIPTIONS,
} from "@/lib/brands";
import modalStyles from "@/styles/BrandModal.module.css";
import styles from "@/styles/MarquesSection.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

function BrandStory({ slug }: { slug: BrandSlug }) {
  const nodes = useMemo(() => {
    const desc = LONG_DESCRIPTIONS[slug];
    const out: React.ReactNode[] = [];
    let imgIdx = 0;
    const { paragraphs, images } = desc;

    paragraphs.forEach((text, i) => {
      out.push(
        <p key={`p-${i}`} className={modalStyles.paragraph}>
          {text}
        </p>,
      );
      if (images[imgIdx]) {
        const src = images[imgIdx];
        imgIdx += 1;
        out.push(
          <div key={`img-${i}`} className={modalStyles.inlineFigure}>
            <Image
              src={src}
              alt=""
              fill
              className={modalStyles.inlineImg}
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </div>,
        );
      }
    });

    while (imgIdx < images.length) {
      const src = images[imgIdx];
      imgIdx += 1;
      out.push(
        <div key={`img-extra-${imgIdx}`} className={modalStyles.inlineFigure}>
          <Image
            src={src}
            alt=""
            fill
            className={modalStyles.inlineImg}
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </div>,
      );
    }

    return out;
  }, [slug]);

  return <div className={modalStyles.article}>{nodes}</div>;
}

export default function MarquesSection() {
  const [open, setOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<BrandSlug | null>(null);

  const thematicSrc = selectedSlug ? BRAND_IMAGES[selectedSlug] : "";

  const openModal = useCallback((slug: BrandSlug) => {
    setSelectedSlug(slug);
    setOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <section
        className={`${styles.section} scroll-mt-[var(--header-h)]`}
        id="marques"
      >
        <div className={styles.inner}>
          <motion.span
            className={styles.kicker}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Nos Créateurs
          </motion.span>
          <motion.h2
            className={styles.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
          >
            Nos Marques
          </motion.h2>
        </div>
        <div className={styles.marqueeWrap} aria-hidden>
          <div className={styles.marqueeTrack}>
            {[...Array(2)].map((_, copy) => (
              <span key={copy} className={styles.marqueeContent}>
                {BRAND_ORDER.map((slug) => (
                  <span key={`${copy}-${slug}`} className={styles.marqueeItem}>
                    {BRAND_LABELS[slug]}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.inner}>
          <motion.div
            className={styles.brandGrid}
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {BRAND_ORDER.map((slug) => (
              <motion.button
                key={slug}
                type="button"
                className={`${styles.brandBtn} rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or`}
                variants={gridItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openModal(slug)}
              >
                <span className={styles.brandLabel}>{BRAND_LABELS[slug]}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            className={modalStyles.overlay}
            style={{ opacity: 1, pointerEvents: "auto" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            role="presentation"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <motion.div
              className={modalStyles.panel}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-brand-title"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedSlug ? (
                <div className={modalStyles.panelInner}>
                  <div className={modalStyles.imageSide}>
                    <Image
                      src={thematicSrc}
                      alt=""
                      fill
                      className={modalStyles.imageSideImg}
                      sizes="(min-width: 768px) 380px, 100vw"
                    />
                  </div>
                  <div className={modalStyles.contentSide}>
                    <button
                      type="button"
                      className={`${modalStyles.close} flex size-10 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or`}
                      onClick={closeModal}
                      aria-label="Fermer"
                    >
                      <X className="size-5" strokeWidth={1.25} aria-hidden />
                    </button>
                    <div>
                      <span className={modalStyles.modalKicker}>La marque</span>
                      <h2
                        className={modalStyles.modalTitle}
                        id="modal-brand-title"
                      >
                        {BRAND_LABELS[selectedSlug]}
                      </h2>
                    </div>
                    <BrandStory slug={selectedSlug} />
                    <a
                      href="#contact"
                      className={`${modalStyles.cta} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or`}
                      onClick={closeModal}
                    >
                      Découvrir en boutique
                    </a>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
