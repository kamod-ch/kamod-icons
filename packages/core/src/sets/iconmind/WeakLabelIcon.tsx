import type { IconProps } from "../../shared/types";

export function WeakLabelIcon({
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
      <path d="M3 7h13l5 5-5 5H3Z"/><path d="M6 10.5A2.5 2.5 0 1 1 8.5 13m-1 2a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
