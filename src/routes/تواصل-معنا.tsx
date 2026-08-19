import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/sections";

const title = "تواصل معنا — مدرسة أبو السوس الثانوية للبنين";
const description =
  "تواصل مع مدرسة أبو السوس الثانوية للبنين هاتفياً أو عبر البريد الإلكتروني أو صفحة المدرسة الرسمية على فيسبوك.";
const url = "https://abusus.lovable.app/تواصل-معنا";

export const Route = createFileRoute("/تواصل-معنا")({
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
