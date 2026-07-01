import type { IconProps } from "../../../shared/types";

export function XxxIcon({
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
      <path d="m10 8 4 8m-4 0 4-8m3 0 4 8m-4 0 4-8M3 8l4 8m-4 0 4-8"/>
    </svg>
  );
}
