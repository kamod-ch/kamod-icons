import type { IconProps } from "../../../shared/types";

export function BrandSpeedtestIcon({
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
      <path d="M5.636 19.364a9 9 0 1 1 12.728 0M16 9l-4 4"/>
    </svg>
  );
}
