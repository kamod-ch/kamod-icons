import type { IconProps } from "../../shared/types";

export function AnonymiseIcon({
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
      <path d="M9 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0M6 21a6 6 0 0 1 12 0"/><path d="M7 8a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 8"/>
    </svg>
  );
}
