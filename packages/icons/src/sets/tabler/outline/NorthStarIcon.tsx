import type { IconProps } from "../../../shared/types";

export function NorthStarIcon({
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
      <path d="M3 12h18m-9 9V3M7.5 7.5l9 9m-9 0 9-9"/>
    </svg>
  );
}
