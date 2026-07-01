import type { IconProps } from "../../../shared/types";

export function CornerLeftUpIcon({
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
      <path d="M18 18h-6a3 3 0 0 1-3-3V5L5 9m8 0L9 5"/>
    </svg>
  );
}
