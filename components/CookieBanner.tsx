"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCookieConsent } from "@/components/CookieConsentProvider";
import { LEGAL_PAGES } from "@/lib/legal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CookieBanner() {
  const {
    bannerOpen,
    preferencesOpen,
    acceptAll,
    denyAll,
    savePreferences,
    openPreferences,
    closePreferences,
    consent,
  } = useCookieConsent();

  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (preferencesOpen && consent) {
      setAnalytics(consent.analytics);
    } else if (preferencesOpen) {
      setAnalytics(false);
    }
  }, [consent, preferencesOpen]);

  return (
    <AnimatePresence>
      {bannerOpen ? (
        <motion.div
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl border border-encre/10 bg-lin p-6 shadow-lg md:p-8">
            <p
              id="cookie-banner-title"
              className="font-[family-name:var(--font-headline)] text-xl text-encre md:text-2xl"
            >
              Vos préférences cookies
            </p>
            <p
              id="cookie-banner-desc"
              className="mt-3 text-sm font-light leading-relaxed text-secondary"
            >
              Nous utilisons des cookies pour mesurer l&apos;audience du site.
              Vous pouvez accepter, refuser ou personnaliser ce choix.{" "}
              <Link
                href={LEGAL_PAGES.cookies}
                className="text-encre underline decoration-or/60 underline-offset-2 transition-colors hover:text-or"
              >
                En savoir plus
              </Link>
            </p>

            {preferencesOpen ? (
              <div className="mt-6 space-y-4 border-t border-encre/10 pt-6">
                <label className="flex cursor-pointer items-start justify-between gap-4">
                  <span>
                    <span className="block text-sm font-medium text-encre">
                      Mesure d&apos;audience
                    </span>
                    <span className="mt-1 block text-xs font-light text-secondary">
                      Google Analytics — statistiques de visite anonymisées.
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-1 size-4 shrink-0 accent-or"
                  />
                </label>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => savePreferences({ analytics })}
                    className="rounded-full bg-encre px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-lin transition-colors hover:bg-or hover:text-encre"
                  >
                    Enregistrer
                  </button>
                  <button
                    type="button"
                    onClick={closePreferences}
                    className="rounded-full border border-encre/20 px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-encre transition-colors hover:border-or hover:text-or"
                  >
                    Retour
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full bg-encre px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-lin transition-colors hover:bg-or hover:text-encre"
                >
                  Tout accepter
                </button>
                <button
                  type="button"
                  onClick={denyAll}
                  className="rounded-full border border-encre/25 px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-encre transition-colors hover:border-or hover:text-or"
                >
                  Tout refuser
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="rounded-full border border-encre/15 px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-secondary transition-colors hover:border-encre/30 hover:text-encre"
                >
                  Personnaliser
                </button>
              </div>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
