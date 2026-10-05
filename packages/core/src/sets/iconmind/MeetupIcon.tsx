import type { IconProps } from "../../shared/types";

export function MeetupIcon({
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
      <path d="M12 21s-7-7-7-11a7 7 0 0 1 14 0c0 4-7 11-7 11"/><path d="M10 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M9 13a3 3 0 0 1 6 0"/>
    </svg>
  );
}
