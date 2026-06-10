import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import CookieBanner from "@/components/CookieBanner";
import { CookieConsentProvider } from "@/components/CookieConsentProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleConsentMode from "@/components/GoogleConsentMode";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookieConsentProvider>
      <GoogleConsentMode />
      <SiteHeader />
      <main className="min-w-0 w-full max-w-full flex-1">{children}</main>
      <SiteFooter />
      <CookieBanner />
      <GoogleAnalytics />
    </CookieConsentProvider>
  );
}
