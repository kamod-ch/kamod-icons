import type { IconProps } from "../../shared/types";

export function ListChecksIcon({
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
      <path d="m3 7 2 2 3-3m3 1h10M3 12l2 2 3-3m3 1h10M3 17l2 2 3-3m3 1h10"/>
    </svg>
  );
}
