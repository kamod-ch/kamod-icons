import type { IconProps } from "../../../shared/types";

export function UvIndexIcon({
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
      <path d="M3 12h1m16 0h1M5.6 5.6l.7.7m12.1-.7-.7.7M8 12a4 4 0 1 1 8 0m-4-8V3m1 13 2 5h1l2-5M6 16v3a2 2 0 1 0 4 0v-3"/>
    </svg>
  );
}
