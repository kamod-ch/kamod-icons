import type { IconProps } from "../../shared/types";

export function FeatureFlagIcon({
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
      <path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4"/><path d="M16 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 18a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4"/><path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
