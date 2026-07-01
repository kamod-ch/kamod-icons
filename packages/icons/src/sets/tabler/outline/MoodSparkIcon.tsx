import type { IconProps } from "../../../shared/types";

export function MoodSparkIcon({
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
      <path d="M21 12a9 9 0 1 0-8.994 9M9 10h.01M15 10h.01"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0m4.5 7.5a4.75 4.75 0 0 1 3.5-3.5 4.75 4.75 0 0 1-3.5-3.5 4.75 4.75 0 0 1-3.5 3.5 4.75 4.75 0 0 1 3.5 3.5"/>
    </svg>
  );
}
