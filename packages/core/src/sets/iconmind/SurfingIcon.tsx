import type { IconProps } from "../../shared/types";

export function SurfingIcon({
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
      <path d="M12 3c3 3 4 8 3 12H9c-1-4 0-9 3-12M3 19c3-2 6 2 9 0s6 2 9 0"/>
    </svg>
  );
}
