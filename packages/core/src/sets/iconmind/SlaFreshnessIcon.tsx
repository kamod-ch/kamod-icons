import type { IconProps } from "../../shared/types";

export function SlaFreshnessIcon({
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
      <path d="M3 5h18M3 10h9m-.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m4.5-3v3m0 0h3"/>
    </svg>
  );
}
