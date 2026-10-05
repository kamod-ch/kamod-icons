import type { IconProps } from "../../shared/types";

export function CacheHitIcon({
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
      <path d="M4 11a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/><path d="M13 6.5 9.5 10H12l-3.5 3.5M16 16l3.5 3.5"/>
    </svg>
  );
}
