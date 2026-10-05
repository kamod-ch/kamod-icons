import type { IconProps } from "../../shared/types";

export function ChipRemoveIcon({
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
      <path d="M3 12a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 4 4 0 0 1-4 4H7a4 4 0 0 1-4-4m3.5 0H11m3.5-1.5 3 3m0-3-3 3"/>
    </svg>
  );
}
