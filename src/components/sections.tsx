import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import { Reveal } from "@/components/Reveal";
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
  teachers,
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
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h2>
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
        alt="مبنى وساحات مدرسة أبو السوس الثانوية للبنين"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />

      <div className="container-site relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <img
              src={logo.url}
              alt="شعار مدرسة أبو السوس الثانوية للبنين"
              className="mx-auto h-28 w-28 rounded-3xl bg-foreground/95 object-contain p-2 shadow-premium sm:h-36 sm:w-36"
              width={144}
              height={144}
            />
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              <span className="text-gold-gradient">مدرسة أبو السوس</span>
              <br />
              الثانوية للبنين
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              {school.vision}
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
        <SectionTitle eyebrow="عن المدرسة" title="رؤيتنا ورسالتنا" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-premium h-full p-8 sm:p-10">
              <Quote className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">رؤية المدرسة</h3>
              <p className="mt-4 text-base leading-loose text-muted-foreground sm:text-lg">
                {school.vision}
              </p>
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article className="card-premium h-full p-8 sm:p-10">
              <Sparkles className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">رسالة المدرسة</h3>
              <ul className="mt-4 space-y-4">
                {school.missionPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-loose text-muted-foreground sm:text-lg">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section className="section-pad border-y border-border bg-card/40">
      <div className="container-site">
        <SectionTitle eyebrow="قيمنا" title="القيم الجوهرية" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {school.values.map((value, i) => (
            <Reveal key={value} delay={i * 70}>
              <div className="card-premium flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-lg font-black text-primary">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold sm:text-xl">{value}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="card-premium w-64 shrink-0 overflow-hidden sm:w-auto">
      <img
        src={person.image}
        alt={`${person.name} - ${person.role}`}
        className="aspect-square w-full bg-secondary object-cover"
        loading="lazy"
      />
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold">{person.name}</h3>
        <p className="mt-1 text-sm text-primary">{person.role}</p>
      </div>
    </div>
  );
}

function PeopleRow({ people }: { people: Person[] }) {
  return (
    <>
      <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 sm:hidden">
        {people.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>
      <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {people.map((person, i) => (
          <Reveal key={person.name} delay={(i % 4) * 60}>
            <PersonCard person={person} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

export function StaffSection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionTitle eyebrow="فريق المدرسة" title="الهيئة الإدارية والتدريسية" />

        <h3 className="mt-14 mb-6 text-2xl font-extrabold sm:text-3xl">الهيئة الإدارية</h3>
        <PeopleRow people={administration} />

        <h3 className="mt-16 mb-6 text-2xl font-extrabold sm:text-3xl">الهيئة التدريسية</h3>
        <PeopleRow people={teachers} />
      </div>
    </section>
  );
}

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

export function InitiativesSection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionTitle eyebrow="أنشطتنا" title="مبادرات مدرسية متنوعة" />
        <div className="mt-14 space-y-10 border-r border-border pr-6 sm:pr-10">
          {initiatives.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="relative card-premium p-6 sm:p-9">
                <span className="absolute -right-[calc(1.5rem+9px)] top-10 hidden h-4 w-4 rounded-full bg-primary shadow-gold sm:-right-[calc(2.5rem+9px)] sm:block" />
                {item.date && (
                  <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </p>
                )}
                <h3 className="mt-4 text-xl font-extrabold sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-base leading-loose text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {item.images.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${item.title} - صورة ${index + 1}`}
                      className="aspect-square w-full rounded-xl bg-secondary object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="section-pad border-y border-border bg-card/40" id="location">
      <div className="container-site">
        <SectionTitle eyebrow="📍 الوصول إلينا" title="موقع مدرسة أبو السوس الثانوية للبنين" />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-border shadow-premium">
            <div className="grid gap-6 bg-card p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="min-w-0">
                <h3 className="text-2xl font-extrabold sm:text-3xl">{school.name}</h3>
                <p className="mt-3 flex items-center gap-2 text-base text-muted-foreground">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  📍 موقع المدرسة على الخريطة
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
              title="خريطة موقع مدرسة أبو السوس الثانوية للبنين"
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
                <img
                  src={platform.logo}
                  alt={`شعار ${platform.short}`}
                  className="h-16 w-16 rounded-2xl bg-foreground/95 object-contain p-2"
                  loading="lazy"
                  width={64}
                  height={64}
                />
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

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`رسالة من ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(
      `${String(data.get("message") ?? "")}\n\nالبريد الإلكتروني: ${String(data.get("email") ?? "")}`,
    );
    window.location.href = `mailto:${school.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="section-pad border-t border-border bg-card/40" id="contact">
      <div className="container-site">
        <SectionTitle eyebrow="تواصل معنا" title="نحن هنا للإجابة على استفساراتكم" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="grid gap-5">
            <Reveal>
              <a href={`tel:${school.phone}`} className="card-premium flex items-center gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">اتصل بنا</span>
                  <span dir="ltr" className="block truncate text-lg font-bold">
                    {school.phone}
                  </span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <a href={`mailto:${school.email}`} className="card-premium flex items-center gap-4 p-6">
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
                className="card-premium flex items-center gap-4 p-6"
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

          <Reveal delay={140}>
            <form onSubmit={handleSubmit} className="card-premium grid gap-4 p-7 sm:p-9">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-semibold">
                  الاسم
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="h-12 rounded-xl border border-input bg-background px-4 text-base outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  dir="ltr"
                  className="h-12 rounded-xl border border-input bg-background px-4 text-base outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="rounded-xl border border-input bg-background p-4 text-base outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="h-13 rounded-xl bg-primary px-6 text-base font-bold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
              >
                إرسال
              </button>
              {sent && (
                <p className="text-sm text-primary">
                  تم تجهيز رسالتك في برنامج البريد الإلكتروني لديك.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
