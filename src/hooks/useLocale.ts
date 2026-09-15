import { useCallback, useState } from "react";
import type { Locale, Localized } from "../data/types";
import { site } from "../data/content";

const STORAGE_KEY = "portfolio-locale";

function readStoredLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "en" || v === "fa") return v;
  } catch {
    /* ignore */
  }
  return site.defaultLocale;
}

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next;
    document.documentElement.dir = next === "fa" ? "rtl" : "ltr";
  }, []);

  const t = useCallback(
    (value: Localized | string | undefined | null): string => {
      if (value == null) return "";
      if (typeof value === "string") return value;
      const primary = value[locale];
      if (primary && primary.trim()) return primary;
      return value.en || "";
    },
    [locale],
  );

  return { locale, setLocale, t };
}
