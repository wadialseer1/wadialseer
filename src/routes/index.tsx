import { createFileRoute } from "@tanstack/react-router";

import {
  AboutSection,
  BtecSection,
  ContactSection,
  Hero,
  InitiativesSection,
  LocationSection,
  PlatformsSection,
  ValuesSection,
} from "@/components/sections";
import { school } from "@/data/school";

const title = "مدرسة أبو السوس الثانوية للبنين | الموقع الرسمي";
const description =
  "الموقع الرسمي لمدرسة أبو السوس الثانوية للبنين: الرؤية والرسالة، الهيئة الإدارية والتدريسية، نظام BTEC، المبادرات المدرسية والمنصات التعليمية.";
const url = "https://abusus.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: school.heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: school.heroImage },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: school.name,
          description: school.vision,
          telephone: school.phone,
          email: school.email,
          sameAs: [school.facebook],
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ValuesSection />
      <BtecSection />
      <InitiativesSection />
      <LocationSection />
      <PlatformsSection />
      <ContactSection />
    </>
  );
}
