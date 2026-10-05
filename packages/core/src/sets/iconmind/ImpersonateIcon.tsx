import type { IconProps } from "../../shared/types";

export function ImpersonateIcon({
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
      <path d="M7 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M11 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0M5 21a7 7 0 0 1 14 0"/>
    </svg>
  );
}
