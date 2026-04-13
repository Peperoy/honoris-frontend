"use client";

import { motion } from "motion/react";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** Direction of the reveal: "up" (default) | "left" | "right" | "none" */
  from?: "up" | "left" | "right" | "none";
  /** Offset in pixels for the translate */
  distance?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 1.1,
  className,
  from = "up",
  distance = 48,
}: RevealProps) {
  const initial =
    from === "left"
      ? { opacity: 0, x: -distance }
      : from === "right"
        ? { opacity: 0, x: distance }
        : from === "none"
          ? { opacity: 0 }
          : { opacity: 0, y: distance };

  const visible =
    from === "left" || from === "right"
      ? { opacity: 1, x: 0 }
      : from === "none"
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: EASE_OUT_EXPO, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
