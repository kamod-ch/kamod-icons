import type { IconProps } from "../../shared/types";

export function SewingIcon({
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
      <path d="M4 20 18 6m0 0 3-3m-5 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 12c3-3 5 3 8 0s5 3 8 0"/>
    </svg>
  );
}
