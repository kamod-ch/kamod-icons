import type { IconProps } from "../../shared/types";

export function CaseSensitiveIcon({
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
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16m11-7v7M3.304 13h6.392"/><circle cx="18.5" cy="12.5" r="3.5"/>
    </svg>
  );
}
