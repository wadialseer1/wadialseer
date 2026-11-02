// جميع المحتويات مأخوذة من الموقع الأصلي للمدرسة: https://abusos.mystrikingly.com/
// لا يتم إضافة أي معلومات غير موجودة في المصدر.

import btecIt from "@/assets/btec/it.jpg";
import btecBusiness from "@/assets/btec/business.jpg";
import btecEngineering from "@/assets/btec/engineering.jpg";
import btecHospitality from "@/assets/btec/hospitality.jpg";
import btecTravel from "@/assets/btec/travel.jpg";
import btecAgriculture from "@/assets/btec/agriculture.jpg";
import btecBeauty from "@/assets/btec/beauty.jpg";
import btecArt from "@/assets/btec/art.jpg";
import btecMedia from "@/assets/btec/media.jpg";
import btecConstruction from "@/assets/btec/construction.jpg";
import btecHealth from "@/assets/btec/health.jpg";
import btecSport from "@/assets/btec/sport.jpg";
import btecEarlyYears from "@/assets/btec/early-years.jpg";
import btecEsports from "@/assets/btec/esports.jpg";
import ajyalLogo from "@/assets/ajyal-logo.png.asset.json";
import moeLogo from "@/assets/moe-logo.jpg.asset.json";
import sirajLogo from "@/assets/siraj-logo.png.asset.json";
import schoolLogo from "@/assets/logo.png.asset.json";
import init1 from "@/assets/init-1.png.asset.json";
import init2 from "@/assets/init-2.png.asset.json";
import assembly1 from "@/assets/assembly-1.png";
import assembly2 from "@/assets/assembly-2.png";
import handballChampionship from "@/assets/handball-championship.png.asset.json";
import { extraInitiatives } from "@/data/initiatives-extra";
import darsakLogo from "@/assets/darsak-logo.png.asset.json";

const CDN = "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload";
const wide = (id: string) => `${CDN}/c_limit,fl_lossy,h_1400,w_1600,f_auto,q_auto/${id}`;
const portrait = (id: string) => `${CDN}/c_limit,fl_lossy,h_900,w_900,f_auto,q_auto/${id}`;



