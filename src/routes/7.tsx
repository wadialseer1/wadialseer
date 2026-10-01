import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/sections";

const title = "تواصل معنا — مدرسة وادي السير الأساسية للبنين";
const description =
  "تواصل مع مدرسة وادي السير الأساسية للبنين هاتفياً أو عبر البريد الإلكتروني أو صفحة المدرسة الرسمية على فيسبوك.";
const url = "https://abusus.lovable.app/7";

export const Route = createFileRoute("/7")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <h1 className="sr-only">تواصل معنا</h1>
      <ContactSection />
    </>
  );
}
