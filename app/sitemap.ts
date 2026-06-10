import type { MetadataRoute } from "next";
import { LEGAL_PAGES, SITE_URL } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${LEGAL_PAGES.mentionsLegales}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}${LEGAL_PAGES.confidentialite}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}${LEGAL_PAGES.cookies}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
