import type { IconProps } from "../../../shared/types";

export function Stretching2Icon({
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
      <path d="m6.5 21 3.5-5m-5-5 7-2m4 12-4-7V9l7-4M9.007 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
