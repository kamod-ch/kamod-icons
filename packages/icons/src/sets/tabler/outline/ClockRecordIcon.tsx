import type { IconProps } from "../../../shared/types";

export function ClockRecordIcon({
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
      <path d="M21 12.3a9 9 0 1 0-8.683 8.694"/><path d="M12 7v5l2 2m2 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
