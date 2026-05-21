"use client";

import { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  durationSec?: number;
  reverse?: boolean;
  className?: string;
};

export function Marquee({
  children,
  durationSec = 60,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div className={`hc-marquee-mask ${className ?? ""}`}>
      <div
        className="hc-marquee-track"
        style={{
          animationDuration: `${durationSec}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="hc-marquee-group">{children}</div>
        <div className="hc-marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
