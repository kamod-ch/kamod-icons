import type { IconProps } from "../../shared/types";

export function PerspectiveDrawingIcon({
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
      <path d="M2 8h20M11 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 19 13 9m8 10L11 9M3 19h18"/>
    </svg>
  );
}
