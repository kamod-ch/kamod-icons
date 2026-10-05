import type { IconProps } from "../../shared/types";

export function VirusCellIcon({
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
      <path d="M12 5q4.5 0 6 3c2 1 2 5 0 7q-1.5 3-6 3t-6-3c-2-2-2-6 0-7q1.5-3 6-3m0 0V2m7 6 3-3M5 16l-3 3"/>
    </svg>
  );
}
