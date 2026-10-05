import type { IconProps } from "../../shared/types";

export function WatchVarIcon({
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
      <path d="m4 9 5-5h6l5 5M4 9l5 5h6l5-5"/><path d="M11 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 19h10"/>
    </svg>
  );
}
