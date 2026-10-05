import type { IconProps } from "../../shared/types";

export function HandymanIcon({
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
      <path d="M3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-1 9a4 4 0 0 1 8 0m4 4v-7h8v7Zm2-7v-3h4v3"/>
    </svg>
  );
}
