import type { IconProps } from "../../../shared/types";

export function ChartSankeyIcon({
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
      <path d="M4 6c6.944 0 9.056 8 16 8M4 12c6.37 0 9.63 6 16 6"/><path d="M20 6c-7.526 0-7.905 12-16 12"/>
    </svg>
  );
}
