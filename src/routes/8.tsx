import { createFileRoute } from "@tanstack/react-router";

import { TextbooksSection } from "@/components/sections";

const title = "الكتب المدرسية — مدرسة وادي السير الأساسية للبنين";
const description =
  "الكتب المدرسية الرسمية مرتبة حسب الصف والمادة والفصل، مع تنزيل مباشر لكل كتاب.";
const url = "https://abusus.lovable.app/8";

export const Route = createFileRoute("/8")({
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
  component: TextbooksPage,
});

function TextbooksPage() {
  return (
    <>
      <h1 className="sr-only">الكتب المدرسية</h1>
      <TextbooksSection />
    </>
  );
}
