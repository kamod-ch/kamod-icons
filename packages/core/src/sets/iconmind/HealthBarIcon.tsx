import type { IconProps } from "../../shared/types";

export function HealthBarIcon({
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
      <path d="M3 10h18v10H3Zm8 0v10m7-13c-1.5-1.5-4-1.5-4-3.5 0-1.5 1.5-2 2.5-1 1-1 2.5-.5 2.5 1 0 2-1 2-1 3.5"/>
    </svg>
  );
}
