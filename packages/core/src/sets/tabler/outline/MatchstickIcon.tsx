import type { IconProps } from "../../../shared/types";

export function MatchstickIcon({
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
      <path d="m3 21 14-9m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="m17 3 3.62 7.29a4.01 4.01 0 0 1-.764 4.51 4 4 0 0 1-6.493-4.464z"/>
    </svg>
  );
}
