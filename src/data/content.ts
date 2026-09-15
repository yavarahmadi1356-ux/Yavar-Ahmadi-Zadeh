/**
 * =============================================================================
 * CONTENT — single source of truth
 * =============================================================================
 *
 * Professional identity (confirmed positioning, not a formal employment title)
 *   Industrial Digital Transformation Engineer
 *   AI-Augmented Software Development
 * Formal current role: Senior Engineer, Telephone Exchanges and Radio
 * Workplace: Ilam Gas Refinery
 *
 * HOW TO EDIT
 * -----------
 * 1. Change copy in this file only. Pages, SEO, schema, and CTAs read from here.
 * 2. Translatable strings are { en, fa }. Leave fa as "" to fall back to English.
 * 3. Fields with status: "pending" are unpublished facts. Do not invent them.
 * 4. Strings in [brackets] are structured slots. Replace the whole string with
 *    a verified fact, then set the matching status to "verified".
 * 5. Never paste unverified metrics, employer names, project outcomes, or
 *    certifications.
 * 6. Identity facts that are the same in both languages (email, URLs, years)
 *    stay as plain strings.
 *
 * CMS MIGRATION
 * -------------
 * Each object has a stable `id`. Localized fields are locale maps.
 * See types.ts for the collection map. requiredFields[] is the
 * editorial inventory a CMS or form can drive.
 *
 * =============================================================================
 */

import type {
  AssetClass,
  AssetSlot,
  ContactPath,
  ContentStatus,
  CredentialItem,
  DomainItem,
  ExpertiseItem,
  LanguageItem,
  LeadershipGroup,
  Localized,
  Metric,
  ProjectCase,
  RequiredField,
  SkillItem,
  StackGroup,
  TimelineRole,
} from "./types";

const pending: ContentStatus = "pending";
const verified: ContentStatus = "verified";
const framework = "framework" as const;
const personal = "personal" as const;

const L = (en: string, fa: string): Localized => ({ en, fa });

// -----------------------------------------------------------------------------
// SITE
// -----------------------------------------------------------------------------
export const site = {
  version: 3,
  locales: ["en", "fa"] as const,
  defaultLocale: "en" as const,
  /** Indexing stays off until a production URL and launch decision exist. */
  allowIndexing: false,
};

// -----------------------------------------------------------------------------
// IDENTITY
// professionalTitle / secondaryTitle = public positioning, not the HR title.
// currentRole = formal employment title.
// -----------------------------------------------------------------------------
export const identity = {
  fullName: L("Yavar Ahmadi Zadeh", "یاور احمدی‌زاده"),
  firstName: L("Yavar", "یاور"),
  lastName: L("Ahmadi Zadeh", "احمدی‌زاده"),
  /**
   * Public professional identity — not the HR job title.
   */
  professionalTitle: L(
    "Industrial Digital Transformation Engineer",
    "مهندس تحول دیجیتال صنعتی",
  ),
  secondaryTitle: L(
    "AI-Augmented Software Development",
    "توسعه نرم‌افزار با بهره‌گیری از هوش مصنوعی",
  ),
  currentOrganization: L("Ilam Gas Refinery", "پالایشگاه گاز ایلام"),
  currentRole: L(
    "Senior Engineer, Telephone Exchanges and Radio",
    "مهندس ارشد مراکز تلفن و رادیو",
  ),
  location: L("Iran", "ایران"),
  yearsOfExperience: "[Years of industrial experience]",
  availability: L(
    "[Availability — e.g. open to confidential discussion]",
    "[وضعیت دسترسی — مثلاً آماده گفت‌وگوی محرمانه]",
  ),
  status: verified,
};

// -----------------------------------------------------------------------------
// CONTACT
// Empty LinkedIn / site URL keep those controls inactive.
// GitHub is the profile URL only — no repository URLs until they are public.
// -----------------------------------------------------------------------------
export const contact = {
  email: "yavarahmadi1356@gmail.com",
  linkedinUrl: "",
  githubUrl: "https://github.com/yavarahmadi1356-ux",
  siteUrl: "",
  phone: "09183365826",
  status: verified,
};

export const contactPaths: ContactPath[] = [
  {
    id: "operator",
    heading: L("Energy operator", "بهره‌بردار انرژی"),
    detail: L(
      "Asset, operations, or digital-on-plant discussion",
      "گفت‌وگو درباره دارایی، عملیات، یا دیجیتال روی واحد",
    ),
    subject: L("Operator inquiry", "استعلام بهره‌بردار"),
  },
  {
    id: "epc",
    heading: L("EPC / engineering", "EPC / مهندسی"),
    detail: L(
      "Project, interface, or engineering collaboration",
      "همکاری پروژه‌ای، رابطه‌ای، یا مهندسی",
    ),
    subject: L("EPC or engineering inquiry", "استعلام EPC یا مهندسی"),
  },
  {
    id: "technology",
    heading: L("Industrial technology", "فناوری صنعتی"),
    detail: L(
      "Industrial telecom, IT, or software conversation",
      "گفت‌وگو درباره مخابرات صنعتی، فناوری اطلاعات، یا نرم‌افزار",
    ),
    subject: L("Industrial technology inquiry", "استعلام فناوری صنعتی"),
  },
  {
    id: "search",
    heading: L("Executive search", "جست‌وجوی مدیران"),
    detail: L(
      "Confidential mandate or role discussion",
      "گفت‌وگوی محرمانه درباره مأموریت یا نقش",
    ),
    subject: L("Recruiter inquiry", "استعلام جذب نیرو"),
  },
];

// -----------------------------------------------------------------------------
// POSITIONING — audience language. Not a formal employment title.
// -----------------------------------------------------------------------------
export const positioning = {
  eyebrow: L(
    "Industrial telecom · Gas refining · AI-augmented software",
    "مخابرات صنعتی · پالایش گاز · نرم‌افزار با بهره‌گیری از هوش مصنوعی",
  ),
  headline: identity.professionalTitle,
  subhead: identity.secondaryTitle,
  valueProposition: L(
    "Senior telecom engineer at a gas refinery. Background in IT Service Desk, electronic engineering, and independent software development for industrial environments.",
    "مهندس ارشد مخابرات در پالایشگاه گاز. سابقه Service Desk، مهندسی الکترونیک، و ساخت مستقل نرم‌افزار برای محیط صنعتی.",
  ),
  audienceLine: L(
    "For operators, engineering teams, industrial technology groups, and professional search.",
    "برای بهره‌برداران، تیم‌های مهندسی، گروه‌های فناوری صنعتی، و جست‌وجوی حرفه‌ای.",
  ),
  introduction: L(
    "Senior Engineer for Telephone Exchanges and Radio at Ilam Gas Refinery. Public work focus: industrial digital transformation and AI-assisted software alongside formal telecom duties.",
    "مهندس ارشد مراکز تلفن و رادیو در پالایشگاه گاز ایلام. تمرکز عمومی: تحول دیجیتال صنعتی و نرم‌افزار با کمک هوش مصنوعی در کنار کار رسمی مخابرات.",
  ),
  contactHeading: L(
    "Contact",
    "ارتباط",
  ),
  contactLead: L(
    "Open to professional conversation with operators, engineering teams, and technology partners.",
    "آماده گفت‌وگوی حرفه‌ای با بهره‌برداران، تیم‌های مهندسی و شرکای فناوری.",
  ),
  logoKicker: L("Telecom · Digital · Energy", "مخابرات · دیجیتال · انرژی"),
  seoTitle: L(
    "Yavar Ahmadi Zadeh | Industrial Digital Transformation Engineer",
    "یاور احمدی‌زاده | مهندس تحول دیجیتال صنعتی",
  ),
  seoDescription: L(
    "Yavar Ahmadi Zadeh — Senior Engineer, Telephone Exchanges and Radio at Ilam Gas Refinery. Industrial telecommunications, IT Service Desk experience, and AI-augmented software development.",
    "یاور احمدی‌زاده — مهندس ارشد مراکز تلفن و رادیو در پالایشگاه گاز ایلام. مخابرات صنعتی، تجربه Service Desk، و توسعه نرم‌افزار با بهره‌گیری از هوش مصنوعی.",
  ),
  seoKeywords:
    "Yavar Ahmadi Zadeh, industrial telecommunications, telephone exchanges, radio, Ilam Gas Refinery, AI-augmented software development, industrial digital transformation, TelecomManager",
  pendingBanner: L(
    "Some fields are still being confirmed and may appear as placeholders.",
    "برخی فیلدها هنوز در حال تأییدند و ممکن است به‌صورت جای‌خالی دیده شوند.",
  ),
};

