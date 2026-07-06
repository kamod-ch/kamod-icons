import type { IconProps } from "../../../shared/types";

export function BuildingEstateIcon({
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
      <path d="M3 21h18m-2 0v-4m0 0a2 2 0 0 0 2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 0 2 2m-5 4V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14m5-4v4m-1-8h2M8 9h2"/>
    </svg>
  );
}
