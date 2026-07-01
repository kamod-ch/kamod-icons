import type { IconProps } from "../../../shared/types";

export function ChartPie3Icon({
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
      <path d="M17 20.66a10 10 0 0 1-11.328-.917L12.414 13h9.536A10 10 0 0 1 17 20.66M11 2.05v9.534l-6.743 6.744A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 11 2.05m6 1.29A10 10 0 0 1 21.95 11H13V2.05a10 10 0 0 1 4 1.29"/>
    </svg>
  );
}
