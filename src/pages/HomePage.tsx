import { Link } from "react-router-dom";
import { useT } from "../components/LocaleProvider";
import Section from "../components/Section";
import StatusBadge from "../components/StatusBadge";
import content from "../data/content";
import headshot from "../assets/headshot.jpg";

export default function HomePage() {
  const { t } = useT();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">{t(content.positioning.logoKicker)}</p>
            <h1 className="hero-name">{t(content.identity.fullName)}</h1>
            <p className="hero-title">{t(content.identity.professionalTitle)}</p>
            {content.identity.secondaryTitle && (
              <p className="hero-secondary">{t(content.identity.secondaryTitle)}</p>
            )}
            <p className="hero-value">{t(content.positioning.valueProposition)}</p>
            <p className="hero-audience">{t(content.positioning.audienceLine)}</p>
            <div className="hero-actions">
              <Link to="/profile" className="btn btn-primary">
                {t(content.ui.viewProfile)}
              </Link>
              <a href="#contact" className="btn btn-ghost">
                {t(content.ui.discuss)}
              </a>
            </div>
          </div>
          <div className="hero-media">
            <img
              src={headshot}
              alt={t(content.assets.headshot.alt)}
              width={400}
              height={500}
              className="hero-portrait"
            />
          </div>
        </div>
      </section>

      {/* CAPABILITY FRAMEWORK */}
      <Section
        id="capabilities"
        title={t(content.ui.section.capabilities)}
        lead={t(content.ui.sectionLead?.capabilities)}
      >
        <div className="card-grid card-grid-3">
          {content.expertise.map((item) => (
            <article key={item.id} className="card">
              <h3 className="card-title">{t(item.title)}</h3>
              <p className="card-body">{t(item.description)}</p>
              <StatusBadge claim={item.claim} />
            </article>
          ))}
        </div>
      </Section>

      {/* INDUSTRIAL DOMAINS */}
      <Section
        id="industrial"
        title={t(content.ui.section.industrial)}
        lead={t(content.ui.sectionLead?.industrial)}
      >
        <div className="card-grid card-grid-2">
          {content.industrialDomains.map((d) => (
            <article key={d.id} className="card card-domain">
              <h3 className="card-title">{t(d.title)}</h3>
              <p className="card-body">{t(d.description)}</p>
              <StatusBadge status={d.status} claim={d.claim} />
            </article>
          ))}
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section
        id="leadership"
        title={t(content.ui.section.leadership)}
        lead={t(content.ui.sectionLead?.leadership)}
      >
        <div className="card-grid card-grid-2">
          {content.leadershipCapabilities.map((g) => (
            <article key={g.id} className="card">
              <h3 className="card-title">{t(g.title)}</h3>
              <ul className="plain-list">
                {g.items.map((item, i) => (
                  <li key={i}>{t(item)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* SELECTED WORK */}
      <Section
        id="projects"
        title={t(content.ui.section.projects)}
        lead={t(content.ui.sectionLead?.projects)}
      >
        <div className="case-list">
          {content.projects.map((p) => (
            <article key={p.id} className="case-card">
              <header className="case-header">
                <h3>{t(p.title)}</h3>
                <StatusBadge status={p.status} />
              </header>
              {p.status === "pending" ? (
                <p className="pending-slot">{t(content.ui.pendingNote)}</p>
              ) : (
                <div className="case-body">
                  <p>
                    <strong>Context.</strong> {t(p.context)}
                  </p>
                  <p>
                    <strong>Challenge.</strong> {t(p.challenge)}
                  </p>
                  <p>
                    <strong>Action.</strong> {t(p.action)}
                  </p>
                  <p>
                    <strong>Leadership.</strong> {t(p.leadership)}
                  </p>
                  <p>
                    <strong>Results.</strong> {t(p.results)}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* CAREER FACTS / METRICS */}
      <Section
        id="metrics"
        title={t(content.ui.section.metrics)}
        lead={t(content.ui.sectionLead?.metrics)}
      >
        <div className="metric-grid">
          {content.metrics.map((m) => (
            <div key={m.id} className="metric">
              <div className="metric-value">
                {m.status === "verified" ? m.value : `[${t(m.label)}]`}
              </div>
              <div className="metric-label">{t(m.label)}</div>
              <StatusBadge status={m.status} />
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title={t(content.positioning.contactHeading)}
        lead={t(content.positioning.contactLead)}
      >
        <div className="contact-paths">
          {content.contactPaths.map((path) => (
            <article key={path.id} className="contact-path">
              <h3>{t(path.heading)}</h3>
              <p>{t(path.detail)}</p>
            </article>
          ))}
        </div>
        <div className="contact-actions">
          {content.contact.email ? (
            <a className="btn btn-primary" href={`mailto:${content.contact.email}`}>
              {content.contact.email}
            </a>
          ) : (
            <span className="btn btn-disabled">{t(content.ui.emailInactive)}</span>
          )}
          {content.contact.linkedinUrl ? (
            <a
              className="btn btn-ghost"
              href={content.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          ) : (
            <span className="btn btn-disabled">{t(content.ui.linkedinInactive)}</span>
          )}
          {content.contact.githubUrl && (
            <a
              className="btn btn-ghost"
              href={content.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </Section>
    </>
  );
}
