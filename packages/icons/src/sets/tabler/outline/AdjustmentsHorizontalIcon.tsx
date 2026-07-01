import type { IconProps } from "../../../shared/types";

export function AdjustmentsHorizontalIcon({
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
      <path d="M12 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 6h8m4 0h4M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2 0h2m4 0h10m-5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 18h11m4 0h1"/>
    </svg>
  );
}
