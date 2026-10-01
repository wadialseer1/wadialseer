import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/sections";

const title = "عن المدرسة — مدرسة وادي السير الأساسية للبنين";
const description =
  "نبذة عن مدرسة وادي السير الأساسية للبنين: بيانات المدرسة الرسمية في لواء وادي السير.";

const url = "https://abusus.lovable.app/1";

export const Route = createFileRoute("/1")({
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
      <h1 className="sr-only">عن مدرسة وادي السير الأساسية للبنين</h1>
      <AboutSection />
    </>
  );
}
