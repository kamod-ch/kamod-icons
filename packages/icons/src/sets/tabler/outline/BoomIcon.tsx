import type { IconProps } from "../../../shared/types";

export function BoomIcon({
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
      <path d="M3 9.662C5 12 5 14 3 16c3 .5 4.5 1 5 4 2-3 6-4 9 0 0-3 1-4 4-4.004Q18 13.001 21 10c-3 0-5-2-5-5-2 4-5 3-7.5-1C8 7 6 9 3 9.662"/>
    </svg>
  );
}
