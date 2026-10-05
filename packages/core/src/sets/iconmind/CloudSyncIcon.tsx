import type { IconProps } from "../../shared/types";

export function CloudSyncIcon({
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
      <path d="M4 12.5A4 4 0 0 1 6 5a5 5 0 0 1 9.5-1.5 5.5 5.5 0 0 1 4.5 9Zm9.5 3H16a1.5 1.5 0 0 1 1.5 1.5v2.5A1.5 1.5 0 0 1 16 21h-2.5m-3 0H8a1.5 1.5 0 0 1-1.5-1.5V17A1.5 1.5 0 0 1 8 15.5h2.5"/>
    </svg>
  );
}
