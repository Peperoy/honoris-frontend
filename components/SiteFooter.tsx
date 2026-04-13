"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "#boutique", label: "La Boutique" },
  { href: "#marques", label: "Nos Marques" },
  { href: "#esprit", label: "L'Esprit" },
  { href: "#contact", label: "Contact" },
] as const;

const LEGAL_LINKS = [
  { href: "#", label: "Mentions légales" },
  { href: "#", label: "Confidentialité" },
  { href: "#", label: "Cookies" },
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
    href: "https://www.google.com/maps/search/?api=1&query=44+Avenue+d%27Amsterdam%2C+59300+Valenciennes",
    label: "Google Maps",
  },
] as const;

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=44+Avenue+d%27Amsterdam%2C+59300+Valenciennes";

function FooterSocialIcon({ id }: { id: (typeof SOCIAL)[number]["label"] }) {
  const cls = "size-[18px] shrink-0 sm:size-5";
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

const iconWrap =
  "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-or/15 text-or [&>svg]:stroke-[1.25]";

/** Icône seule ligne (téléphone) : pas de mt-0.5 pour centrer avec le texte */
const iconWrapSingleLine =
  "flex size-9 shrink-0 items-center justify-center rounded-full bg-or/15 text-or [&>svg]:stroke-[1.25]";

const navLinkClass =
  "font-[family-name:var(--font-body)] text-sm text-lin/80 transition-colors duration-300 hover:text-or focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or";

const legalLinkClass =
  "font-[family-name:var(--font-body)] text-xs text-lin/45 transition-colors hover:text-lin/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

export default function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-encre px-4 py-14 text-lin md:px-16 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 border-b border-lin/10 pb-12 lg:grid-cols-3 lg:gap-10 lg:gap-x-12 xl:gap-x-16">
          {/* Colonne marque */}
          <motion.div
            className="flex min-w-0 max-w-md flex-col"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative h-8 w-44 shrink-0 sm:h-9 sm:w-48">
              <Image
                src="/images/logo-honoriscosa.png"
                alt="HONORISCOSA."
                fill
                className="object-contain object-left"
                sizes="192px"
              />
            </div>
            <p className="mt-5 font-[family-name:var(--font-body)] text-sm font-light leading-relaxed text-lin/65">
              Boutique de luxe à Valenciennes : sélection pointue de créateurs,
              maisons confidentielles et pièces intemporelles. Plus qu&apos;une
              boutique, un style de vie.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-11 items-center justify-center rounded-full bg-lin/10 text-lin transition-colors duration-300 hover:bg-lin/18 hover:text-or"
                  aria-label={label}
                >
                  <FooterSocialIcon id={label} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides + Contact : 2 colonnes dès le mobile ; lg: même ligne que la marque (grille parente) */}
          <div className="grid min-w-0 grid-cols-2 items-start gap-x-6 sm:gap-x-10 md:gap-x-12 lg:contents">
            <motion.nav
              aria-label="Liens rapides"
              className="min-w-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            >
              <h3 className="font-[family-name:var(--font-headline)] text-lg font-bold tracking-tight text-lin md:text-xl">
                Liens rapides
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    {item.href === "/" ? (
                      <Link
                        href="/"
                        className={navLinkClass}
                        onClick={(e) => {
                          if (pathname === "/") {
                            e.preventDefault();
                            scrollToTop();
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : item.href.startsWith("#") ? (
                      <a href={item.href} className={navLinkClass}>
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className={navLinkClass}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              className="min-w-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              <h3 className="font-[family-name:var(--font-headline)] text-lg font-bold tracking-tight text-lin md:text-xl">
                Contact
              </h3>
              <ul className="mt-5 flex flex-col gap-5">
                <li>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-3"
                  >
                    <span className={iconWrap} aria-hidden>
                      <MapPin className="size-4" />
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-sm leading-snug text-lin/75 transition-colors group-hover:text-or">
                      44 Avenue d&apos;Amsterdam
                      <br />
                      59300 Valenciennes
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className={iconWrapSingleLine} aria-hidden>
                    <Phone className="size-4" />
                  </span>
                  <a
                    href="tel:+33327411672"
                    className="font-[family-name:var(--font-body)] text-sm leading-none text-lin/75 transition-colors hover:text-or"
                  >
                    03 27 41 16 72
                  </a>
                </li>
              </ul>
              <div className="mt-6 rounded-xl border border-lin/10 bg-lin/[0.06] px-4 py-3">
                <p className="font-[family-name:var(--font-body)] text-xs font-semibold text-lin/85">
                  Horaires
                </p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-xs leading-relaxed text-lin/65">
                  <span className="text-lin/75">Lundi</span> — 14h00 – 19h00
                  <br />
                  <span className="text-lin/75">Mardi au samedi</span> — 09h30 – 12h30
                  {" · "}
                  14h00 – 19h00
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sous-barre */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row md:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        >
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 text-center font-[family-name:var(--font-body)] text-xs text-lin/45 md:justify-start">
            <span>© {new Date().getFullYear()}</span>
            <span className="relative inline-block h-4 w-24 shrink-0">
              <Image
                src="/images/logo-honoriscosa.png"
                alt=""
                fill
                className="object-contain object-left opacity-80"
                sizes="96px"
              />
            </span>
            <span>Tous droits réservés.</span>
          </p>
          <nav
            aria-label="Mentions légales"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end"
          >
            {LEGAL_LINKS.map((item, i) => (
              <span key={item.label} className="contents">
                {i > 0 ? (
                  <span className="hidden text-lin/25 sm:inline" aria-hidden>
                    ·
                  </span>
                ) : null}
                <a href={item.href} className={legalLinkClass}>
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
