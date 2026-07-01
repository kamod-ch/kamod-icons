import type { IconProps } from "../../../shared/types";

export function PrescriptionIcon({
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
      <path d="M6 19V3h4.5a4.5 4.5 0 1 1 0 9H6m13 9-9-9m3 9 6-6"/>
    </svg>
  );
}
