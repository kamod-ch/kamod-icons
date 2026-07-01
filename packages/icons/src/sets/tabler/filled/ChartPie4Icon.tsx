import type { IconProps } from "../../../shared/types";

export function ChartPie4Icon({
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
      <path d="m11.844 13.57 4.843 7.264a10 10 0 0 1-11.015-1.09zm6.507 6.154L13.87 13h8.081a10 10 0 0 1-3.348 6.511zM11.001 2.05v9.534l-6.744 6.744A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 11 2.05m6 1.29A10 10 0 0 1 21.95 11H13V2.05a10 10 0 0 1 4 1.29"/>
    </svg>
  );
}
