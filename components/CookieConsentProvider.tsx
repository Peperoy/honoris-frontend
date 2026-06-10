"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  acceptAllConsent,
  CONSENT_CHANGE_EVENT,
  denyAllConsent,
  getEffectiveConsent,
  hasConsentDecision,
  readStoredConsent,
  writeStoredConsent,
  type CookieConsentChoices,
  type CookieConsentState,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  consent: CookieConsentState;
  hasDecided: boolean;
  bannerOpen: boolean;
  preferencesOpen: boolean;
  acceptAll: () => void;
  denyAll: () => void;
  savePreferences: (prefs: Pick<CookieConsentChoices, "analytics">) => void;
  openBanner: () => void;
  openPreferences: () => void;
  closeBanner: () => void;
  closePreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentState>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    setConsent(stored);
    setBannerOpen(!hasConsentDecision(stored));
    setHydrated(true);

    function onChange(event: Event) {
      const detail = (event as CustomEvent<CookieConsentState>).detail ?? null;
      setConsent(detail);
      if (hasConsentDecision(detail)) {
        setBannerOpen(false);
        setPreferencesOpen(false);
      }
    }

    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  const persist = useCallback((choices: CookieConsentChoices) => {
    writeStoredConsent(choices);
    setConsent(choices);
    setBannerOpen(false);
    setPreferencesOpen(false);
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent: hydrated ? consent : null,
      hasDecided: hydrated ? hasConsentDecision(consent) : false,
      bannerOpen: hydrated ? bannerOpen : false,
      preferencesOpen,
      acceptAll: () => persist(acceptAllConsent()),
      denyAll: () => persist(denyAllConsent()),
      savePreferences: (prefs) =>
        persist({
          ...prefs,
          decidedAt: new Date().toISOString(),
        }),
      openBanner: () => {
        setPreferencesOpen(false);
        setBannerOpen(true);
      },
      openPreferences: () => {
        setBannerOpen(true);
        setPreferencesOpen(true);
      },
      closeBanner: () => setBannerOpen(false),
      closePreferences: () => setPreferencesOpen(false),
    }),
    [bannerOpen, consent, hydrated, persist, preferencesOpen],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}

export function useCookieConsentChoices() {
  const { consent } = useCookieConsent();
  return getEffectiveConsent(consent);
}
