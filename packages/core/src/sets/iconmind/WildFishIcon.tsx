import type { IconProps } from "../../shared/types";

export function WildFishIcon({
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
      <path d="M4 13a8 5 0 0 1 14 0 8 5 0 0 1-14 0"/><path d="m17 9 4 4-4 4M7 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
