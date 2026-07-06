import type { IconProps } from "../../shared/types";

export function BetweenHorizontalStartIcon({
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
      <rect x="8" y="3" rx="1"/><path d="m2 9 3 3-3 3"/><rect x="8" y="14" rx="1"/>
    </svg>
  );
}
