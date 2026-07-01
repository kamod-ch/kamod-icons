import type { IconProps } from "../../shared/types";

export function TrendingUpDownIcon({
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
      <path d="M14.828 14.828 21 21m0-5v5h-5m5-18-9 9-4-4-6 6"/><path d="M21 8V3h-5"/>
    </svg>
  );
}