export const school = {
  name: "مدرسة وادي السير الأساسية للبنين",
  vision:
    "إعداد جيل واعٍ، مبدع، ومؤهل أكاديميًا ومهنيًا لمواجهة تحديات المستقبل.",
  goal:
    "تسعى مدرسة وادي السير الأساسية للبنين إلى بناء جيل واعٍ من خلال تعزيز الشراكة مع المجتمع المحلي وأولياء الأمور، وتوجيه الطلبة لاختيار مسارهم الأكاديمي أو المهني المناسب، وتمكينهم من تنفيذ مشاريع تطور مهاراتهم القيادية.",
  missionPoints: [
    "تنمية الجانب المعرفي والوجداني الإنفعالي والمهاري للطلبة.",
    "تفعيل الأنشطة المدرسية لاكتشاف المواهب والقدرات المكونة عند الطلبة.",
    "تفعيل مجالس الآباء والمشاركة الإجتماعية لتحسين العملية التعليمية.",
  ],
  values: [
    "العدالة والمساواة",
    "المواطنة الصالحة",
    "الانتماء",
    "المسؤولية",
    "الاحترام",
    "المثابرة",
    "الريادة",
    "الالتزام",
  ],
  heroImage: init2.url,
  address: "شارع عربي جرادات، حي غياضة، وادي السير، عمّان، الأردن",
  hours: "من 8:00 صباحًا إلى 4:00 مساءً",
  phone: "065823102",
  phoneDisplay: "(06) 582 3102",
  email: "wadialseer1@gmail.com",
  facebook: "https://www.facebook.com/share/1EShLJRySp/",
  coords: { lat: 31.95416, lng: 35.82155 },
  tagline:
    "مدرسة أساسية للبنين في لواء وادي السير، تضم الصفوف من الرابع حتى العاشر بفترتين دراسيتين صباحية ومسائية.",
  credit: "تم إنشاؤه بواسطة قصي الصوالحي",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${school.coords.lat},${school.coords.lng}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${school.coords.lat},${school.coords.lng}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${school.coords.lat},${school.coords.lng}&z=17&hl=ar&output=embed`;

export type Person = { name: string; role: string };

export const administration: Person[] = [
  { name: "الأستاذ زيد الحسامي", role: "مدير المدرسة" },
  { name: "الأستاذ حمدي العويدي", role: "مساعد المدير" },
  { name: "الأستاذ أيمن الحرايزة", role: "مساعد المدير" },
  { name: "الأستاذ أحمد الهواوشة", role: "المرشد التربوي" },
  { name: "الأستاذ محمد العقيلي", role: "كاتب المدرسة" },
  { name: "الأستاذ محمد تلاوي", role: "أمين المكتبة" },
  { name: "الأستاذ أحمد برهوم", role: "قيّم مختبر الحاسوب" },
];

export const teacherGroups: { subject: string; names: string[] }[] = [
  { subject: "اللغة العربية", names: ["الأستاذ مخلد السيايلة", "الدكتور عيسى الزبون", "الأستاذ حسين الدعامسة", "الأستاذ إبراهيم البواريد", "الأستاذ خالد المناصير", "الأستاذ علي بريزات", "الأستاذ زين الثوابية", "الأستاذ نضال الوزني"] },
  { subject: "الرياضيات", names: ["الأستاذ تميم أبو داري", "الأستاذ علاء المهيرات", "الأستاذ علي كوتة", "الأستاذ معتصم العقيلي", "الأستاذ محمد الزعبي", "الأستاذ خالد سمارة", "الأستاذ مراد الجراح"] },
  { subject: "اللغة الإنجليزية", names: ["الأستاذ إسلام نمور", "الأستاذ ثائر العقيلي", "الأستاذ وليد السليحات", "الأستاذ خالد القواسمي", "الأستاذ عمر أبو داري", "الأستاذ هادي العلاوين"] },
  { subject: "العلوم والفيزياء والأحياء", names: ["الأستاذ علاء خطاطبة", "الأستاذ يزن نائل", "الأستاذ معتز الشريف"] },
  { subject: "الكيمياء والعلوم", names: ["الأستاذ ماجد الشناق"] },
  { subject: "علوم الأرض والعلوم", names: ["الأستاذ عبدالله الشوافعة"] },
  { subject: "التربية الإسلامية والاجتماعيات", names: ["الأستاذ باجس السليحات", "الأستاذ إبراهيم أبو السعيد", "الأستاذ إيهاب الدوايمة"] },
  { subject: "التربية الإسلامية", names: ["الأستاذ رامي السعيد"] },
  { subject: "الاجتماعيات", names: ["الأستاذ أمجد الزبن", "الأستاذ علي أبو قاعود", "الأستاذ محمود صلاح"] },
  { subject: "التربية الرياضية", names: ["الأستاذ بشار البدارين", "الأستاذ علي أبو السندس", "الأستاذ محمد بارسبي"] },
  { subject: "التربية المهنية", names: ["الأستاذ حسن المحاميد", "الأستاذ مهند المحاميد", "الأستاذ هيثم القرعان"] },
  { subject: "التربية الفنية", names: ["الأستاذ محمود القدسي", "الأستاذ هيثم القرعان", "الأستاذ عبدالله صندوقة"] },
  { subject: "الثقافة المالية", names: ["الأستاذ عبدالله صندوقة"] },
  { subject: "الحاسوب", names: ["الأستاذ محمد عشا", "الأستاذ سند الحر"] },
];

const staffShortNames = [...administration.map((p) => p.name), ...teacherGroups.flatMap((g) => g.names)]
  .map((n) => n.replace(/^(الأستاذ|الدكتور)\s+/, ""));
export const highlightedNames = Array.from(new Set([...staffShortNames, "زيد الحسامي", "أيمن الحرايزة", "احمد الهواوشة", "هشام المناصير", "خالد عليان المناصير", "عبد الرحمن النعيمات", "ماجد المساعفة", "علي ابو السندس", "مخلد السيايلة", "امجد الزبن", "حمدي العويدي", "حسن المحاميد", "معتصم العقيلي"]));

export const whatsappGroups: { grade: string; sections: { name: string; url: string }[] }[] = (
  [
    ["الرابع", ["أ", "IfepAGIXtdjKtZBQ8RqO0Z"], ["ب", "Fg3W0fr4YPXAZfx33UI7GO"], ["ج", "Kb9NWrywDeh9idgqHZLBny"], ["د", "KjG8Pq4kAlrG48bP208DgL"]],
    ["الخامس", ["أ", "G2olZ81TSsKG9F2TLxjFgD"], ["ب", "IQ9dowJYJLgGeDqgxkWowQ"], ["ج", "CbBLagkv4GR7TGLrc586Ep"]],
    ["السادس", ["أ", "B4gzLeusSqZDfNcEG3MXqo"], ["ب", "CPpaojfFBQS0nqjc6XLt85"], ["ج", "DAu1d3vedc50RSOneJsayN"]],
    ["السابع", ["أ", "Dv9EYeu7dgj82WNkzhgvIO"], ["ب", "CV4Rh18DpC3Dmofxosc9K8"], ["ج", "Ci5vAPgIeBR3K9GKhtAO0y"]],
    ["الثامن", ["أ", "KQSKfve5nlJ6JJpqPbxvOc"], ["ب", "CM7GMDs4u2SDxleveYhS4X"], ["ج", "GU9bAhyn6Yo8U9Dm3iPMpo"], ["د", "LTUiUwplWnj9O340spmnGx"]],
    ["التاسع", ["أ", "FgaMfXAip2m9RSgAeZbIzb"], ["ب", "Bym4pKbGNGk8xbVi7r619M"], ["ج", "DjkP7IljNgH4rGyRsPSOnf"], ["د", "Kc7mIVaCoFgIeBKACY3xbP"]],
    ["العاشر", ["أ", "Gpd1rdHf9LxJKwLMtYbMn1"], ["ب", "BBiaXH9ZJ60INGtq7dXkGq"], ["ج", "Gefcjv7hBd13FTtZCpqBpO"], ["د", "Cts4SGE7Ama96crP4ArPQq"]],
  ] as [string, ...[string, string][]][]
).map(([grade, ...secs]) => ({
  grade,
  sections: secs.map(([name, code]) => ({ name: `${grade} ${name}`, url: `https://chat.whatsapp.com/${code}` })),
}));

