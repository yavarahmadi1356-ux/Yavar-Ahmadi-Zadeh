import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  lead,
  children,
  className = "",
}: {
  id?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section fade-in ${className}`} data-section={id}>
      <div className="section-inner">
        {title && <h2 className="section-title">{title}</h2>}
        {lead && <p className="section-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
