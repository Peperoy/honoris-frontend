"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#boutique", label: "La Boutique" },
  { href: "#marques", label: "Nos Marques" },
  { href: "#esprit", label: "L'Esprit" },
  { href: "#contact", label: "Contact" },
] as const;

const SOCIAL = [
  {
    href: "https://www.facebook.com/honoriscosastore/",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/honoriscosa.store/",
    label: "Instagram",
  },
  {
    href: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c2edc0231f0225:0xdfb8bdf867dd3d5b?source=g.page.m.we",
    label: "Google Maps",
  },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const iconLinkClass =
  "flex size-11 items-center justify-center rounded-full text-lin transition-colors duration-300 hover:text-or focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or";

const iconProps = {
  className: "size-6 shrink-0",
  strokeWidth: 1.25,
  "aria-hidden": true as const,
};

function SocialIcon({ id }: { id: (typeof SOCIAL)[number]["label"] }) {
  const cls = "size-6 shrink-0";
  if (id === "Facebook") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cls}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  if (id === "Instagram") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  /* Google Maps */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-[color-mix(in_srgb,var(--color-encre)_95%,transparent)] px-4 py-5 backdrop-blur-xl supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--color-encre)_88%,transparent)] md:px-16"
        aria-label="Navigation principale"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      >
        <a href="#" className="relative block h-6 w-40 shrink-0 md:h-7 md:w-48">
          <Image
            src="/images/logo-honoriscosa.png"
            alt="HONORISCOSA."
            fill
            className="object-contain"
            sizes="192px"
            priority
          />
        </a>
        <div className="hidden items-center gap-12 lg:flex">
          {NAV.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative text-[10px] font-semibold uppercase tracking-[var(--letter-widest-editorial)] text-lin transition-colors duration-500 hover:text-or after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-or after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.07 }}
              whileHover={{ y: -1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          {SOCIAL.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
              aria-label={label}
            >
              <SocialIcon id={label} />
            </a>
          ))}
          <button
            type="button"
            className={`${iconLinkClass} lg:hidden`}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X {...iconProps} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu {...iconProps} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 flex flex-col items-center gap-8 overflow-y-auto border-b border-white/[0.08] bg-[color-mix(in_srgb,var(--color-encre)_98%,transparent)] px-8 py-10 backdrop-blur-md lg:hidden"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {NAV.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[var(--letter-widest-editorial)] text-lin transition-colors duration-500 hover:text-or"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE, delay: 0.05 + i * 0.06 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
