import type { IconProps } from "../../shared/types";

export function HobbyIcon({
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
      <path d="M12 20c-4-3-9-7-7-11.5 1.5-3 5-2 7 1 2-3 5.5-4 7-1C21 13 16 17 12 20M8 4l2-2m6 2-2-2"/>
    </svg>
  );
}
