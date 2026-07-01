import type { IconProps } from "../../../shared/types";

export function SegwayIcon({
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
      <path d="M11 3h3q-2.25 5 .75 11"/><path d="M8 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 .01v.01"/>
    </svg>
  );
}
