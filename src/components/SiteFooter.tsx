import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import { mapsUrl, routes, school } from "@/data/school";

const links = [
  { label: "عن المدرسة", to: routes.about },
  { label: "الهيئة الإدارية والتدريسية", to: routes.staff },
  { label: "نظام BTEC", to: routes.btec },
  { label: "المبادرات المدرسية", to: routes.initiatives },
  { label: "موقع المدرسة", to: routes.location },
  { label: "المنصات التعليمية", to: routes.platforms },
  { label: "تواصل معنا", to: routes.contact },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-site grid gap-10 py-14 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="شعار مدرسة أبو السوس الثانوية للبنين"
              className="h-12 w-12 rounded-xl bg-foreground/95 object-contain p-1"
              width={48}
              height={48}
              loading="lazy"
            />
            <span className="text-base font-bold">{school.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-loose text-muted-foreground">
            {school.tagline}
          </p>
        </div>

        <nav className="grid gap-2 sm:grid-cols-2">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="grid gap-3 text-sm">
          <a
            href={`tel:${school.phone}`}
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            <span dir="ltr">{school.phone}</span>
          </a>
          <a
            href={`mailto:${school.email}`}
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            <span dir="ltr" className="truncate">
              {school.email}
            </span>
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            موقع المدرسة على الخريطة
          </a>
          <a
            href={school.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Facebook className="h-4 w-4 shrink-0 text-primary" />
            صفحة المدرسة على فيسبوك
          </a>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {school.name}. جميع الحقوق محفوظة.
        </p>
        <p className="mt-1">{school.credit}</p>
      </div>
    </footer>
  );
}
