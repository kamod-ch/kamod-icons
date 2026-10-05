import type { IconProps } from "../../shared/types";

export function CoralBleachIcon({
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
      <path d="M8 21v-9L5 9m3 6 4-4m3 10V11l-3-3M3 21h18M16 4l5 5m0-5-5 5"/>
    </svg>
  );
}
