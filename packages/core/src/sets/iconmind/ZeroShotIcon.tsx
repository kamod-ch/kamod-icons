import type { IconProps } from "../../shared/types";

export function ZeroShotIcon({
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
      <path d="M3 10a3 3 0 0 1 3-3 3 3 0 0 1 3 3v4a3 3 0 0 1-3 3 3 3 0 0 1-3-3Zm11 2h5m-3-3 3 3-3 3"/>
    </svg>
  );
}
