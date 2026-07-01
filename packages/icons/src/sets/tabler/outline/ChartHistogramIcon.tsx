import type { IconProps } from "../../../shared/types";

export function ChartHistogramIcon({
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
      <path d="M3 3v18h18m-1-3v3m-4-5v5m-4-8v8m-4-5v5"/><path d="M3 11c6 0 5-5 9-5s3 5 9 5"/>
    </svg>
  );
}
