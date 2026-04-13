"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [heightPct, setHeightPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const winScroll = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (winScroll / scrollHeight) * 100 : 0;
      setHeightPct(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed right-0 top-0 z-[100] h-screen w-px bg-or/10"
      aria-hidden
    >
      <div
        className="w-full bg-or transition-[height] duration-100 ease-out motion-reduce:transition-none"
        style={{ height: `${heightPct}%` }}
      />
    </div>
  );
}
