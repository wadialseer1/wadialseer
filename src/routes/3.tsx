import { createFileRoute } from "@tanstack/react-router";

import { BtecSection } from "@/components/sections";

const title = "نظام BTEC المهني — مدرسة وادي السير الأساسية للبنين";
const description =
  "نظام BTEC البريطاني في مدرسة وادي السير الأساسية للبنين: تخصص تكنولوجيا المعلومات وتخصص إدارة الأعمال.";
const url = "https://abusus.lovable.app/3";

export const Route = createFileRoute("/3")({
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
  component: BtecPage,
});

function BtecPage() {
  return (
    <>
      <h1 className="sr-only">نظام BTEC للتعليم المهني</h1>
      <BtecSection />
    </>
  );
}