// -----------------------------------------------------------------------------
// UI CHROME
// -----------------------------------------------------------------------------
export const ui = {
  overview: L("Overview", "نمای کلی"),
  profile: L("Full profile", "نمایهٔ کامل"),
  contact: L("Contact", "ارتباط"),
  skip: L("Skip to content", "رفتن به محتوا"),
  menu: L("Open menu", "باز کردن فهرست"),
  closeMenu: L("Close menu", "بستن فهرست"),
  language: L("Language", "زبان"),
  langEn: L("EN", "EN"),
  langFa: L("فارسی", "فارسی"),
  viewProfile: L("Read the full profile", "خواندن نمایهٔ کامل"),
  discuss: L("Professional discussion", "گفت‌وگوی حرفه‌ای"),
  awaiting: L("Awaiting confirmation", "در انتظار تأیید"),
  frameworkNote: L(
    "Working practices of the role.",
    "رویه‌های کاری نقش.",
  ),
  pendingNote: L(
    "To be confirmed.",
    "در انتظار تأیید.",
  ),
  portraitPending: L(
    "Professional portrait to be supplied",
    "پرترهٔ حرفه‌ای هنوز بارگذاری نشده",
  ),
  atmosphereCaption: L(
    "Industrial environment.",
    "محیط صنعتی.",
  ),
  cvInactive: L("CV will be available here once the PDF is ready.", "رزومه پس از آماده‌شدن فایل در دسترس قرار می‌گیرد."),
  linkedinInactive: L("LinkedIn profile not linked yet.", "پروفایل لینکدین هنوز متصل نشده."),
  emailInactive: L("Email not published yet.", "ایمیل هنوز منتشر نشده."),
  backToOverview: L("Back to overview", "بازگشت به نمای کلی"),
  section: {
    capabilities: L("Capability framework", "چارچوب قابلیت"),
    industrial: L("Industrial expertise", "تخصص صنعتی"),
    leadership: L("Leadership approach", "رویکرد رهبری"),
    projects: L("Selected work", "کارهای منتخب"),
    metrics: L("Career facts", "واقعیت‌های حرفه‌ای"),
    contact: L("Contact pathways", "مسیرهای ارتباط"),
    biography: L("Biography", "زندگی‌نامه حرفه‌ای"),
    journey: L("Career journey", "مسیر شغلی"),
    assets: L("Asset classes", "کلاس دارایی"),
    operations: L("Operational experience", "تجربه عملیاتی"),
    skills: L("Skills", "مهارت‌ها"),
    stack: L("Technical stack", "پشتهٔ فنی"),
    credentials: L("Credentials", "مدارک"),
    philosophy: L("Philosophy", "فلسفهٔ حرفه‌ای"),
    cv: L("Curriculum vitae", "رزومه"),
  },
  sectionLead: {
    capabilities: L(
      "How the work is approached.",
      "نحوهٔ رویکرد به کار.",
    ),
    industrial: L(
      "Plant telecommunications, Service Desk experience, and software development.",
      "مخابرات واحد، تجربه Service Desk و توسعه نرم‌افزار.",
    ),
    leadership: L(
      "Working approach across operations, telecom, IT and software.",
      "رویکرد کاری میان عملیات، مخابرات، IT و نرم‌افزار.",
    ),
    projects: L(
      "Selected software and operational work.",
      "نمونه‌ای از کارهای نرم‌افزاری و عملیاتی.",
    ),
    metrics: L(
      "Summary facts — placeholders remain until confirmed.",
      "خلاصه واقعیت‌ها — تا تأیید، جای‌خالی می‌ماند.",
    ),
    biography: L(
      "A short professional narrative. Write in the first person or third person — keep it factual.",
      "روایت کوتاه حرفه‌ای. اول‌شخص یا سوم‌شخص — فقط واقعیت.",
    ),
    journey: L(
      "Roles in order. Add or remove entries. Publish a role only when dates, organisation, and outcomes are true.",
      "نقش‌ها به ترتیب. مورد اضافه یا حذف کنید. نقش را فقط وقتی منتشر کنید که تاریخ، سازمان و نتایج درست باشند.",
    ),
    assets: L(
      "Confirm only classes you have operated, supported, or digitally served. Delete the rest.",
      "فقط کلاس‌هایی را تأیید کنید که روی آن‌ها کار عملیاتی، پشتیبانی یا خدمت دیجیتال داشته‌اید. بقیه را حذف کنید.",
    ),
    operations: L(
      "The operating context of the work — environments, accountabilities, and the operations interface.",
      "بافت عملیاتی کار — محیط‌ها، مسئولیت‌ها، و رابط با عملیات.",
    ),
    skills: L(
      "Skill names describe the practice. Levels and bars stay empty until you accept them as public.",
      "نام مهارت‌ها رویه را توصیف می‌کند. سطح و نوار تا وقتی که انتشارشان را نپذیرید خالی می‌ماند.",
    ),
    stack: L(
      "Tools and systems you will stand behind in an interview. Leave a row pending rather than guessing.",
      "ابزارها و سامانه‌هایی که در مصاحبه پشت‌شان می‌ایستید. به‌جای حدس، ردیف را در انتظار بگذارید.",
    ),
    credentials: L(
      "Education, certifications, languages, and memberships — each on its own record.",
      "تحصیلات، گواهی‌ها، زبان‌ها و عضویت‌ها — هر کدام یک رکورد جدا.",
    ),
    philosophy: L(
      "Working principles.",
      "اصول کاری.",
    ),
  },
  projectLabels: {
    challenge: L("Problem", "مسئله"),
    action: L("Approach", "رویکرد"),
    leadership: L("Contribution", "نقش شخصی"),
    results: L("Outcome", "نتیجه"),
  },
  credentialGroups: {
    education: L("Education", "تحصیلات"),
    certifications: L("Certifications", "گواهی‌ها"),
    languages: L("Languages", "زبان‌ها"),
    memberships: L("Memberships", "عضویت‌ها"),
  },
};

export const profileTags: Localized[] = [
  L("Industrial telecommunications", "مخابرات صنعتی"),
  L("AI-augmented software", "نرم‌افزار با بهره‌گیری از هوش مصنوعی"),
  L("Gas refining", "پالایش گاز"),
  L("IT Service Desk", "میز خدمت فناوری اطلاعات"),
  L("Electronic engineering", "مهندسی الکترونیک"),
];

export const profileNav: { id: string; href: string; label: Localized }[] = [
  { id: "biography", href: "#biography", label: ui.section.biography },
  { id: "journey", href: "#journey", label: ui.section.journey },
  { id: "assets", href: "#assets", label: ui.section.assets },
  { id: "operations", href: "#operations", label: ui.section.operations },
  { id: "skills", href: "#skills", label: ui.section.skills },
  { id: "credentials", href: "#credentials", label: ui.section.credentials },
  { id: "philosophy", href: "#philosophy", label: ui.section.philosophy },
  { id: "cv", href: "#cv", label: ui.section.cv },
];

