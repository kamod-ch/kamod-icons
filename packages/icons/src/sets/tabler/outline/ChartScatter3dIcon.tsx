import type { IconProps } from "../../../shared/types";

export function ChartScatter3dIcon({
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
      <path d="m3 20 9-7m0-10v10l9 7m-4-8v.015m0-8v.015m4 3.985v.015m-9 10.985v.015m-9-7.015v.015m4-4.015v.015M3 4.015v.015"/>
    </svg>
  );
}
