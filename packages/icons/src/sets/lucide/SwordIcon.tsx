import type { IconProps } from "../../shared/types";

export function SwordIcon({
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
      <path d="m11 19-6-6m0 8-2-2m5-3-4 4m5.5-2.5L21 6V3h-3L6.5 14.5"/>
    </svg>
  );
}