// -----------------------------------------------------------------------------
// BIOGRAPHY
// -----------------------------------------------------------------------------
export const biography = {
  status: verified,
  paragraphs: [
    L(
      "Yavar Ahmadi Zadeh works as Senior Engineer, Telephone Exchanges and Radio at Ilam Gas Refinery. He joined the refinery in 1382 in the Telecommunications department.",
      "یاور احمدی‌زاده مهندس ارشد مراکز تلفن و رادیو در پالایشگاه گاز ایلام است. از سال ۱۳۸۲ در واحد مخابرات این پالایشگاه مشغول به کار است.",
    ),
    L(
      "He progressed from technician to Telephone Exchange Supervisor, and from 1395 also served as Service Desk Supervisor — covering print servers, network support, IT infrastructure, ITIL and ISMS. His current formal title is in telecom.",
      "از تکنسین به مسئول مراکز تلفن رسید و از سال ۱۳۹۵ مسئول Service Desk نیز بوده است؛ کار با Print Server، شبکه، زیرساخت IT، ITIL و ISMS. عنوان شغلی فعلی او در مخابرات است.",
    ),
    L(
      "He holds B.Sc. and M.Sc. degrees in Electronic Engineering. Alongside plant work he builds software with AI assistance — Python, web technologies, and desktop tools for industrial use, including TelecomManager for refinery telecom operations.",
      "کارشناسی و کارشناسی ارشد مهندسی الکترونیک دارد. در کنار کار پالایشگاه، با کمک هوش مصنوعی نرم‌افزار می‌سازد — از جمله Python، فناوری‌های وب و ابزارهای رومیزی صنعتی مانند TelecomManager برای عملیات مخابرات پالایشگاه.",
    ),
  ],
};

// -----------------------------------------------------------------------------
// CAREER FACTS (metrics) — structured slots, never invented numbers
// -----------------------------------------------------------------------------
export const metrics: Metric[] = [
  {
    id: "years",
    value: "[Years of industrial experience]",
    label: L("Industrial experience", "تجربه صنعتی"),
    status: pending,
    guidance: L(
      "Confirmed years in industrial / energy environments. Example format: 12+",
      "سال‌های تأییدشده در محیط صنعتی / انرژی. نمونه: ۱۲+",
    ),
  },
  {
    id: "digital",
    value: "[Digital transformation initiatives]",
    label: L("Digital transformation initiatives", "طرح‌های تحول دیجیتال"),
    status: pending,
    guidance: L(
      "Count of digital / systems initiatives you will stand behind.",
      "تعداد طرح‌های دیجیتال / سامانه‌ای که پشت‌شان می‌ایستید.",
    ),
  },
  {
    id: "projects",
    value: "[Major projects]",
    label: L("Major projects", "پروژه‌های اصلی"),
    status: pending,
    guidance: L(
      "Count of significant industrial, software, or combined programmes.",
      "تعداد برنامه‌های صنعتی، نرم‌افزاری، یا ترکیبیِ مهم.",
    ),
  },
  {
    id: "operations",
    value: "[Operational responsibilities]",
    label: L("Operational environments", "محیط‌های عملیاتی"),
    status: pending,
    guidance: L(
      "Assets, units, or sites where you held operating or digital-on-plant responsibility.",
      "دارایی‌ها، واحدها یا سایت‌هایی که مسئولیت عملیاتی یا دیجیتالِ روی واحد داشته‌اید.",
    ),
  },
  {
    id: "stack",
    value: "Python · HTML/CSS · industrial telecom · AI-assisted development",
    label: L("Systems in use", "سامانه‌های در حال استفاده"),
    status: verified,
    guidance: L(
      "A short public summary of the stack, once you confirm it. Detail lives in technicalStack.",
      "خلاصهٔ عمومی پشته پس از تأیید. جزئیات در technicalStack است.",
    ),
  },
  {
    id: "leadership",
    value: "[Leadership achievements]",
    label: L("People / functions led", "افراد / کارکردهای رهبری‌شده"),
    status: pending,
    guidance: L(
      "Peak team size or functions led, only if you wish to publish it.",
      "حداکثر اندازه تیم یا کارکردهای رهبری‌شده، فقط در صورت تمایل به انتشار.",
    ),
  },
];

export const impactMetrics: Metric[] = [
  ...metrics,
  {
    id: "systems",
    value: "[Operational systems delivered]",
    label: L("Operational systems", "سامانه‌های عملیاتی"),
    status: pending,
    guidance: L(
      "Documented systems still in use after handover — not demos.",
      "سامانه‌های مستند که پس از تحویل هنوز استفاده می‌شوند — نه نسخه نمایشی.",
    ),
  },
  {
    id: "certifications-count",
    value: "[Certifications]",
    label: L("Professional certifications", "گواهی‌های حرفه‌ای"),
    status: pending,
    guidance: L(
      "Count only if the individual certifications below are also verified.",
      "فقط اگر گواهی‌های فهرست‌شده نیز تأیید شده باشند.",
    ),
  },
];

// -----------------------------------------------------------------------------
// CAPABILITY FRAMEWORK — domain language, not personal delivery
// -----------------------------------------------------------------------------
export const expertise: ExpertiseItem[] = [
  {
    id: "transform",
    title: L("Industrial digital transformation", "تحول دیجیتال صنعتی"),
    description: L(
      "Connecting plant telecommunications and IT practice with practical software for operating environments.",
      "اتصال مخابرات واحد و تجربه IT به نرم‌افزار قابل‌استفاده در محیط عملیاتی.",
    ),
    icon: "transform",
    claim: framework,
  },
  {
    id: "ai",
    title: L("AI-assisted software development", "توسعه نرم‌افزار با کمک هوش مصنوعی"),
    description: L(
      "Building desktop and operational tools with AI assistance — then verifying them against real plant needs.",
      "ساخت ابزارهای رومیزی و عملیاتی با کمک هوش مصنوعی و راستی‌آزمایی آن‌ها با نیاز واقعی واحد.",
    ),
    icon: "ai",
    claim: framework,
  },
  {
    id: "domain",
    title: L("Industrial telecommunications", "مخابرات صنعتی"),
    description: L(
      "Wireless and radio, PBX, industrial phone systems, fibre, radio links, and refinery telecom infrastructure.",
      "بی‌سیم و رادیو، مراکز تلفن، تلفن صنعتی، فیبر، لینک رادیویی و زیرساخت مخابرات پالایشگاه.",
    ),
    icon: "domain",
    claim: framework,
  },
  {
    id: "problem",
    title: L("Practical problem solving", "حل مسئله عملی"),
    description: L(
      "Start from the operating question, deliver something people can use, and leave documentation for the next engineer.",
      "شروع از مسئله عملیاتی، تحویل چیزی که قابل استفاده باشد، و مستندسازی برای مهندس بعدی.",
    ),
    icon: "problem",
    claim: framework,
  },
  {
    id: "leadership",
    title: L("Work across telecom, IT and software", "کار میان مخابرات، IT و نرم‌افزار"),
    description: L(
      "Clear about what is formal plant duty and what is independent development practice.",
      "شفاف بودن بین وظیفه رسمی واحد و کار مستقل توسعه نرم‌افزار.",
    ),
    icon: "leadership",
    claim: framework,
  },
  {
    id: "systems",
    title: L("Software for refinery environments", "نرم‌افزار برای محیط پالایشگاه"),
    description: L(
      "Desktop tools aimed at oil and gas sites — described by actual status, not by sales language.",
      "ابزارهای رومیزی برای سایت‌های نفت و گاز — با وضعیت واقعی، نه زبان فروش.",
    ),
    icon: "systems",
    claim: framework,
  },
];

