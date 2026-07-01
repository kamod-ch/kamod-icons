import type { IconProps } from "../../../shared/types";

export function TimelineIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m4 16 6-7 5 5 5-6"/><path d="M14 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-6 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m16-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
