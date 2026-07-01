import type { IconProps } from "../../../shared/types";

export function SteamIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m16 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5.5 5.5l3 3m7 7 3 3m0-13-3 3m-7 7-3 3"/>
    </svg>
  );
}
