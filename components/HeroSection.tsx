"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh overflow-hidden bg-encre"
      aria-label="Accueil"
    >
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ scale: bgScale }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero.MP4" type="video/mp4" />
        </video>
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-encre/20 via-transparent to-encre/40"
        aria-hidden
      />
    </section>
  );
}
