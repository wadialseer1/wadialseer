import { Atom, BookMarked, BookOpenText, BookText, Calculator, Computer, Download, Dumbbell, Earth, FlaskConical, Languages, Library, Palette, Search, Wrench } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { NativeSelect } from "@/components/ui/native-select";
import { textbooks, type Textbook } from "@/data/textbooks";

function cleanTitle(title: string) {
  return title.replace(/^\d+\s*/, "").replace(/\s*-\s*الفصل (الأول|الثاني)$/, "");
}
function semesterOf(title: string) {
  if (title.includes("الفصل الثاني")) return "الفصل الثاني";
  if (title.includes("الفصل الأول")) return "الفصل الأول";
  return "كتب إضافية";
}
function subjectIcon(subject: string) {
  if (/رياضيات/.test(subject)) return Calculator;
  if (/كيمياء/.test(subject)) return FlaskConical;
  if (/اجتماعيات|جغرافيا|تاريخ|أرض/.test(subject)) return Earth;
  if (/علوم|فيزياء|أحياء/.test(subject)) return Atom;
  if (/حاسوب/.test(subject)) return Computer;
  if (/عربية|إنجليزية/.test(subject)) return Languages;
  if (/رياضية/.test(subject)) return Dumbbell;
  if (/فنية/.test(subject)) return Palette;
  if (/مهنية/.test(subject)) return Wrench;
  return BookOpenText;
}
function BookFilter({ label, value, onChange, options, icon: Icon }: { label: string; value: string; onChange: (value: string) => void; options: string[]; icon: typeof Library }) {
  return <div className="min-w-0">
    <p className="mb-2 flex items-center gap-2 text-sm font-bold text-primary"><Icon className="h-4 w-4" />{label}</p>
    <NativeSelect value={value} onChange={(event) => onChange(event.target.value)} dir="rtl" aria-label={label}>
      {options.map((item) => <option key={item} value={item}>{item === "الكل" ? `جميع ${label === "المادة" ? "المواد" : "الفصول"}` : item}</option>)}
    </NativeSelect>
  </div>;
}
export function TextbooksSection() {
  const grades = useMemo(() => [...new Set(textbooks.map((book) => book.grade))], []);
  const [grade, setGrade] = useState(grades[0] ?? "");
  const [subject, setSubject] = useState("الكل");
  const [semester, setSemester] = useState("الكل");
  const [query, setQuery] = useState("");
  const subjects = useMemo(() => [...new Set(textbooks.filter((book) => book.grade === grade).map((book) => book.subject))], [grade]);
  const groups = useMemo(() => {
    const grouped = new Map<string, Textbook[]>();
    textbooks.filter((book) => book.grade === grade)
      .filter((book) => subject === "الكل" || book.subject === subject)
      .filter((book) => semester === "الكل" || semesterOf(book.title) === semester)
      .filter((book) => `${book.subject} ${book.title}`.includes(query.trim()))
      .forEach((book) => grouped.set(book.subject, [...(grouped.get(book.subject) ?? []), book]));
    return [...grouped].map(([subject, books]) => ({ subject, books }));
  }, [grade, subject, semester, query]);
  const chooseGrade = (value: string) => { setGrade(value); setSubject("الكل"); setSemester("الكل"); setQuery(""); };
  return <section className="section-pad"><div className="container-site">
    <p className="font-bold text-primary">مكتبة الطالب</p>
    <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">الكتب المدرسية</h2>
    <div className="mt-8 grid grid-cols-2 gap-4 border-y border-primary/25 py-6 lg:grid-cols-4">
      <BookFilter label="الصف الدراسي" value={grade} onChange={chooseGrade} options={grades} icon={BookOpenText} />
      <BookFilter label="المادة" value={subject} onChange={setSubject} options={["الكل", ...subjects]} icon={Library} />
      <BookFilter label="الفصل" value={semester} onChange={setSemester} options={["الكل", "الفصل الأول", "الفصل الثاني", "كتب إضافية"]} icon={BookMarked} />
      <label className="min-w-0"><span className="mb-2 flex items-center gap-2 text-sm font-bold text-primary"><Search className="h-4 w-4" />البحث في الكتب</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="اسم المادة أو الكتاب" className="h-12 w-full rounded-md border border-input bg-card px-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary" /></label>
    </div>
    <p className="mt-6 text-sm font-semibold text-muted-foreground"><span className="text-info">{grade}</span> — {subject === "الكل" ? "جميع المواد" : subject} <span className="mr-2 text-primary">{groups.reduce((count, group) => count + group.books.length, 0)} كتاب</span></p>
    <div className="mt-5 grid items-start gap-6 lg:grid-cols-2">
      {groups.map((group) => {
        const Icon = subjectIcon(group.subject);
        return <article key={group.subject} className="group overflow-hidden rounded-xl border border-primary/30 bg-card shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold">
          <header className="relative flex items-center gap-3 overflow-hidden border-b border-primary/25 bg-gradient-to-l from-primary/25 via-secondary/60 to-info/15 p-5">
            <Icon aria-hidden className="pointer-events-none absolute -left-4 -top-4 h-28 w-28 text-primary/10 transition-transform duration-500 group-hover:rotate-12" />
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-gold transition-transform duration-300 group-hover:scale-110"><Icon className="h-6 w-6" /></span>
            <div className="min-w-0">
              <h3 className="text-xl font-extrabold text-primary">{group.subject}</h3>
              <p className="text-xs font-semibold text-info">{grade} · {group.books.length} كتاب</p>
            </div>
          </header>
          <div className="space-y-5 p-4 sm:p-5">
            {["الفصل الأول", "الفصل الثاني", "كتب إضافية"].map((label) => {
              const books = group.books.filter((book) => semesterOf(book.title) === label);
              if (!books.length) return null;
              return <section key={label} aria-label={`${group.subject} - ${label}`}>
                <h4 className="border-b border-border pb-2 text-sm font-extrabold text-info">{label}</h4>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">{books.map((book) => {
                  const activity = /الأنشطة|التمارين/.test(book.title);
                  const BookIcon = activity ? BookMarked : BookText;
                  return <div key={book.file} className="flex min-w-0 items-center gap-3 rounded-md border border-border bg-secondary/30 p-3 transition-colors hover:border-primary/50">
                    <span className={`grid h-12 w-10 shrink-0 place-items-center rounded-sm border-r-4 ${activity ? "border-info bg-info/15 text-info" : "border-primary bg-primary/15 text-primary"}`}><BookIcon className="h-5 w-5" /></span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">{cleanTitle(book.title)}</p>
                      <p className="text-xs text-muted-foreground">PDF · {activity ? "كتاب الأنشطة" : "كتاب الطالب"}</p>
                    </div>
                    <Button asChild size="icon" className="h-10 w-10 shrink-0 rounded-full shadow-gold">
                      <a href={`https://www.minhaji.net/download/${book.file}`} download title="تنزيل" aria-label={`تنزيل ${cleanTitle(book.title)} — ${group.subject} — ${label}`}><Download className="h-5 w-5" /></a>
                    </Button>
                  </div>;
                })}</div>
              </section>;
            })}
          </div>
        </article>;
      })}
    </div>
    {groups.length === 0 && <p role="status" className="py-12 text-center text-muted-foreground">لا توجد كتب مطابقة للبحث.</p>}
  </div></section>;
}
