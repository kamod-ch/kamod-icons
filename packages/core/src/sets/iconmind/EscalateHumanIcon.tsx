import type { IconProps } from "../../shared/types";

export function EscalateHumanIcon({
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
      <path d="M7.5 13.83a3.5 3.5 0 1 1-2.96 0M9 15l5-5m1-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2 8a4 4 0 0 1 8 0"/>
    </svg>
  );
}
