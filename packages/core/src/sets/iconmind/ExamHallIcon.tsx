import type { IconProps } from "../../shared/types";

export function ExamHallIcon({
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
      <path d="M3 8h6v4H3Zm12 0h6v4h-6ZM3 16h6v4H3Zm12 0h6v4h-6Z"/>
    </svg>
  );
}
