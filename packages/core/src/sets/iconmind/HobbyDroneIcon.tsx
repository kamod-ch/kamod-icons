import type { IconProps } from "../../shared/types";

export function HobbyDroneIcon({
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
      <path d="M7 10h10v5H7Zm0 1L4 8m13 3 3-3M2 7h5m10 0h5m-10 8v4"/>
    </svg>
  );
}
