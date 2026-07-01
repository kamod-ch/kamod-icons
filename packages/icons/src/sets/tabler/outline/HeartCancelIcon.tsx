import type { IconProps } from "../../../shared/types";

export function HeartCancelIcon({
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
      <path d="m12 20-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 7.993 6.01M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4"/>
    </svg>
  );
}
