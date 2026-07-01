import type { IconProps } from "../../../shared/types";

export function BuildingCircusIcon({
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
      <path d="M4 11h16m-8-4.5c0 1-5 4.5-8 4.5m8-4.5c0 1 5 4.5 8 4.5M6 11q-.5 8-2 10h4c1 0 4-4 4-9v-1m6 0q.5 8 2 10h-4c-1 0-4-4-4-9v-1"/><path d="M12 7V3l2 1h-2"/>
    </svg>
  );
}
