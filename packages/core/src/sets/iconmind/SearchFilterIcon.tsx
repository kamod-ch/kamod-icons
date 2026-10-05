import type { IconProps } from "../../shared/types";

export function SearchFilterIcon({
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
      <path d="M4 10a4 4 0 1 0 8 0 4 4 0 1 0-8 0m1 3-2 2m12-7h7l-2 2v8h-3v-8Z"/>
    </svg>
  );
}
