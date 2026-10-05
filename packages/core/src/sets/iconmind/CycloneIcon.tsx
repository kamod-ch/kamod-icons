import type { IconProps } from "../../shared/types";

export function CycloneIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 5A5 5 0 0 1 9 7m6 0a5 5 0 0 1 0 10M2 5h7m6 14h7"/>
    </svg>
  );
}
