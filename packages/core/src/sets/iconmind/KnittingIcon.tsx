import type { IconProps } from "../../shared/types";

export function KnittingIcon({
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
      <path d="M3 15a6 6 0 1 0 12 0 6 6 0 1 0-12 0m10-3 8-8m-5 11 5-5"/><path d="M5 13c3 2 5 4 6 7"/>
    </svg>
  );
}
