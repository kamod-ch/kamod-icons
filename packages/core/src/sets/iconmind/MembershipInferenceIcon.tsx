import type { IconProps } from "../../shared/types";

export function MembershipInferenceIcon({
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
      <path d="M5 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m12 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0m12 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-6-6a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
    </svg>
  );
}
