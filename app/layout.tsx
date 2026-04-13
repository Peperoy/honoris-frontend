import type { Metadata } from "next";
import { DM_Serif_Display, Jost } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-headline",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HONORISCOSA. | Boutique de Luxe Valenciennes",
    template: "%s | HONORISCOSA.",
  },
  description:
    "Honoriscosa — boutique de luxe à Valenciennes. Curation intemporelle, marques confidentielles et créateurs émergents.",
  openGraph: {
    title: "HONORISCOSA. | Boutique de Luxe Valenciennes",
    description:
      "Honoriscosa — boutique de luxe à Valenciennes. Curation intemporelle, marques confidentielles et créateurs émergents.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HONORISCOSA. | Boutique de Luxe Valenciennes",
    description:
      "Honoriscosa — boutique de luxe à Valenciennes. Curation intemporelle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${dmSerif.variable} ${jost.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
