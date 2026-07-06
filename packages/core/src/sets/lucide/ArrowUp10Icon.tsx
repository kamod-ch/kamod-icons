import type { IconProps } from "../../shared/types";

export function ArrowUp10Icon({
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
      <path d="m3 8 4-4 4 4M7 4v16m10-10V4h-2m0 6h4"/><rect x="15" y="14" ry="2"/>
    </svg>
  );
}
