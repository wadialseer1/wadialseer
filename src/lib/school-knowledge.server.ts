import { school, administration, teacherGroups, schoolFacts, platforms, initiatives, historyParagraphs, btecIntro, btecMajors, whatsappIntro, whatsappEveningIntro, morningAssembly } from "@/data/school";
import { textbooks } from "@/data/textbooks";

const text = (v: unknown): string => {
  try { return JSON.stringify(v, (k, val) => (/image|logo|url|img/i.test(k) && typeof val === "string" && !val.startsWith("http") ? undefined : val)); } catch { return ""; }
};

export function schoolInstructions() {
  const grades = [...new Set(textbooks.map((b) => b.grade))].map((g) => `${g}: ${[...new Set(textbooks.filter((b) => b.grade === g).map((b) => b.subject))].join("، ")}`);
  return `أنت "مساعد وادي السير"، مساعد ودود لطلبة وأولياء أمور ${school.name}.
أجب بالعربية وباختصار، اعتمادًا فقط على المعلومات المنشورة أدناه. إذا لم تجد الجواب فيها قل ذلك بوضوح واقترح التواصل مع المدرسة على الهاتف ${school.phone} أو البريد ${school.email}. لا تخترع معلومات.
الكتب المدرسية تُنزَّل من صفحة "الكتب المدرسية" في الموقع، وقروبات واتساب في صفحة "تواصل معنا".

# معلومات المدرسة
${text({ ...school, heroImage: undefined })}
# حقائق
${text(schoolFacts)}
# التاريخ
${historyParagraphs.join("\n")}
# الهيئة الإدارية
${administration.map((p) => `${p.name}: ${p.role}`).join("\n")}
# الهيئة التدريسية
${teacherGroups.map((g) => `${g.subject}: ${g.names.join("، ")}`).join("\n")}
# المنصات التعليمية
${text(platforms)}
# BTEC
${btecIntro}
${text(btecMajors)}
# المبادرات
${initiatives.map((i) => `${i.title} (${i.date}): ${i.paragraphs.join(" ")}`).join("\n")}
# الطابور الصباحي
${text(morningAssembly)}
# واتساب
${text(whatsappIntro)} ${text(whatsappEveningIntro)}
# الكتب المتوفرة حسب الصف
${grades.join("\n")}`;
}
