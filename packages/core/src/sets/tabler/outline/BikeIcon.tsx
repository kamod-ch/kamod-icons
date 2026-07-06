import type { IconProps } from "../../../shared/types";

export function BikeIcon({
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
      <path d="M2 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m14 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-4 1v-4l-3-3 5-4 2 3h3m-5.993-6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
