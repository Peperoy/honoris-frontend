"use client";

import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { useCookieConsentChoices } from "@/components/CookieConsentProvider";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const { analytics } = useCookieConsentChoices();

  if (!GA_ID || !analytics) return null;

  return <NextGoogleAnalytics gaId={GA_ID} />;
}
