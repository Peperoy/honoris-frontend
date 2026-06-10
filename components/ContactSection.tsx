"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const ROWS = [
  {
    icon: MapPin,
    label: "Boutique",
    value: (
      <>
        44 Avenue d&apos;Amsterdam
        <br />
        59300 Valenciennes
      </>
    ),
  },
  {
    icon: Clock,
    label: "Horaires",
    value: (
      <>
        Lundi — 14h00 – 19h00
        <br />
        Mardi au samedi — 09h30 – 12h30 · 14h00 – 19h00
      </>
    ),
  },
  {
    icon: Phone,
    label: "Contact",
    value: (
      <a
        href="tel:+33327411672"
        className="transition-colors hover:text-or"
      >
        03 27 41 16 72
      </a>
    ),
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative scroll-mt-[var(--header-h)] overflow-hidden bg-encre py-16 text-lin md:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[40%] bg-[radial-gradient(70%_60%_at_30%_0%,rgba(184,154,106,0.15)_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-[88rem] px-5 md:px-12 lg:px-16">
        <div className="mb-14 grid gap-10 md:mb-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.4em] text-or">
              Chapitre IV — Contact
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-balance text-4xl leading-tight text-lin md:text-6xl lg:text-7xl">
              Passez nous{" "}
              <span className="italic text-or">rendre visite.</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-light leading-relaxed text-lin/65 md:col-span-5 md:text-lg">
            Une question ? Un conseil ? Une demande particulière ? N'hésitez pas à nous rendre visite ou à nous contacter, l'équipe Honoris est à votre disposition.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-5"
          >
            <ul className="flex flex-col gap-10 border-t border-lin/15 pt-8">
              {ROWS.map(({ icon: Icon, label, value }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{
                    duration: 0.55,
                    ease: EASE,
                    delay: 0.08 * i,
                  }}
                  className="grid grid-cols-[auto_1fr] items-start gap-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-lin/15 text-or">
                    <Icon className="size-5" strokeWidth={1.35} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-lin/45">
                      {label}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-headline)] text-xl leading-snug text-lin md:text-2xl">
                      {value}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 border-t border-lin/15 pt-10">
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c2edc0231f0225:0xdfb8bdf867dd3d5b?source=g.page.m.we"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-lin/25 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-lin transition-colors hover:border-or hover:bg-or hover:text-encre"
              >
                Itinéraire Google Maps
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <a
                href="https://www.instagram.com/honoriscosa.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-lin/80 transition-colors hover:text-or"
              >
                Instagram @honoriscosa.store
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
            className="relative flex flex-col gap-6 border border-lin/12 bg-lin p-7 text-encre shadow-sm md:p-10 lg:col-span-7"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-or/12 blur-3xl"
            />

            <h3 className="relative font-[family-name:var(--font-headline)] text-2xl md:text-3xl">
              Une demande particulière&nbsp;?
            </h3>

            <div className="relative grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] uppercase tracking-[0.25em] text-secondary"
                  htmlFor="fullname"
                >
                  Nom complet
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  required
                  autoComplete="name"
                  className="border-0 border-b border-encre/15 bg-transparent py-2 text-encre outline-none transition-colors focus:border-or"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] uppercase tracking-[0.25em] text-secondary"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="border-0 border-b border-encre/15 bg-transparent py-2 text-encre outline-none transition-colors focus:border-or"
                />
              </div>
            </div>

            <div className="relative flex flex-col gap-2">
              <label
                className="text-[10px] uppercase tracking-[0.25em] text-secondary"
                htmlFor="subject"
              >
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                className="border-0 border-b border-encre/15 bg-transparent py-2 text-encre outline-none transition-colors focus:border-or"
                type="text"
              />
            </div>

            <div className="relative flex flex-col gap-2">
              <label
                className="text-[10px] uppercase tracking-[0.25em] text-secondary"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="resize-none border-0 border-b border-encre/15 bg-transparent py-2 text-encre outline-none transition-colors focus:border-or"
              />
            </div>

            <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] uppercase tracking-[0.3em] text-secondary">
                Réponse sous 24h
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-encre px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-lin transition-colors hover:bg-or hover:text-encre"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.span
                      key="ok"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Check className="size-4" aria-hidden />
                      Merci&nbsp;!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="inline-flex items-center gap-2"
                    >
                      Envoyer
                      <ArrowUpRight className="size-4" aria-hidden />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
