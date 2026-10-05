import type { IconProps } from "../../shared/types";

export function ExactSearchIcon({
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
      <path d="M4 9a5 5 0 1 0 10 0A5 5 0 1 0 4 9m8.5 3.5L16 16m-1 1.5h6M15 21h6"/>
    </svg>
  );
}
