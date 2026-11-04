import { Link } from "@tanstack/react-router";
import { ArrowLeft, Atom, BriefcaseBusiness, Calculator, Computer, Dumbbell, Earth, ExternalLink, FlaskConical, Languages, Mail, MapPin, MessageCircle, Navigation, Palette, Phone, School, Target, UserRound, UsersRound, Wrench } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { NativeSelect } from "@/components/ui/native-select";
import { Reveal } from "@/components/Reveal";
import { useLightbox } from "@/components/Lightbox";
import logo from "@/assets/logo.png.asset.json";
import {
  administration,
  btecIntro,
  btecMajors,
  directionsUrl,
  initiatives,
  mapEmbedUrl,
  mapsUrl,
  platforms,
  routes,
  school,
  schoolFacts,
  teacherGroups,
  morningAssembly,
  highlightedNames,
  whatsappGroups,
  whatsappEveningGroups,
  whatsappEveningIntro,
  whatsappIntro,
  type Person,
} from "@/data/school";


export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-block border-b-2 border-primary pb-1 text-sm font-bold tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden surface-hero">
      <img
        src={school.heroImage}
        alt="مبنى وساحات مدرسة وادي السير الأساسية للبنين"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />

      <div className="container-site relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <img
              src={logo.url}
              alt="شعار مدرسة وادي السير الأساسية للبنين"
              className="mx-auto h-28 w-28 rounded-3xl bg-foreground/95 object-contain p-2 shadow-premium sm:h-36 sm:w-36"
              width={144}
              height={144}
            />
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              <span className="text-gold-gradient">مدرسة وادي السير</span>
              <br />
              الأساسية للبنين
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              {school.tagline}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to={routes.about}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                اكتشف المدرسة
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to={routes.contact}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-7 py-3.5 text-base font-bold text-foreground transition-colors hover:bg-accent"
              >
                تواصل معنا
              </Link>
              <Button asChild className="h-auto min-h-12 whitespace-normal border border-whatsapp/40 bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground hover:bg-whatsapp/90">
                <Link to={routes.contact} hash="whatsapp-groups"><WhatsappIcon className="h-5 w-5" />قروبات واتساب لأولياء الأمور<ArrowLeft className="h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section-pad" id="about">
      <div className="container-site">
        <SectionTitle eyebrow="عن المدرسة" title="نبذة عن المدرسة" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-premium h-full border-t-4 border-t-primary p-8 sm:p-10">
              <Target className="h-9 w-9 text-primary" />
              <h3 className="mt-5 text-2xl font-extrabold">هدف المدرسة</h3>
              <p className="mt-4 leading-loose text-muted-foreground">{school.goal}</p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="card-premium h-full border-t-4 border-t-info p-8 sm:p-10">
              <School className="h-9 w-9 text-info" />
              <h3 className="mt-5 text-2xl font-extrabold">رؤية المدرسة</h3>
              <p className="mt-4 leading-loose text-muted-foreground">{school.vision}</p>
            </article>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-2">
            <article className="card-premium h-full p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold sm:text-3xl">بيانات المدرسة</h3>
              <dl className="mt-5 divide-y divide-border">
                {schoolFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-3"
                  >
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="font-bold text-info">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


function PeopleRow({ people }: { people: Person[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {people.map((person, i) => (
        <Reveal key={person.name} delay={(i % 4) * 60}>
          <div className="card-premium h-full border-t-2 border-t-primary p-4 text-center">
            <span className="mx-auto grid h-11 w-11 place-items-center rounded-md bg-primary/15 text-primary">
              <UserRound className="h-5 w-5" />
            </span>
            <h3 className="mt-2 text-sm font-bold text-info sm:text-base">{person.name}</h3>
            <p className="mt-1 text-sm text-primary">{person.role}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function subjectIcon(subject: string) {
  if (/رياضيات/.test(subject)) return Calculator;
  if (/علوم|فيزياء|أحياء/.test(subject)) return Atom;
  if (/كيمياء/.test(subject)) return FlaskConical;
  if (/حاسوب/.test(subject)) return Computer;
  if (/عربية|إنجليزية/.test(subject)) return Languages;
  if (/اجتماعيات|أرض/.test(subject)) return Earth;
  if (/رياضية/.test(subject)) return Dumbbell;
  if (/فنية/.test(subject)) return Palette;
  if (/مهنية|نظافة/.test(subject)) return Wrench;
  if (/مالية/.test(subject)) return BriefcaseBusiness;
  return School;
}

export function StaffSection() {
  const [selectedSubject, setSelectedSubject] = useState(teacherGroups[0]?.subject ?? "");
  const selectedGroup = teacherGroups.find((group) => group.subject === selectedSubject);
  const TeacherIcon = subjectIcon(selectedSubject);
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionTitle eyebrow="فريق المدرسة" title="الهيكل التنظيمي الإداري والتدريسي لمدرسة وادي السير الأساسية للبنين" />

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-primary text-primary-foreground shadow-gold">
            <UsersRound className="h-7 w-7" />
          </div>
          <div className="mx-auto h-8 w-px bg-border" />
          <h3 className="mb-6 text-center text-2xl font-extrabold sm:text-3xl">الهيئة الإدارية</h3>
          <PeopleRow people={administration} />
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-2xl font-extrabold">الهيئة التدريسية</h3>
            <NativeSelect value={selectedSubject} onChange={(event) => setSelectedSubject(event.target.value)} dir="rtl" aria-label="مادة المعلمين" className="sm:w-80">
              {teacherGroups.map((group) => <option key={group.subject} value={group.subject}>{group.subject} ({group.names.length})</option>)}
            </NativeSelect>
          </div>
          {selectedGroup && <article className="mt-5 rounded-lg border border-primary/35 bg-card p-5 shadow-premium sm:p-6">
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-md bg-primary/15 text-primary"><TeacherIcon className="h-6 w-6" /></span><h4 className="text-xl font-bold text-primary">{selectedGroup.subject}</h4><span className="mr-auto text-sm text-muted-foreground">{selectedGroup.names.length} معلمين</span></div>
            <ul className="mt-5 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">{selectedGroup.names.map((name) => <li key={name} className="flex items-center gap-2 border-t border-border py-4 font-semibold text-info"><UserRound className="h-4 w-4 shrink-0 text-primary" />{name}</li>)}</ul>
          </article>}
        </div>
      </div>
    </section>
  );
}

export { TextbooksSection } from "@/components/Textbooks";

export function BtecSection() {
  return (
    <section className="section-pad border-y border-border bg-card/40">
      <div className="container-site">
        <SectionTitle eyebrow="نظام BTEC" title="تخصصات BTEC الحالية" description={btecIntro} />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {btecMajors.map((major, i) => (
            <Reveal key={major.title} delay={i * 140}>
              <article className="card-premium h-full overflow-hidden">
                <img
                  src={major.image}
                  alt={`تخصص ${major.title} في نظام BTEC`}
                  className="aspect-16/10 w-full bg-secondary object-cover"
                  loading="lazy"
                />
                <div className="p-7 sm:p-9">
                  <h3 className="text-2xl font-extrabold sm:text-3xl">{major.title}</h3>
                  <p className="mt-2 text-sm font-semibold tracking-wide text-primary">
                    {major.subtitle}
                  </p>
                  <p className="mt-4 text-base leading-loose text-muted-foreground">
                    {major.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const escapeRe = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const namePattern = [...highlightedNames].sort((x, y) => y.length - x.length).map(escapeRe).join("|");
const datePattern = "[0-9\u0660-\u0669]+(?:\\s*[–\\-/]\\s*[0-9\u0660-\u0669]+)*";
const keywords = ["المركز الأول", "لمدرستي أنتمي", "وبالعطاء أرتقي", "الطابور الصباحي", "بطولة", "مبادرة", "مبادرات", "الانتماء", "التعاون", "المسؤولية", "التميز", "الإبداع", "النجاح", "يوم المعلم", "الاستقلال", "عيد", "الأبطال", "أبطالنا", "الفائزين", "تكريم", "شكر"];
const keywordPattern = keywords.sort((x, y) => y.length - x.length).map(escapeRe).join("|");
const highlightRe = new RegExp(`(${namePattern}|${keywordPattern}|${datePattern})`, "g");

function HighlightNames({ text }: { text: string }) {
  const parts = text.split(highlightRe);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          highlightedNames.includes(part) ? (
            <strong key={i} className="font-bold text-info">{part}</strong>
          ) : keywords.includes(part) ? (
            <strong key={i} className="font-bold text-gold-soft">{part}</strong>
          ) : (
            <strong key={i} className="rounded bg-primary/15 px-1 font-bold text-primary">{part}</strong>
          )
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 9.43 9.45c0 5.2-4.24 9.43-9.45 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.6l6.04-1.58a11.3 11.3 0 0 0 5.4 1.38h.01c6.25 0 11.34-5.09 11.34-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

function WhatsappGroups() {
  const periods = [
    { key: "am", label: "الفترة الصباحية", intro: whatsappIntro, groups: whatsappGroups },
    { key: "pm", label: "الفترة المسائية", intro: whatsappEveningIntro, groups: whatsappEveningGroups },
  ];
  const [active, setActive] = useState("am");
  const [showText, setShowText] = useState(false);
  const period = active === "pm" ? periods[1] : periods[0];
  if (!period) return null;
  return (
    <div id="whatsapp-groups" className="mt-10 scroll-mt-24 border-y border-whatsapp/30 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground"><WhatsappIcon className="h-7 w-7" /></span>
            <div>
              <p className="text-sm font-bold text-primary">إعلان هام إلى أولياء الأمور الكرام</p>
              <h3 className="text-xl font-extrabold sm:text-2xl">مجموعات <span className="text-whatsapp">واتساب</span> الصفوف والشُّعب</h3>
            </div>
          </div>
          <div role="tablist" className="flex rounded-full border border-border bg-secondary/60 p-1">
            {periods.map((p) => (
              <Button key={p.key} variant="ghost" role="tab" aria-selected={active === p.key} type="button" onClick={() => setActive(p.key)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${active === p.key ? "bg-primary text-primary-foreground shadow-gold" : "text-muted-foreground hover:text-foreground"}`}>
                {p.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm leading-loose text-muted-foreground sm:text-base">
          <p>{period.intro[1]}</p>
          {showText && period.intro.filter((_, i) => i !== 1).map((t) => <p key={t} className="mt-2">{t}</p>)}
          <Button variant="link" type="button" onClick={() => setShowText((v) => !v)} className="mt-1 text-sm font-bold text-primary hover:underline">{showText ? "إخفاء" : "قراءة الإعلان كاملًا"}</Button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {period.groups.map((g) => (
            <div key={g.grade} className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card p-4">
              <span className="ml-1 min-w-24 text-sm font-extrabold text-info">الصف {g.grade}</span>
              {g.sections.map((sec) => (
                <Button asChild key={sec.url} className="h-11 border border-whatsapp/40 bg-whatsapp px-4 font-bold text-whatsapp-foreground shadow-sm hover:bg-whatsapp/90"><a href={sec.url} target="_blank" rel="noopener noreferrer" aria-label={`انضم إلى مجموعة واتساب ${sec.name}`}
                  >
                  <WhatsappIcon className="h-4 w-4" />
                  {sec.name.replace(`${g.grade} `, "")}
                </a></Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InitiativeCard({ item }: { item: (typeof initiatives)[number] }) {
  const [openText, setOpenText] = useState(false);
  const { open, view } = useLightbox(item.images.map((src) => ({ src, caption: item.title })));
  const cover = item.images[0];
  return (
    <article className="card-premium flex h-full flex-col overflow-hidden">
      {cover && (
        <Button variant="ghost" type="button" aria-label={`صور ${item.title}`} onClick={() => open(0)} className="relative block h-auto aspect-[16/10] rounded-none p-0 overflow-hidden bg-secondary">
          <img src={cover} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
          {item.images.length > 1 && (
            <span className="absolute bottom-3 left-3 rounded-full bg-navy-deep/85 px-3 py-1 text-xs font-bold text-primary">{item.images.length} صور</span>
          )}
        </Button>
      )}
      <div className="flex flex-1 flex-col p-5">
        {item.date && <p className="w-fit rounded-full border border-info/30 bg-info/10 px-3 py-1 text-xs font-bold text-info">{item.date}</p>}
        <h3 className="mt-3 text-lg font-extrabold leading-snug text-primary sm:text-xl">{item.title}</h3>
        <div className={`mt-2 space-y-2 text-sm leading-loose text-muted-foreground ${openText ? "" : "line-clamp-3"}`}>
          {item.paragraphs.map((t, k) => <p key={k}><HighlightNames text={t} /></p>)}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          <Button variant="outline" aria-expanded={openText} type="button" onClick={() => setOpenText((v) => !v)} className="rounded-full border border-primary/40 px-4 py-1.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            {openText ? "عرض أقل" : "اقرأ المزيد"}
          </Button>
          {item.images.length > 1 && (
            <Button variant="secondary" type="button" onClick={() => open(0)} className="rounded-md bg-secondary px-4 py-1.5 text-sm font-bold text-foreground hover:bg-accent">معرض الصور</Button>
          )}
        </div>
      </div>
      {view}
    </article>
  );
}

const assemblyInitiative = {
  title: morningAssembly.title,
  date: "",
  paragraphs: [...morningAssembly.intro, ...morningAssembly.points, ...morningAssembly.outro, morningAssembly.signature, morningAssembly.motto],
  images: morningAssembly.images,
};

export function InitiativesSection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionTitle eyebrow="أنشطتنا" title="المبادرات المدرسية" />
        <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...initiatives, assemblyInitiative].map((item, index) => <InitiativeCard key={`${index}-${item.title}`} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="section-pad border-y border-border bg-card/40" id="location">
      <div className="container-site">
        <SectionTitle eyebrow="الوصول إلينا" title="موقع مدرسة وادي السير الأساسية للبنين" />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-border shadow-premium">
            <div className="grid gap-6 bg-card p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="min-w-0">
                <h3 className="text-2xl font-extrabold sm:text-3xl">{school.name}</h3>
                <p className="mt-3 flex items-center gap-2 text-base text-muted-foreground">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  موقع المدرسة على الخريطة
                </p>
                <p dir="ltr" className="mt-2 text-sm text-muted-foreground">
                  {school.coords.lat}, {school.coords.lng}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
                >
                  <MapPin className="h-4 w-4" />
                  فتح الموقع في Google Maps
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent"
                >
                  <Navigation className="h-4 w-4" />
                  الحصول على الاتجاهات
                </a>
              </div>
            </div>

            <iframe
              title="خريطة موقع مدرسة وادي السير الأساسية للبنين"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[60vh] min-h-[380px] w-full border-0 lg:h-[70vh]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PlatformsSection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionTitle
          eyebrow="المنصات التعليمية"
          title="روابط مهمة للطلاب والمعلمين"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {platforms.map((platform, i) => (
            <Reveal key={platform.url} delay={i * 90}>
              <article className="card-premium flex h-full flex-col items-center gap-4 p-8 text-center">
                {platform.logo ? (
                  <img
                    src={platform.logo}
                    alt={`شعار ${platform.short}`}
                    className="h-16 w-16 rounded-2xl bg-foreground/95 object-contain p-2"
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                ) : (
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 font-display text-xl font-black text-primary">
                    {platform.short}
                  </span>
                )}
                <h3 className="text-lg font-bold">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.04]"
                >
                  زيارة الموقع
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ showGroups = true }: { showGroups?: boolean }) {
  return (
    <section className="section-pad border-t border-border bg-card/40" id="contact">
      <div className="container-site">
        <SectionTitle eyebrow="تواصل معنا" title="نحن هنا للإجابة على استفساراتكم" />
        {showGroups && <WhatsappGroups />}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <a href={`tel:${school.phone}`} className="card-premium flex h-full items-center gap-4 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">اتصل بنا</span>
                <span dir="ltr" className="block truncate text-lg font-bold">
                  {school.phoneDisplay}
                </span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a href={`mailto:${school.email}`} className="card-premium flex h-full items-center gap-4 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">البريد الإلكتروني</span>
                <span dir="ltr" className="block truncate text-lg font-bold">
                  {school.email}
                </span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium flex h-full items-center gap-4 p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">موقع المدرسة</span>
                <span className="block truncate text-lg font-bold">{school.name}</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
