import type { IconProps } from "../../shared/types";

export function VerifiedBadgeIcon({
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
      <path d="M9 4h6l5 5v6l-5 5H9l-5-5V9Z"/><path d="m8 12 3 3 5-5"/>
    </svg>
  );
}