export const whatsappIntro = [
  "أولياء الأمور الكرام، تحية طيبة وبعد،",
  "نضع بين أيديكم روابط مجموعات الواتساب الخاصة بكل صف وشعبة (للفترة الصباحية)، وذلك لتسهيل التواصل بين المدرسة وأولياء الأمور، ومتابعة كل ما يتعلق بالطلبة من إعلانات وتعميمات وملاحظات تربوية وتعليمية.",
  "نرجو منكم الانضمام إلى المجموعة الخاصة بصف وشعبة أبنائكم، والحرص على متابعة ما يُنشر فيها أولاً بأول. والعمل قائم على إنجاز روابط الفترة المسائية.",
  "شاكرين لكم حسن تعاونكم واهتمامكم، فبتعاوننا نرتقي بأبنائنا ونحقق لهم الأفضل. — إدارة المدرسة 🌹",
];

export const btecIntro =
  "BTEC – Business and Technology Education Council هو برنامج للتعليم المهني والتقني يركز على الجمع بين المعرفة النظرية والتطبيق العملي، ويهدف إلى تزويد الطلبة بالمهارات والخبرات المرتبطة بسوق العمل من خلال المشاريع والمهام والتطبيقات العملية. في الأردن بدأ تطبيق البرنامج عام 2023 بالتعاون مع وزارة التربية والتعليم وشركة Pearson، وتوسع تدريجيًا ليصل إلى 14 تخصصًا في العام الدراسي 2026/2027.";

