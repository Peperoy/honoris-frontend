export const CONSENT_STORAGE_KEY = "honoris_cookie_consent";
export const CONSENT_CHANGE_EVENT = "honoris-cookie-consent-change";

export type CookieConsentChoices = {
  analytics: boolean;
  decidedAt: string;
};

export type CookieConsentState = CookieConsentChoices | null;

const DEFAULT_DENIED: CookieConsentChoices = {
  analytics: false,
  decidedAt: "",
};

export function acceptAllConsent(): CookieConsentChoices {
  return {
    analytics: true,
    decidedAt: new Date().toISOString(),
  };
}

export function denyAllConsent(): CookieConsentChoices {
  return {
    analytics: false,
    decidedAt: new Date().toISOString(),
  };
}

export function readStoredConsent(): CookieConsentState {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsentChoices & {
      instagramWidget?: boolean;
    };
    if (typeof parsed.analytics !== "boolean") {
      return null;
    }

    return {
      analytics: parsed.analytics,
      decidedAt: parsed.decidedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function writeStoredConsent(choices: CookieConsentChoices): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choices));
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: choices }),
  );
}

export function clearStoredConsent(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }),
  );
}

export function hasConsentDecision(state: CookieConsentState): boolean {
  return state !== null && Boolean(state.decidedAt);
}

export function getEffectiveConsent(state: CookieConsentState): CookieConsentChoices {
  return state ?? { ...DEFAULT_DENIED, decidedAt: "" };
}
