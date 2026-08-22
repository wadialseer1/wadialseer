import { createFileRoute } from "@tanstack/react-router";

import { LocationSection } from "@/components/sections";
import { school } from "@/data/school";

const title = "موقع المدرسة على الخريطة — أبو السوس الثانوية";
const description =
  "موقع مدرسة أبو السوس الثانوية للبنين على الخريطة مع إمكانية فتح الموقع في Google Maps والحصول على الاتجاهات.";
const url = "https://abusus.lovable.app/5";

export const Route = createFileRoute("/5")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: school.name,
          telephone: school.phone,
          email: school.email,
          url,
          geo: {
            "@type": "GeoCoordinates",
            latitude: school.coords.lat,
            longitude: school.coords.lng,
          },
        }),
      },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <h1 className="sr-only">موقع مدرسة أبو السوس الثانوية للبنين</h1>
      <LocationSection />
    </>
  );
}
