import type { IconProps } from "../../shared/types";

export function FishTankIcon({
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
      <path d="M3 6v14h18V6Zm0 3h18"/><path d="M9 15c2-3 6-3 8 0-2 3-6 3-8 0m0 0-3-3"/>
    </svg>
  );
}
