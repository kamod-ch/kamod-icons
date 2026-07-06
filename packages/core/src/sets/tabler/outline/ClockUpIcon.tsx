import type { IconProps } from "../../../shared/types";

export function ClockUpIcon({
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
      <path d="M20.983 12.548a9 9 0 1 0-8.45 8.436M19 22v-6m3 3-3-3-3 3"/><path d="M12 7v5l2.5 2.5"/>
    </svg>
  );
}
