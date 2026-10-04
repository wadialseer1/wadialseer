import { BookMarked, BookOpen, BookText, Download, Library, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { textbooks, type Textbook } from "@/data/textbooks";

type SubjectGroup = { subject: string; books: Textbook[] };
type SemesterGroup = { label: string; books: Textbook[] };

function cleanTitle(title: string) {
  return title.replace(/^\d+\s*/, "").replace(/\s*-\s*الفصل (الأول|الثاني)$/, "");
}

function semesterOf(title: string) {
  if (title.includes("الفصل الثاني")) return "الفصل الثاني";
  if (title.includes("الفصل الأول")) return "الفصل الأول";
  return "كتب إضافية";
}

function groupSemesters(books: Textbook[]): SemesterGroup[] {
  const labels = ["الفصل الأول", "الفصل الثاني", "كتب إضافية"];
  return labels
    .map((label) => ({ label, books: books.filter((book) => semesterOf(book.title) === label) }))
    .filter((group) => group.books.length > 0);
}

export function TextbooksSection() {
  const grades = useMemo(() => [...new Set(textbooks.map((book) => book.grade))], []);
  const [grade, setGrade] = useState(grades[0] ?? "");
  const [subject, setSubject] = useState("الكل");
  const [query, setQuery] = useState("");
  const [book, setBook] = useState<Textbook | null>(null);
  const subjects = useMemo(
    () => [...new Set(textbooks.filter((item) => item.grade === grade).map((item) => item.subject))],
    [grade],
  );
  const groups = useMemo(() => {
    const grouped = new Map<string, Textbook[]>();
    textbooks
      .filter((item) => item.grade === grade)
      .filter((item) => subject === "الكل" || item.subject === subject)
      .filter((item) => `${item.subject} ${item.title}`.includes(query.trim()))
      .forEach((item) => grouped.set(item.subject, [...(grouped.get(item.subject) ?? []), item]));
    return [...grouped].map(([groupSubject, books]): SubjectGroup => ({ subject: groupSubject, books }));
  }, [grade, query, subject]);

  const chooseGrade = (nextGrade: string) => {
    setGrade(nextGrade);
    setSubject("الكل");
    setQuery("");
  };

  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="font-bold text-primary">مكتبة الطالب</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">الكتب المدرسية</h2>
          <p className="mt-3 text-muted-foreground">اختر الصف والمادة، ثم افتح كتاب الطالب أو الأنشطة للفصل المطلوب أو نزّله مباشرة.</p>
        </div>

        <div className="mt-8 border-b border-border pb-5">
          <p className="mb-3 text-sm font-bold text-foreground">اختر الصف</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {grades.map((item) => (
              <Button key={item} type="button" variant={item === grade ? "default" : "secondary"} onClick={() => chooseGrade(item)} className="h-11 shrink-0 rounded-full px-5 font-bold">
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(15rem,auto)]">
          <label className="relative block min-w-0">
            <span className="sr-only">البحث في الكتب</span>
            <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن مادة أو كتاب" className="h-12 w-full rounded-md border border-input bg-card pr-12 pl-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" />
          </label>
          <label className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-md border border-input bg-card px-4">
            <span className="text-sm font-bold text-primary">المادة</span>
            <select value={subject} onChange={(event) => setSubject(event.target.value)} className="h-12 min-w-0 bg-transparent text-foreground outline-none">
              <option value="الكل">جميع المواد</option>
              {subjects.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-9 grid items-start gap-6 xl:grid-cols-2">
          {groups.map((group) => (
            <article key={group.subject} className="overflow-hidden rounded-lg border border-border bg-card shadow-premium">
              <header className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-b border-primary/30 bg-navy p-5 text-foreground">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                  <Library className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-extrabold">{group.subject}</h3>
                  <p className="text-sm text-foreground/75">{group.books.length} {group.books.length === 1 ? "كتاب" : "كتب"} مرتبة حسب الفصل</p>
                </div>
              </header>
              <div className="space-y-5 p-4 sm:p-5">
                {groupSemesters(group.books).map((semester) => (
                  <section key={semester.label} aria-label={`${group.subject} - ${semester.label}`}>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <h4 className="text-sm font-extrabold text-primary">{semester.label}</h4>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {semester.books.map((item) => {
                        const isActivity = /الأنشطة|التمارين/.test(item.title);
                        const Icon = isActivity ? BookMarked : BookText;
                        return (
                          <div key={item.file} className="flex min-w-0 flex-col gap-4 rounded-md border border-border bg-secondary/60 p-4">
                            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary"><Icon className="h-5 w-5" /></span>
                              <p className="min-w-0 font-bold text-foreground">{cleanTitle(item.title)}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <Button type="button" size="sm" onClick={() => setBook(item)}><BookOpen /> فتح</Button>
                              <Button asChild size="sm" variant="outline">
                                <a href={`/api/public/book/${item.file}?download=1`} download={`Wadialseer_${item.file}.pdf`}><Download /> تنزيل</a>
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {book && (
        <div className="fixed inset-0 z-100 flex flex-col bg-background">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-3">
            <p className="min-w-0 truncate font-bold">{book.subject} — {book.title}</p>
            <Button type="button" size="icon" variant="ghost" aria-label="إغلاق" onClick={() => setBook(null)}><X className="h-6 w-6" /></Button>
          </div>
          <iframe title={book.title} src={`/api/public/book/${book.file}`} className="w-full flex-1" />
        </div>
      )}
    </section>
  );
}