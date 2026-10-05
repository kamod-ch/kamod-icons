import type { IconProps } from "../../shared/types";

export function MindfulnessIcon({
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
      <path d="M6 21v-4c-2-2-3-5-3-8a7 7 0 0 1 14-1c0 2 2 3 2 4s-1 1-2 1v3a2 2 0 0 1-2 2h-3v3"/><path d="M7 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
