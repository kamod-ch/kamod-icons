import type { IconProps } from "../../../shared/types";

export function BrandKickIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 3a1 1 0 0 1 1 1v3h1V6a1 1 0 0 1 .883-.993L12 5h1V4a1 1 0 0 1 .883-.993L14 3h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-.883.993L18 11h-1v2h1a1 1 0 0 1 .993.883L19 14v1h1a1 1 0 0 1 .993.883L21 16v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1h-1a1 1 0 0 1-.993-.883L11 18v-1h-1v3a1 1 0 0 1-.883.993L9 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
    </svg>
  );
}
