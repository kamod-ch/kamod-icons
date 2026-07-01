import type { IconProps } from "../../../shared/types";

export function RewindBackward10Icon({
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
      <path d="M7 9 4 6l3-3"/><path d="M15.997 17.918A6.002 6.002 0 0 0 15 6H4m2 8v6m3-4.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0"/>
    </svg>
  );
}
