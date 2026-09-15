import { useT } from "./LocaleProvider";
import content from "../data/content";
import type { ContentStatus } from "../data/types";

export default function StatusBadge({
  status,
  claim,
}: {
  status?: ContentStatus;
  claim?: "framework" | "personal";
}) {
  const { t } = useT();
  if (claim === "framework") {
    return <span className="badge badge-framework">{t(content.ui.frameworkNote)}</span>;
  }
  if (status === "pending") {
    return <span className="badge badge-pending">{t(content.ui.awaiting)}</span>;
  }
  return null;
}
