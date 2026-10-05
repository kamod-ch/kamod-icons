import type { IconProps } from "../../shared/types";

export function TreeIcon({
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
      <path d="M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9m7 7v5m-4 0h8m-4-5-4-4m4 6 4-4"/>
    </svg>
  );
}
