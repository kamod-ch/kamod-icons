import type { IconProps } from "../../../shared/types";

export function HelicopterLandingIcon({
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4 5a1 1 0 0 0-1 1v3h-4V8a1 1 0 0 0-.883-.993L9 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-3h4v3a1 1 0 0 0 .883.993L15 17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"/>
    </svg>
  );
}
