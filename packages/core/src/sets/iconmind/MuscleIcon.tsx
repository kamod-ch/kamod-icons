import type { IconProps } from "../../shared/types";

export function MuscleIcon({
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
      <path d="M4 21v-5c0-4 4-7 8-5 1 .5 2 1.5 2 3V9c0-3 3-5 5-3s2 6 1 9-3 6-7 6Z"/>
    </svg>
  );
}
