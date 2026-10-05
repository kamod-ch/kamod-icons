import type { IconProps } from "../../shared/types";

export function ParentIcon({
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
      <path d="M5 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-1.5 9a4.5 4.5 0 0 1 9 0m2.5-3a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6a3 3 0 0 1 6 0"/>
    </svg>
  );
}
