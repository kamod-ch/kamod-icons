import type { IconProps } from "../../../shared/types";

export function FallIcon({
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
      <path d="m11 21 1-5-1-4-3-4h4l3-3M6 16l-1-4 3-4M5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8.5 7H16l4 2"/>
    </svg>
  );
}
