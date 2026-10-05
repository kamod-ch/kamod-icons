import type { IconProps } from "../../shared/types";

export function VisibilityIcon({
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
      <path d="M6.36 9.95a6 6 0 0 1 11.28 0"/><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-7 7h18M3 17v4m18-4v4"/>
    </svg>
  );
}
