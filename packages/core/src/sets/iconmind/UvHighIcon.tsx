import type { IconProps } from "../../shared/types";

export function UvHighIcon({
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
      <path d="M8 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4.5 3.5 7 6m12.5-2.5L17 6M4 18h16m-2-7v7m-4-4v4"/>
    </svg>
  );
}
