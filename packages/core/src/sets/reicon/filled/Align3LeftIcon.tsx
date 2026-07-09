import type { IconProps } from "../../../shared/types";

export function Align3LeftIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" transform="scale(1.33333)"><rect x="2" y="2" rx="2.25" ry="2.25"/><rect x="2" y="10" rx="2.25" ry="2.25"/></g>
    </svg>
  );
}
