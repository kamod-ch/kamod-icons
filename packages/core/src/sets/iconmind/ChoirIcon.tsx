import type { IconProps } from "../../shared/types";

export function ChoirIcon({
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
      <path d="M3 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6-2a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6 2a3 3 0 1 0 6 0 3 3 0 1 0-6 0M2 17a4 4 0 0 1 8 0"/><path d="M8 15a4 4 0 0 1 8 0"/><path d="M14 17a4 4 0 0 1 8 0"/>
    </svg>
  );
}
