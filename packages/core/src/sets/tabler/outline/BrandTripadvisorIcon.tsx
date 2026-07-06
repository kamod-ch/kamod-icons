import type { IconProps } from "../../../shared/types";

export function BrandTripadvisorIcon({
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
      <path d="M5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m11 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zm-11 0A4.5 4.5 0 1 1 3 10.671L2 9z"/><path d="m10.5 15.5 1.5 2 1.5-2M9 6.75q3-1 6 0"/>
    </svg>
  );
}
