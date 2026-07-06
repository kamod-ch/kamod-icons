import type { IconProps } from "../../shared/types";

export function SquareDashedTopSolidIcon({
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
      <path d="M14 21h1m6-7v1m0 4a2 2 0 0 1-2 2m2-12v1M3 14v1M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 9v1m2 11a2 2 0 0 1-2-2m6 2h1"/>
    </svg>
  );
}
