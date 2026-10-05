import type { IconProps } from "../../shared/types";

export function SupervisorIcon({
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
      <path d="M13.27 5.28a3 3 0 1 1-2.54 0m-4.46 7a3 3 0 1 1-2.54 0m16.54 0a3 3 0 1 1-2.54 0M9.5 10.5l-2 2m7-2 2 2"/>
    </svg>
  );
}
