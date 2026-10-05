import type { IconProps } from "../../shared/types";

export function BenchmarkCodeIcon({
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
      <path d="M3 13a7 7 0 1 0 14 0 7 7 0 1 0-14 0m7 0 4-4"/><path d="M9 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0m10-9v4m3-2v4"/>
    </svg>
  );
}
