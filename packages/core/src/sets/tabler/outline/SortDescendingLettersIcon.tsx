import type { IconProps } from "../../../shared/types";

export function SortDescendingLettersIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M15 21v-5c0-1.38.62-2 2-2s2 .62 2 2v5m0-3h-4m4-8h-4l4-7h-4M4 15l3 3 3-3M7 6v12"/>
    </svg>
  );
}
