import type { IconProps } from "../../../shared/types";

export function MapUpIcon({
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
      <path d="M12 18.5 9 17l-6 3V7l6-3 6 3 6-3v8.5M9 4v13m6-10v7.5m4 7.5v-6m3 3-3-3-3 3"/>
    </svg>
  );
}
