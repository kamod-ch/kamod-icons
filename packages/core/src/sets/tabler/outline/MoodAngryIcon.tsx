import type { IconProps } from "../../../shared/types";

export function MoodAngryIcon({
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
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M8 9l2 1m6-1-2 1"/><path d="M14.5 16.05a3.5 3.5 0 0 0-5 0"/>
    </svg>
  );
}
