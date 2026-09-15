import { Link } from "react-router-dom";
import { useT } from "../components/LocaleProvider";
import Section from "../components/Section";
import StatusBadge from "../components/StatusBadge";
import content from "../data/content";
import headshot from "../assets/headshot.jpg";

export default function ProfilePage() {
  const { t } = useT();

  return (
    <>
      <section className="profile-hero">
        <div className="profile-hero-inner">
          <img
            src={headshot}
            alt={t(content.assets.headshot.alt)}
            className="profile-portrait"
            width={240}
            height={300}
          />
          <div>
            <p className="hero-kicker">{t(content.positioning.logoKicker)}</p>
            <h1>{t(content.identity.fullName)}</h1>
            <p className="hero-title">{t(content.identity.professionalTitle)}</p>
            {content.identity.secondaryTitle && (
              <p className="hero-secondary">{t(content.identity.secondaryTitle)}</p>
            )}
            <p className="profile-role">
              {t(content.identity.currentRole)}
              {" · "}
              {t(content.identity.currentOrganization)}
            </p>
            <div className="profile-tags">
              {content.profileTags.map((tag, i) => (
                <span key={i} className="tag">
                  {t(tag)}
                </span>
              ))}
            </div>
            <Link to="/" className="btn btn-ghost">
              {t(content.ui.backToOverview)}
            </Link>
          </div>
        </div>
      </section>

      <nav className="profile-nav" aria-label="Profile sections">
        <div className="profile-nav-inner">
          {content.profileNav.map((item) => (
            <a key={item.id} href={item.href}>
              {t(item.label)}
            </a>
          ))}
        </div>
      </nav>

      {/* BIOGRAPHY */}
      <Section
        id="biography"
        title={t(content.ui.section.biography)}
        lead={t(content.ui.sectionLead?.biography)}
      >
        <div className="prose">
          {content.biography.paragraphs.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </div>
      </Section>

      {/* CAREER JOURNEY / TIMELINE */}
      <Section id="journey" title={t(content.ui.section.journey)}>
        <ol className="timeline">
          {content.timeline.map((role) => (
            <li key={role.id} className="timeline-item">
              <div className="timeline-years">{role.years}</div>
              <div className="timeline-body">
                <h3>{t(role.role)}</h3>
                <p className="timeline-org">{t(role.organization)}</p>
                <p className="timeline-scope">{t(role.scope)}</p>
                {role.achievements.length > 0 && (
                  <ul>
                    {role.achievements.map((a, i) => (
                      <li key={i}>{t(a)}</li>
                    ))}
                  </ul>
                )}
                <StatusBadge status={role.status} />
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ASSET CLASSES */}
      <Section id="assets" title={t(content.ui.section.assets)}>
        <div className="card-grid card-grid-2">
          {content.assetClasses.map((a) => (
            <article key={a.id} className="card">
              <h3 className="card-title">{t(a.name)}</h3>
              <p className="card-body">{t(a.examples)}</p>
              <StatusBadge status={a.status} />
            </article>
          ))}
        </div>
      </Section>

      {/* OPERATIONAL EXPERIENCE */}
      <Section id="operations" title={t(content.ui.section.operations)}>
        <div className="ops-block">
          <h3>{t({ en: "Environments", fa: "محیط‌ها" })}</h3>
          <ul className="plain-list">
            {content.operationalExperience.environments.map((e, i) => (
              <li key={i}>{t(e)}</li>
            ))}
          </ul>
          <h3>{t({ en: "Responsibilities", fa: "مسئولیت‌ها" })}</h3>
          <ul className="plain-list">
            {content.operationalExperience.responsibilities.map((r, i) => (
              <li key={i}>{t(r)}</li>
            ))}
          </ul>
          {content.operationalExperience.note && (
            <p className="ops-note">{t(content.operationalExperience.note)}</p>
          )}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title={t(content.ui.section.skills)}>
        <ul className="skill-list">
          {content.skills.map((s) => (
            <li key={s.id} className="skill-item">
              <span className="skill-name">{t(s.name)}</span>
              {s.level.en && <span className="skill-level">{t(s.level)}</span>}
              <StatusBadge status={s.status} />
            </li>
          ))}
        </ul>
      </Section>

      {/* TECHNICAL STACK */}
      <Section id="stack" title={t(content.ui.section.stack)}>
        <div className="stack-groups">
          {content.technicalStack.map((g) => (
            <div key={g.id} className="stack-group">
              <h3>{t(g.category)}</h3>
              <ul className="chip-list">
                {g.items.map((item) => (
                  <li key={item.id}>{t(item.name)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CREDENTIALS */}
      <Section id="credentials" title={t(content.ui.section.credentials)}>
        <div className="credentials">
          <div>
            <h3>{t({ en: "Education", fa: "تحصیلات" })}</h3>
            <ul>
              {content.education.map((e) => (
                <li key={e.id}>
                  <strong>{t(e.title)}</strong>
                  {e.meta && <> — {t(e.meta)}</>}
                  <StatusBadge status={e.status} />
                </li>
              ))}
            </ul>
          </div>
          {content.certifications.length > 0 && (
            <div>
              <h3>{t({ en: "Certifications", fa: "گواهی‌ها" })}</h3>
              <ul>
                {content.certifications.map((c) => (
                  <li key={c.id}>
                    {t(c.title)}
                    {c.meta && <> — {t(c.meta)}</>}
                    <StatusBadge status={c.status} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h3>{t({ en: "Languages", fa: "زبان‌ها" })}</h3>
            <ul>
              {content.languages.map((l) => (
                <li key={l.id}>
                  {t(l.name)} — {t(l.proficiency)}
                </li>
              ))}
            </ul>
          </div>
          {content.memberships.length > 0 && (
            <div>
              <h3>{t({ en: "Memberships", fa: "عضویت‌ها" })}</h3>
              <ul>
                {content.memberships.map((m) => (
                  <li key={m.id}>
                    {t(m.title)}
                    {m.meta && <> — {t(m.meta)}</>}
                    <StatusBadge status={m.status} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section id="philosophy" title={t(content.ui.section.philosophy)}>
        <blockquote className="philosophy-quote">
          {t(content.philosophy.quote)}
        </blockquote>
        {content.philosophy.pillars && content.philosophy.pillars.length > 0 && (
          <div className="card-grid card-grid-2" style={{ marginTop: "1.5rem" }}>
            {content.philosophy.pillars.map((pr: any, i: number) => (
              <article key={i} className="card">
                <h3 className="card-title">{t(pr.title)}</h3>
                <p className="card-body">{t(pr.text)}</p>
              </article>
            ))}
          </div>
        )}
      </Section>

      {/* CV */}
      <Section id="cv" title={t(content.ui.section.cv)}>
        {content.cv.available && content.cv.path ? (
          <a className="btn btn-primary" href={content.cv.path} download={content.cv.fileName}>
            {t(content.cv.label)}
          </a>
        ) : (
          <>
            <span className="btn btn-disabled">{t(content.cv.unavailableLabel)}</span>
            <p className="pending-slot" style={{ marginTop: "0.75rem" }}>
              {t(content.cv.panelBody)}
            </p>
          </>
        )}
      </Section>
    </>
  );
}
