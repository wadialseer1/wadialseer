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

const CDN = "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload";
const wide = (id: string) => `${CDN}/c_limit,fl_lossy,h_1400,w_1600,f_auto,q_auto/${id}`;
const portrait = (id: string) => `${CDN}/c_limit,fl_lossy,h_900,w_900,f_auto,q_auto/${id}`;



export const school = {
  name: "مدرسة أبو السوس الثانوية للبنين",
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
  heroImage: wide("18283167/578387_788453.jpg"),
  phone: "062224109",
  email: "alsoos114369@hotmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100080898687099",
  coords: { lat: 31.926177081810046, lng: 35.796418848660664 },
  tagline:
    "مدرسة ثانوية شاملة للبنين في لواء وادي السير، أُنشئت عام 2017 بمكرمة ملكية سامية لخدمة أبناء منطقة أبو السوس والذراع.",
  credit: "تم إنشاؤه بواسطة محمد قصراوي",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${school.coords.lat},${school.coords.lng}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${school.coords.lat},${school.coords.lng}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${school.coords.lat},${school.coords.lng}&z=17&hl=ar&output=embed`;

export type Person = { name: string; role: string; image: string };

export const administration: Person[] = [
  { name: "محمود السكارنه", role: "مدير المدرسة", image: portrait("18283167/175591_532602.png") },
  { name: "ماهر المناصير", role: "مساعد مدير", image: portrait("18283167/245297_673353.png") },
  { name: "أسامة العقيل", role: "أمين مكتبة", image: portrait("18283167/721451_535914.png") },
  { name: "بهاء ابو سنينة", role: "مرشد تربوي", image: portrait("18283167/898499_730273.png") },
  { name: "حمدي العبادي", role: "قيم مختبر حاسوب", image: portrait("18283167/256214_148589.png") },
  { name: "سياف جفال", role: "قيم مختبر حاسوب", image: portrait("18283167/197974_397049.png") },
  { name: "عقاب السكارنه", role: "أمين عهدة", image: portrait("18283167/567370_675146.png") },
];

export const teachers: Person[] = [
  { name: "محمد الصالحي", role: "معلم كيمياء", image: portrait("18283167/561538_528340.png") },
  { name: "أحمد المهيرات", role: "معلم لغة إنجليزية", image: portrait("18283167/33715_601842.png") },
  { name: "حامد المناصير", role: "معلم لغة إنجليزية", image: portrait("18283167/968830_621805.png") },
  { name: "كمال المهيرات", role: "معلم لغة إنجليزية", image: portrait("18283167/508095_15331.png") },
  { name: "نزار دغيم", role: "معلم رياضيات", image: portrait("18283167/198707_652889.png") },
  { name: "محمد الثوابية", role: "معلم علوم ارض", image: portrait("18283167/513250_767359.png") },
  { name: "احمد البخيت", role: "معلم لغة عربية", image: portrait("18283167/835426_118538.png") },
  { name: "مشعل المهيرات", role: "معلم لغة عربية", image: portrait("18283167/916910_99169.png") },
  { name: "مؤيد المهيرات", role: "معلم لغة عربية", image: portrait("18283167/758143_749115.png") },
  { name: "مثنى المهيرات", role: "معلم لغة عربية", image: portrait("18283167/110112_744242.png") },
  { name: "عمر المهيرات", role: "معلم جغرافيا", image: portrait("18283167/691826_697460.png") },
  { name: "مروان سلامة", role: "معلم تربية خاصة", image: portrait("18283167/101190_531737.png") },
  { name: "ليث المناصير", role: "معلم تربية خاصة", image: portrait("18283167/534361_241536.png") },
  { name: "وليد سرور", role: "معلم تربية إسلامية", image: portrait("18283167/425567_129474.png") },
  { name: "محمد ابو السندس", role: "معلم تربية إسلامية", image: portrait("18283167/119432_425402.png") },
  { name: "احمد القريوتي", role: "معلم الحاسوب", image: portrait("18283167/39216_132676.png") },
  { name: "محمد الشرايعة", role: "معلم فيزياء", image: portrait("18283167/934787_517944.png") },
  { name: "محمد المغاريز", role: "معلم التربية الفنية", image: portrait("18283167/872117_885802.png") },
  { name: "محمد صندوقة", role: "معلم مهني", image: portrait("18283167/105748_222129.png") },
  { name: "نمر المهيرات", role: "معلم التربية الرياضة", image: portrait("18283167/654933_834368.png") },
  { name: "مؤيد عنايه", role: "معلم إدارة الأعمال", image: portrait("18283167/951556_834822.png") },
  { name: "مكيد المغاريز", role: "معلم إدارة الأعمال", image: portrait("18283167/747293_700669.png") },
  { name: "اكرم الصرايرة", role: "معلم إدارة الأعمال", image: portrait("18283167/916401_928575.png") },
  { name: "حمزة طبيله", role: "معلم تكنولوجيا معلومات", image: portrait("18283167/772413_651966.png") },
  { name: "هشام عميره", role: "معلم تكنولوجيا معلومات", image: portrait("18283167/731876_536858.png") },
  { name: "محمد قصراوي", role: "معلم تكنولوجيا معلومات", image: portrait("18283167/847875_128328.png") },
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
    title: "لمدرستي أنتمي - ضمن أنشطة الخطة التطويرية",
    date: "الأربعاء 30/10/2024",
    description:
      "مجال المدرسة والمجتمع قام المعلم محمد صندوقة مشكور بنشاط قطف ثمار الزيتون مع طلاب الصف الرابع في جو يسوده السعادة والنشاط والتعاون الممزوج بالروح التراثية. كل الشكر والتقدير لكل من ساهم في هذا العمل وبارك الله في جهودكم طلابنا الصغار. مدير المدرسة: محمود السكارنة",
    images: [
      wide("18283167/293753_259610.jpeg"),
      wide("18283167/132727_749322.jpeg"),
      wide("18283167/904830_402726.jpeg"),
      wide("18283167/433468_659059.jpeg"),
    ],
  },
  {
    title: "ضمن خطة التوجيه المهني",
    date: "",
    description:
      "قامت رئيسة قسم التعليم المهني المهندسه نسرين الشيخ بتقديم توعيه لطلبة الصف العاشر IT لتعريفهم ببرنامج Betc العالمي وتجولت في مختبرات التكنولوجيا و الاعمال المستحدث للعام ٢٠٢٤ حيث قدمت التوعية المهنية و توجيهاتها القيمه للطلبة وكان برفقتها خلال الجولة مدير المدرسه محمود السكارنة، واستمعوا خلالها لاستفسارات الطلبة والاجابة عليها. كل الشكر للمهندسه نسرين الشيخ ومعلمين التخصص. وتستمر مدرستنا بالعطاء",
    images: [
      wide("18283167/204826_617527.jpeg"),
      wide("18283167/621176_527487.jpeg"),
      wide("18283167/427895_181809.jpeg"),
      wide("18283167/71925_144526.jpeg"),
    ],
  },
  {
    title: "الانتخابات البرلمانية الطلابية 2025/2024",
    date: "",
    description:
      "تحت رعاية إدارة المدرسة وأعضاء الهيئة التدريسية وحضور الدكتوره روحيه سعد الدين، تم إجراء الانتخابات الطّلابيّة في أجواء مفعمة بالحيويّة حيث انتخب كل صف ممثليه بناءً على التعليمات الخاصة للانتخابات البرلمانية الطلابية، ونتقدم بالشكر لرئيس لجنة الانتخابات الأستاذ: محمد الصالحي ولجنة الانتخابات الأستاذ اسامه العقيل والأستاذ ليث المناصير. والشّكر موصول لمدير المدرسة الفاضل: محمود السكارنه على الدعم والتوجيه.",
    images: [
      wide("18283167/152570_163576.jpeg"),
      wide("18283167/215950_628158.jpeg"),
      wide("18283167/555277_749490.jpeg"),
      wide("18283167/491316_890588.jpeg"),
    ],
  },
  {
    title: "لمدرستي أنتمي - بيئة مدرسية آمنة",
    date: "",
    description:
      "بإشراف مباشر من مدير المدرسة محمود السكارنة وبالتعاون مع المعلم القدير محمد صندوقة وطلبة الصف الرابع أ تم اليوم تنظيف الأرض المجاورة للمدرسة من النفايات والأوساخ المتناثرة عليها حيث كانت فعالية رائعة ومهمة لغرس قيم المحافظة على البيئة ونظافتها ومدى أهميتها في نفوس الطلبة بوركت جهودكم جميعا وجعلها الله في ميزان حسناتكم",
    images: [
      wide("18283167/830253_364043.jpeg"),
      wide("18283167/137330_919702.jpeg"),
      wide("18283167/807119_164255.jpeg"),
      wide("18283167/871899_936806.jpeg"),
    ],
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
  { label: "الرقم الوطني", value: "114369" },
  { label: "الإسم بالعربية", value: "ابو السوس الثانوية الشاملة للبنين" },
  { label: "مديرية التعليم", value: "لواء وادي السير" },
  { label: "وقت المدرسة", value: "صباحي" },
  { label: "السلطة المشرفة", value: "وزارة التربية والتعليم" },
  { label: "سنة التأسيس", value: "2017" },
  { label: "المرحلة الدراسية", value: "من الصف الرابع إلى الصف الثاني عشر" },
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
  about: "/عن-المدرسة",
  staff: "/هيئة-المدرسة",
  btec: "/التعليم-المهني",
  initiatives: "/المبادرات",
  location: "/موقع-المدرسة",
  platforms: "/المنصات-التعليمية",
  contact: "/تواصل-معنا",
} as const;
