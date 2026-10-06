import { Atom, BookMarked, BookOpenText, BookText, Calculator, Computer, Download, Dumbbell, Earth, FlaskConical, Languages, Library, Palette, Search, Wrench } from "lucide-react";
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

function subjectIcon(subject: string) {
  if (/رياضيات/.test(subject)) return Calculator;
  if (/علوم|فيزياء|أحياء/.test(subject)) return Atom;
  if (/كيمياء/.test(subject)) return FlaskConical;
  if (/حاسوب/.test(subject)) return Computer;
  if (/عربية|إنجليزية/.test(subject)) return Languages;
  if (/اجتماعيات|جغرافيا|تاريخ|أرض/.test(subject)) return Earth;
  if (/رياضية/.test(subject)) return Dumbbell;
  if (/فنية/.test(subject)) return Palette;
  if (/مهنية/.test(subject)) return Wrench;
  return BookOpenText;
}

export function TextbooksSection() {
  const grades = useMemo(() => [...new Set(textbooks.map((book) => book.grade))], []);
  const [grade, setGrade] = useState(grades[0] ?? "");
  const [subject, setSubject] = useState("الكل");
  const [query, setQuery] = useState("");
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
          <p className="mt-3 text-muted-foreground">اختر الصف والمادة، ثم نزّل كتاب الطالب أو الأنشطة للفصل المطلوب مباشرة إلى جهازك.</p>
        </div>

        <div className="sticky top-18 z-20 mt-8 space-y-5 rounded-lg border border-primary/35 bg-background/95 p-4 shadow-premium backdrop-blur-md sm:p-6">
          <div>
            <div className="mb-3 flex items-center gap-2"><BookOpenText className="h-5 w-5 text-primary" /><p className="text-sm font-bold text-foreground">اختر الصف</p></div>
            <div className="flex snap-x gap-2 overflow-x-auto pb-2">
              {grades.map((item) => (
                <Button key={item} type="button" variant={item === grade ? "default" : "secondary"} onClick={() => chooseGrade(item)} className="h-11 shrink-0 snap-start rounded-md border border-primary/25 px-5 font-bold shadow-sm">{item}</Button>
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-4">
            <div className="mb-3 flex items-center gap-2"><Library className="h-5 w-5 text-primary" /><p className="text-sm font-bold text-foreground">اختر المادة</p></div>
            <div className="flex snap-x gap-2 overflow-x-auto pb-2">
              {["الكل", ...subjects].map((item) => (
                <Button key={item} type="button" variant={item === subject ? "default" : "secondary"} onClick={() => setSubject(item)} className="h-10 shrink-0 snap-start rounded-md border border-primary/25 px-4 font-bold shadow-sm">{item === "الكل" ? "جميع المواد" : item}</Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="relative block min-w-0">
            <span className="sr-only">البحث في الكتب</span>
            <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن مادة أو كتاب" className="h-12 w-full rounded-md border border-input bg-card pr-12 pl-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" />
          </label>
        </div>

        <p className="mt-6 text-sm font-semibold text-muted-foreground">يعرض الآن: <span className="text-primary">{grade}</span>{subject !== "الكل" ? ` — ${subject}` : " — جميع المواد"}</p>

        <div className="mt-5 grid items-start gap-6 xl:grid-cols-2">
          {groups.map((group) => (
            <article key={group.subject} className="overflow-hidden rounded-lg border border-primary/40 bg-card shadow-premium">
              <header className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-b border-primary/30 bg-navy p-5 text-foreground">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-gold text-primary-foreground">
                  {(() => { const Icon = subjectIcon(group.subject); return <Icon className="h-6 w-6" />; })()}
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
                          <div key={item.file} className="flex min-w-0 flex-col gap-4 rounded-md border border-primary/30 bg-secondary/60 p-4 shadow-sm transition-transform hover:-translate-y-0.5">
                            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary"><Icon className="h-5 w-5" /></span>
                              <p className="min-w-0 font-bold text-foreground">{cleanTitle(item.title)}</p>
                            </div>
                            <Button asChild size="lg" className="w-full font-bold">
                              <a href={`https://www.minhaji.net/download/${item.file}`} download>
                                <Download /> تنزيل الكتاب
                              </a>
                            </Button>
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

    </section>
  );
}