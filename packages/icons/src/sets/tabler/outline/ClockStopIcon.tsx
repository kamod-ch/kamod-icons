import type { IconProps } from "../../../shared/types";

export function ClockStopIcon({
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
      <path d="M21 12a9 9 0 1 0-9 9"/><path d="M12 7v5l1 1m3 3h6v6h-6z"/>
    </svg>
  );
}
