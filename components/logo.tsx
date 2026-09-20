interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md";
  /** "light" for dark backgrounds, "muted" for a quiet sign-off. */
  tone?: "default" | "light" | "muted";
  className?: string;
}

function BlocksIcon({ size = "md" }: { size?: "sm" | "md" }) {
  const s = size === "sm" ? 14 : 18;
  const block = s * 0.48;
  const gap = s * 0.06;

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Bottom-left block */}
      <rect x={0} y={s - block} width={block} height={block} rx={1} />
      {/* Top-right block, offset to create the stacked/stair look */}
      <rect x={block + gap} y={s - block * 2 - gap} width={block} height={block} rx={1} />
    </svg>
  );
}

export function Logo({
  showText = true,
  size = "md",
  tone = "default",
  className = "",
}: LogoProps) {
  const textClass = size === "sm"
    ? "text-sm font-semibold tracking-tight"
    : "text-lg font-semibold tracking-tight";

  return (
    <span
      className={`inline-flex items-center gap-2 ${
        {
          light: "text-white",
          muted: "text-muted-foreground",
          default: "text-foreground",
        }[tone]
      } ${className}`}
    >
      <BlocksIcon size={size} />
      {showText && <span className={textClass}>Next Alphabet</span>}
    </span>
  );
}
