import type { IconProps } from "../../shared/types";

export function SummaryIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M15 4H7m11 12 3 3-3 3"/><path d="M3 4v13a2 2 0 0 0 2 2h16M7 14h7M7 9h12"/>
    </svg>
  );
}
