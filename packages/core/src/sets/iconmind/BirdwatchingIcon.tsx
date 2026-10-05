import type { IconProps } from "../../shared/types";

export function BirdwatchingIcon({
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
      <path d="M8 16c-3 0-5-3-5-6s2-5 5-5 5 2 5 5l4-4v8c-2-1-3-2-4-3-1 3-3 5-5 5"/><path d="M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2 7v4m-4 0h16"/>
    </svg>
  );
}
