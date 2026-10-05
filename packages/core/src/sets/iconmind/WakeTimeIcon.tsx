import type { IconProps } from "../../shared/types";

export function WakeTimeIcon({
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
      <path d="M3 20a3 3 0 0 1 0-6h18a3 3 0 0 1 0 6Zm4-10a5 5 0 0 1 10 0M4 10h16m-8-8v3"/>
    </svg>
  );
}
