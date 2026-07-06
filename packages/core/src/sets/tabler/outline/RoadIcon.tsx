import type { IconProps } from "../../../shared/types";

export function RoadIcon({
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
      <path d="M4 19 8 5m8 0 4 14M12 8V6m0 7v-2m0 7v-2"/>
    </svg>
  );
}
