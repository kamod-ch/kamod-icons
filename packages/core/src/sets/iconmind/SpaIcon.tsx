import type { IconProps } from "../../shared/types";

export function SpaIcon({
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
      <path d="M8 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 21.5h16"/>
    </svg>
  );
}
