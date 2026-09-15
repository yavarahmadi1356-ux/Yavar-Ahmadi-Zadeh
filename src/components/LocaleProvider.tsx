import { createContext, useContext, type ReactNode } from "react";
import { useLocale } from "../hooks/useLocale";
import type { Locale, Localized } from "../data/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (value: Localized | string | undefined | null) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const value = useLocale();
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useT must be used inside LocaleProvider");
  return ctx;
}
