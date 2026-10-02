import { X } from "lucide-react";
import { useMemo, useState } from "react";

import { textbooks, type Textbook } from "@/data/textbooks";

export function TextbooksSection() {
  const grades = useMemo(() => [...new Set(textbooks.map((b) => b.grade))], []);
  const [grade, setGrade] = useState(grades[0]!);
  const [book, setBook] = useState<Textbook | null>(null);
  const list = textbooks.filter((b) => b.grade === grade);

  return (
    <section className="section-pad">
      <div className="container-site">
        <h2 className="text-3xl font-extrabold">الكتب المدرسية</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {grades.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGrade(g)}
              className={`rounded-full border border-border px-4 py-2 text-sm font-bold ${g === grade ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <button
              key={b.file}
              type="button"
              onClick={() => setBook(b)}
              className="card-premium p-5 text-right"
            >
              <p className="text-lg font-extrabold">{b.subject}</p>
              <p className="mt-1 text-sm text-muted-foreground">{b.title}</p>
            </button>
          ))}
        </div>
      </div>
      {book && (
        <div className="fixed inset-0 z-100 flex flex-col bg-background">
          <div className="flex items-center justify-between border-b border-border p-3">
            <p className="font-bold">
              {book.subject} — {book.title}
            </p>
            <button type="button" aria-label="إغلاق" onClick={() => setBook(null)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <iframe title={book.title} src={`/api/public/book/${book.file}`} className="flex-1 w-full" />
        </div>
      )}
    </section>
  );
}