export const btecMajors = [
  {
    title: "تكنولوجيا المعلومات",
    subtitle: "Information Technology",
    image: btecIt,
    description:
      "يركز على البرمجة، وقواعد البيانات، والشبكات، وتطوير المواقع والتطبيقات، والأمن الرقمي، والتقنيات الحديثة.",
  },
  {
    title: "الأعمال",
    subtitle: "Business",
    image: btecBusiness,
    description:
      "يغطي الإدارة، والتسويق، والمحاسبة، وريادة الأعمال، والموارد البشرية، والتخطيط وإدارة المشاريع.",
  },
  {
    title: "الهندسة",
    subtitle: "Engineering",
    image: btecEngineering,
    description:
      "يشمل التصميم الهندسي، والأنظمة الميكانيكية والكهربائية، والتصنيع، والصيانة، واستخدام الأدوات والتقنيات الهندسية.",
  },
  {
    title: "الضيافة",
    subtitle: "Hospitality",
    image: btecHospitality,
    description:
      "يركز على فنون الطهي، وخدمات الطعام والشراب، وإدارة الفنادق، وخدمة العملاء والعمليات الفندقية.",
  },
  {
    title: "السفر والسياحة",
    subtitle: "Travel & Tourism",
    image: btecTravel,
    description:
      "يغطي إدارة الحجوزات، وتنظيم الرحلات، والإرشاد السياحي، وخدمات السفر وإدارة المنشآت والوجهات السياحية.",
  },
  {
    title: "الزراعة",
    subtitle: "Agriculture",
    image: btecAgriculture,
    description:
      "يركز على التقنيات الزراعية الحديثة، والإنتاج النباتي والحيواني، وإدارة الموارد الزراعية والاستدامة.",
  },
  {
    title: "الشعر والتجميل",
    subtitle: "Hair & Beauty",
    image: btecBeauty,
    description:
      "يغطي العناية بالبشرة، وتصفيف الشعر، والتجميل، واستخدام الأدوات والمنتجات المهنية ومعايير السلامة والنظافة.",
  },
  {
    title: "الفن والتصميم",
    subtitle: "Art & Design",
    image: btecArt,
    description:
      "يشمل التصميم الجرافيكي، والتصميم الداخلي، والفنون البصرية، والرسم، والتصوير، والتصميم الرقمي وتطوير المشاريع الإبداعية.",
  },
  {
    title: "الوسائط الإبداعية",
    subtitle: "Creative Media",
    image: btecMedia,
    description:
      "يركز على صناعة المحتوى، والتصوير، والمونتاج، والإنتاج الرقمي، والرسوم المتحركة، والصوت والفيديو.",
  },
  {
    title: "البناء والإنشاءات",
    subtitle: "Construction",
    image: btecConstruction,
    description:
      "يشمل التصميم والرسومات الهندسية، ومواد البناء، وتقنيات الإنشاء، وإدارة مواقع ومشاريع البناء والصحة والسلامة.",
  },
  {
    title: "الرعاية الصحية والاجتماعية",
    subtitle: "Health & Social Care",
    image: btecHealth,
    description:
      "يغطي مبادئ الرعاية الصحية والاجتماعية، ودعم الأفراد، والصحة والسلامة، والتواصل، ورعاية الفئات المختلفة.",
  },
  {
    title: "الرياضة",
    subtitle: "Sport",
    image: btecSport,
    description:
      "يركز على التدريب الرياضي، واللياقة البدنية، وتطوير الأداء، والتغذية، وتنظيم الفعاليات والإدارة الرياضية.",
  },
  {
    title: "الطفولة المبكرة",
    subtitle: "Early Years",
    image: btecEarlyYears,
    description:
      "يركز على نمو الأطفال وتطورهم، ورعايتهم، والتعلم المبكر، والأنشطة التعليمية ودعم احتياجات الأطفال.",
  },
  {
    title: "الرياضات الإلكترونية",
    subtitle: "Esports",
    image: btecEsports,
    description:
      "يركز على عالم الألعاب التنافسية، وتنظيم البطولات، وإدارة الفرق، والتسويق، والبث الإلكتروني، وصناعة المحتوى والفعاليات الرقمية.",
  },
];

