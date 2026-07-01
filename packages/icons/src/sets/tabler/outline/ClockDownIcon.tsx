import type { IconProps } from "../../../shared/types";

export function ClockDownIcon({
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
      <path d="M20.984 12.535a9 9 0 1 0-8.431 8.448"/><path d="M12 7v5l3 3m4 1v6m3-3-3 3-3-3"/>
    </svg>
  );
}
