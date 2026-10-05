import type { IconProps } from "../../shared/types";

export function SleepScoreIcon({
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
      <path d="M15 3a9 9 0 1 0 0 18 7 7 0 0 1 0-18m4 11v6m3-10v10"/>
    </svg>
  );
}
