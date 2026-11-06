import { createFileRoute } from "@tanstack/react-router";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayRunIdFetch, getLovableAiGatewayRunId, withLovableAiGatewayRunIdHeader } from "@/lib/run-id.server";
import { schoolInstructions } from "@/lib/school-knowledge.server";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return Response.json({ error: "المساعد غير مهيأ حاليًا." }, { status: 500 });
        const body = (await request.json().catch(() => null)) as { messages?: UIMessage[] } | null;
        const messages = Array.isArray(body?.messages) ? body.messages.slice(-20) : null;
        if (!messages?.length) return Response.json({ error: "رسالة غير صالحة." }, { status: 400 });

        const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));
        const provider = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey,
          headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
          fetch: runIdFetch.fetch,
        });
        const result = streamText({
          model: provider.responses("openai/gpt-6-astra"),
          system: schoolInstructions(),
          messages: await convertToModelMessages(messages),
          abortSignal: request.signal,
          maxRetries: 0,
          providerOptions: {
            openai: { forceReasoning: true, reasoningEffort: "low", reasoningSummary: "auto", store: false, include: ["reasoning.encrypted_content"] },
          },
        });
        return withLovableAiGatewayRunIdHeader(
          result.toUIMessageStreamResponse({
            originalMessages: messages,
            onError: (e) => {
              const status = (e as { statusCode?: number })?.statusCode;
              if (status === 429) return "الطلبات كثيرة حاليًا، حاول بعد قليل.";
              if (status === 402 || status === 403) return "المساعد متوقف مؤقتًا، تواصل مع المدرسة مباشرة.";
              return "تعذّر الرد الآن، حاول مرة أخرى.";
            },
          }),
          runIdFetch,
        );
      },
    },
  },
});
