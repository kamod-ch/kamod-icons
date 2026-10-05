import type { IconProps } from "../../shared/types";

export function IncidentCommanderIcon({
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
      <path d="M9 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 21a9 9 0 0 1 18 0"/><path d="M9.5 17.5 12 15l2.5 2.5"/>
    </svg>
  );
}
