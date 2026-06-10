import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { COMPANY, DATA_RETENTION, LEGAL_PAGES } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique cookies",
  description:
    "Politique cookies et gestion des traceurs — Honoris Cosa.",
  robots: { index: true, follow: true },
};

const UPDATED_AT = "2 juin 2026";

export default function CookiesPage() {
  return (
    <LegalPageLayout
      chapter="Cookies et traceurs"
      title="Politique cookies"
      intro="Lors de votre navigation sur honoriscosa.store, des cookies et traceurs peuvent être déposés sur votre terminal, sous réserve de votre consentement lorsque la réglementation l'exige."
      updatedAt={UPDATED_AT}
      sections={[
        {
          title: "Qu'est-ce qu'un cookie ?",
          content: (
            <p>
              Un cookie est un petit fichier texte enregistré sur votre
              navigateur ou votre appareil. Il permet de mémoriser des
              informations relatives à votre navigation ou à vos préférences.
            </p>
          ),
        },
        {
          title: "Cookies et traceurs utilisés",
          content: (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-encre/15">
                    <th className="py-3 pr-4 font-medium text-encre">Nom</th>
                    <th className="py-3 pr-4 font-medium text-encre">
                      Finalité
                    </th>
                    <th className="py-3 pr-4 font-medium text-encre">
                      Durée
                    </th>
                    <th className="py-3 font-medium text-encre">
                      Consentement
                    </th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-encre/10">
                    <td className="py-3 pr-4 align-top">
                      <code>honoris_cookie_consent</code>
                    </td>
                    <td className="py-3 pr-4 align-top">
                      Mémorisation de vos choix cookies (localStorage)
                    </td>
                    <td className="py-3 pr-4 align-top">
                      {DATA_RETENTION.consentChoiceMonths} mois
                    </td>
                    <td className="py-3 align-top">Exempté (strictement nécessaire au choix)</td>
                  </tr>
                  <tr className="border-b border-encre/10">
                    <td className="py-3 pr-4 align-top">
                      <code>_ga</code>, <code>_ga_*</code>, <code>_gid</code>
                    </td>
                    <td className="py-3 pr-4 align-top">
                      Mesure d&apos;audience (Google Analytics 4)
                    </td>
                    <td className="py-3 pr-4 align-top">
                      Jusqu&apos;à {DATA_RETENTION.analyticsMonths} mois
                    </td>
                    <td className="py-3 align-top">Requis</td>
                  </tr>
                  <tr className="border-b border-encre/10">
                    <td className="py-3 pr-4 align-top">
                      Behold / <code>w.behold.so</code>
                    </td>
                    <td className="py-3 pr-4 align-top">
                      Affichage du flux Instagram intégré au site
                    </td>
                    <td className="py-3 pr-4 align-top">Session / variable</td>
                    <td className="py-3 align-top">
                      Non soumis au bandeau (contenu affiché par défaut)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          title: "Gérer vos préférences",
          content: (
            <>
              <p>
                Lors de votre première visite, un bandeau vous permet
                d&apos;accepter, de refuser ou de personnaliser les cookies non
                essentiels. Vous pouvez modifier votre choix à tout moment via
                le lien « Gérer mes cookies » en pied de page.
              </p>
              <p>
                Vous pouvez également configurer votre navigateur pour bloquer
                les cookies. Certaines fonctionnalités du site pourraient alors
                être limitées.
              </p>
            </>
          ),
        },
        {
          title: "En savoir plus",
          content: (
            <>
              <p>
                Pour toute question :{" "}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
              <p>
                Consultez également notre{" "}
                <a href={LEGAL_PAGES.confidentialite}>
                  politique de confidentialité
                </a>{" "}
                et les recommandations de la{" "}
                <a
                  href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNIL
                </a>
                .
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
