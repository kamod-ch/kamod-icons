import type { IconProps } from "../../../shared/types";

export function ChartInfographicIcon({
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
      <path d="M3 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M7 3v4h4M9 17v4m8-7v7m-4-8v8m8-9v9"/>
    </svg>
  );
}
