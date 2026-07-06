import type { IconProps } from "../../../shared/types";

export function BrandInertiaIcon({
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
      <path d="m12.5 8 4 4-4 4H17l4-4-4-4zm-9 0 4 4-4 4H8l4-4-4-4z"/>
    </svg>
  );
}
