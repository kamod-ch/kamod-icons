import type { IconProps } from "../../shared/types";

export function ImageUpscaleIcon({
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
      <path d="M16 3h5v5m-4 13h2a2 2 0 0 0 2-2m0-7v3m0-12-5 5M3 7V5a2 2 0 0 1 2-2m0 18 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19M9 3h3"/><rect x="3" y="11" rx="1"/>
    </svg>
  );
}