// -----------------------------------------------------------------------------
// INDUSTRIAL EXPERTISE (domain map)
// -----------------------------------------------------------------------------
export const industrialDomains: DomainItem[] = [
  {
    id: "gas-refining",
    title: L("Gas refining environment", "محیط پالایش گاز"),
    description: L(
      "Workplace: Ilam Gas Refinery.",
      "محل کار: پالایشگاه گاز ایلام.",
    ),
    status: verified,
    claim: personal,
  },
  {
    id: "energy-ops",
    title: L("Industrial telecommunications", "مخابرات صنعتی"),
    description: L(
      "Wireless / radio, telephone exchanges (PBX), industrial communications, fibre optic, radio links, refinery telecom infrastructure.",
      "بی‌سیم / رادیو، مراکز تلفن (PBX)، ارتباطات صنعتی، فیبر نوری، لینک رادیویی، زیرساخت مخابرات پالایشگاه.",
    ),
    status: verified,
    claim: personal,
  },
  {
    id: "plant-data",
    title: L("IT Service Desk", "میز خدمت فناوری اطلاعات"),
    description: L(
      "Service Desk Supervisor from 1395: print server, network, IT infrastructure, ITIL, ISMS.",
      "مسئول Service Desk از ۱۳۹۵: Print Server، شبکه، زیرساخت IT، ITIL، ISMS.",
    ),
    status: verified,
    claim: personal,
  },
  {
    id: "brownfield-dt",
    title: L("AI-augmented software development", "توسعه نرم‌افزار با کمک هوش مصنوعی"),
    description: L(
      "Independent software work with AI assistance — Python, HTML/CSS, web and desktop tools for industrial use.",
      "کار مستقل نرم‌افزار با کمک هوش مصنوعی — Python، HTML/CSS، ابزارهای وب و رومیزی برای کاربرد صنعتی.",
    ),
    status: verified,
    claim: personal,
  },
];

// -----------------------------------------------------------------------------
// LEADERSHIP APPROACH
// -----------------------------------------------------------------------------
export const leadershipCapabilities: LeadershipGroup[] = [
  {
    id: "framing",
    title: L("How the work is done", "نحوه انجام کار"),
    items: [
      L("Start from the asset and the operating question", "شروع از دارایی و پرسش عملیاتی"),
      L("Prefer a working system over a presentation", "ترجیح سامانه کارکننده بر ارائه"),
      L("Keep scope inside what operations can absorb", "دامنه در حد ظرفیت عملیات"),
      L("Separate experiment from production", "جدا کردن آزمایش از محیط عملیاتی"),
      L("Document for the next engineer", "مستندسازی برای مهندس بعدی"),
    ],
  },
  {
    id: "ai-method",
    title: L("AI as a method", "هوش مصنوعی به‌عنوان روش"),
    items: [
      L("Use AI to speed research and drafting", "استفاده از هوش مصنوعی برای شتاب پژوهش و پیش‌نویس"),
      L("Verify outputs against plant facts", "راستی‌آزمایی خروجی با واقعیت واحد"),
      L("Do not treat model output as operating truth", "خروجی مدل به‌عنوان حقیقت عملیاتی پذیرفته نمی‌شود"),
      L("Keep people accountable for safety decisions", "مسئولیت تصمیم‌های ایمنی با انسان می‌ماند"),
    ],
  },
  {
    id: "interface",
    title: L("Interface with operations", "رابط با عملیات"),
    items: [
      L("Speak in plant language, not only IT language", "زبان واحد، نه فقط زبان IT"),
      L("Hand over systems that someone can own", "تحویل سامانه‌ای که مالک مشخص داشته باشد"),
      L("Respect existing procedures and permits", "رعایت رویه‌ها و مجوزهای موجود"),
    ],
  },
  {
    id: "posture",
    title: L("Working posture", "وضعیت کاری"),
    items: [
      L("Calm, specific, and accountable", "آرام، مشخص و پاسخگو"),
      L("No exaggeration of role or results", "بدون بزرگ‌نمایی نقش یا نتیجه"),
    ],
  },
];

// ---------------------------------------------------------------------------------
// CAREER JOURNEY — reverse chronological. Years in Solar Hijri as supplied.
// End dates for promotions are not published (not verified).
// -----------------------------------------------------------------------------
export const timeline: TimelineRole[] = [
  {
    id: "role-current",
    status: verified,
    years: "Current",
    organization: L("Ilam Gas Refinery", "پالایشگاه گاز ایلام"),
    role: L(
      "Senior Engineer, Telephone Exchanges and Radio",
      "مهندس ارشد مراکز تلفن و رادیو",
    ),
    scope: L(
      "Industrial telecommunications: wireless / radio, PBX, industrial phone systems, fibre, radio links, refinery telecom infrastructure.",
      "مخابرات صنعتی: بی‌سیم / رادیو، مراکز تلفن، تلفن صنعتی، فیبر، لینک رادیویی، زیرساخت مخابرات پالایشگاه.",
    ),
    achievements: [
      L(
        "Day-to-day responsibility for telephone exchanges and radio systems at the refinery.",
        "مسئولیت روزمره مراکز تلفن و سامانه‌های رادیو در پالایشگاه.",
      ),
      L(
        "Independent software development alongside the formal telecom role.",
        "توسعه مستقل نرم‌افزار در کنار نقش رسمی مخابرات.",
      ),
    ],
  },
  {
    id: "role-previous",
    status: verified,
    years: "From 1395",
    organization: L("Ilam Gas Refinery", "پالایشگاه گاز ایلام"),
    role: L(
      "Service Desk Supervisor",
      "مسئول Service Desk",
    ),
    scope: L(
      "IT Service Desk at the refinery.",
      "میز خدمت فناوری اطلاعات پالایشگاه.",
    ),
    achievements: [
      L("Print Server", "Print Server"),
      L("Network support", "پشتیبانی شبکه"),
      L("IT infrastructure and systems", "زیرساخت و سامانه‌های IT"),
      L("ITIL and ISMS practice", "رویه‌های ITIL و ISMS"),
    ],
  },
  {
    id: "role-earlier",
    status: verified,
    years: "Earlier grade",
    organization: L("Ilam Gas Refinery", "پالایشگاه گاز ایلام"),
    role: L("Telephone Exchange Supervisor", "مسئول مراکز تلفن"),
    scope: L(
      "Accountability for telephone exchanges.",
      "مسئولیت مراکز تلفن.",
    ),
    achievements: [],
  },
  {
    id: "role-formative",
    status: verified,
    years: "From 1382",
    organization: L("Ilam Gas Refinery", "پالایشگاه گاز ایلام"),
    role: L(
      "Technician, Telephone Exchanges and Radio",
      "تکنسین مراکز تلفن و رادیو",
    ),
    scope: L(
      "Entry into refinery telecommunications.",
      "شروع کار در مخابرات پالایشگاه.",
    ),
    achievements: [],
  },
];

export const landingTimelineCount = 3;

