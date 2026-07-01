import type { IconProps } from "../../shared/types";

export function BetweenVerticalStartIcon({
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
      <rect x="3" y="8" rx="1"/><path d="m15 2-3 3-3-3"/><rect x="14" y="8" rx="1"/>
    </svg>
  );
}
