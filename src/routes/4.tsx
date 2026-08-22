import { createFileRoute } from "@tanstack/react-router";

import { InitiativesSection } from "@/components/sections";

const title = "المبادرات المدرسية — مدرسة أبو السوس الثانوية";
const description =
  "مبادرات وأنشطة مدرسة أبو السوس الثانوية للبنين: لمدرستي أنتمي، التوجيه المهني، والانتخابات البرلمانية الطلابية.";
const url = "https://abusus.lovable.app/المبادرات";

export const Route = createFileRoute("/المبادرات")({
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
  component: InitiativesPage,
});

function InitiativesPage() {
  return (
    <>
      <h1 className="sr-only">المبادرات المدرسية</h1>
      <InitiativesSection />
    </>
  );
}
