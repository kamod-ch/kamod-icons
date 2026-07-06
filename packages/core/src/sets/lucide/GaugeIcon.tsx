import type { IconProps } from "../../shared/types";

export function GaugeIcon({
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
      <path d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0"/>
    </svg>
  );
}
