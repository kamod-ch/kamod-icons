import type { IconProps } from "../../shared/types";

export function CronExpressionIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9m6-3v3m0 0h3.5M6 18v2.5m6-2.5v2.5m6-2.5v2.5"/>
    </svg>
  );
}
