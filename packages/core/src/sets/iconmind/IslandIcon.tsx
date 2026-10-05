import type { IconProps } from "../../shared/types";

export function IslandIcon({
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
      <path d="M4 18a8 8 0 0 1 16 0M4 18h16M12 8v10"/><path d="M9 5a3 3 0 0 1 0 6"/><path d="M15 11a3 3 0 0 1 0-6"/>
    </svg>
  );
}
