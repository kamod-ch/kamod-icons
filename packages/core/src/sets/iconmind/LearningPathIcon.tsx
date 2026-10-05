import type { IconProps } from "../../shared/types";

export function LearningPathIcon({
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
      <path d="m4 20 5-5v-5l5-5"/><path d="M2 20a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6-7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 17h4"/>
    </svg>
  );
}
