import type { IconProps } from "../../shared/types";

export function Axis3dIcon({
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
      <path d="M13.5 10.5 15 9M4 4v15a1 1 0 0 0 1 1h15m-15.707-.293L6 18m3-3 1.5-1.5"/>
    </svg>
  );
}
