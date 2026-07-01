import type { IconProps } from "../../../shared/types";

export function CompassIcon({
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
      <path d="m8 16 2-6 6-2-2 6z"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m9-9v2m0 14v2m-9-9h2m14 0h2"/>
    </svg>
  );
}
