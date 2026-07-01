import type { IconProps } from "../../shared/types";

export function FormIcon({
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
      <path d="M4 14h6M4 2h10"/><rect x="4" y="18" rx="1"/><rect x="4" y="6" rx="1"/>
    </svg>
  );
}
