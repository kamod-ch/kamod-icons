import type { IconProps } from "../../../shared/types";

export function AxisXIcon({
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
      <path d="M4 13v.01M4 9v.01M4 5v.01M17 20l3-3-3-3M4 17h16"/>
    </svg>
  );
}
