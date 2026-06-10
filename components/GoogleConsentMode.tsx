"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useCookieConsentChoices } from "@/components/CookieConsentProvider";

function updateConsent(analytics: boolean) {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void })
    .gtag;
  gtag?.("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function GoogleConsentMode() {
  const { analytics } = useCookieConsentChoices();

  useEffect(() => {
    updateConsent(analytics);
  }, [analytics]);

  return (
    <Script id="google-consent-default" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          wait_for_update: 500
        });
      `}
    </Script>
  );
}
