import type { IconProps } from "../../../shared/types";

export function BuildingLighthouseIcon({
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
      <path d="m12 3 2 3 2 15H8l2-15zM8 9h8M3 11l2-2-2-2m18 4-2-2 2-2"/>
    </svg>
  );
}
