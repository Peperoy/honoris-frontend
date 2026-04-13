"use client";

import { FormEvent } from "react";
import { motion } from "motion/react";
import { Clock, MapPin, Phone } from "lucide-react";
import styles from "@/styles/ContactSection.module.css";

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
        className="text-inherit transition-colors hover:text-or"
      >
        03 27 41 16 72
      </a>
    ),
  },
];

const rowIconClass =
  "mt-0.5 size-[22px] shrink-0 text-or [&>svg]:size-[22px] [&>svg]:stroke-[1.25]";

export default function ContactSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section
      className={`${styles.section} scroll-mt-[var(--header-h)]`}
      id="contact"
    >
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <div className={styles.intro}>
            <span className={styles.kicker}>Rendez-vous</span>
            <h2 className={styles.h2}>Nous contacter</h2>
          </div>
          <div className={styles.details}>
            {ROWS.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                className={styles.row}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
              >
                <span className={rowIconClass} aria-hidden>
                  <Icon />
                </span>
                <div>
                  <p className={styles.rowLabel}>{label}</p>
                  <p className={styles.rowValue}>{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div>
            <a
              className={`${styles.insta} transition-transform duration-300 hover:translate-x-0.5`}
              href="#"
            >
              <span className={styles.instaLine} aria-hidden />
              <span className={styles.instaText}>Instagram @Honoriscosa</span>
            </a>
          </div>
        </motion.div>
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
        >
          <div className={styles.formBlob} aria-hidden />
          <h3 className={styles.formTitle}>Une demande particulière ?</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="fullname">
                Nom Complet
              </label>
              <input
                id="fullname"
                name="fullname"
                className={styles.input}
                type="text"
                placeholder="Alexandre Mattiussi"
                autoComplete="name"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                className={styles.input}
                type="email"
                placeholder="email@exemple.com"
                autoComplete="email"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                rows={4}
                placeholder="Votre message..."
              />
            </div>
            <motion.button
              type="submit"
              className={`${styles.submit} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or`}
              whileHover={{ backgroundColor: "var(--color-or)" }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.3 }}
            >
              Envoyer le message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
