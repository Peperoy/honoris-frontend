"use client";

import dynamic from "next/dynamic";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/instagram";

const BEHOLD_FEED_ID = "XuM9RJvsdTObUWLNIe9n";

const BeholdWidget = dynamic(
  () => import("@behold/react").then((mod) => mod.default),
  { ssr: false },
);

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramCarousel() {
  return (
    <div className="behold-feed w-full">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-encre transition-colors hover:text-or"
      >
        <InstagramIcon className="size-3.5" />
        @{INSTAGRAM_HANDLE}
      </a>

      <BeholdWidget feedId={BEHOLD_FEED_ID} />

      <p className="mt-5 text-[11px] font-light leading-relaxed text-secondary/80">
        Suivez nos coulisses et nos nouveautés sur Instagram.
      </p>
    </div>
  );
}
