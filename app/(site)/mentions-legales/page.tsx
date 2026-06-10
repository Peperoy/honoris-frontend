import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import {
  COMPANY,
  HOSTING,
  LEGAL_PAGES,
  SITE_URL,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Honoris Cosa — éditeur, hébergeur et informations juridiques.",
  robots: { index: true, follow: true },
};

const UPDATED_AT = "2 juin 2026";

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout
      chapter="Informations légales"
      title="Mentions légales"
      intro="Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), les présentes mentions légales s'appliquent au site honoriscosa.store."
      updatedAt={UPDATED_AT}
      sections={[
        {
          title: "Éditeur du site",
          content: (
            <>
              <p>
                Le site {SITE_URL} est édité par la société{" "}
                <strong>{COMPANY.legalName}</strong>, {COMPANY.legalForm} au
                capital social de {COMPANY.shareCapital}.
              </p>
              <ul>
                <li>
                  <strong>Siège social :</strong> {COMPANY.headquartersAddress}
                </li>
                <li>
                  <strong>Boutique :</strong> {COMPANY.boutiqueAddress}
                </li>
                <li>
                  <strong>SIREN :</strong> {COMPANY.siren}
                </li>
                <li>
                  <strong>SIRET (établissement boutique) :</strong>{" "}
                  {COMPANY.siretBoutique}
                </li>
                <li>
                  <strong>{COMPANY.rcs}</strong>
                </li>
                <li>
                  <strong>N° TVA intracommunautaire :</strong>{" "}
                  {COMPANY.vatNumber}
                </li>
                <li>
                  <strong>Activité :</strong> {COMPANY.activity}
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                </li>
                <li>
                  <strong>E-mail :</strong>{" "}
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Directrice de publication",
          content: <p>{COMPANY.publisher}</p>,
        },
        {
          title: "Hébergeur",
          content: (
            <>
              <p>
                Le site est hébergé par <strong>{HOSTING.name}</strong>,{" "}
                {HOSTING.address}.
              </p>
              <p>
                Site web :{" "}
                <a
                  href={HOSTING.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {HOSTING.website}
                </a>
              </p>
            </>
          ),
        },
        {
          title: "Propriété intellectuelle",
          content: (
            <p>
              L&apos;ensemble des éléments composant le site (textes, images,
              graphismes, logo, structure) est protégé par le droit de la
              propriété intellectuelle. Toute reproduction, représentation ou
              exploitation, totale ou partielle, sans autorisation préalable
              écrite de {COMPANY.legalName} est interdite.
            </p>
          ),
        },
        {
          title: "Limitation de responsabilité",
          content: (
            <p>
              {COMPANY.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude
              des informations diffusées sur le site. Toutefois, elle ne saurait
              être tenue responsable des omissions, inexactitudes ou
              indisponibilités temporaires du service. Les liens hypertextes vers
              des sites tiers n&apos;engagent pas la responsabilité de
              l&apos;éditeur.
            </p>
          ),
        },
        {
          title: "Données personnelles et cookies",
          content: (
            <p>
              Pour toute information relative au traitement de vos données
              personnelles et à l&apos;utilisation des cookies, consultez notre{" "}
              <a href={LEGAL_PAGES.confidentialite}>
                politique de confidentialité
              </a>{" "}
              et notre{" "}
              <a href={LEGAL_PAGES.cookies}>politique cookies</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
