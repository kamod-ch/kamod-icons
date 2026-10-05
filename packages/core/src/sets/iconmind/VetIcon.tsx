import type { IconProps } from "../../shared/types";

export function VetIcon({
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
      <path d="M11 19c-2.5 0-4.5-2-4.5-4s2-3.5 4.5-3.5 4.5 1.5 4.5 3.5-2 4-4.5 4M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 1a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-5v6m-3-3h6"/>
    </svg>
  );
}
