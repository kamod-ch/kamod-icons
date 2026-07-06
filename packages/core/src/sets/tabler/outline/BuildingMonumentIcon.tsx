import type { IconProps } from "../../../shared/types";

export function BuildingMonumentIcon({
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
      <path d="m8 18 2-13 2-2 2 2 2 13M5 21v-3h14v3M3 21h18"/>
    </svg>
  );
}
