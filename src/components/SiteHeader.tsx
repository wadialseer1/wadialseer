import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo.png.asset.json";
import { routes, school } from "@/data/school";

const nav = [
  { label: "الرئيسية", to: routes.home },
  { label: "عن المدرسة", to: routes.about },
  { label: "الهيئة الإدارية والتدريسية", to: routes.staff },
  { label: "المبادرات المدرسية", to: routes.initiatives },
  { label: "موقع المدرسة", to: routes.location },
  { label: "المنصات التعليمية", to: routes.platforms },
  { label: "نظام BTEC", to: routes.btec },
  { label: "الكتب المدرسية", to: routes.textbooks },
  { label: "تواصل معنا", to: routes.contact },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
        <Link to={routes.home} className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="شعار مدرسة وادي السير الأساسية للبنين"
            className="h-11 w-11 shrink-0 rounded-xl bg-foreground/95 object-contain p-1"
            width={44}
            height={44}
          />
          <span className="truncate text-sm font-bold sm:text-base">{school.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-primary" }}
              activeOptions={{ exact: item.to === routes.home }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          aria-expanded={open}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-foreground xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="container-site grid gap-1 pb-5 xl:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-primary" }}
              activeOptions={{ exact: item.to === routes.home }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
