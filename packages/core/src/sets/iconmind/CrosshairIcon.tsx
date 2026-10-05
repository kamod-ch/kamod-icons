import type { IconProps } from "../../shared/types";

export function CrosshairIcon({
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
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4-10v3m0 14v3M2 12h3m14 0h3"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
