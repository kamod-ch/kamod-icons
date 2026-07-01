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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m12 12-6.5 5.5M12 3v9h9"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m9 0 5 7.5"/>
    </svg>
  );
}
