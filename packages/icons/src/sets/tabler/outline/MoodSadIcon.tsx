import type { IconProps } from "../../../shared/types";

export function MoodSadIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m6-2h.01M15 10h.01"/><path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"/>
    </svg>
  );
}
