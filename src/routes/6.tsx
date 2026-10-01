import { createFileRoute } from "@tanstack/react-router";

import { PlatformsSection } from "@/components/sections";

const title = "المنصات التعليمية — مدرسة وادي السير الأساسية للبنين";
const description =
  "روابط المنصات التعليمية: منصة أجيال، سراج المساعد الدراسي الذكي، وزارة التربية والتعليم، وصفحة المدرسة على فيسبوك.";
const url = "https://abusus.lovable.app/6";

export const Route = createFileRoute("/6")({
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
  component: PlatformsPage,
});

function PlatformsPage() {
  return (
    <>
      <h1 className="sr-only">المنصات التعليمية</h1>
      <PlatformsSection />
    </>
  );
}
