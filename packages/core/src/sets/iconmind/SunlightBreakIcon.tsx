import type { IconProps } from "../../shared/types";

export function SunlightBreakIcon({
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
      <path d="M5 21V4h8v17"/><path d="M10 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-5h5m-5 4h5m-5 4h5"/>
    </svg>
  );
}
