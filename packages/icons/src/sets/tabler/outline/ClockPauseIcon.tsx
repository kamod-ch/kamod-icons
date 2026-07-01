import type { IconProps } from "../../../shared/types";

export function ClockPauseIcon({
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
      <path d="M20.942 13.018a9 9 0 1 0-7.909 7.922"/><path d="M12 7v5l2 2m3 3v5m4-5v5"/>
    </svg>
  );
}
