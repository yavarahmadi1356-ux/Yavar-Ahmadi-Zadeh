import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { useT } from "./LocaleProvider";
import content from "../data/content";

export default function Layout({ children }: { children: ReactNode }) {
  const { locale, setLocale, t } = useT();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
    document.title = t(content.positioning.seoTitle);
  }, [locale, t]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t(content.ui.skip)}
      </a>

      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-kicker">{t(content.positioning.logoKicker)}</span>
            <span className="logo-name">{t(content.identity.fullName)}</span>
          </Link>

          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t(content.ui.closeMenu) : t(content.ui.menu)}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Primary">
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              {t(content.ui.overview)}
            </Link>
            <Link
              to="/profile"
              className={location.pathname === "/profile" ? "active" : ""}
            >
              {t(content.ui.profile)}
            </Link>
            <a href="#contact">{t(content.ui.contact)}</a>

            <div className="lang-switch" role="group" aria-label={t(content.ui.language)}>
              <button
                type="button"
                className={locale === "en" ? "active" : ""}
                onClick={() => setLocale("en")}
              >
                {t(content.ui.langEn)}
              </button>
              <button
                type="button"
                className={locale === "fa" ? "active" : ""}
                onClick={() => setLocale("fa")}
              >
                {t(content.ui.langFa)}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-name">{t(content.identity.fullName)}</p>
          <p className="footer-title">
            {t(content.identity.professionalTitle)}
            {content.identity.secondaryTitle
              ? ` · ${t(content.identity.secondaryTitle)}`
              : ""}
          </p>
          <p className="footer-note">{t(content.positioning.pendingBanner)}</p>
        </div>
      </footer>
    </>
  );
}
