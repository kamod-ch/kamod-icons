import type { IconProps } from "../../shared/types";

export function NeedleHaystackIcon({
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
      <path d="M3 4h18M3 8h18m-10 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8 4h18M3 20h18"/>
    </svg>
  );
}
