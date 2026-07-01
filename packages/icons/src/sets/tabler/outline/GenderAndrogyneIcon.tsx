import type { IconProps } from "../../../shared/types";

export function GenderAndrogyneIcon({
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
      <path d="m13 11 6-6M4 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0m15-6V5h-4m1.5 5.5-3-3"/>
    </svg>
  );
}
