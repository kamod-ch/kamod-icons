import type { IconProps } from "../../shared/types";

export function TreeOfThoughtIcon({
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
      <path d="M3 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4-2 5-5h5M7 12h10M7 14l5 5h5m0-7h4m-2-2 2 2-2 2"/>
    </svg>
  );
}
