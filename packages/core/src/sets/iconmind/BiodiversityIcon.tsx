import type { IconProps } from "../../shared/types";

export function BiodiversityIcon({
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
      <path d="M10 5c0 6-3 9-8 9 0-6 3-9 8-9m2 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5 1a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-4 6a5 5 0 0 1 9 0 4 4 0 0 1-4.5 4 4 4 0 0 1-4.5-4"/>
    </svg>
  );
}
