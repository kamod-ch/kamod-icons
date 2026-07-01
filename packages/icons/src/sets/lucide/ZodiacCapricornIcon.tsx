import type { IconProps } from "../../shared/types";

export function ZodiacCapricornIcon({
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
      <path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0M7 19V6a3 3 0 0 0-3-3h0"/><circle cx="17" cy="17" r="3"/>
    </svg>
  );
}
