import type { IconProps } from "../../shared/types";

export function HeatwaveIcon({
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
      <path d="M8 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0M5 8h2.5m9 0H19M4 16h8a3 3 0 1 1-3 3m-5 2h16"/>
    </svg>
  );
}
