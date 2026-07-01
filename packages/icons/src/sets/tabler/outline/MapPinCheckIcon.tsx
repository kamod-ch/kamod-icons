import type { IconProps } from "../../../shared/types";

export function MapPinCheckIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path d="M11.87 21.48a2 2 0 0 1-1.283-.58l-4.244-4.243a8 8 0 1 1 13.355-3.474M15 19l2 2 4-4"/>
    </svg>
  );
}
