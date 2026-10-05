import type { IconProps } from "../../shared/types";

export function RobotVacuumIcon({
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
      <path d="M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0"/><path d="M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0M6 6h12M8 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