// -----------------------------------------------------------------------------
// SELECTED WORK
// TelecomManager is not deployed and is not a commercial customer system.
// -----------------------------------------------------------------------------
export const projects: ProjectCase[] = [
  {
    id: "project-1",
    status: verified,
    title: L("TelecomManager", "TelecomManager"),
    context: L(
      "Windows desktop application for oil and gas refinery telecom work. Built independently with AI assistance over about 2–2.5 months. Core complete; public release in preparation. Not deployed at Ilam Gas Refinery.",
      "برنامه رومیزی ویندوز برای کار مخابرات پالایشگاه‌های نفت و گاز. ساخت مستقل با کمک هوش مصنوعی در حدود ۲ تا ۲٫۵ ماه. هسته تکمیل شده؛ نسخه عمومی در حال آماده‌سازی. در پالایشگاه گاز ایلام مستقر نشده است.",
    ),
    challenge: L(
      "Need one place to manage organisational phonebooks, SIM / APN records, telecom bills, radio equipment, assets, parts, reporting and access control.",
      "نیاز به یکجا برای دفترچه تلفن سازمانی، رکوردهای SIM / APN، قبض مخابرات، تجهیزات رادیو، دارایی‌ها، قطعات، گزارش و کنترل دسترسی.",
    ),
    action: L(
      "Independent development in Python with PySide6 UI, Windows packaging, licensing, and an optional AI layer (Ollama, OpenAI, Gemini, Anthropic, OpenRouter, LM Studio). Modules cover phonebook, SIM/APN, billing, radio allocation, equipment history, parts inventory, dashboards, RBAC and audit logging.",
      "توسعه مستقل با Python و رابط PySide6، بسته‌بندی ویندوز، مجوز نرم‌افزار و لایه اختیاری هوش مصنوعی (Ollama، OpenAI، Gemini، Anthropic، OpenRouter، LM Studio). ماژول‌ها: دفترچه تلفن، SIM/APN، قبض، تخصیص رادیو، تاریخچه تجهیزات، انبار قطعات، داشبورد، RBAC و ثبت رویداد.",
    ),
    leadership: L(
      "Built from zero by Yavar Ahmadi Zadeh.",
      "ساخت از صفر توسط یاور احمدی‌زاده.",
    ),
    results: L(
      "Core application complete. First intended delivery is a free copy for Ilam Gas Refinery; a public version is being prepared.",
      "هسته برنامه تکمیل شده. قصد اولیه تحویل رایگان به پالایشگاه گاز ایلام است؛ نسخه عمومی در حال آماده‌سازی.",
    ),
    photo: {
      id: "project-photo-1",
      kind: "project-photo",
      src: "",
      width: 1600,
      height: 900,
      alt: L("TelecomManager screenshot — not yet supplied", "تصویر TelecomManager — هنوز بارگذاری نشده"),
      pathHint: "/assets/projects/project-01.jpg",
      caption: L("16:9 project photograph", "عکس پروژه ۱۶:۹"),
    },
  },
  {
    id: "project-2",
    status: verified,
    title: L("SecurityAssetLogger", "SecurityAssetLogger"),
    context: L(
      "Lightweight tool for system asset information. Built in about three days with AI assistance. Preparing for public GitHub release.",
      "ابزار سبک اطلاعات دارایی سامانه. ساخت در حدود سه روز با کمک هوش مصنوعی. در حال آماده‌سازی برای انتشار عمومی در GitHub.",
    ),
    challenge: L(
      "A practical way to view hardware specs, installed software and system information, and print them.",
      "روش عملی برای دیدن مشخصات سخت‌افزار، نرم‌افزار نصب‌شده و اطلاعات سامانه و چاپ آن‌ها.",
    ),
    action: L(
      "Small utility that detects and displays hardware and software inventory and supports printing.",
      "ابزار کوچکی که موجودی سخت‌افزار و نرم‌افزار را تشخیص و نمایش می‌دهد و قابلیت چاپ دارد.",
    ),
    leadership: L(
      "Built from zero by Yavar Ahmadi Zadeh.",
      "ساخت از صفر توسط یاور احمدی‌زاده.",
    ),
    results: L(
      "Application ready; preparing for public GitHub publication.",
      "برنامه آماده است؛ در حال آماده‌سازی برای انتشار عمومی در GitHub.",
    ),
    photo: {
      id: "project-photo-2",
      kind: "project-photo",
      src: "",
      width: 1600,
      height: 900,
      alt: L("SecurityAssetLogger screenshot — not yet supplied", "تصویر SecurityAssetLogger — هنوز بارگذاری نشده"),
      pathHint: "/assets/projects/project-02.jpg",
      caption: L("16:9 project photograph", "عکس پروژه ۱۶:۹"),
    },
  },
  {
    id: "project-3",
    status: verified,
    title: L("Service Desk Automation", "Service Desk Automation"),
    context: L("In development.", "در حال توسعه."),
    challenge: L("Scope not yet published.", "دامنه هنوز منتشر نشده."),
    action: L("In development.", "در حال توسعه."),
    leadership: L("Yavar Ahmadi Zadeh.", "یاور احمدی‌زاده."),
    results: L("In development.", "در حال توسعه."),
    photo: {
      id: "project-photo-3",
      kind: "project-photo",
      src: "",
      width: 1600,
      height: 900,
      alt: L("Service Desk Automation — not yet supplied", "Service Desk Automation — هنوز بارگذاری نشده"),
      pathHint: "/assets/projects/project-03.jpg",
      caption: L("16:9 project photograph", "عکس پروژه ۱۶:۹"),
    },
  },
  {
    id: "project-4",
    status: verified,
    title: L("Investment Manager", "Investment Manager"),
    context: L("In development.", "در حال توسعه."),
    challenge: L("Scope not yet published.", "دامنه هنوز منتشر نشده."),
    action: L("In development.", "در حال توسعه."),
    leadership: L("Yavar Ahmadi Zadeh.", "یاور احمدی‌زاده."),
    results: L("In development.", "در حال توسعه."),
    photo: {
      id: "project-photo-4",
      kind: "project-photo",
      src: "",
      width: 1600,
      height: 900,
      alt: L("Investment Manager — not yet supplied", "Investment Manager — هنوز بارگذاری نشده"),
      pathHint: "/assets/projects/project-04.jpg",
      caption: L("16:9 project photograph", "عکس پروژه ۱۶:۹"),
    },
  },
];

// -----------------------------------------------------------------------------
// ASSET CLASSES — personal ticks. Process units stay pending (not verified).
// -----------------------------------------------------------------------------
export const assetClasses: AssetClass[] = [
  {
    id: "gas-processing",
    name: L("[Gas processing]", "[فرآورش گاز]"),
    examples: L("Amine, NGL, fractionation, sulphur recovery — confirm", "آمین، NGL، تفکیک، بازیافت گوگرد — تأیید کنید"),
    status: pending,
  },
  {
    id: "treating",
    name: L("[Treating and hydroprocessing]", "[شیرین‌سازی و هیدروپروسس]"),
    examples: L("Sweetening, hydrotreating, sulphur — confirm", "شیرین‌سازی، هیدروتریتینگ، گوگرد — تأیید کنید"),
    status: pending,
  },
  {
    id: "utilities",
    name: L("[Utilities and offsites]", "[یوتیلیتی و آف‌سایت]"),
    examples: L("Steam, flare, tank farm, blending — confirm", "بخار، فلر، مخازن، بلایندینگ — تأیید کنید"),
    status: pending,
  },
  {
    id: "other-energy",
    name: L("Refinery telecommunications infrastructure", "زیرساخت مخابرات پالایشگاه"),
    examples: L(
      "Wireless / radio, PBX, industrial telephone, fibre optic, radio links",
      "بی‌سیم / رادیو، PBX، تلفن صنعتی، فیبر نوری، لینک رادیویی",
    ),
    status: verified,
  },
];

export const digitalSystems: AssetClass[] = [
  {
    id: "historian",
    name: L("[Plant data / historian / MES]", "[داده واحد / هیستورین / MES]"),
    examples: L("Confirm the systems you will name in interview", "سامانه‌هایی را تأیید کنید که در مصاحبه نام می‌برید"),
    status: pending,
  },
  {
    id: "ops-software",
    name: L("IT Service Desk systems", "سامانه‌های میز خدمت فناوری اطلاعات"),
    examples: L(
      "Print server, network, IT infrastructure and IT systems, ITIL, ISMS",
      "Print Server، شبکه، زیرساخت و سامانه‌های فناوری اطلاعات، ITIL، ISMS",
    ),
    status: verified,
  },
  {
    id: "custom-apps",
    name: L("Independent industrial applications", "برنامه‌های صنعتی مستقل"),
    examples: L(
      "TelecomManager and SecurityAssetLogger — built; not claimed as in-plant production systems",
      "TelecomManager و SecurityAssetLogger — ساخته‌شده؛ به‌عنوان سامانه تولیدی روی واحد ادعا نشده‌اند",
    ),
    status: verified,
  },
  {
    id: "ot-it",
    name: L("[OT–IT integration]", "[یکپارچگی OT–IT]"),
    examples: L("Interfaces you actually held — confirm", "رابط‌هایی که واقعاً در اختیار داشته‌اید — تأیید کنید"),
    status: pending,
  },
];

