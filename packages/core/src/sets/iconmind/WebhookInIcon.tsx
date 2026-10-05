import type { IconProps } from "../../shared/types";

export function WebhookInIcon({
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
      <path d="M13 6.8a6 6 0 1 1 0 10.4"/><path d="M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 12h8M7 9l3 3-3 3"/>
    </svg>
  );
}
