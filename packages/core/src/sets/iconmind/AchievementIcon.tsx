import type { IconProps } from "../../shared/types";

export function AchievementIcon({
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
      <path d="M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9"/><path d="M8 13v8l4-4 4 4v-8Zm2-5 2-2v6"/>
    </svg>
  );
}
