import type { IconProps } from "../../shared/types";

export function BiometricIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M8 17a4 4 0 0 1 8 0"/><path d="M5 17a7 7 0 0 1 14 0"/><path d="M2 17a10 10 0 0 1 20 0"/>
    </svg>
  );
}