export const initiatives: { title: string; date: string; paragraphs: string[]; images: string[] }[] = [
  ...extraInitiatives,
  {
    title: "لمدرستي أنتمي… وبالعطاء أرتقي",
    date: "",
    paragraphs: ["ضمن مبادرات «لمدرستي أنتمي»، وبروح التعاون والانتماء والمسؤولية، وبتوجيهات مدير المدرسة الاستاذ زيد الحسامي قام الأستاذ هيثم القرعان وطلاب الصف السادس بمبادرة جميلة تمثلت في تنظيف حديقة المدرسة والعناية بها، حرصًا منهم على أن تبقى مدرستنا بيئة جميلة ونظيفة وآمنة للجميع. كل الشكر والتقدير للأستاذ هيثم القرعان على جهوده وتوجيهه، ولأبنائنا طلبة الصف السادس على عطائهم ومبادرتهم الرائعة، فمدرستنا بيتنا، والمحافظة عليها مسؤوليتنا جميعًا. لمدرستي أنتمي… وبالعطاء أرتقي"],
    images: [init1.url, init2.url],
  },
  {
    title: "المركز الأول في بطولة كرة اليد",
    date: "المرحلة الأساسية العليا",
    paragraphs: ["حصلت مدرسة وادي السير الأساسية للبنين على المركز الأول في بطولة كرة اليد للمرحلة الأساسية العليا على مستوى لواء وادي السير، وذلك بفوز أبطالنا في المباراة النهائية على مدرسة الشهيد الطيار فراس العجلوني بنتيجة ١٢–٧. كل الشكر والتقدير للأستاذ الكابتن علي أبو السندس على جهوده وإبداعه في البطولة، والشكر موصول لطلابنا الأبطال الذين أثبتوا بأنه لا يليق بهم إلا المركز الأول. وشكر خاص لأهاليهم الكرام ومعلمي التربية الرياضية، ونتمنى مزيدًا من النجاحات لجميع الفرق في مختلف الألعاب القادمة."],
    images: [handballChampionship.url],
  },
];

export const historyParagraphs = [
  "أُنشئت مدرسة أبو السوس الثانوية الشاملة للبنين ضمن المبادرات الملكية لخدمة أبناء منطقتي أبو السوس والذراع، وتلبية حاجة المنطقة إلى مدرسة ثانوية للذكور، وتوفير بيئة تعليمية مناسبة لأبناء المنطقة. أُقيمت المدرسة على أرض تابعة لوزارة التربية والتعليم، بمساحة تقارب 5.5 دونم، واكتمل بناؤها قبل عام 2016.",
  "وفي 24 نيسان 2018، افتُتحت المدرسة رسميًا ضمن المبادرات الملكية، وكانت عند افتتاحها تضم 21 غرفة صفية وأربعة مختبرات متخصصة في الفيزياء والكيمياء والأحياء والحاسوب، وبطاقة استيعابية تقارب 700 طالب. ومنذ افتتاحها أصبحت المدرسة من المؤسسات التعليمية التي تخدم أبناء المنطقة، وتوفر لهم التعليم الأكاديمي والمهني.",
];

export const historyDates = ["24 نيسان 2018", "2016"];

export const historySourceNote =
  "صحيفة الغد، صحيفة الأنباط، صراحة نيوز، وجراسا، والسوسنة، وتقارير صحفية موثقة عن إنشاء وافتتاح المدرسة.";

export const historySources: { name: string; url: string }[] = [
  {
    name: "صحيفة الغد",
    url: "https://alghad.com/Section-208/uncategorized/%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD-%D9%85%D8%AF%D8%B1%D8%B3%D8%AA%D9%8A-%D8%A3%D8%A8%D9%88-%D8%A7%D9%84%D8%B3%D9%88%D8%B3-%D9%88-%D8%A7%D9%84%D9%83%D8%B1%D8%A7%D9%85%D8%A9-%D8%B6%D9%85%D9%86-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%84%D9%83%D9%8A%D8%A9-211440",
  },
  { name: "صحيفة الأنباط", url: "https://alanbatnews.net/article/191773" },
  { name: "السوسنة", url: "https://www.assawsana.com/article/357657" },
];

export const schoolFacts: { label: string; value: string }[] = [
  { label: "رمز المدرسة", value: "110198" },
  { label: "سنة التأسيس", value: "1982" },
  { label: "الإسم بالعربية", value: "مدرسة وادي السير الأساسية للبنين" },
  { label: "لواء المدرسة", value: "لواء وادي السير" },
  { label: "الفترات الدراسية", value: "صباحية ومسائية" },
  { label: "عدد طلاب الفترة الصباحية", value: "750 طالبًا" },
  { label: "ساعات الدوام", value: "من 8:00 صباحًا إلى 4:00 مساءً" },
  { label: "الصفوف", value: "من الصف الرابع حتى العاشر" },
  { label: "مدير المدرسة", value: "الأستاذ زيد الحسامي" },
  { label: "الجهة المشرفة", value: "وزارة التربية والتعليم الأردنية" },
  { label: "العنوان", value: "شارع عربي جرادات، حي غياضة، وادي السير، عمّان" },
];

