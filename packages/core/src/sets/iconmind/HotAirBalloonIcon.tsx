import type { IconProps } from "../../shared/types";

export function HotAirBalloonIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9"/><path d="M9.5 15.5 12 18l2.5-2.5m-5 2.5v3.5h5V18Z"/>
    </svg>
  );
}