// -----------------------------------------------------------------------------
// OPERATIONAL EXPERIENCE
// -----------------------------------------------------------------------------
export const operationalExperience = {
  status: verified,
  environments: [
    L("Ilam Gas Refinery, Iran", "پالایشگاه گاز ایلام، ایران"),
    L("Telecommunications department (from 1382)", "واحد مخابرات (از سال ۱۳۸۲)"),
    L("IT Service Desk, Ilam Gas Refinery (from 1395)", "میز خدمت فناوری اطلاعات، پالایشگاه گاز ایلام (از سال ۱۳۹۵)"),
  ],
  responsibilities: [
    L(
      "Current formal role: Senior Engineer, Telephone Exchanges and Radio.",
      "عنوان شغلی رسمی فعلی: مهندس ارشد مراکز تلفن و رادیو.",
    ),
    L(
      "Industrial telecommunications: wireless / radio, telephone exchanges (PBX), industrial telephone and communications, fibre optic, radio links, refinery telecommunications infrastructure.",
      "مخابرات صنعتی: بی‌سیم / رادیو، مراکز تلفن (PBX)، تلفن و ارتباطات صنعتی، فیبر نوری، لینک رادیویی، زیرساخت مخابرات پالایشگاه.",
    ),
    L(
      "Former Service Desk Supervisor: print server, network, IT infrastructure and IT systems, ITIL, ISMS. Not the current formal job title.",
      "سابقه مسئول Service Desk: Print Server، شبکه، زیرساخت و سامانه‌های فناوری اطلاعات، ITIL، ISMS. عنوان شغلی رسمی فعلی نیست.",
    ),
  ],
  note: L(
    "Networking experience is practical and limited.",
    "تجربه شبکه عملی و محدود است.",
  ),
};

// -----------------------------------------------------------------------------
// SKILLS — names verified. Levels and depth unpublished (no invented %).
// -----------------------------------------------------------------------------
export const skills: SkillItem[] = [
  {
    id: "domain",
    name: L("Industrial telecommunications", "مخابرات صنعتی"),
    level: L("", ""),
    depth: 0,
    status: verified,
  },
  {
    id: "dt",
    name: L("Industrial digital transformation (positioning)", "تحول دیجیتال صنعتی (جایگاه حرفه‌ای)"),
    level: L("", ""),
    depth: 0,
    status: verified,
  },
  {
    id: "ai-sw",
    name: L("AI-augmented software development", "توسعه نرم‌افزار با بهره‌گیری از هوش مصنوعی"),
    level: L("", ""),
    depth: 0,
    status: verified,
  },
  {
    id: "plant-data",
    name: L("IT Service Desk", "میز خدمت فناوری اطلاعات"),
    level: L("", ""),
    depth: 0,
    status: verified,
  },
  {
    id: "ot-it",
    name: L("Computer networking (practical, limited)", "شبکه رایانه (عملی، محدود)"),
    level: L("", ""),
    depth: 0,
    status: verified,
  },
  {
    id: "problem",
    name: L("Python, HTML, CSS, and web development", "Python، HTML، CSS و توسعه وب"),
    level: L("", ""),
    depth: 0,
    status: verified,
  },
  {
    id: "lead",
    name: L("Electronic engineering", "مهندسی الکترونیک"),
    level: L("", ""),
    depth: 0,
    status: verified,
  },
  {
    id: "handover",
    name: L("Windows desktop applications (PySide6)", "برنامه‌های رومیزی ویندوز (PySide6)"),
    level: L("", ""),
    depth: 0,
    status: verified,
  },
];

// -----------------------------------------------------------------------------
// TECHNICAL STACK
// -----------------------------------------------------------------------------
export const technicalStack: StackGroup[] = [
  {
    id: "languages",
    category: L("Languages and runtimes", "زبان‌ها و محیط اجرا"),
    items: [
      { id: "lang-1", name: L("Python", "Python"), status: verified },
      { id: "lang-2", name: L("HTML", "HTML"), status: verified },
      { id: "lang-3", name: L("CSS", "CSS"), status: verified },
      { id: "lang-4", name: L("PySide6", "PySide6"), status: verified },
    ],
  },
  {
    id: "industrial",
    category: L("Industrial telecommunications", "مخابرات صنعتی"),
    items: [
      { id: "ot-1", name: L("Wireless / Radio", "بی‌سیم / رادیو"), status: verified },
      { id: "ot-2", name: L("Telephone exchanges / PBX", "مراکز تلفن / PBX"), status: verified },
      { id: "ot-3", name: L("Industrial telephone and communications", "تلفن و ارتباطات صنعتی"), status: verified },
      { id: "ot-4", name: L("Fiber optic", "فیبر نوری"), status: verified },
      { id: "ot-5", name: L("Radio links", "لینک رادیویی"), status: verified },
      { id: "ot-6", name: L("Refinery telecommunications infrastructure", "زیرساخت مخابرات پالایشگاه"), status: verified },
    ],
  },
  {
    id: "data",
    category: L("IT and networking", "فناوری اطلاعات و شبکه"),
    items: [
      { id: "data-1", name: L("Computer networking (practical, limited)", "شبکه رایانه (عملی، محدود)"), status: verified },
      { id: "data-2", name: L("Print Server", "Print Server"), status: verified },
      { id: "data-3", name: L("IT infrastructure and IT systems", "زیرساخت و سامانه‌های فناوری اطلاعات"), status: verified },
      { id: "data-4", name: L("ITIL", "ITIL"), status: verified },
      { id: "data-5", name: L("ISMS", "ISMS"), status: verified },
      { id: "data-6", name: L("GitHub", "GitHub"), status: verified },
    ],
  },
  {
    id: "ai-practice",
    category: L("AI-assisted engineering practice", "روش مهندسی با کمک هوش مصنوعی"),
    items: [
      { id: "ai-1", name: L("AI-assisted development / vibe coding", "توسعه با کمک هوش مصنوعی / Vibe Coding"), status: verified },
      { id: "ai-2", name: L("Ollama (TelecomManager integration)", "Ollama (یکپارچگی TelecomManager)"), status: verified },
      { id: "ai-3", name: L("OpenAI (TelecomManager integration)", "OpenAI (یکپارچگی TelecomManager)"), status: verified },
      { id: "ai-4", name: L("Gemini (TelecomManager integration)", "Gemini (یکپارچگی TelecomManager)"), status: verified },
      { id: "ai-5", name: L("Anthropic (TelecomManager integration)", "Anthropic (یکپارچگی TelecomManager)"), status: verified },
      { id: "ai-6", name: L("OpenRouter (TelecomManager integration)", "OpenRouter (یکپارچگی TelecomManager)"), status: verified },
      { id: "ai-7", name: L("LM Studio (TelecomManager integration)", "LM Studio (یکپارچگی TelecomManager)"), status: verified },
    ],
  },
];

// -----------------------------------------------------------------------------
// CREDENTIALS
// University name is intentionally unpublished.
// Graduation years are not verified.
// ITIL / ISMS are listed as Service Desk practices, not as certifications.
// -----------------------------------------------------------------------------
export const education: CredentialItem[] = [
  {
    id: "edu-1",
    title: L(
      "Master of Science in Electronic Engineering",
      "کارشناسی ارشد مهندسی الکترونیک",
    ),
    meta: L("", ""),
    status: verified,
  },
  {
    id: "edu-2",
    title: L(
      "Bachelor of Science in Electronic Engineering",
      "کارشناسی مهندسی الکترونیک",
    ),
    meta: L("", ""),
    status: verified,
  },
];

export const certifications: CredentialItem[] = [
  {
    id: "cert-1",
    title: L("[Certification — engineering, operations, safety, or digital]", "[گواهی — مهندسی، عملیات، ایمنی یا دیجیتال]"),
    meta: L("[Issuing body · status / year]", "[مرجع صادرکننده · وضعیت / سال]"),
    status: pending,
  },
  {
    id: "cert-2",
    title: L("[Certification]", "[گواهی]"),
    meta: L("[Issuing body · status / year]", "[مرجع صادرکننده · وضعیت / سال]"),
    status: pending,
  },
];

