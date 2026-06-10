import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import {
  COMPANY,
  DATA_RETENTION,
  LEGAL_PAGES,
  SUBPROCESSORS,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles — Honoris Cosa.",
  robots: { index: true, follow: true },
};

const UPDATED_AT = "2 juin 2026";

export default function ConfidentialitePage() {
  return (
    <LegalPageLayout
      chapter="Protection des données"
      title="Politique de confidentialité"
      intro="La présente politique décrit comment HO.CO.VA. (enseigne Honoris Cosa) collecte et traite vos données personnelles dans le respect du Règlement général sur la protection des données (RGPD) et de la loi Informatique et Libertés."
      updatedAt={UPDATED_AT}
      sections={[
        {
          title: "Responsable du traitement",
          content: (
            <>
              <p>
                Le responsable du traitement est <strong>{COMPANY.legalName}</strong>{" "}
                ({COMPANY.tradeName}), {COMPANY.headquartersAddress}.
              </p>
              <p>
                Contact données personnelles :{" "}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> —{" "}
                <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              </p>
            </>
          ),
        },
        {
          title: "Données collectées",
          content: (
            <ul>
              <li>
                <strong>Formulaire de contact :</strong> nom, adresse e-mail,
                sujet et message.
              </li>
              <li>
                <strong>Mesure d&apos;audience (si acceptée) :</strong> pages
                consultées, navigation, données techniques anonymisées via
                Google Analytics 4.
              </li>
              <li>
                <strong>Préférences cookies :</strong> mémorisation de vos
                choix de consentement.
              </li>
            </ul>
          ),
        },
        {
          title: "Finalités et bases légales",
          content: (
            <ul>
              <li>
                <strong>Traitement des demandes de contact</strong> — base
                légale : votre consentement (case à cocher du formulaire).
              </li>
              <li>
                <strong>Mesure d&apos;audience</strong> — base légale : votre
                consentement via le bandeau cookies.
              </li>
              <li>
                <strong>Affichage du flux Instagram</strong> — base légale :
                intérêt légitime (contenu intégré au site, sans profilage).
              </li>
            </ul>
          ),
        },
        {
          title: "Durées de conservation",
          content: (
            <ul>
              <li>
                Messages du formulaire de contact : {DATA_RETENTION.contactFormYears}{" "}
                ans à compter du dernier échange, sauf obligation légale
                contraire.
              </li>
              <li>
                Données Google Analytics : jusqu&apos;à{" "}
                {DATA_RETENTION.analyticsMonths} mois (paramétrage GA4).
              </li>
              <li>
                Choix de consentement cookies : {DATA_RETENTION.consentChoiceMonths}{" "}
                mois.
              </li>
            </ul>
          ),
        },
        {
          title: "Destinataires et sous-traitants",
          content: (
            <>
              <p>
                Vos données sont accessibles uniquement aux personnes habilitées
                au sein de {COMPANY.legalName} et, le cas échéant, à nos
                sous-traitants :
              </p>
              <ul>
                {SUBPROCESSORS.map((sp) => (
                  <li key={sp.name}>
                    <strong>{sp.name}</strong> — {sp.role} ({sp.location})
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          title: "Transferts hors Union européenne",
          content: (
            <p>
              Certains sous-traitants (Vercel, Google, Behold) sont situés aux
              États-Unis. Les transferts sont encadrés par des garanties
              appropriées (clauses contractuelles types de la Commission
              européenne ou mécanismes équivalents proposés par ces prestataires).
            </p>
          ),
        },
        {
          title: "Vos droits",
          content: (
            <>
              <p>
                Conformément au RGPD, vous disposez des droits suivants : accès,
                rectification, effacement, limitation, opposition et portabilité
                de vos données.
              </p>
              <p>
                Pour exercer vos droits, contactez-nous à{" "}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Nous
                répondrons dans un délai d&apos;un mois.
              </p>
              <p>
                Vous pouvez également introduire une réclamation auprès de la
                CNIL :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cnil.fr
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "Cookies",
          content: (
            <p>
              Pour en savoir plus sur les traceurs utilisés et gérer vos
              préférences, consultez notre{" "}
              <a href={LEGAL_PAGES.cookies}>politique cookies</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
