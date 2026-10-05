import type { IconProps } from "../../shared/types";

export function RecoveryWardIcon({
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
      <path d="M2 20v-7h20v7M2 16.5h20M8 6a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z"/>
    </svg>
  );
}