export const textbookGrades = [
  { grade: "الصف الرابع", url: "https://www.minhaji.net/lesson/5/الصف_الرابع" },
  { grade: "الصف الخامس", url: "https://www.minhaji.net/lesson/6/الصف_الخامس" },
  { grade: "الصف السادس", url: "https://www.minhaji.net/lesson/7/الصف_السادس" },
  { grade: "الصف السابع", url: "https://www.minhaji.net/lesson/8/الصف_السابع" },
  { grade: "الصف الثامن", url: "https://www.minhaji.net/lesson/9/الصف_الثامن" },
  { grade: "الصف التاسع", url: "https://www.minhaji.net/lesson/10/الصف_التاسع" },
  { grade: "الصف العاشر", url: "https://www.minhaji.net/lesson/11/الصف_العاشر" },
];

export const platforms: {
  name: string;
  short: string;
  description: string;
  url: string;
  logo?: string;
}[] = [
  {
    name: "أجيال – منصة وزارة التربية والتعليم",
    short: "أجيال",
    description: "بيئة تعليمية رقمية متكاملة أطلقتها وزارة التربية والتعليم في الأردن لدعم التحول الرقمي وتطوير العملية التربوية.",
    url: "https://ajyal.moe.gov.jo/emis/login.aspx",
    logo: ajyalLogo.url,
  },
  {
    name: "سراج – المساعد الدراسي الذكي",
    short: "سراج",
    description: "مساعد ذكي صُمّم خصيصًا لمساعدة طلاب المدارس في الأردن على الدراسة والتفوق، من خلال تجربة تعليمية تفاعلية وشاملة، تستند إلى المناهج الرسمية.",
    url: "https://siraj.moe.gov.jo/",
    logo: sirajLogo.url,
  },
  {
    name: "وزارة التربية والتعليم الأردنية",
    short: "وزارة التربية والتعليم",
    description: "وزارة التربية والتعليم وتنمية الموارد البشرية",
    url: "https://moe.gov.jo/",
    logo: moeLogo.url,
  },
  {
    name: "منصة درسك",
    short: "درسك",
    description: "منصة للتعليم عن بُعد.",
    url: "https://darsak.gov.jo/",
    logo: darsakLogo.url,
  },
  {
    name: "فيسبوك المدرسة",
    short: "فيسبوك",
    description: "صفحة المدرسة الرسمية على فيسبوك.",
    url: school.facebook,
    logo: schoolLogo.url,
  },
];


export const routes = {
  home: "/",
  about: "/1",
  staff: "/2",
  btec: "/3",
  initiatives: "/4",
  location: "/5",
  platforms: "/6",
  contact: "/7",
  textbooks: "/8",
} as const;

export const morningAssembly = {
  title: "الطابور الصباحي… حين تتحول الدقائق الأولى إلى قيمة تربوية",
  intro: [
    "في مدرسة وادي السير الأساسية للبنين، لا يبدأ اليوم الدراسي عند قرع الجرس… بل يبدأ من الساحة، حيث يقف الطلبة صفًا واحدًا.",
    "فالطابور الصباحي مساحةٌ تربوية تتكامل فيها قيم الانضباط، والانتماء، والمسؤولية، واحترام الوقت، وروح الجماعة.",
  ],
  points: [
    "كلمةٌ صباحية تفتح نافذةً للفكر.",
    "تحيةُ العلم تجدد معنى الانتماء.",
    "الإذاعة المدرسية تمنح الطالب فرصةً للتعبير والمشاركة.",
    "الالتزام بالنظام يترجم التربية إلى سلوكٍ عملي.",
  ],
  outro: [
    "إنها دقائق قصيرة… لكنها تحمل رسائل كبيرة.",
    "رسالةُ الطابور الصباحي ليست أن نقف فقط، بل أن نتعلم كيف نلتزم، وكيف نشارك، وكيف نقف معًا.",
    "نبدأ صباحنا بالانضباط… لنصنع يومًا مليئًا بالتعلم والإنجاز.",
  ],
  signature: "مدرسة وادي السير الأساسية للبنين — الفترة الصباحية والمسائية",
  motto: "نُربي اليوم… لنصنع أثر الغد",
  images: [assembly1, assembly2],
};
