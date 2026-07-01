import type { IconProps } from "../../shared/types";

export function EqualApproximatelyIcon({
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
      <path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"/>
    </svg>
  );
}
