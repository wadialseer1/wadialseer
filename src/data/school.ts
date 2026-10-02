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

const CDN = "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload";
const wide = (id: string) => `${CDN}/c_limit,fl_lossy,h_1400,w_1600,f_auto,q_auto/${id}`;
const portrait = (id: string) => `${CDN}/c_limit,fl_lossy,h_900,w_900,f_auto,q_auto/${id}`;



export const school = {
  name: "مدرسة وادي السير الأساسية للبنين",
  vision:
    "طالب متميز خلقياً ودينياً ودراسياً واجتماعياً ومتسلح بالعلم والمعرفة ومتماشِ مع متغيرات العصر العلمية والتكنولوجية",
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
  facebook: "https://www.facebook.com/profile.php?id=100080898687099",
  coords: { lat: 31.95416, lng: 35.82155 },
  tagline:
    "مدرسة أساسية للبنين في لواء وادي السير، تضم الصفوف من الرابع حتى العاشر بفترتين دراسيتين صباحية ومسائية.",
  credit: "تم إنشاؤه بواسطة محمد قصراوي",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${school.coords.lat},${school.coords.lng}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${school.coords.lat},${school.coords.lng}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${school.coords.lat},${school.coords.lng}&z=17&hl=ar&output=embed`;

export type Person = { name: string; role: string };

export const administration: Person[] = [
  { name: "الأستاذ زيد الحسامي", role: "مدير المدرسة" },
  { name: "الأستاذ حمدي العويدي", role: "مساعد المدير" },
  { name: "الأستاذ حامد", role: "المرشد التربوي" },
  { name: "الأستاذ محمد العقيلي", role: "السكرتير" },
];

export const teacherGroups: { subject: string; names: string[] }[] = [
  { subject: "اللغة العربية", names: ["الدكتور عيسى الزبون", "الأستاذ نضال", "الأستاذ زين", "الأستاذ حسين دعامسة", "الأستاذ خالد المناصير", "الأستاذ إبراهيم البواريد", "الأستاذ علي بريزات"] },
  { subject: "الرياضيات", names: ["الأستاذ معتصم العقيلي", "الأستاذ تميم أبو داري", "الأستاذ محمد الزعبي", "الأستاذ علي كوتة", "الأستاذ مراد"] },
  { subject: "اللغة الإنجليزية", names: ["الأستاذ أمجد صندوقة", "الأستاذ وليد السليحات", "الأستاذ هادي", "الأستاذ إسلام", "الأستاذ يزيد", "الأستاذ أحمد"] },
  { subject: "العلوم", names: ["الأستاذ بشار ملحم", "الأستاذ معتز الشريف", "الأستاذ يزن الكسواني", "الدكتور ماجد الشناق"] },
  { subject: "الحاسوب", names: ["الأستاذ أحمد برهوم", "الأستاذ سند", "الأستاذ محمد عشا"] },
  { subject: "الاجتماعيات", names: ["الأستاذ محمود صلاح", "الأستاذ عادل سالم", "الأستاذ أمجد الزبن", "الأستاذ علي أبو قاعود"] },
  { subject: "التربية الرياضية", names: ["الأستاذ علي أبو السندس", "الأستاذ بشار"] },
  { subject: "التربية الإسلامية", names: ["الأستاذ عوض", "الأستاذ إبراهيم أبو السعيد", "الأستاذ رامي", "الأستاذ محمود شعلان", "الأستاذ باجس"] },
  { subject: "الكيمياء", names: ["الدكتور ماجد الشناق"] },
  { subject: "الفيزياء والأحياء", names: ["الأستاذ يزن الكسواني"] },
  { subject: "علوم الأرض", names: ["الأستاذ مأمون"] },
  { subject: "التربية الفنية", names: ["الأستاذ حسن المحاميد", "الأستاذ عمر عشا", "الأستاذ محمود القدسي"] },
  { subject: "الثقافة المالية", names: ["الأستاذ وسام سليحات", "الأستاذ محمد عشا"] },
  { subject: "النظافة المدرسية", names: ["الأستاذ عثمان العطار", "الأستاذ عارف"] },
  { subject: "التربية المهنية", names: ["الأستاذ مهند المحاميد", "الأستاذ حسن المحاميد"] },
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

export const initiatives = [
  {
    title: "لمدرستي أنتمي… وبالعطاء أرتقي",
    date: "",
    description:
      "ضمن مبادرات «لمدرستي أنتمي»، وبروح التعاون والانتماء والمسؤولية، وبتوجيهات مدير المدرسة الاستاذ زيد الحسامي قام الأستاذ هيثم القرعان وطلاب الصف السادس بمبادرة جميلة تمثلت في تنظيف حديقة المدرسة والعناية بها، حرصًا منهم على أن تبقى مدرستنا بيئة جميلة ونظيفة وآمنة للجميع. كل الشكر والتقدير للأستاذ هيثم القرعان على جهوده وتوجيهه، ولأبنائنا طلبة الصف السادس على عطائهم ومبادرتهم الرائعة، فمدرستنا بيتنا، والمحافظة عليها مسؤوليتنا جميعًا. لمدرستي أنتمي… وبالعطاء أرتقي",
    images: [init1.url, init2.url],
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
  { label: "الإسم بالعربية", value: "مدرسة وادي السير الأساسية للبنين" },
  { label: "لواء المدرسة", value: "لواء وادي السير" },
  { label: "الفترات الدراسية", value: "صباحية ومسائية" },
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
    description: "منصة وزارة التربية والتعليم الأردنية.",
    url: "https://ajyal.moe.gov.jo/emis/login.aspx",
    logo: ajyalLogo.url,
  },
  {
    name: "سراج – المساعد الدراسي الذكي",
    short: "سراج",
    description: "المساعد الدراسي الذكي.",
    url: "https://siraj.moe.gov.jo/",
    logo: sirajLogo.url,
  },
  {
    name: "وزارة التربية والتعليم الأردنية",
    short: "وزارة التربية والتعليم",
    description: "الموقع الرسمي للوزارة.",
    url: "https://moe.gov.jo/",
    logo: moeLogo.url,
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
