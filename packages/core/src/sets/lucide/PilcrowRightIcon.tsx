import type { IconProps } from "../../shared/types";

export function PilcrowRightIcon({
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
      <path d="M10 3v11m0-5H7a1 1 0 0 1 0-6h8m-1 0v11m4 0 4 4H2m20 0-4 4"/>
    </svg>
  );
}
