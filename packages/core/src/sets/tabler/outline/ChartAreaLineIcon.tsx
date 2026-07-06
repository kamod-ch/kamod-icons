import type { IconProps } from "../../../shared/types";

export function ChartAreaLineIcon({
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
      <path d="m4 19 4-6 4 2 4-5 4 4v5zm0-7 3-4 4 2 5-6 4 4"/>
    </svg>
  );
}
