import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { GraduationCap, Loader2, MessageCircleQuestion, Send, Square, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const suggestions = ["ما هو دوام المدرسة؟", "من مدير المدرسة؟", "كيف أنزّل الكتب المدرسية؟", "ما هي المنصات التعليمية؟"];

export function SchoolAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status, stop, error } = useChat({ transport });
  const busy = status === "submitted" || status === "streaming";
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ block: "end" }); }, [messages, status]);
  useEffect(() => { if (open && !busy) inputRef.current?.focus(); }, [open, busy]);

  const send = (text: string) => {
    if (!text.trim() || busy) return;
    sendMessage({ text: text.trim() });
    setInput("");
  };

  return <>
    <button type="button" onClick={() => setOpen((v) => !v)} aria-label="اسأل مساعد المدرسة"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-gold transition-transform hover:scale-105">
      {open ? <X className="h-6 w-6" /> : <MessageCircleQuestion className="h-7 w-7" />}
    </button>
    {open && <div role="dialog" aria-label="مساعد المدرسة" dir="rtl"
      className="fixed bottom-24 right-3 left-3 z-50 flex h-[70vh] max-h-[600px] flex-col overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-premium sm:left-auto sm:w-[380px]">
      <header className="flex items-center gap-3 border-b border-primary/25 bg-gradient-to-l from-primary/25 to-info/15 p-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"><GraduationCap className="h-5 w-5" /></span>
        <div><p className="font-extrabold text-primary">مساعد وادي السير</p><p className="text-xs text-muted-foreground">أسئلة عن المدرسة من معلومات الموقع</p></div>
      </header>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.length === 0 && <div className="space-y-2">
          <p className="text-sm text-muted-foreground">مرحبًا! اسألني عن الدوام، المعلمين، الكتب، المنصات أو المبادرات.</p>
          {suggestions.map((s) => <button key={s} type="button" onClick={() => send(s)} className="block w-full rounded-lg border border-primary/30 px-3 py-2 text-right text-sm hover:border-primary">{s}</button>)}
        </div>}
        {messages.map((m) => <div key={m.id} className={m.role === "user" ? "mr-auto max-w-[85%] rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground" : "max-w-full text-sm leading-7 [&_a]:text-info [&_a]:underline [&_ul]:list-disc [&_ul]:pr-5 [&_ol]:list-decimal [&_ol]:pr-5"}>
          {m.parts.map((p, i) => p.type === "text" ? (m.role === "user" ? <span key={i}>{p.text}</span> : <ReactMarkdown key={i}>{p.text}</ReactMarkdown>) : null)}
        </div>)}
        {status === "submitted" && <p className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" />يكتب الرد…</p>}
        {error && <p role="alert" className="text-sm text-destructive">{error.message || "تعذّر الرد، حاول مرة أخرى."}</p>}
        <div ref={endRef} />
      </div>
      <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-end gap-2 border-t border-border p-3">
        <textarea ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} rows={1} placeholder="اكتب سؤالك…"
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
          className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
        {busy
          ? <button type="button" onClick={() => stop()} aria-label="إيقاف" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary"><Square className="h-4 w-4" /></button>
          : <button type="submit" disabled={!input.trim()} aria-label="إرسال" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-50"><Send className="h-4 w-4" /></button>}
      </form>
    </div>}
  </>;
}
