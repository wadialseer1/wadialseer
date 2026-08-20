import { useEffect, useState } from "react";

import logo from "@/assets/logo.png.asset.json";
import { school } from "@/data/school";

export function SchoolSplash() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-200 grid place-items-center surface-hero transition-opacity duration-500"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <img
          src={logo.url}
          alt=""
          className="h-24 w-24 animate-pulse rounded-3xl bg-foreground/95 object-contain p-2 sm:h-28 sm:w-28"
          width={112}
          height={112}
        />
        <p className="font-display text-xl font-extrabold sm:text-2xl">{school.name}</p>
      </div>
    </div>
  );
}
