import type { IconProps } from "../../shared/types";

export function ArbiterIcon({
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
      <path d="M3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m0 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0m7-10 5 5-5 5m7-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
