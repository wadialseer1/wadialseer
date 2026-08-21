import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type LightboxItem = { src: string; caption?: string };

export function useLightbox(items: LightboxItem[]) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const open = useCallback((i: number) => setIndex(i), []);

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

  const view =
    index === null ? null : (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="عارض الصور"
        className="lightbox-in fixed inset-0 z-100 grid place-items-center bg-navy-deep/95 p-4 backdrop-blur-sm"
        onClick={close}
      >
        <button
          type="button"
          onClick={close}
          aria-label="إغلاق"
          className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {items.length > 1 && (
          <>
            <button
              type="button"
              aria-label="السابق"
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/90 text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="التالي"
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/90 text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </>
        )}

        <figure
          className="lightbox-figure max-h-full w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={items[index]!.src}
            src={items[index]!.src}
            alt={items[index]!.caption ?? ""}
            className="lightbox-figure mx-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-premium"
          />

          {items[index]!.caption && (
            <figcaption className="mt-4 text-center text-sm font-semibold text-foreground/90">
              {items[index]!.caption}
            </figcaption>
          )}
        </figure>
      </div>
    );

  return { open, view };
}
