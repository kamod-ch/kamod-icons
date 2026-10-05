import type { IconProps } from "../../shared/types";

export function AssignmentDueIcon({
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
      <path d="M2 20V6h7l2 2h11v12Z"/><path d="M11 14a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M15 11v3h3"/>
    </svg>
  );
}
