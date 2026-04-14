"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ImageIcon, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
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

function AestheticSlot({
  label,
  src,
  slot,
  priority,
}: {
  label: string;
  src: string | undefined;
  slot: 1 | 2;
  priority?: boolean;
}) {
  return (
    <div
      className={`${modalStyles.aestheticSlot} ${
        slot === 1 ? modalStyles.aesthetic1 : modalStyles.aesthetic2
      }`}
    >
      <span className={modalStyles.aestheticLabel}>{label}</span>
      {src ? (
        <div className={modalStyles.aestheticInner}>
          <Image
            src={src}
            alt=""
            fill
            className={modalStyles.aestheticImg}
            sizes="(min-width: 768px) 18vw, 42vw"
            priority={priority}
          />
        </div>
      ) : (
        <div className={modalStyles.placeholderInner} aria-hidden>
          <ImageIcon
            className={modalStyles.placeholderIcon}
            strokeWidth={1}
            size={28}
          />
        </div>
      )}
    </div>
  );
}

function BrandModalContent({
  slug,
  onDiscover,
}: {
  slug: BrandSlug;
  onDiscover: () => void;
}) {
  const data = LONG_DESCRIPTIONS[slug];
  const heroSrc = BRAND_IMAGES[slug];
  const quote = data.paragraphs[0] ?? "";
  const bodyParagraphs = data.paragraphs.slice(1);
  const imgA = data.images[0];
  const imgB = data.images[1];

  const title = BRAND_LABELS[slug];

  return (
    <>
      <div className={modalStyles.modalHeader}>
        <span className={modalStyles.focusLabel}>Focus maison</span>
      </div>
      <div className={modalStyles.modalScroll}>
        <div className={modalStyles.modalGrid}>
          <div className={modalStyles.contentCol}>
            <h2 className={modalStyles.modalTitle} id="modal-brand-title">
              {title}
            </h2>
            {quote ? (
              <blockquote className={modalStyles.quote}>{quote}</blockquote>
            ) : null}
            <div className={modalStyles.article}>
              {bodyParagraphs.map((text, i) => (
                <p key={i} className={modalStyles.paragraph}>
                  {text}
                </p>
              ))}
            </div>
            <button
              type="button"
              className={modalStyles.ctaPrimary}
              onClick={onDiscover}
            >
              Découvrir la sélection
            </button>
          </div>

          <div className={modalStyles.galleryCol}>
            <div className={modalStyles.galleryGrid}>
              <AestheticSlot
                label="Aesthetic 1"
                src={imgA}
                slot={1}
                priority
              />
              <AestheticSlot label="Aesthetic 2" src={imgB} slot={2} />
              <div className={modalStyles.featuredSlot}>
                <Image
                  src={heroSrc}
                  alt=""
                  fill
                  className={modalStyles.featuredImg}
                  sizes="(min-width: 768px) 28vw, 88vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function MarquesSection() {
  const [open, setOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<BrandSlug | null>(null);

  const openModal = useCallback((slug: BrandSlug) => {
    setSelectedSlug(slug);
    setOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  const handleDiscover = useCallback(() => {
    closeModal();
    requestAnimationFrame(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  }, [closeModal]);

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
        {open && selectedSlug ? (
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
              <button
                type="button"
                className={`${modalStyles.close} absolute right-4 top-4 z-10 md:right-6 md:top-5`}
                onClick={closeModal}
                aria-label="Fermer"
              >
                <X className="size-5" strokeWidth={1.15} aria-hidden />
              </button>
              <BrandModalContent slug={selectedSlug} onDiscover={handleDiscover} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
