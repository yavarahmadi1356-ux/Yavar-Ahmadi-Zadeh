/**
 * CMS-ready content contract.
 *
 * Design intent
 * -------------
 * - Every audience-facing string is Localized (en + fa) so a future CMS can
 *   store translations as locale maps without reshaping the tree.
 * - Every claim-bearing record has ContentStatus. "pending" must never be
 *   presented as a public fact.
 * - Framework copy (capability descriptions) is not a personal delivery claim.
 * - Personal records (roles, projects, metrics, credentials) stay pending
 *   until the principal verifies them. Do not invent values.
 *
 * CMS collection map (future migration)
 * -------------------------------------
 * identity, contact, cv, assets     → singleton documents
 * positioning, biography, philosophy, ui  → singleton, localized
 * metrics, expertise, industrialDomains, leadership, timeline,
 * projects, assetClasses, digitalSystems, skills, education,
 * certifications, languages, memberships, technicalStack, contactPaths
 *                                   → collections keyed by `id`
 */

export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];

/** Locale map for a single string. Empty fa falls back to en at render. */
export type Localized = Record<Locale, string>;

export type ContentStatus = "verified" | "pending";

/**
 * framework — domain language, not a personal claim of delivery.
 * personal  — a claim about the principal; publish only when verified.
 */
export type ClaimKind = "framework" | "personal";

export type Metric = {
  id: string;
  /** Display value. Use a [structured field] until verified. */
  value: string;
  label: Localized;
  status: ContentStatus;
  guidance: Localized;
};

export type ExpertiseItem = {
  id: string;
  title: Localized;
  description: Localized;
  icon:
    | "transform"
    | "ai"
    | "domain"
    | "problem"
    | "leadership"
    | "systems";
  claim: ClaimKind;
};

export type LeadershipGroup = {
  id: string;
  title: Localized;
  items: Localized[];
};

export type TimelineRole = {
  id: string;
  status: ContentStatus;
  years: string;
  organization: Localized;
  role: Localized;
  scope: Localized;
  achievements: Localized[];
};

export type AssetSlot = {
  id: string;
  kind:
    | "headshot"
    | "industrial-background"
    | "project-photo"
    | "og-image"
    | "cv-pdf";
  src: string;
  width: number;
  height: number;
  alt: Localized;
  pathHint: string;
  caption: Localized;
};

export type ProjectCase = {
  id: string;
  status: ContentStatus;
  title: Localized;
  context: Localized;
  challenge: Localized;
  action: Localized;
  leadership: Localized;
  results: Localized;
  photo: AssetSlot;
};

export type SkillItem = {
  id: string;
  name: Localized;
  /** Empty until the principal confirms a public level. */
  level: Localized;
  /** 0–100. 0 means unpublished / no bar fill. Never invent a percentage. */
  depth: number;
  status: ContentStatus;
};

export type CredentialItem = {
  id: string;
  title: Localized;
  meta: Localized;
  status: ContentStatus;
};

export type LanguageItem = {
  id: string;
  name: Localized;
  proficiency: Localized;
  status: ContentStatus;
};

export type ContactPath = {
  id: string;
  heading: Localized;
  detail: Localized;
  subject: Localized;
};

export type AssetClass = {
  id: string;
  name: Localized;
  examples: Localized;
  status: ContentStatus;
};

export type StackItem = {
  id: string;
  name: Localized;
  status: ContentStatus;
};

export type StackGroup = {
  id: string;
  category: Localized;
  items: StackItem[];
};

export type DomainItem = {
  id: string;
  title: Localized;
  description: Localized;
  status: ContentStatus;
  claim: ClaimKind;
};

export type RequiredField = {
  id: string;
  group: string;
  /** Dotted path in the content tree, for editors and future CMS. */
  path: string;
  label: Localized;
  kind:
    | "text"
    | "url"
    | "email"
    | "file"
    | "metric"
    | "richtext"
    | "list"
    | "select";
  requiredForPublish: boolean;
  status: ContentStatus;
  guidance: Localized;
};

export function tx(value: Localized, locale: Locale): string {
  const chosen = value[locale]?.trim();
  if (chosen) return chosen;
  return value.en;
}

export function isVerified(status: ContentStatus): boolean {
  return status === "verified";
}

export function isUnverifiedText(value: string): boolean {
  const v = value.trim();
  if (!v || v === "—" || v === "-" || v === "–") return true;
  if (v.startsWith("[") && v.includes("]")) return true;
  return false;
}

export function isStructuredPlaceholder(value: string): boolean {
  const v = value.trim();
  return v.startsWith("[") && v.endsWith("]");
}
