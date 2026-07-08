import type { IconProps } from "../../../shared/types";

export function FiltersIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"/><path fill="currentColor" d="M5.033 10.783a6 6 0 1 0 8.92 4.46 7.503 7.503 0 0 1-8.92-4.46Zm10.354 3.911q.112.636.113 1.306c0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558 7.53 7.53 0 0 1-3.58 3.91Z"/>
    </svg>
  );
}
