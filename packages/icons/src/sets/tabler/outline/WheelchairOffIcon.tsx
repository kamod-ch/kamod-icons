import type { IconProps } from "../../../shared/types";

export function WheelchairOffIcon({
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
      <path d="M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0m14.582 1.59a2 2 0 0 0 2.833 2.824M14 14h-1.4M6 6v5m0-3h2m4 0h5m-2 0v3M3 3l18 18"/>
    </svg>
  );
}
