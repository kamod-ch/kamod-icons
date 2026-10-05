import type { IconProps } from "../../shared/types";

export function MentalHealthFirstAidIcon({
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
      <path d="M5 21v-3c-1.5-1.5-2-4-2-6.5a6 6 0 0 1 12-1c0 1.5 1.5 2 1.5 3s-1 1-1.5 1V17a1.5 1.5 0 0 1-1.5 1.5H11V21m8-17v6m-3-3h6"/>
    </svg>
  );
}