export const languages: LanguageItem[] = [
  {
    id: "lang-1",
    name: L("Persian", "فارسی"),
    proficiency: L("Native / Primary", "زبان مادری / اصلی"),
    status: verified,
  },
  {
    id: "lang-2",
    name: L("English", "انگلیسی"),
    proficiency: L("Intermediate", "متوسط"),
    status: verified,
  },
  {
    id: "lang-3",
    name: L("Kurdish", "کردی"),
    proficiency: L("", ""),
    status: verified,
  },
];

export const memberships: CredentialItem[] = [
  {
    id: "mem-1",
    title: L("[Institution or society]", "[نهاد یا انجمن]"),
    meta: L("[Grade / role · dates]", "[درجه / نقش · تاریخ]"),
    status: pending,
  },
  {
    id: "mem-2",
    title: L("[Industry association or committee]", "[انجمن یا کمیته صنعتی]"),
    meta: L("[Role · dates]", "[نقش · تاریخ]"),
    status: pending,
  },
];

// -----------------------------------------------------------------------------
// PHILOSOPHY — working statement, not a personal quotation until verified
// -----------------------------------------------------------------------------
export const philosophy = {
  status: pending,
  isPersonalQuotation: false,
  quote: L(
    "In plant work, software only earns its place if operations can use it. AI helps when it shortens the path to a correct, maintainable system — not when it replaces domain knowledge or responsibility.",
    "در کار واحد، نرم‌افزار فقط وقتی جای خود را پیدا می‌کند که عملیات بتواند از آن استفاده کند. هوش مصنوعی وقتی مفید است که مسیر رسیدن به سامانه‌ای درست و قابل نگهداری را کوتاه کند — نه وقتی که جایگزین دانش حوزه یا مسئولیت شود.",
  ),
  workingNote: L(
    "Working statement — not yet confirmed as a personal quotation.",
    "بیانیه کاری — هنوز به‌عنوان نقل‌قول شخصی تأیید نشده.",
  ),
  pillars: [
    {
      title: L("Domain before tools", "حوزه پیش از ابزار"),
      text: L(
        "Enough plant literacy to ask a useful question and notice when software drifts from the asset.",
        "سواد کافی از واحد برای پرسیدن سؤال مفید و تشخیص فاصله نرم‌افزار از دارایی.",
      ),
    },
    {
      title: L("Systems someone can own", "سامانه‌ای که مالک داشته باشد"),
      text: L(
        "A result that remains after the project team leaves — with documentation and a clear owner.",
        "نتیجه‌ای که بعد از رفتن تیم پروژه می‌ماند — با مستندات و مالک مشخص.",
      ),
    },
    {
      title: L("AI with a named owner", "هوش مصنوعی با مسئول مشخص"),
      text: L(
        "Speed is welcome. Unverified output in an operating context is not.",
        "شتاب پذیرفته است. خروجی راستی‌آزمایی‌نشده در بافت عملیاتی نه.",
      ),
    },
  ],
};

// -----------------------------------------------------------------------------
// VISUAL ASSETS
// Atmospheric industrial images are generic mood, never a claimed workplace.
// -----------------------------------------------------------------------------
export const assets = {
  headshot: {
    id: "headshot",
    kind: "headshot" as const,
    src: "/assets/headshot.jpg",
    width: 1200,
    height: 1500,
    alt: L(
      "Professional portrait of Yavar Ahmadi Zadeh",
      "پرتره حرفه‌ای یاور احمدی‌زاده",
    ),
    pathHint: "/assets/headshot.jpg",
    caption: L("Editorial headshot · 4:5 · 1200 × 1500", "پرتره تحریریه‌ای · ۴:۵ · ۱۲۰۰ × ۱۵۰۰"),
  } satisfies AssetSlot,
  industrialBackground: {
    id: "industrial-background",
    kind: "industrial-background" as const,
    src: "/assets/industrial-atmosphere.jpg",
    width: 1600,
    height: 1200,
    alt: L(
      "Atmospheric photograph of industrial process equipment. Not a claimed workplace.",
      "عکس جوی از تجهیزات فرآیندی صنعتی. محل کار ادعا‌شده نیست.",
    ),
    pathHint: "/assets/industrial-atmosphere.jpg",
    caption: L("Atmospheric industrial image · generic, not a personal facility", "تصویر جوی صنعتی · عمومی، نه تأسیسات شخصی"),
  } satisfies AssetSlot,
  industrialDusk: {
    id: "industrial-dusk",
    kind: "industrial-background" as const,
    src: "/assets/industrial-dusk.jpg",
    width: 1920,
    height: 1080,
    alt: L(
      "Atmospheric dusk view of process units. Not a claimed workplace.",
      "نمای جوی غروب از واحدهای فرآیندی. محل کار ادعا‌شده نیست.",
    ),
    pathHint: "/assets/industrial-dusk.jpg",
    caption: L("Atmospheric industrial image · generic, not a personal facility", "تصویر جوی صنعتی · عمومی، نه تأسیسات شخصی"),
  } satisfies AssetSlot,
  ogImage: {
    id: "og-image",
    kind: "og-image" as const,
    src: "/og.jpg",
    width: 1200,
    height: 630,
    alt: L("Open Graph share image", "تصویر اشتراک‌گذاری"),
    pathHint: "/og.jpg",
    caption: L("Share card · 1200 × 630", "کارت اشتراک · ۱۲۰۰ × ۶۳۰"),
  } satisfies AssetSlot,
};

export const cv = {
  available: false,
  path: "/cv/curriculum-vitae.pdf",
  fileName: "curriculum-vitae.pdf",
  label: L("Download CV (PDF)", "دریافت رزومه (PDF)"),
  unavailableLabel: L("Curriculum Vitae", "رزومه"),
  note: L(
    "Place the final PDF at public/cv/curriculum-vitae.pdf, then set cv.available to true.",
    "فایل نهایی PDF را در public/cv/curriculum-vitae.pdf بگذارید و سپس cv.available را true کنید.",
  ),
  panelHeading: L("Curriculum vitae", "رزومه"),
  panelBody: L(
    "A curriculum vitae is not available. The download stays inactive until a PDF matching the facts on this site is supplied.",
    "رزومه در دسترس نیست. دکمهٔ دریافت تا بارگذاری فایلی که با واقعیت‌های این سایت یکی باشد غیرفعال می‌ماند.",
  ),
};

