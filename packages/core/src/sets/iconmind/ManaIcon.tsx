import type { IconProps } from "../../shared/types";

export function ManaIcon({
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
      <path d="M3 10h18v10H3Zm6 0v10m8-18-3 3h3l-4 4m6-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
