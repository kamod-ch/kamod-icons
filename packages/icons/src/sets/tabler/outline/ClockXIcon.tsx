import type { IconProps } from "../../../shared/types";

export function ClockXIcon({
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
      <path d="M20.926 13.15a9 9 0 1 0-7.835 7.784"/><path d="M12 7v5l2 2m8 8-5-5m0 5 5-5"/>
    </svg>
  );
}
