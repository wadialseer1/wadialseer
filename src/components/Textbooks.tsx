import { BookOpen, Download, Library, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { textbooks, type Textbook } from "@/data/textbooks";

type SubjectGroup = { subject: string; books: Textbook[] };

function cleanTitle(title: string) {
  return title.replace(/^\d+\s*/, "");
}

export function TextbooksSection() {
  const grades = useMemo(() => [...new Set(textbooks.map((b) => b.grade))], []);
  const [grade, setGrade] = useState(grades[0] ?? "");
  const [book, setBook] = useState<Textbook | null>(null);
  const groups = useMemo(() => {
    const grouped = new Map<string, Textbook[]>();
    textbooks.filter((item) => item.grade === grade).forEach((item) => {
      grouped.set(item.subject, [...(grouped.get(item.subject) ?? []), item]);
    });
    return [...grouped].map(([subject, books]): SubjectGroup => ({ subject, books }));
  }, [grade]);

  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="font-bold text-primary">مكتبة الطالب</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">الكتب المدرسية</h2>
          <p className="mt-3 text-muted-foreground">اختر الصف، ثم ستجد كتب كل مادة مجمعة معًا للفصلين الأول والثاني.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {grades.map((g) => (
            <Button
              key={g}
              type="button"
              variant={g === grade ? "default" : "secondary"}
              onClick={() => setGrade(g)}
              className="h-11 rounded-full px-5 font-bold"
            >
              {g}
            </Button>
          ))}
        </div>
        <div className="mt-9 grid items-start gap-5 lg:grid-cols-2">
          {groups.map((group, index) => (
            <article key={group.subject} className="overflow-hidden rounded-lg border border-border bg-card shadow-premium">
              <header className={`flex items-center gap-3 border-b border-border p-5 ${index % 2 === 0 ? "bg-secondary" : "bg-primary text-primary-foreground"}`}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-background/15">
                  <Library className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold">{group.subject}</h3>
                  <p className="text-sm opacity-80">{group.books.length} {group.books.length === 1 ? "كتاب" : "كتب"}</p>
                </div>
              </header>
              <div className="divide-y divide-border">
                {group.books.map((item) => (
                  <div key={item.file} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="min-w-0 font-bold text-foreground">{cleanTitle(item.title)}</p>
                    <div className="flex shrink-0 gap-2">
                      <Button type="button" size="sm" onClick={() => setBook(item)}>
                        <BookOpen /> فتح
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href={`/api/public/book/${item.file}?download=1`} download={`Wadialseer_${item.file}.pdf`}>
                          <Download /> تنزيل
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      {book && (
        <div className="fixed inset-0 z-100 flex flex-col bg-background">
          <div className="flex items-center justify-between gap-3 border-b border-border p-3">
            <p className="min-w-0 truncate font-bold">
              {book.subject} — {book.title}
            </p>
            <Button type="button" size="icon" variant="ghost" aria-label="إغلاق" onClick={() => setBook(null)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <iframe title={book.title} src={`/api/public/book/${book.file}`} className="flex-1 w-full" />
        </div>
      )}
    </section>
  );
}
