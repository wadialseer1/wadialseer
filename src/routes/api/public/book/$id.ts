import { createFileRoute } from "@tanstack/react-router";

import { textbookIds } from "@/data/textbooks";

export const Route = createFileRoute("/api/public/book/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = Number(params.id);
        if (!Number.isInteger(id) || !textbookIds.has(id)) {
          return new Response("Not found", { status: 404 });
        }
        const upstream = await fetch(`https://www.minhaji.net/download/${id}`);
        if (!upstream.ok || !upstream.body) {
          return new Response("Unavailable", { status: 502 });
        }
        const requestUrl = new URL(request.url);
        const disposition = requestUrl.searchParams.get("download") === "1" ? "attachment" : "inline";
        return new Response(upstream.body, {
          headers: {
            "content-type": "application/pdf",
            "content-disposition": `${disposition}; filename="Wadialseer_${id}.pdf"`,
            "cache-control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
