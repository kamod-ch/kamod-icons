import type { IconProps } from "../../shared/types";

export function SearchRunIcon({
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
      <path d="M4 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m1.5 3L3 15.5M16 8v8l4-4Z"/>
    </svg>
  );
}
