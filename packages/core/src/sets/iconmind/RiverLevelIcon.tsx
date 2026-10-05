import type { IconProps } from "../../shared/types";

export function RiverLevelIcon({
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
      <path d="M4 4v16M20 4v16M3 14l2.5-2.5L8 14l2.5-2.5L13 14l2.5-2.5L18 14l2.5-2.5M5 8h4m-4 3h4"/>
    </svg>
  );
}
