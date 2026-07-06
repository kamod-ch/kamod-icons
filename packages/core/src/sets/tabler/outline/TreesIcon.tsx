import type { IconProps } from "../../../shared/types";

export function TreesIcon({
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
      <path d="m16 5 3 3-2 1 4 4-3 1 4 4h-9m2 3v-3m-7-5-2-2m2 1 2-2M8 21V8m-2.176 8a3 3 0 0 1-2.743-3.69 3 3 0 0 1 .304-4.833A3 3 0 0 1 8 3.77a3 3 0 0 1 4.614 3.707 3 3 0 0 1 .305 4.833A3 3 0 0 1 10 16.005H6z"/>
    </svg>
  );
}
