import type { IconProps } from "../../shared/types";

export function StudyTimerIcon({
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
      <path d="M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0"/><path d="M12 8v5h4M9 3h6m-3-1v3"/>
    </svg>
  );
}
