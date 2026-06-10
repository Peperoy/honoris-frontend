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

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: "HONORISCOSA. | Boutique de Luxe Valenciennes",
    template: "%s | HONORISCOSA.",
  },
  description:
    "Honoriscosa — boutique multimarques à Valenciennes. Vêtements, accessoires et marques de qualité, choisis avec attention.",
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  openGraph: {
    title: "HONORISCOSA. | Boutique de Luxe Valenciennes",
    description:
      "Honoriscosa — boutique multimarques à Valenciennes. Vêtements, accessoires et marques de qualité, choisis avec attention.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HONORISCOSA. | Boutique de Luxe Valenciennes",
    description:
      "Honoriscosa — boutique multimarques à Valenciennes. Vêtements, accessoires et marques de qualité.",
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
