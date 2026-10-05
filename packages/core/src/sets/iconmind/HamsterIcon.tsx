import type { IconProps } from "../../shared/types";

export function HamsterIcon({
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
      <path d="M12 19c-4 0-7-3-7-6 0-4 3-6 7-6s7 2 7 6c0 3-3 6-7 6M6 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
