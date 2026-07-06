import type { IconProps } from "../../shared/types";

export function BatteryFullIcon({
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
      <path d="M10 10v4m4-4v4m8 0v-4M6 10v4"/><rect x="2" y="6" rx="2"/>
    </svg>
  );
}
