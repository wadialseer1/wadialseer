import { createFileRoute } from "@tanstack/react-router";

import { AssemblySection, InitiativesSection } from "@/components/sections";

const title = "المبادرات المدرسية — مدرسة وادي السير الأساسية للبنين";
const description =
  "مبادرات وأنشطة مدرسة وادي السير الأساسية للبنين: مبادرة لمدرستي أنتمي.";
const url = "https://abusus.lovable.app/4";

export const Route = createFileRoute("/4")({
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
      <AssemblySection />
    </>
  );
}
