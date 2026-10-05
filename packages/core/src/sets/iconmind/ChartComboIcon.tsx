import type { IconProps } from "../../shared/types";

export function ChartComboIcon({
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
      <path d="M5 13v6m6-7v7m6-4v4M3 19h18M4 9l4-4 4 4 4-4 4 4"/>
    </svg>
  );
}
