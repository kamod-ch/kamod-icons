import type { IconProps } from "../../../shared/types";

export function BikeOffIcon({
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
      <path d="M2 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m14.437-1.56a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3m-7 4v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3m-3-6a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18"/>
    </svg>
  );
}
