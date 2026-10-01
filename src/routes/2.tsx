import { createFileRoute } from "@tanstack/react-router";

import { StaffSection } from "@/components/sections";

const title = "الهيئة الإدارية والتدريسية — مدرسة وادي السير الأساسية للبنين";
const description =
  "تعرّف على الهيئة الإدارية والهيئة التدريسية في مدرسة وادي السير الأساسية للبنين وتخصصات كل معلم.";
const url = "https://abusus.lovable.app/2";

export const Route = createFileRoute("/2")({
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
  component: StaffPage,
});

function StaffPage() {
  return (
    <>
      <h1 className="sr-only">الهيئة الإدارية والتدريسية</h1>
      <StaffSection />
    </>
  );
}
