import type { IconProps } from "../../../shared/types";

export function SortZAIcon({
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
      <path d="M4 8h4l-4 8h4m8 0v-6a2 2 0 1 1 4 0v6m-4-3h4m-9-1h2"/>
    </svg>
  );
}
