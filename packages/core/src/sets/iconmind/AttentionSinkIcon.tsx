import type { IconProps } from "../../shared/types";

export function AttentionSinkIcon({
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
      <path d="M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m11 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
