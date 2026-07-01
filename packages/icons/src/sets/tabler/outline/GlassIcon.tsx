import type { IconProps } from "../../../shared/types";

export function GlassIcon({
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
      <path d="M8 21h8m-4-5v5m5-16 1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6"/><path d="M7 5a5 2 0 1 0 10 0A5 2 0 1 0 7 5"/>
    </svg>
  );
}
