import type { IconProps } from "../../../shared/types";

export function ArrowRotaryStraightIcon({
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
      <path d="M10 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v5m0-18v7M9 7l4-4 4 4"/>
    </svg>
  );
}
