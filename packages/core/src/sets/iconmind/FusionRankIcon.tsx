import type { IconProps } from "../../shared/types";

export function FusionRankIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 2.5H3l7 7V12h4V9.5l7-7h-6m-6 13v5m1.5-2.5h3m1.5-2.5v5"/>
    </svg>
  );
}
