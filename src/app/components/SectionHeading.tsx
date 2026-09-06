import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
  align?: "start" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "is-centered" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {action ? <div className="section-action">{action}</div> : null}
    </div>
  );
}
