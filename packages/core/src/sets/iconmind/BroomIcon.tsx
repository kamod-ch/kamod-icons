import type { IconProps } from "../../shared/types";

export function BroomIcon({
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
      <path d="M12 2v10m-3 0h6c1 3 2 6 3 8H6c1-2 2-5 3-8"/><path d="M11 12c-.5 3-1 6-1.5 8m3.5-8c.5 3 1 6 1.5 8"/>
    </svg>
  );
}
