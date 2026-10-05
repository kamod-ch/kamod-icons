import type { IconProps } from "../../shared/types";

export function SeedIcon({
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
      <path d="M9 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-13v10m0-7L8 4m4 7 4-4"/>
    </svg>
  );
}
