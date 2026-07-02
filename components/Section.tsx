export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow ${light ? "text-cream/70" : "text-magenta"}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`display-heading mt-4 text-4xl sm:text-5xl ${
          light ? "text-cream" : "text-plum"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/70" : "text-ink/70"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