// -----------------------------------------------------------------------------
// REQUIRED PERSONAL INFORMATION — editorial inventory (also the CMS field list)
// -----------------------------------------------------------------------------
export const requiredFields: RequiredField[] = [
  { id: "fullName", group: "identity", path: "identity.fullName", label: L("Full name", "نام کامل"), kind: "text", requiredForPublish: true, status: verified, guidance: L("As it should appear on the site, CV, and schema.", "همان‌طور که باید در سایت، رزومه و اسکیما بیاید.") },
  { id: "firstName", group: "identity", path: "identity.firstName", label: L("First name", "نام"), kind: "text", requiredForPublish: true, status: verified, guidance: L("For schema and informal address.", "برای اسکیما و خطاب غیررسمی.") },
  { id: "lastName", group: "identity", path: "identity.lastName", label: L("Family name", "نام خانوادگی"), kind: "text", requiredForPublish: true, status: verified, guidance: L("For schema.", "برای اسکیما.") },
  { id: "title", group: "identity", path: "identity.professionalTitle", label: L("Professional title", "عنوان حرفه‌ای"), kind: "text", requiredForPublish: true, status: verified, guidance: L("Public positioning, not the HR title.", "جایگاه عمومی، نه عنوان منابع انسانی.") },
  { id: "org", group: "identity", path: "identity.currentOrganization", label: L("Current organization", "سازمان فعلی"), kind: "text", requiredForPublish: false, status: verified, guidance: L("Leave pending if confidential.", "اگر محرمانه است در انتظار بگذارید.") },
  { id: "role", group: "identity", path: "identity.currentRole", label: L("Current role title", "عنوان نقش فعلی"), kind: "text", requiredForPublish: false, status: verified, guidance: L("HR title, if different from the public identity.", "عنوان منابع انسانی، اگر با هویت عمومی فرق دارد.") },
  { id: "location", group: "identity", path: "identity.location", label: L("Location", "محل"), kind: "text", requiredForPublish: true, status: verified, guidance: L("City / region / country of residence or work base.", "شهر / منطقه / کشور سکونت یا پایگاه کار.") },
  { id: "years", group: "identity", path: "identity.yearsOfExperience", label: L("Years of industrial experience", "سال‌های تجربه صنعتی"), kind: "metric", requiredForPublish: false, status: pending, guidance: L("Confirmed figure or range only.", "فقط رقم یا بازه تأییدشده.") },
  { id: "availability", group: "identity", path: "identity.availability", label: L("Availability", "وضعیت دسترسی"), kind: "text", requiredForPublish: false, status: pending, guidance: L("e.g. open to confidential discussion / not seeking.", "مثلاً آماده گفت‌وگوی محرمانه / در حال جست‌وجو نیست.") },
  { id: "email", group: "contact", path: "contact.email", label: L("Professional email", "ایمیل حرفه‌ای"), kind: "email", requiredForPublish: true, status: verified, guidance: L("A monitored inbox. Mailto stays off until valid.", "صندوق تحت‌نظر. تا معتبر بودن، mailto خاموش است.") },
  { id: "linkedin", group: "contact", path: "contact.linkedinUrl", label: L("LinkedIn URL", "نشانی لینکدین"), kind: "url", requiredForPublish: false, status: pending, guidance: L("No LinkedIn profile currently. Leave empty.", "در حال حاضر نمایه لینکدین وجود ندارد. خالی بگذارید.") },
  { id: "github", group: "contact", path: "contact.githubUrl", label: L("GitHub URL", "نشانی گیت‌هاب"), kind: "url", requiredForPublish: false, status: verified, guidance: L("Profile URL only. Do not invent repository URLs.", "فقط نشانی نمایه. نشانی مخزن نسازید.") },
  { id: "siteUrl", group: "contact", path: "contact.siteUrl", label: L("Production site URL", "نشانی سایت نهایی"), kind: "url", requiredForPublish: false, status: pending, guidance: L("For canonical and structured data once the domain is known.", "برای canonical و داده ساختاری پس از مشخص‌شدن دامنه.") },
  { id: "phone", group: "contact", path: "contact.phone", label: L("Telephone", "تلفن"), kind: "text", requiredForPublish: false, status: verified, guidance: L("Optional. Omit if it should not be public.", "اختیاری. اگر نباید عمومی باشد حذف کنید.") },
  { id: "bio", group: "biography", path: "biography.paragraphs", label: L("Biography", "زندگی‌نامه"), kind: "richtext", requiredForPublish: true, status: verified, guidance: L("Four short paragraphs. No unverified names or metrics.", "چهار بند کوتاه. بدون نام یا عدد تأییدنشده.") },
  { id: "metrics", group: "metrics", path: "metrics", label: L("Career facts", "واقعیت‌های حرفه‌ای"), kind: "metric", requiredForPublish: false, status: pending, guidance: L("Replace each [slot] with a documented figure or delete the card.", "هر [خانه] را با رقم مستند عوض کنید یا کارت را حذف کنید.") },
  { id: "timeline", group: "journey", path: "timeline", label: L("Career journey", "مسیر شغلی"), kind: "list", requiredForPublish: true, status: verified, guidance: L("Years, organisation, role, scope, two to four verified outcomes per role.", "سال، سازمان، نقش، دامنه، دو تا چهار نتیجه تأییدشده در هر نقش.") },
  { id: "projects", group: "projects", path: "projects", label: L("Major projects", "پروژه‌های اصلی"), kind: "list", requiredForPublish: false, status: verified, guidance: L("Authorised case studies only. Problem, approach, contribution, documented outcome.", "فقط مطالعات موردی مجاز. مسئله، رویکرد، نقش، نتیجه مستند.") },
  { id: "assets", group: "assets", path: "assetClasses", label: L("Asset classes", "کلاس دارایی"), kind: "list", requiredForPublish: false, status: pending, guidance: L("Confirm only classes you have operated, supported, or digitally served.", "فقط کلاس‌هایی را تأیید کنید که روی آن‌ها کار کرده‌اید.") },
  { id: "ops", group: "operations", path: "operationalExperience", label: L("Operational responsibilities", "مسئولیت‌های عملیاتی"), kind: "list", requiredForPublish: false, status: verified, guidance: L("Environments and accountabilities you can discuss.", "محیط‌ها و مسئولیت‌هایی که قابل گفت‌وگو هستند.") },
  { id: "skills", group: "skills", path: "skills", label: L("Skill levels", "سطح مهارت"), kind: "select", requiredForPublish: false, status: pending, guidance: L("Set level and depth only if you accept them as public.", "سطح و عمق را فقط اگر انتشارشان را می‌پذیرید تنظیم کنید.") },
  { id: "stack", group: "stack", path: "technicalStack", label: L("Technical stack", "پشتهٔ فنی"), kind: "list", requiredForPublish: false, status: verified, guidance: L("Tools and systems you will name in interview.", "ابزارها و سامانه‌هایی که در مصاحبه نام می‌برید.") },
  { id: "education", group: "credentials", path: "education", label: L("Education", "تحصیلات"), kind: "list", requiredForPublish: true, status: verified, guidance: L("Highest relevant degree — title, institution, year.", "بالاترین مدرک مرتبط — عنوان، مؤسسه، سال.") },
  { id: "certs", group: "credentials", path: "certifications", label: L("Certifications", "گواهی‌ها"), kind: "list", requiredForPublish: false, status: pending, guidance: L("Title, issuing body, year / status. Delete unused rows.", "عنوان، مرجع، سال / وضعیت. ردیف بلااستفاده را حذف کنید.") },
  { id: "langs", group: "credentials", path: "languages", label: L("Languages", "زبان‌ها"), kind: "list", requiredForPublish: true, status: verified, guidance: L("Name and proficiency.", "نام و سطح.") },
  { id: "mems", group: "credentials", path: "memberships", label: L("Memberships", "عضویت‌ها"), kind: "list", requiredForPublish: false, status: pending, guidance: L("Society, grade, dates.", "انجمن، درجه، تاریخ.") },
  { id: "philosophy", group: "philosophy", path: "philosophy.quote", label: L("Professional philosophy", "فلسفه حرفه‌ای"), kind: "richtext", requiredForPublish: false, status: pending, guidance: L("Replace the working statement, then set isPersonalQuotation to true.", "بیانیه کاری را عوض کنید و isPersonalQuotation را true کنید.") },
  { id: "headshot", group: "media", path: "assets.headshot.src", label: L("Executive headshot", "پرتره اجرایی"), kind: "file", requiredForPublish: true, status: verified, guidance: L("800 × 1000, 4:5, editorial, colour-accurate.", "۸۰۰ × ۱۰۰۰، ۴:۵، تحریریه‌ای، رنگ درست.") },
  { id: "cv", group: "media", path: "cv.path", label: L("CV PDF", "فایل PDF رزومه"), kind: "file", requiredForPublish: true, status: pending, guidance: L("Board-ready PDF matching on-page facts.", "PDF آماده هیئت‌مدیره، منطبق با واقعیت‌های صفحه.") },
];

export const content = {
  site,
  identity,
  contact,
  contactPaths,
  positioning,
  ui,
  profileTags,
  profileNav,
  biography,
  metrics,
  impactMetrics,
  expertise,
  industrialDomains,
  leadershipCapabilities,
  timeline,
  landingTimelineCount,
  projects,
  assetClasses,
  digitalSystems,
  operationalExperience,
  skills,
  technicalStack,
  education,
  certifications,
  languages,
  memberships,
  philosophy,
  assets,
  cv,
  requiredFields,
};

export default content;
