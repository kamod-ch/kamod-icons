import type { IconProps } from "../../shared/types";

export function SpoonIcon({
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
      <path d="M8 5a4 4 0 0 1 8 0c0 5-2 8-4 8s-4-3-4-8m4 8v8"/>
    </svg>
  );
}
