/** Données légales — source INSEE / Sirene (API recherche-entreprises.api.gouv.fr). */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://honoriscosa.store";

export const LEGAL_PAGES = {
  mentionsLegales: "/mentions-legales",
  confidentialite: "/confidentialite",
  cookies: "/cookies",
} as const;

export const COMPANY = {
  tradeName: "Honoris Cosa",
  legalName: "HO.CO.VA.",
  legalForm: "SARL unipersonnelle",
  /** À compléter depuis le Kbis — placeholder visible jusqu'à validation. */
  shareCapital: "[Capital social à compléter]",
  siren: "415 397 025",
  siretBoutique: "415 397 025 00057",
  siretSiege: "415 397 025 00040",
  vatNumber: "FR30 415 397 025",
  rcs: "RCS Valenciennes",
  activity: "47.71Z — Commerce de détail d'habillement en magasin spécialisé",
  boutiqueAddress: "44 Avenue d'Amsterdam, 59300 Valenciennes",
  headquartersAddress: "22 Boulevard Watteau, 59300 Valenciennes",
  phone: "03 27 41 16 72",
  phoneHref: "tel:+33327411672",
  email: "honoriscosa.store@orange.fr",
  publisher: "Fanny De Boever, Gérante",
} as const;

export const HOSTING = {
  name: "Vercel Inc.",
  address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
  website: "https://vercel.com",
} as const;

export const DATA_RETENTION = {
  contactFormYears: 3,
  analyticsMonths: 14,
  consentChoiceMonths: 6,
} as const;

export const SUBPROCESSORS = [
  {
    name: "Vercel Inc.",
    role: "Hébergement du site web",
    location: "États-Unis",
  },
  {
    name: "Google LLC",
    role: "Mesure d'audience (Google Analytics 4), si accepté",
    location: "États-Unis",
  },
  {
    name: "Behold.so",
    role: "Affichage du flux Instagram intégré au site",
    location: "États-Unis",
  },
] as const;
