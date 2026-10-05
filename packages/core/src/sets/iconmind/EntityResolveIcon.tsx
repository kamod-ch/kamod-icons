import type { IconProps } from "../../shared/types";

export function EntityResolveIcon({
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
      <path d="M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 7l5 5m-5 5 5-5m0 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
    </svg>
  );
}
