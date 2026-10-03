import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export type LightboxItem = { src: string; caption?: string };

export function useLightbox(items: LightboxItem[]) {
  const [index, setIndex] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const close = useCallback(() => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(() => {
      setIndex(null);
      setClosing(false);
    }, 200);
  }, [closing]);
  const open = useCallback((i: number) => {
    setClosing(false);
    setIndex(i);
  }, []);

  useEffect(() => {
    if (index === null) return;
    for (const it of items) {
      const img = new Image();
      img.decoding = "async";
      img.src = it.src;
    }
  }, [index === null]); // eslint-disable-line react-hooks/exhaustive-deps

  const move = useCallback(
    (step: number) => {
      setIndex((current) =>
        current === null ? current : (current + step + items.length) % items.length,
      );
    },
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(-1);
      if (event.key === "ArrowLeft") move(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, move]);

  const activeItem = index === null ? undefined : items[index];
  const view =
    !activeItem ? null : (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="عارض الصور"
        className={`lightbox-in fixed inset-0 z-100 grid place-items-center bg-navy-deep/95 p-4 transition-opacity duration-300 ${closing ? "pointer-events-none opacity-0" : "opacity-100"}`}
        onClick={close}
      >
        <Button
          type="button"
          onClick={close}
          aria-label="إغلاق"
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4 h-11 w-11 rounded-full"
        >
          <X className="h-5 w-5" />
        </Button>

        {items.length > 1 && (
          <>
            <Button
              type="button"
              aria-label="السابق"
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              size="icon"
              variant="secondary"
              className="absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              aria-label="التالي"
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              size="icon"
              variant="secondary"
              className="absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </>
        )}

        <figure
          className="lightbox-figure max-h-full w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={activeItem.src}
            src={activeItem.src}
            alt={activeItem.caption ?? ""}
            decoding="async"
            className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-premium"
          />

          {activeItem.caption && (
            <figcaption className="mt-4 text-center text-sm font-semibold text-foreground/90">
              {activeItem.caption}
            </figcaption>
          )}
        </figure>
      </div>
    );

  return { open, view };
}
