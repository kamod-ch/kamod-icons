import type { IconProps } from "../../../shared/types";

export function ChartArcsIcon({
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
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M16.924 11.132a5 5 0 1 0-4.056 5.792"/><path d="M3 12a9 9 0 1 0 9-9"/>
    </svg>
  );
}
