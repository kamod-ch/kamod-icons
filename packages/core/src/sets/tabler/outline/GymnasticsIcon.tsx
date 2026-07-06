import type { IconProps } from "../../../shared/types";

export function GymnasticsIcon({
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
      <path d="M7 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6 14 1-9 7-6M3 11h6l5 1m-2.5-3.5L16 5"/>
    </svg>
  );
}
