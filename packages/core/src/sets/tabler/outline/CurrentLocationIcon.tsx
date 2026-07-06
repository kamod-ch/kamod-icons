import type { IconProps } from "../../../shared/types";

export function CurrentLocationIcon({
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
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0m8-10v2m0 16v2m8-10h2M2 12h2"/>
    </svg>
  );
}
