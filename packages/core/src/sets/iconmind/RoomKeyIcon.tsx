import type { IconProps } from "../../shared/types";

export function RoomKeyIcon({
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
      <path d="M3.5 10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M7 13.5V21m0-3h4m1-13h9v6h-9Zm2 3h5"/>
    </svg>
  );
}
