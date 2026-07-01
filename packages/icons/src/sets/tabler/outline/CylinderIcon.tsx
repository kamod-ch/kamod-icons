import type { IconProps } from "../../../shared/types";

export function CylinderIcon({
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
      <path d="M5 6a7 3 0 1 0 14 0A7 3 0 1 0 5 6"/><path d="M5 6v12c0 1.657 3.134 3 7 3s7-1.343 7-3V6"/>
    </svg>
  );
}
