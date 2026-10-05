import type { IconProps } from "../../shared/types";

export function ClaimCheckIcon({
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
      <path d="M3 4h8l3 3-3 3H3Z"/><path d="M5 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m3 9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2Z"/>
    </svg>
  );
}
