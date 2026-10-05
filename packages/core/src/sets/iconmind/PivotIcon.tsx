import type { IconProps } from "../../shared/types";

export function PivotIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 4h18M3 8h18M9.5 11l2.5 2.5 2.5-2.5M6 16.5V22m6-5.5V22m6-5.5V22"/>
    </svg>
  );
}
