import type { IconProps } from "../../shared/types";

export function BatteryLowIcon({
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
      <path d="M22 14v-4M6 14v-4"/><rect x="2" y="6" rx="2"/>
    </svg>
  );
}
