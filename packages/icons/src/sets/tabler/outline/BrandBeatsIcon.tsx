import type { IconProps } from "../../../shared/types";

export function BrandBeatsIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M9 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m0-.5V4"/>
    </svg>
  );
}
