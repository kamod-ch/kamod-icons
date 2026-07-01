import type { IconProps } from "../../../shared/types";

export function PillOffIcon({
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
      <path d="m10.495 6.505 2-2a4.95 4.95 0 0 1 7 7l-2 2m-2 2-4 4a4.95 4.95 0 0 1-7-7l4-4M8.5 8.5l7 7M3 3l18 18"/>
    </svg>
  );
}
