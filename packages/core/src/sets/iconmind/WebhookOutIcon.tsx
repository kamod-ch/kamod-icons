import type { IconProps } from "../../shared/types";

export function WebhookOutIcon({
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
      <path d="M11 6.8a6 6 0 0 1 0 10.4M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m8 0h8m-3-3 3 3-3 3"/>
    </svg>
  );
}
