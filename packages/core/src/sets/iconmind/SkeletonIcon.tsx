import type { IconProps } from "../../shared/types";

export function SkeletonIcon({
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
      <path d="M5 12a7 7 0 0 1 14 0v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"/><path d="M7 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-3 6v3m4-3v3"/>
    </svg>
  );
}
