import type { IconProps } from "../../../shared/types";

export function VinylIcon({
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
      <path d="M16 3.937A9 9 0 1 0 21 12"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="m20 4-3.5 10-2.5 2"/>
    </svg>
  );
}
