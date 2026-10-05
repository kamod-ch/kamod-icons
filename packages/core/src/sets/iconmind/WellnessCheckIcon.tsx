import type { IconProps } from "../../shared/types";

export function WellnessCheckIcon({
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
      <path d="M3 12a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1 7 0l-7 7Zm16-4v5m-3 3a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
