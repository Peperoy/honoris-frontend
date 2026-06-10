"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ImageIcon, X, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  BRAND_IMAGES,
  BRAND_LABELS,
  BRAND_ORDER,
  type BrandSlug,
  LONG_DESCRIPTIONS,
} from "@/lib/brands";
import modalStyles from "@/styles/BrandModal.module.css";
import { Marquee } from "@/components/Marquee";

const EASE = [0.22, 1, 0.36, 1] as const;

function GallerySlot({
  src,
  slot,
  priority,
}: {
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

  return (
    <>
      <div className={modalStyles.modalScroll}>
        <div className={modalStyles.modalGrid}>
          <div className={modalStyles.contentCol}>
            <h2 className={modalStyles.modalTitle} id="modal-brand-title">
              {BRAND_LABELS[slug]}
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
              <GallerySlot src={imgA} slot={1} priority />
              <GallerySlot src={imgB} slot={2} />
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

function BrandCard({
  slug,
  index,
  onOpen,
}: {
  slug: BrandSlug;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.65,
        ease: EASE,
        delay: 0.03 * (index % 8),
      }}
      className="group relative flex flex-col items-start gap-3 text-left"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-encre/5">
        <Image
          src={BRAND_IMAGES[slug]}
          alt={BRAND_LABELS[slug]}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-encre/60 via-transparent to-transparent"
        />
        <span
          aria-hidden
          className="absolute left-2 top-2 text-[10px] uppercase tracking-[0.28em] text-lin/80 md:left-3 md:top-3"
        >
          N°{String(index + 1).padStart(2, "0")}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute right-2 top-2 flex translate-y-[-4px] items-center gap-1 rounded-full bg-lin/95 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.28em] text-encre opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Voir
          <ArrowUpRight className="size-3" />
        </span>
      </div>
      <div className="flex w-full items-baseline justify-between gap-2 px-0.5">
        <span className="font-[family-name:var(--font-headline)] text-base leading-tight text-encre transition-colors group-hover:text-or md:text-lg">
          {BRAND_LABELS[slug]}
        </span>
        <span className="text-[10px] tracking-[0.2em] text-secondary">→</span>
      </div>
    </motion.button>
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
        id="marques"
        aria-label="Nos marques"
        className="relative scroll-mt-[var(--header-h)] overflow-hidden bg-lin py-16 md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[88rem] px-5 md:px-12 lg:px-16">
          <div className="mb-12 grid gap-10 md:mb-16 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.4em] text-or">
                Chapitre III — Nos Marques
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-balance text-4xl leading-tight text-encre md:text-6xl lg:text-7xl">
                Nos marques
              </h2>
            </div>
            <p className="max-w-md text-base font-light leading-relaxed text-secondary md:col-span-5 md:text-lg">
              Cliquez sur une marque pour décourvrir son univers.
            </p>
          </div>
        </div>

        <div className="border-y border-encre/10 bg-encre py-4 text-lin md:py-5">
          <Marquee durationSec={75}>
            {BRAND_ORDER.map((slug) => (
              <span
                key={slug}
                className="flex items-center gap-8 whitespace-nowrap px-6 font-[family-name:var(--font-headline)] text-xl italic text-lin/55 md:text-3xl"
              >
                {BRAND_LABELS[slug]}
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full bg-or/70"
                />
              </span>
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-12 max-w-[88rem] px-5 md:mt-16 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 md:gap-x-6 md:gap-y-10 lg:grid-cols-4">
            {BRAND_ORDER.map((slug, i) => (
              <BrandCard
                key={slug}
                slug={slug}
                index={i}
                onOpen={() => openModal(slug)}
              />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-encre/10 pt-10 md:flex-row md:items-center">
            <p className="max-w-lg text-sm font-light text-secondary">
              Une question sur une marque&nbsp;? Écrivez-nous ou passez en
              boutique.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-encre px-7 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-lin transition-colors hover:bg-or hover:text-encre"
            >
              Prendre rendez-vous
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
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
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.4, ease: EASE }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-brand-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={modalStyles.close}
                onClick={closeModal}
                aria-label="Fermer"
              >
                <X className="size-5" strokeWidth={2} aria-hidden />
              </button>
              <BrandModalContent
                slug={selectedSlug}
                onDiscover={handleDiscover}
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
