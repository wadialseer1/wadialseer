import { ChevronLeft, ChevronRight, Maximize2, Minus, Plus, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export type LightboxItem = { src: string; caption?: string };
type Point = { x: number; y: number };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function useLightbox(items: LightboxItem[]) {
  const [index, setIndex] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointersRef = useRef(new Map<number, Point>());
  const gestureRef = useRef({ startX: 0, startY: 0, offsetX: 0, offsetY: 0, distance: 0, scale: 1 });
  const transformRef = useRef({ scale: 1, offset: { x: 0, y: 0 } });

  useEffect(() => {
    transformRef.current = { scale, offset };
  }, [scale, offset]);

  const resetView = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    pointersRef.current.clear();
  }, []);

  const close = useCallback(() => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(() => {
      setIndex(null);
      setClosing(false);
      resetView();
    }, 200);
  }, [closing, resetView]);

  const open = useCallback((i: number) => {
    setClosing(false);
    setIndex(i);
    resetView();
  }, [resetView]);

  const move = useCallback((step: number) => {
    setIndex((current) => current === null ? current : (current + step + items.length) % items.length);
    resetView();
  }, [items.length, resetView]);

  const zoomAt = useCallback((nextScale: number, anchor?: Point) => {
    const current = transformRef.current;
    const next = clamp(nextScale, 1, 4);
    const rect = viewportRef.current?.getBoundingClientRect();
    const point = anchor ?? { x: (rect?.width ?? 0) / 2, y: (rect?.height ?? 0) / 2 };
    const ratio = next / current.scale;
    const nextOffset = next === 1
      ? { x: 0, y: 0 }
      : {
          x: point.x - (point.x - current.offset.x) * ratio,
          y: point.y - (point.y - current.offset.y) * ratio,
        };
    setScale(next);
    setOffset(nextOffset);
  }, []);

  useEffect(() => {
    if (index === null) return;
    for (const item of items) {
      const image = new Image();
      image.decoding = "async";
      image.src = item.src;
    }
  }, [index, items]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(-1);
      if (event.key === "ArrowLeft") move(1);
      if (event.key === "+" || event.key === "=") zoomAt(transformRef.current.scale * 1.25);
      if (event.key === "-") zoomAt(transformRef.current.scale / 1.25);
      if (event.key === "0") resetView();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, move, resetView, zoomAt]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || index === null) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const dy = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 100 : 1);
      zoomAt(transformRef.current.scale * Math.exp(-dy * 0.0015), {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };
    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [index, zoomAt]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const points = [...pointersRef.current.values()];
    if (points.length === 1) {
      gestureRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        offsetX: transformRef.current.offset.x,
        offsetY: transformRef.current.offset.y,
        distance: 0,
        scale: transformRef.current.scale,
      };
    } else if (points.length === 2) {
      gestureRef.current.distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      gestureRef.current.scale = transformRef.current.scale;
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(event.pointerId)) return;
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const points = [...pointersRef.current.values()];
    if (points.length === 2 && gestureRef.current.distance > 0) {
      const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      zoomAt(gestureRef.current.scale * distance / gestureRef.current.distance);
    } else if (points.length === 1 && transformRef.current.scale > 1) {
      setOffset({
        x: gestureRef.current.offsetX + event.clientX - gestureRef.current.startX,
        y: gestureRef.current.offsetY + event.clientY - gestureRef.current.startY,
      });
    }
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const startX = gestureRef.current.startX;
    const startY = gestureRef.current.startY;
    pointersRef.current.delete(event.pointerId);
    if (transformRef.current.scale === 1 && Math.abs(event.clientX - startX) > 60 && Math.abs(event.clientY - startY) < 80) {
      move(event.clientX > startX ? -1 : 1);
    }
  };

  const activeItem = index === null ? undefined : items[index];
  const view = !activeItem ? null : (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="عارض الصور"
      className={`lightbox-in fixed inset-0 z-100 flex flex-col bg-navy-deep/95 transition-opacity duration-200 ${closing ? "pointer-events-none opacity-0" : "opacity-100"}`}
      onClick={close}
    >
      <div className="relative z-10 flex h-16 shrink-0 items-center justify-between gap-3 px-4">
        <p className="min-w-0 truncate text-sm font-semibold text-foreground/90">{activeItem.caption}</p>
        <div className="flex shrink-0 items-center gap-2" onClick={(event) => event.stopPropagation()}>
          <Button type="button" size="icon" variant="secondary" aria-label="تصغير الصورة" title="تصغير" onClick={() => zoomAt(scale / 1.25)} disabled={scale <= 1}>
            <Minus className="h-5 w-5" />
          </Button>
          <Button type="button" size="icon" variant="secondary" aria-label="تكبير الصورة" title="تكبير" onClick={() => zoomAt(scale * 1.25)} disabled={scale >= 4}>
            <Plus className="h-5 w-5" />
          </Button>
          <Button type="button" size="icon" variant="secondary" aria-label="إعادة ضبط الصورة" title="إعادة الضبط" onClick={resetView}>
            <Maximize2 className="h-5 w-5" />
          </Button>
          <Button type="button" size="icon" variant="secondary" aria-label="إغلاق" title="إغلاق" onClick={close}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="relative min-h-0 flex-1 touch-none overflow-hidden"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          zoomAt(scale > 1 ? 1 : 2, { x: event.clientX - rect.left, y: event.clientY - rect.top });
        }}
      >
        {items.length > 1 && (
          <>
            <Button type="button" aria-label="السابق" title="السابق" onClick={(event) => { event.stopPropagation(); move(-1); }} size="icon" variant="secondary" className="absolute right-3 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button type="button" aria-label="التالي" title="التالي" onClick={(event) => { event.stopPropagation(); move(1); }} size="icon" variant="secondary" className="absolute left-3 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </>
        )}
        <div className="absolute inset-0 grid place-items-center p-4">
          <img
            key={activeItem.src}
            src={activeItem.src}
            alt={activeItem.caption ?? ""}
            decoding="async"
            draggable={false}
            className="lightbox-figure max-h-full max-w-full select-none rounded-lg object-contain shadow-premium"
            style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`, transformOrigin: "center" }}
          />
        </div>
      </div>
      <p className="shrink-0 px-4 py-3 text-center text-xs text-muted-foreground">
        اسحب للتنقل · قرّب بإصبعين أو بعجلة الفأرة · استخدم الأسهم من لوحة المفاتيح
      </p>
    </div>
  );

  return { open, view };
}