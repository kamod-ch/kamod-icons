import type { IconProps } from "../../shared/types";

export function AttentionIcon({
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
      <path d="m4 4 5 5m11-5-5 5M4 20l5-5m11 5-5-5m-6-3a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
