import type { IconProps } from "../../../shared/types";

export function MoodUnamusedIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m8 4 4-1.5"/><path d="M10 10c-.5-1-2.5-1-3 0m10 0c-.5-1-2.5-1-3 0"/>
    </svg>
  );
}
