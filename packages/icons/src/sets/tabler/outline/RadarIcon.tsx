import type { IconProps } from "../../../shared/types";

export function RadarIcon({
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
      <path d="M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9"/><path d="M16 9a5 5 0 1 0-7 7"/><path d="M20.486 9A9 9 0 1 0 9.004 20.495"/>
    </svg>
  );
}
