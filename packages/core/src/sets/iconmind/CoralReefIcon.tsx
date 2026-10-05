import type { IconProps } from "../../shared/types";

export function CoralReefIcon({
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
      <path d="M7 21v-9L4 9m3 6 4-4m4 10V9l-3-3m3 7 4-4M3 21h18"/>
    </svg>
  );
}
