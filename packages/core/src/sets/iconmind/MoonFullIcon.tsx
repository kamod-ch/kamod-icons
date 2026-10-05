import type { IconProps } from "../../shared/types";

export function MoonFullIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M7 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
