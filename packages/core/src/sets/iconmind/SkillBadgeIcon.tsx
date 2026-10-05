import type { IconProps } from "../../shared/types";

export function SkillBadgeIcon({
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
      <path d="m12 3 7 7v4l-7 7-7-7v-4Z"/><path d="m8 10 3 3 5-5"/>
    </svg>
  );
}
