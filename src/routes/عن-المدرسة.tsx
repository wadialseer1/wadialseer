import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/sections";

const title = "عن المدرسة — مدرسة أبو السوس الثانوية للبنين";
const description =
  "نبذة عن مدرسة أبو السوس الثانوية للبنين: تأسست عام 2017 بمكرمة ملكية سامية في لواء وادي السير، مع بيانات المدرسة الرسمية.";

const url = "https://abusus.lovable.app/عن-المدرسة";

export const Route = createFileRoute("/عن-المدرسة")({
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
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <h1 className="sr-only">عن مدرسة أبو السوس الثانوية للبنين</h1>
      <AboutSection />
    </>
  );
}
